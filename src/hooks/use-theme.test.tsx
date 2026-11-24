import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { useTheme } from "./use-theme";

beforeEach(() => {
  document.documentElement.classList.remove("dark");
  localStorage.clear();
});

describe("useTheme", () => {
  it("toggles the html class and persists the choice", async () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");
    await act(async () => result.current.toggle());
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(result.current.theme).toBe("dark");
    await act(async () => result.current.toggle());
    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
