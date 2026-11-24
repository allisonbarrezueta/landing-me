"use server";
import { headers } from "next/headers";
import { contactSchema } from "@/lib/contact-schema";
import type { ContactFieldErrors, ContactResult } from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";

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

  const { name, email, message } = parsed.data;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });
    if (!res.ok) return { ok: false, error: "Could not send your message. Please try again." };
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not send your message. Please try again." };
  }
}
