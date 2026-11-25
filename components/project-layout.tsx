import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

export function ProjectLayout({
  title,
  status,
  description,
  children,
}: {
  title: string;
  status: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main id="main-content" className="min-h-screen">
      <div className="mx-auto max-w-[88rem] px-4 pb-8 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SiteHeader compact />
        <article className="mx-auto max-w-[62rem] py-8 sm:py-12">
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center text-base text-muted underline underline-offset-4 hover:text-[var(--accent-green)]"
          >
            Back to selected work
          </Link>
          <header className="border-b border-[#2b3434] py-6 sm:py-9">
            <p className="text-sm font-medium text-[var(--accent-green)]">
              {status}
            </p>
            <h1 className="mt-4 text-balance text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[3.75rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-[45rem] text-lg leading-8 text-ink-soft">
              {description}
            </p>
          </header>
          <div className="space-y-9 py-8 text-base leading-7 text-ink-soft sm:py-10">
            {children}
          </div>
          <footer className="flex flex-wrap gap-x-7 gap-y-2 border-t border-[#2b3434] py-6">
            <Link
              href="/#work"
              className="inline-flex min-h-11 items-center text-[var(--accent-green)] underline underline-offset-4"
            >
              Selected work
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-11 items-center text-[var(--accent-green)] underline underline-offset-4"
            >
              Contact &amp; CV
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
}
