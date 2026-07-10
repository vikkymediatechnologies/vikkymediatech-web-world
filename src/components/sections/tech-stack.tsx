import { Container } from "@/components/ui/container";
import { techStack } from "@/data/site";

export function TechStack() {
  const loop = [...techStack, ...techStack];

  return (
    <section className="py-16">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">
          The stack behind every build
        </p>
      </Container>
      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-surface-dark" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-surface-dark" />
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex shrink-0 items-center rounded-full border border-ink-100 bg-white px-5 py-2.5 text-sm font-medium text-ink-600 dark:border-white/10 dark:bg-surface-darkSoft dark:text-ink-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
