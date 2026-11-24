import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchRepos, toRepos } from "./github";

const repo = (name: string, stars: number, extra = {}) => ({
  name, description: null, html_url: `https://github.com/x/${name}`, language: "TypeScript",
  stargazers_count: stars, fork: false, archived: false, pushed_at: "2026-01-01T00:00:00Z", ...extra,
});

afterEach(() => vi.unstubAllGlobals());

describe("toRepos", () => {
  it("drops forks/archived, sorts by stars, limits", () => {
    const out = toRepos([repo("a", 1), repo("b", 5), repo("c", 9, { fork: true }), repo("d", 3, { archived: true })], 2);
    expect(out.map((r) => r.name)).toEqual(["b", "a"]);
  });
});

describe("fetchRepos", () => {
  it("returns [] when the request fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    expect(await fetchRepos("x")).toEqual([]);
  });
  it("returns [] on non-ok response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    expect(await fetchRepos("x")).toEqual([]);
  });
});
