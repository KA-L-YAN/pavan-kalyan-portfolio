import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { arcade } from "../data/content";
import { useKonami } from "../hooks/useKonami";

interface ArcadeEggProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * The hidden arcade. Reachable two ways, both quiet: the Konami code from
 * anywhere on the page, or the dim marker in the footer for people who read
 * footers. Deliberately not in the nav — finding it is the point.
 */
export function ArcadeEgg({ open, onOpenChange }: ArcadeEggProps) {
  const playRef = useRef<HTMLAnchorElement>(null);
  const restoreFocus = useRef<Element | null>(null);

  useKonami(() => onOpenChange(true));

  useEffect(() => {
    if (!open) return;

    restoreFocus.current = document.activeElement;
    playRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      (restoreFocus.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[70] bg-[var(--color-ink)] bg-grid flex flex-col justify-center px-8 md:px-16"
          role="dialog"
          aria-modal="true"
          aria-label={`${arcade.name} — hidden arcade`}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="font-mono text-xs tracking-[0.35em] text-[var(--color-signal)]"
          >
            {arcade.kicker}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 font-display font-medium leading-[0.95] tracking-tight text-[var(--color-paper)] text-[13vw] md:text-8xl"
          >
            {arcade.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-7 max-w-xl font-sans text-base md:text-lg text-[var(--color-paper-dim)] leading-relaxed"
          >
            {arcade.blurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.36 }}
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-xs tracking-widest"
          >
            <a
              ref={playRef}
              href={arcade.playUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-baseline gap-3 font-display text-2xl sm:text-4xl tracking-normal text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
            >
              PLAY
              <span className="font-mono text-lg sm:text-2xl transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>

            <a
              href={arcade.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-paper-dim)] hover:text-[var(--color-signal)] transition-colors"
            >
              [&nbsp;SOURCE&nbsp;]
            </a>

            <button
              onClick={() => onOpenChange(false)}
              className="text-[var(--color-paper-dim)] hover:text-[var(--color-signal)] transition-colors"
            >
              [&nbsp;CLOSE&nbsp;]
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 font-mono text-[11px] tracking-widest text-[var(--color-hairline)]"
          >
            {arcade.footnote}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
