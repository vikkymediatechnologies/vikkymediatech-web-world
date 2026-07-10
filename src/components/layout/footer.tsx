import { Facebook, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { site, navLinks, services } from "@/data/site";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.63h-3.24v13.44a3.13 3.13 0 1 1-2.2-2.98v-3.3a6.36 6.36 0 1 0 5.44 6.28V9.36a8.2 8.2 0 0 0 4.4 1.28V7.4a4.9 4.9 0 0 1-2.99-1.58Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.24 2.25h3.29l-7.19 8.21 8.46 11.29h-6.62l-5.19-6.79-5.93 6.79H1.76l7.69-8.79L1.4 2.25h6.79l4.68 6.22 5.37-6.22Zm-1.16 17.52h1.82L7.02 4.13H5.06l12.02 15.64Z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: TikTokIcon, href: site.social.tiktok, label: "TikTok" },
  { icon: Github, href: site.social.github, label: "GitHub" },
  { icon: XIcon, href: site.social.x, label: "X (Twitter)" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-100 bg-surface-soft dark:border-white/10 dark:bg-surface-dark">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-ink-300">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-colors hover:border-royal-600/40 hover:text-royal-600 dark:border-white/15 dark:text-ink-300 dark:hover:border-royal-400/40 dark:hover:text-royal-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-ink-800 dark:text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-500 transition-colors hover:text-royal-600 dark:text-ink-300 dark:hover:text-royal-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-ink-800 dark:text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a
                    href="/services"
                    className="text-sm text-ink-500 transition-colors hover:text-royal-600 dark:text-ink-300 dark:hover:text-royal-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-ink-800 dark:text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-500 dark:text-ink-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-royal-600 dark:text-royal-300" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-royal-600 dark:text-royal-300" />
                <a href={`tel:${site.phoneHref}`} className="hover:text-royal-600 dark:hover:text-royal-300">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-royal-600 dark:text-royal-300" />
                <a href={`mailto:${site.email}`} className="hover:text-royal-600 dark:hover:text-royal-300">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-100 pt-8 text-xs text-ink-400 dark:border-white/10 dark:text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved. {site.cac}.
          </p>
          <div className="flex items-center gap-2 font-medium uppercase tracking-[0.16em] text-royal-600 dark:text-royal-300">
            {site.motto.map((word, i) => (
              <span key={word} className="flex items-center gap-2">
                {word}
                {i < site.motto.length - 1 && <span className="h-1 w-1 rounded-full bg-royal-600/50" />}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
