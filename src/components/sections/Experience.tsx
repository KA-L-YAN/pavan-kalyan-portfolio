import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { certifications, education, experience, profile } from "../../data/content";

export function Experience() {
  return (
    <section id="experience" className="relative px-5 md:px-10 py-28 md:py-36 border-t border-[var(--color-hairline)] bg-[var(--color-panel)]">
      <SectionHeader index="06" eyebrow="THIS IS HIS PROFESSIONAL EXPERIENCE" />
      <div className="flex items-end justify-between flex-wrap gap-6">
        <Reveal delay={0.05}>
          <h2 className="font-display font-medium leading-[1.05] tracking-tight text-[var(--color-paper)] text-[9vw] sm:text-6xl md:text-7xl max-w-4xl">
            The record.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={profile.resumeUrl}
            download
            className="font-mono text-xs tracking-widest px-5 py-3 border border-[var(--color-hairline)] text-[var(--color-paper)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] transition-colors"
          >
            DOWNLOAD RESUME ↓
          </a>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={0.1 + i * 0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-8 border-t border-[var(--color-hairline)] pt-6">
                <span className="font-mono text-xs text-[var(--color-paper-dim)]">{job.period}</span>
                <div>
                  <h3 className="font-display font-medium text-xl md:text-2xl text-[var(--color-paper)]">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-mono text-xs tracking-wide text-[var(--color-signal)]">
                    {job.org} — {job.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="font-sans text-sm text-[var(--color-paper-dim)] leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 bg-[var(--color-signal)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="space-y-12">
          <Reveal delay={0.15}>
            <div>
              <h3 className="font-mono text-xs tracking-widest text-[var(--color-signal)]">EDUCATION</h3>
              <div className="mt-4 space-y-5">
                {education.map((ed) => (
                  <div key={ed.org} className="border-t border-[var(--color-hairline)] pt-4">
                    <p className="font-mono text-xs text-[var(--color-paper-dim)]">{ed.period}</p>
                    <p className="mt-1 font-sans text-sm text-[var(--color-paper)]">{ed.org}</p>
                    <p className="mt-1 font-sans text-xs text-[var(--color-paper-dim)]">{ed.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="font-mono text-xs tracking-widest text-[var(--color-signal)]">CERTIFICATIONS</h3>
              <ul className="mt-4 space-y-3 border-t border-[var(--color-hairline)] pt-4">
                {certifications.map((cert) => (
                  <li key={cert} className="font-sans text-sm text-[var(--color-paper-dim)] leading-relaxed">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
