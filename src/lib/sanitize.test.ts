import { describe, expect, it } from "vitest";
import { safeJsonForScript, singleLine } from "./sanitize";

describe("singleLine", () => {
  it("removes CR/LF so a name cannot inject email headers", () => {
    expect(singleLine("Eve\r\nBcc: victim@example.com")).toBe("Eve Bcc: victim@example.com");
  });
  it("caps length", () => {
    expect(singleLine("a".repeat(500)).length).toBe(100);
  });
});

describe("safeJsonForScript", () => {
  it("escapes </script> breakouts", () => {
    const out = safeJsonForScript({ n: "</script><script>alert(1)</script>" });
    expect(out).not.toContain("<");
    expect(JSON.parse(out).n).toBe("</script><script>alert(1)</script>");
  });
});
