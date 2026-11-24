import type { ContactInput } from "./contact-schema";
import { singleLine } from "./sanitize";

export const SUBJECT_PREFIX = "[Landing Page]";
const SENDER_NAME = "Landing Page";

export interface EmailPayload {
  from: string;
  to: string[];
  reply_to: string;
  subject: string;
  text: string;
  html: string;
  tags: { name: string; value: string }[];
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Adds a display name unless the configured sender already has one ("Name <a@b.c>"). */
export function formatFrom(address: string): string {
  const trimmed = singleLine(address, 200);
  return trimmed.includes("<") ? trimmed : `${SENDER_NAME} <${trimmed}>`;
}

/**
 * Deliverability notes baked in: authenticated sender (from a verified domain), the visitor only
 * in Reply-To (never as From, which would fail SPF/DMARC), a clear non-spammy subject,
 * and multipart text + HTML with escaped user content.
 */
export function buildContactEmail(
  input: Pick<ContactInput, "name" | "email" | "message">,
  config: { from: string; to: string },
): EmailPayload {
  const name = singleLine(input.name);
  const { email, message } = input;

  const text = [
    "New message from your landing page contact form.",
    "",
    `Name:  ${name}`,
    `Email: ${email}`,
    "",
    message,
    "",
    "-- Reply to this email to answer the sender directly.",
  ].join("\n");

  const html = `<!doctype html><html><body style="font-family:system-ui,sans-serif;color:#1f2937;line-height:1.5">
<p style="color:#6b7280;margin:0 0 16px">New message from your landing page contact form.</p>
<table role="presentation" style="margin-bottom:16px"><tr><td style="padding-right:12px;color:#6b7280">Name</td><td>${escapeHtml(name)}</td></tr>
<tr><td style="padding-right:12px;color:#6b7280">Email</td><td>${escapeHtml(email)}</td></tr></table>
<div style="white-space:pre-wrap;border-left:3px solid #a15373;padding-left:12px">${escapeHtml(message)}</div>
<p style="color:#6b7280;margin-top:24px;font-size:12px">Reply to this email to answer the sender directly.</p>
</body></html>`;

  return {
    from: formatFrom(config.from),
    to: [config.to],
    reply_to: email,
    subject: `${SUBJECT_PREFIX} Message from ${name}`,
    text,
    html,
    tags: [{ name: "source", value: "landing-page" }],
  };
}
