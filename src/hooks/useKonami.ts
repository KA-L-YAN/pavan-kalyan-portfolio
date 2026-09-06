import { useEffect, useRef } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/**
 * Fires once the Konami code is entered. Progress resets on any wrong key, so
 * the sequence has to be typed cleanly — but a repeated correct key restarts
 * the run rather than killing it (pressing Up three times still works).
 */
export function useKonami(onUnlock: () => void) {
  const index = useRef(0);
  // Kept in a ref so the listener never needs re-binding when the callback
  // identity changes on a re-render.
  const callback = useRef(onUnlock);

  useEffect(() => {
    callback.current = onUnlock;
  }, [onUnlock]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches?.("input, textarea, [contenteditable='true']")) return;

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (key === SEQUENCE[index.current]) {
        index.current += 1;
        if (index.current === SEQUENCE.length) {
          index.current = 0;
          callback.current();
        }
        return;
      }

      index.current = key === SEQUENCE[0] ? 1 : 0;
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
}
