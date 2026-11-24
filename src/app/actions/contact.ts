"use server";
import { headers } from "next/headers";
import { contactSchema } from "@/lib/contact-schema";
import type { ContactFieldErrors, ContactResult } from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";
import { buildContactEmail } from "@/lib/contact-email";

export async function sendContactMessage(input: unknown): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: ContactFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") fieldErrors[key] ??= issue.message;
    }
    return { ok: false, fieldErrors };
  }
  // Honeypot filled: pretend success so bots learn nothing.
  if (parsed.data.website) return { ok: true };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) return { ok: false, error: "Too many messages. Please try again later." };

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return { ok: false, error: "Contact form is not configured yet." };
  }

  const payload = buildContactEmail(parsed.data, { from: CONTACT_FROM_EMAIL, to: CONTACT_TO_EMAIL });
  // Same key on retry so Resend never delivers the message twice.
  const idempotencyKey = crypto.randomUUID();
  const failure: ContactResult = { ok: false, error: "Could not send your message. Please try again." };

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey,
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) return { ok: true };
      if (res.status < 500) return failure; // client error: retrying will not help
    } catch {
      // network error or timeout: fall through to one retry
    }
  }
  return failure;
}
