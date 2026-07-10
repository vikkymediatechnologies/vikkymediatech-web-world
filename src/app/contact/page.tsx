import type { Metadata } from "next";
import { Mail, MapPin, Phone, Facebook, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "./contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vikkymediatech Web World for your next project or Academy enrollment.",
};

const socials = [
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Github, href: site.social.github, label: "GitHub" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your project"
        description="Whether it's a new website, a full product build, or Academy enrollment — we'd love to hear from you."
      />

      <section className="section-y pt-4">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-8">
              <div className="card-surface p-8">
                <h3 className="font-display text-lg font-semibold text-ink-800 dark:text-white">
                  Business information
                </h3>
                <ul className="mt-5 space-y-4 text-sm text-ink-500 dark:text-ink-300">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-royal-600 dark:text-royal-300" />
                    {site.address}
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-royal-600 dark:text-royal-300" />
                    <a href={`tel:${site.phoneHref}`} className="hover:text-royal-600 dark:hover:text-royal-300">
                      {site.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-royal-600 dark:text-royal-300" />
                    <a href={`mailto:${site.email}`} className="hover:text-royal-600 dark:hover:text-royal-300">
                      {site.email}
                    </a>
                  </li>
                </ul>
                <div className="mt-6 flex items-center gap-2.5 border-t border-ink-100 pt-6 dark:border-white/10">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-colors hover:border-royal-600/40 hover:text-royal-600 dark:border-white/15 dark:text-ink-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-ink-100 dark:border-white/10">
                <div className="relative flex h-52 items-center justify-center bg-ink-50 dark:bg-surface-darkSoft">
                  <div className="absolute inset-0 bg-grid-faint bg-grid opacity-60" />
                  <div className="relative flex flex-col items-center gap-2 text-ink-400 dark:text-ink-400">
                    <MapPin className="h-6 w-6 text-royal-600 dark:text-royal-300" />
                    <span className="text-xs font-medium">Ibadan, Oyo State, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-surface p-8 sm:p-10">
              <h3 className="font-display text-lg font-semibold text-ink-800 dark:text-white">Send a message</h3>
              <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-300">
                Fill in the form and we&rsquo;ll respond within one business day.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
