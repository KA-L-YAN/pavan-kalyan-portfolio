import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { stackGroups } from "../../data/content";

const marqueeItems = stackGroups.flatMap((g) => g.items);

export function Stack() {
  return (
    <section id="stack" className="relative py-28 md:py-36 border-t border-[var(--color-hairline)] overflow-hidden">
      <div className="px-5 md:px-10">
        <SectionHeader index="04" eyebrow="THIS IS THE TECHNOLOGY HE WORKS WITH" />
        <Reveal delay={0.05}>
          <h2 className="font-display font-medium leading-[1.05] tracking-tight text-[var(--color-paper)] text-[9vw] sm:text-6xl md:text-7xl max-w-4xl">
            The stack behind every pipeline.
          </h2>
        </Reveal>
      </div>

      {/* marquee */}
      <div className="relative mt-16 border-y border-[var(--color-hairline)] py-6">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl px-6 md:px-8 text-[var(--color-paper-dim)] whitespace-nowrap"
            >
              {item} <span className="text-[var(--color-signal)] ml-6 md:ml-8">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 md:px-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stackGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <div>
              <h3 className="font-mono text-xs tracking-widest text-[var(--color-signal)]">
                {group.title.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="font-sans text-sm text-[var(--color-paper)] border-b border-[var(--color-hairline)] pb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
