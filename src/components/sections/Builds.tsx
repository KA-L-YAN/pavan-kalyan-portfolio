import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { builds } from "../../data/content";

export function Builds() {
  return (
    <section id="builds" className="relative px-5 md:px-10 py-28 md:py-36 border-t border-[var(--color-hairline)]">
      <SectionHeader index={builds.index} eyebrow={builds.eyebrow} />

      <Reveal delay={0.05}>
        <h2 className="font-display font-medium leading-[1.05] tracking-tight text-[var(--color-paper)] text-[9vw] sm:text-6xl md:text-7xl max-w-5xl">
          {builds.heading}
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="space-y-6">
          {builds.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="font-sans text-base md:text-lg text-[var(--color-paper-dim)] leading-relaxed">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-8 border-t md:border-t-0 md:border-l border-[var(--color-hairline)] pt-8 md:pt-0 md:pl-12">
          {builds.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.15 + i * 0.08}>
              <div>
                <div className="font-display font-semibold text-4xl md:text-5xl text-[var(--color-signal)]">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-xs tracking-wide text-[var(--color-paper-dim)] leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
