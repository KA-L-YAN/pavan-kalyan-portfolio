import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("pk-visited")) {
      setDone(true);
      return;
    }

    const start = performance.now();
    const duration = 1100;
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("pk-visited", "1");
        setTimeout(() => setDone(true), 250);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[var(--color-ink)] flex flex-col items-center justify-center"
        >
          <span className="font-display font-semibold text-[14vw] sm:text-7xl text-[var(--color-paper)] tracking-tight">
            PK
          </span>
          <div className="mt-6 w-40 h-px bg-[var(--color-hairline)] relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[var(--color-signal)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="mt-3 font-mono text-xs tracking-widest text-[var(--color-paper-dim)]">
            {String(progress).padStart(3, "0")}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
