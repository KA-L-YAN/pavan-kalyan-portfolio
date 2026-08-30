import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero, profile } from "../../data/content";

// staggered negative delays so letters don't all snap in lockstep — each
// jumps into the shared keyframe timeline at a different phase, so they
// settle into their final state at slightly different moments too
const LETTER_DELAYS = [0, -0.15, -0.4, -0.25, -0.55, -0.1, -0.35, -0.2];

interface FlickerLettersProps {
  text: string;
  variant: "solid" | "hollow";
}

function FlickerLetters({ text, variant }: FlickerLettersProps) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className={variant === "solid" ? "glitch-solid" : "glitch-hollow"}
            style={{ animationDelay: `${LETTER_DELAYS[i % LETTER_DELAYS.length]}s` }}
          >
            {char}
          </span>
        ))}
      </span>
    </>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-grid flex flex-col justify-between px-5 md:px-10 pt-24 pb-10"
    >
      {/* portrait, right-anchored, cinematic crop */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="pointer-events-none absolute right-0 top-0 h-full w-full md:w-[46%] opacity-[0.9]"
      >
        <div className="relative h-full w-full">
          <img
            src={profile.wide}
            alt=""
            className="h-full w-full object-cover object-[70%_20%] grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-[var(--color-ink)] mix-blend-color-burn opacity-40" />
          {/* fade the photo into the background on all sides instead of relying on CSS masking, which renders inconsistently across browsers */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[var(--color-ink)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-ink)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex items-center justify-between font-mono text-xs tracking-widest text-[var(--color-paper-dim)]">
        <span>01 / 07</span>
        <span className="hidden sm:inline">{hero.eyebrow}</span>
        <span>HYDERABAD, IN — {new Date().getFullYear()}</span>
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        <h1 className="font-display font-semibold leading-[0.86] tracking-tight text-[17vw] sm:text-[15vw] md:text-[10.5vw]">
          <FlickerLetters text={hero.line1} variant="solid" />
          <br />
          <FlickerLetters text={hero.line2} variant="hollow" />
        </h1>
        <div className="mt-6 md:mt-8 max-w-xl">
          <p className="font-sans text-base md:text-lg text-[var(--color-paper-dim)] leading-relaxed">
            {hero.sub}
          </p>
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex items-end justify-between">
        <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[var(--color-paper-dim)]">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block h-8 w-px bg-[var(--color-paper-dim)]"
          />
          SCROLL
        </div>
        <span className="font-mono text-xs tracking-widest text-[var(--color-signal)]">
          [ AVAILABLE FOR WORK ]
        </span>
      </motion.div>
    </section>
  );
}
