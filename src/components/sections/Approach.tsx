import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { approach } from "../../data/content";

export function Approach() {
  return (
    <section id="approach" className="relative px-5 md:px-10 py-28 md:py-36 border-t border-[var(--color-hairline)] bg-[var(--color-panel)]">
      <SectionHeader index={approach.index} eyebrow={approach.eyebrow} />

      <Reveal delay={0.05}>
        <h2 className="font-display font-medium leading-[1.05] tracking-tight text-[var(--color-paper)] text-[9vw] sm:text-6xl md:text-7xl max-w-4xl">
          {approach.heading}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl font-sans text-base md:text-lg text-[var(--color-paper-dim)] leading-relaxed">
          {approach.paragraphs[0]}
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-hairline)] border border-[var(--color-hairline)]">
        {approach.principles.map((p, i) => (
          <Reveal key={p.number} delay={0.15 + i * 0.1} y={40}>
            <div className="bg-[var(--color-panel)] h-full p-8 md:p-10">
              <span className="font-mono text-sm text-[var(--color-signal)]">{p.number}</span>
              <h3 className="mt-6 font-display font-medium text-2xl text-[var(--color-paper)]">
                {p.title}
              </h3>
              <p className="mt-4 font-sans text-sm text-[var(--color-paper-dim)] leading-relaxed">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
