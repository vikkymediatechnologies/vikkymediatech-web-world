import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center pt-24">
      <Container className="flex flex-col items-center text-center">
        <span className="font-display text-7xl font-bold text-royal-600/20 dark:text-royal-400/20">404</span>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink-800 dark:text-white sm:text-3xl">
          This page took a wrong turn
        </h1>
        <p className="mt-3 max-w-sm text-sm text-ink-500 dark:text-ink-300">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <Button href="/" className="mt-7">
          Back to homepage <ArrowUpRight size={15} />
        </Button>
      </Container>
    </section>
  );
}
