import { describe, expect, it } from "vitest";
import { buildContactEmail, escapeHtml, formatFrom } from "./contact-email";

const config = { from: "contact@example.com", to: "me@example.com" };

describe("buildContactEmail", () => {
  it("prefixes the subject and sets reply_to to the visitor, not from", () => {
    const e = buildContactEmail({ name: "Ada", email: "ada@x.com", message: "Hello there!" }, config);
    expect(e.subject).toBe("[Landing Page] Message from Ada");
    expect(e.reply_to).toBe("ada@x.com");
    expect(e.from).toBe("Landing Page <contact@example.com>");
    expect(e.to).toEqual(["me@example.com"]);
  });
  it("escapes HTML in the html part and keeps the subject single-line", () => {
    const e = buildContactEmail(
      { name: "<b>Eve</b>\r\nBcc: x@y.z", email: "e@x.com", message: "<script>alert(1)</script>" },
      config,
    );
    expect(e.html).not.toContain("<script>");
    expect(e.html).toContain("&lt;script&gt;");
    expect(e.subject).not.toMatch(/[\r\n]/);
  });
  it("includes plain text alternative", () => {
    const e = buildContactEmail({ name: "Ada", email: "a@x.com", message: "Hi hi hi hi!" }, config);
    expect(e.text).toContain("Hi hi hi hi!");
  });
});

describe("formatFrom / escapeHtml", () => {
  it("keeps an existing display name", () => {
    expect(formatFrom("Allison <a@b.co>")).toBe("Allison <a@b.co>");
  });
  it("escapes quotes and ampersands", () => {
    expect(escapeHtml(`a&b"c'`)).toBe("a&amp;b&quot;c&#39;");
  });
});
