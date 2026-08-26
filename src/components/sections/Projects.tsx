import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { projects } from "../../data/content";

export function Projects() {
  return (
    <section id="projects" className="relative px-5 md:px-10 py-28 md:py-36 border-t border-[var(--color-hairline)]">
      <SectionHeader index="05" eyebrow="THESE ARE THE PROJECTS THAT PROVE IT" />
      <Reveal delay={0.05}>
        <h2 className="font-display font-medium leading-[1.05] tracking-tight text-[var(--color-paper)] text-[9vw] sm:text-6xl md:text-7xl max-w-4xl">
          Selected work.
        </h2>
      </Reveal>

      <div className="mt-20 divide-y divide-[var(--color-hairline)] border-t border-[var(--color-hairline)]">
        {projects.map((project) => (
          <Reveal key={project.number} delay={0.05}>
            <article className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-14 items-start">
              <div className="md:col-span-2 flex md:block items-baseline gap-4">
                <span className="font-mono text-sm text-[var(--color-signal)]">{project.number}</span>
                <span className="font-mono text-xs text-[var(--color-paper-dim)] md:mt-2 md:block">
                  {project.period}
                </span>
              </div>

              <div className="md:col-span-7">
                <h3 className="font-display font-medium text-2xl md:text-4xl text-[var(--color-paper)] group-hover:text-[var(--color-signal)] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs tracking-wide text-[var(--color-paper-dim)]">
                  {project.role}
                </p>
                <p className="mt-4 font-sans text-sm md:text-base text-[var(--color-paper-dim)] leading-relaxed max-w-xl">
                  {project.description}
                </p>
                <p className="mt-3 font-sans text-sm text-[var(--color-paper-dim)]/80 leading-relaxed max-w-xl">
                  {project.detail}
                </p>
              </div>

              <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wide px-2 py-1 border border-[var(--color-hairline)] text-[var(--color-paper-dim)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs tracking-widest text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
                  >
                    VIEW REPO →
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
