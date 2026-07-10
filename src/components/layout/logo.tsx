import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className ?? ""}`} aria-label={site.name}>
      <Image
        src="/assets/logo-icon.png"
        alt={`${site.shortName} logo`}
        width={40}
        height={41}
        priority
        className="h-9 w-9 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-bold tracking-tight text-ink-800 dark:text-white sm:text-[17px]">
          Vikkymediatech
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-royal-600 dark:text-royal-300">
          Web World
        </span>
      </span>
    </Link>
  );
}
