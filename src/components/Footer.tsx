import { profile } from "../data/content";

interface FooterProps {
  onArcade: () => void;
}

export function Footer({ onArcade }: FooterProps) {
  return (
    <footer className="px-5 md:px-10 py-8 border-t border-[var(--color-hairline)] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] tracking-widest text-[var(--color-paper-dim)]">
      <span>© {new Date().getFullYear()} {profile.fullName.toUpperCase()}</span>
      <span className="flex items-center gap-3">
        BUILT WITH REACT, TYPESCRIPT &amp; FRAMER MOTION
        {/*
          The arcade's only visible door. Sits at hairline contrast so it reads
          as punctuation until you hover it, and the glyph doubles as a hint at
          the key sequence that opens the same thing.
        */}
        <button
          onClick={onArcade}
          title="↑ ↑ ↓ ↓ ← → ← → B A"
          aria-label="Open the hidden arcade"
          className="text-[var(--color-hairline)] hover:text-[var(--color-signal)] focus-visible:text-[var(--color-signal)] transition-colors"
        >
          [&nbsp;↑↑↓↓&nbsp;]
        </button>
      </span>
      <button
        onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
        className="hover:text-[var(--color-signal)] transition-colors"
      >
        BACK TO TOP ↑
      </button>
    </footer>
  );
}
