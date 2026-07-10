import type { Metadata } from "next";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/page-hero";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on web development, software engineering and technology education from the Vikkymediatech team.",
};

const gradients = ["from-royal-600 to-royal-800", "from-sky to-royal-700", "from-ink-700 to-royal-800"];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes on building, shipping and learning"
        description="Perspectives from our engineering, design and Academy teams."
      />

      <section className="section-y pt-4">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <a
                key={post.slug}
                href="/blog"
                className="group overflow-hidden rounded-3xl border border-ink-100 bg-white dark:border-white/10 dark:bg-surface-dark"
              >
                <div
                  className={`relative h-40 overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]}`}
                >
                  <div className="absolute inset-0 bg-grid-faint bg-grid opacity-20 mix-blend-overlay" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-medium text-ink-400 dark:text-ink-400">
                    <span className="rounded-full bg-royal-600/[0.08] px-2.5 py-1 text-royal-700 dark:bg-royal-400/[0.1] dark:text-royal-300">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug text-ink-800 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{post.excerpt}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-royal-600 dark:text-royal-300">
                    Read article
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
