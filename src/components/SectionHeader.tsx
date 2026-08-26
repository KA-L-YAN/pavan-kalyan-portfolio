import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
}

export function SectionHeader({ index, eyebrow }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 font-mono text-xs tracking-widest text-[var(--color-paper-dim)] mb-6">
        <span className="text-[var(--color-signal)]">{index}</span>
        <span className="h-px flex-1 max-w-16 bg-[var(--color-hairline)]" />
        <span>{eyebrow}</span>
      </div>
    </Reveal>
  );
}
