import { useScroll } from "@use-gesture/react";

export function useSafeScroll(handler: (state: { xy: [number, number] }) => void) {
  if (typeof window !== "undefined") {
    return useScroll(handler, { target: window });
  }
}
