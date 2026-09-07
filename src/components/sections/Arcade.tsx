import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { arcade } from "../../data/content";

/**
 * The arcade, shown rather than hidden. Mirrors the Builds section's shape —
 * heading, prose, stat row — so it reads as part of the same story instead of
 * a novelty bolted to the end. The Konami code and the footer marker still
 * open the overlay; this is just the door that's meant to be found.
 */
export function Arcade() {
  return (
    <section
      id="arcade"
      className="relative px-5 md:px-10 py-28 md:py-36 border-t border-[var(--color-hairline)]"
    >
      <SectionHeader index={arcade.index} eyebrow={arcade.eyebrow} />

      <Reveal delay={0.05}>
        <h2 className="font-display font-medium leading-[1.05] tracking-tight text-[var(--color-paper)] text-[9vw] sm:text-6xl md:text-7xl max-w-4xl">
          {arcade.heading}
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="space-y-5 max-w-xl">
          {arcade.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={0.1 + i * 0.06}>
              <p className="font-sans text-base md:text-lg text-[var(--color-paper-dim)] leading-relaxed">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <a
              href={arcade.playUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex items-baseline gap-4 font-display text-2xl sm:text-4xl md:text-5xl text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
            >
              {arcade.cta}
              <span className="font-mono text-lg md:text-2xl transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="pt-2">
              <a
                href={arcade.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-widest text-[var(--color-paper-dim)] hover:text-[var(--color-signal)] transition-colors"
              >
                [&nbsp;SOURCE&nbsp;]
              </a>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-6 lg:border-l lg:border-[var(--color-hairline)] lg:pl-10">
          {arcade.stats.map((stat, i) => (
            <Reveal key={stat.value} delay={0.14 + i * 0.07}>
              <div>
                <div className="font-display text-3xl md:text-4xl text-[var(--color-signal)]">
                  {stat.value}
                </div>
                <p className="mt-2 font-sans text-sm text-[var(--color-paper-dim)] leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
