import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useInView } from "./use-in-view";

type Callback = (entries: Partial<IntersectionObserverEntry>[]) => void;
let callback: Callback;
const disconnect = vi.fn();

function Probe(): React.JSX.Element {
  const [ref, inView] = useInView<HTMLDivElement>();
  return <div ref={ref} data-testid="probe">{String(inView)}</div>;
}

beforeEach(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(cb: Callback) { callback = cb; }
      observe = vi.fn();
      disconnect = disconnect;
    },
  );
});
afterEach(() => vi.unstubAllGlobals());

describe("useInView", () => {
  it("starts false, becomes true on intersect, then stops observing", () => {
    render(<Probe />);
    expect(screen.getByTestId("probe")).toHaveTextContent("false");
    act(() => callback([{ isIntersecting: true }]));
    expect(screen.getByTestId("probe")).toHaveTextContent("true");
    expect(disconnect).toHaveBeenCalled();
  });
});
