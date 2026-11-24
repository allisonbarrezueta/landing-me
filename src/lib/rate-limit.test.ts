import { describe, expect, it } from "vitest";
import { isRateLimited } from "./rate-limit";

describe("isRateLimited", () => {
  it("blocks after 3 hits in the window and recovers after it", () => {
    const t = 1_000_000;
    expect(isRateLimited("a", t)).toBe(false);
    expect(isRateLimited("a", t + 1)).toBe(false);
    expect(isRateLimited("a", t + 2)).toBe(false);
    expect(isRateLimited("a", t + 3)).toBe(true);
    expect(isRateLimited("a", t + 11 * 60 * 1000)).toBe(false);
  });
});
