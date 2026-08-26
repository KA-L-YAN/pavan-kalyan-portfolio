import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { id: "builds", label: "WORK" },
  { id: "approach", label: "APPROACH" },
  { id: "stack", label: "STACK" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(["hero", ...LINKS.map((l) => l.id)]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-5 md:py-6">
        <button
          onClick={() => go("hero")}
          className="font-mono text-sm tracking-wide text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
        >
          [ PAVAN&nbsp;KALYAN ]
        </button>

        <nav className="hidden lg:flex items-center gap-7 font-mono text-xs tracking-widest">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`transition-colors ${
                active === link.id
                  ? "text-[var(--color-signal)]"
                  : "text-[var(--color-paper-dim)] hover:text-[var(--color-paper)]"
              }`}
            >
              [&nbsp;{link.label}&nbsp;]
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs tracking-widest text-[var(--color-paper)] flex items-center gap-2"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="hidden sm:inline">{open ? "CLOSE" : "MENU"}</span>
          <span className="relative w-5 h-4">
            <span
              className={`absolute left-0 top-0 w-5 h-px bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 w-5 h-px bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-ink)] bg-grid flex flex-col justify-center px-8 md:px-16"
          >
            <ol className="space-y-2">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <button
                    onClick={() => go(link.id)}
                    className="group flex items-baseline gap-4 font-display text-[13vw] md:text-6xl leading-[1.05] text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
                  >
                    <span className="font-mono text-sm md:text-base text-[var(--color-paper-dim)]">
                      0{i + 2}
                    </span>
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ol>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs tracking-widest text-[var(--color-paper-dim)]"
            >
              <a href="mailto:pk591947@gmail.com" className="hover:text-[var(--color-signal)]">
                PK591947@GMAIL.COM
              </a>
              <a href="https://github.com/KA-L-YAN" target="_blank" rel="noreferrer" className="hover:text-[var(--color-signal)]">
                GITHUB
              </a>
              <a href="https://www.linkedin.com/in/pavan-kalyan-budamacharla-5a07451ba/" target="_blank" rel="noreferrer" className="hover:text-[var(--color-signal)]">
                LINKEDIN
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
