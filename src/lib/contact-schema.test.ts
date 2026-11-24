import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact-schema";

const valid = { name: "Ada", email: "ada@example.com", message: "Hello there, nice work!" };

describe("contactSchema", () => {
  it("accepts valid input", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
  it("rejects bad email and short message", () => {
    const r = contactSchema.safeParse({ ...valid, email: "nope", message: "hi" });
    expect(r.success).toBe(false);
  });
  it("rejects a filled honeypot", () => {
    expect(contactSchema.safeParse({ ...valid, website: "spam" }).success).toBe(false);
  });
});
