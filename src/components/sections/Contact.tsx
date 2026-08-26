import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { contact, profile } from "../../data/content";

export function Contact() {
  return (
    <section id="contact" className="relative px-5 md:px-10 py-28 md:py-40 border-t border-[var(--color-hairline)] bg-grid overflow-hidden">
      <SectionHeader index={contact.index} eyebrow={contact.eyebrow} />

      <div className="flex items-start gap-6 md:gap-10">
        <Reveal delay={0.02} className="shrink-0">
          <img
            src={profile.portrait}
            alt="Pavan Kalyan"
            className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border border-[var(--color-hairline)] grayscale hover:grayscale-0 transition-all duration-500"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-medium leading-[1.02] tracking-tight text-[var(--color-paper)] text-[9vw] sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
            {contact.heading}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-xl font-sans text-base md:text-lg text-[var(--color-paper-dim)] leading-relaxed">
          {contact.sub}
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-14 inline-flex items-baseline gap-4 font-display text-3xl sm:text-5xl md:text-6xl text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
        >
          {profile.email}
          <span className="font-mono text-lg md:text-2xl transition-transform group-hover:translate-x-2">
            →
          </span>
        </a>
      </Reveal>

      <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-xs tracking-widest text-[var(--color-paper-dim)]">
        <Reveal delay={0.2}>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-signal)] transition-colors">
            [ GITHUB ]
          </a>
        </Reveal>
        <Reveal delay={0.24}>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-signal)] transition-colors">
            [ LINKEDIN ]
          </a>
        </Reveal>
        <Reveal delay={0.28}>
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-[var(--color-signal)] transition-colors">
            [ X / TWITTER ]
          </a>
        </Reveal>
        <Reveal delay={0.32}>
          <span>{profile.phone}</span>
        </Reveal>
        <Reveal delay={0.36}>
          <span>{profile.location}</span>
        </Reveal>
      </div>
    </section>
  );
}
