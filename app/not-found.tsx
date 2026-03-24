import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="grain-overlay min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="max-w-[40rem]">
          <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.14em] text-muted">
            Not Found
          </p>
          <h1 className="text-balance text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-[3rem] md:text-[3.6rem]">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-6 text-[0.98rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8">
            The link might be broken or the page may have moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-foreground transition-colors duration-200 hover:text-[var(--accent-green)]"
          >
            <span>Back to homepage</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
