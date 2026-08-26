import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="px-5 md:px-10 py-8 border-t border-[var(--color-hairline)] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] tracking-widest text-[var(--color-paper-dim)]">
      <span>© {new Date().getFullYear()} {profile.fullName.toUpperCase()}</span>
      <span>BUILT WITH REACT, TYPESCRIPT &amp; FRAMER MOTION</span>
      <button
        onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
        className="hover:text-[var(--color-signal)] transition-colors"
      >
        BACK TO TOP ↑
      </button>
    </footer>
  );
}
