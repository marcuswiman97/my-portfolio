import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatIDo } from "@/components/what-i-do";

export const metadata: Metadata = {
  title: "Marcus Wiman | UX Portfolio",
  description:
    "A UX portfolio focused on digital experiences, product thinking, and clear interaction design.",
  openGraph: {
    title: "Marcus Wiman | UX Portfolio",
    description:
      "A UX portfolio focused on digital experiences, product thinking, and clear interaction design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Wiman | UX Portfolio",
    description:
      "A UX portfolio focused on digital experiences, product thinking, and clear interaction design.",
  },
};

const selectedWork = [
  {
    title: "Flowscape",
    href: "/flowscape",
    category: "UX/UI Design with Product Thinking",
    year: "2025-2026",
    description:
      "Making workplace analytics easier to navigate, interpret, and act on",
    image: "/images/flowscape-hero.jpg",
    imageAlt: "Flowscape analytics dashboard preview",
  },
  {
    title: "Stockholm Xperience Conference",
    href: "/sxc",
    category: "UX/UI Design with Research",
    year: "2025",
    description:
      "Restructuring navigation and flows for faster, more intuitive interactions",
    image: "/images/sxc-hero-v2.jpg",
    imageAlt: "Stockholm Xperience Conference mobile concept preview",
  },
  {
    title: "Projekt Vita",
    href: "/projekt-vita",
    category: "UX Research",
    year: "2024",
    description:
      "Clarifying trust, structure, and communication in nonprofit partnerships",
    image: "/images/projekt-vita-hero.jpg",
    imageAlt: "Projekt Vita partnership research preview",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="grain-overlay min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-0 pb-6 sm:px-6 sm:pt-0 sm:pb-8 md:px-8 md:pt-0 md:pb-10 lg:px-10 lg:pt-0 lg:pb-14">
        <SiteHeader compact />

        <section className="mb-16 pt-8 sm:mb-18 sm:pt-10 md:mb-22 md:pt-12 lg:mb-28 lg:flex lg:min-h-[78svh] lg:items-center lg:pt-10">
          <div className="w-full lg:w-[calc(100vw-5rem)] lg:max-w-[82.5rem] xl:w-[calc(100vw-((100vw-72rem)/2)-5rem)]">
            <div className="grid gap-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-end lg:gap-[clamp(64px,8vw,140px)]">
              <div>
                <p className="mb-7 text-[14px] font-medium uppercase tracking-[0.12em] text-muted sm:mb-8 md:mb-10">
                  Available for UX roles · Stockholm
                </p>

                <h1 className="max-w-none text-balance text-[3rem] font-semibold leading-[0.96] tracking-[-0.055em] text-foreground sm:text-[3.7rem] md:text-[4.6rem] lg:text-[5.3rem] xl:text-[5.95rem]">
                  Making digital products
                  <br />
                  <span className="font-serif italic tracking-[-0.035em] text-[var(--accent-green)]">
                    easier
                  </span>{" "}
                  to understand
                  <br />
                  and use
                </h1>
              </div>

              <div className="max-w-[38rem] lg:pb-6">
                <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.12em] text-muted sm:mb-5">
                  UX Approach
                </p>

                <p className="text-[1.08rem] leading-[1.75] text-ink-soft sm:text-[1.16rem] sm:leading-8 md:text-[1.24rem] lg:text-[1.32rem]">
                  I help companies understand their users and turn insights into
                  solutions that create real value.
                </p>

                <p className="mt-4 text-[0.96rem] leading-[1.78] text-muted sm:mt-5 sm:text-[0.98rem] md:text-[1rem]">
                  UX designer based in Stockholm, with a background in music
                  that shaped how I think about clarity, flow, and structure.
                </p>

                <div className="mt-7 h-px w-full max-w-[18rem] bg-[rgba(255,255,255,0.08)] sm:mt-8" />

                <Link
                  href="#work"
                  className="group mt-5 inline-flex items-center gap-2 text-[1.05rem] font-medium text-foreground transition-colors duration-300 ease-in-out hover:text-[var(--accent-green)] focus-visible:text-[var(--accent-green)] sm:mt-6 sm:text-[1.12rem]"
                >
                  View selected work
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="pt-12 pb-18 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-36"
        >
          <div className="mx-auto mb-10 w-full max-w-[72rem] sm:mb-12 md:mb-14 lg:mb-16">
            <h2 className="text-balance text-[1.95rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[2.1rem] md:text-[2.4rem] lg:text-[2.95rem]">
              Selected Work
            </h2>
          </div>

          <div className="mx-auto w-full max-w-[72rem] border-t border-[#2b3434]">
            {selectedWork.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group block border-b border-[#2b3434] py-8 transition-[border-color,background-color] duration-300 ease-in-out hover:border-[rgba(111,175,143,0.28)] focus-visible:border-[rgba(111,175,143,0.45)] focus-visible:outline-none sm:py-9 md:py-10 lg:py-11"
              >
                <div className="flex items-center justify-between gap-6 transition-transform duration-300 ease-in-out group-hover:translate-x-[2px] group-focus-visible:translate-x-[2px]">
                  <div className="min-w-0 flex-1">
                    <p className="mb-3 text-[14px] font-medium tracking-[0.01em] text-muted sm:mb-4">
                      {project.category} / {project.year}
                    </p>
                    <h3 className="max-w-[18rem] text-balance text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground transition-colors duration-300 ease-in-out group-hover:text-[#6FAF8F] group-focus-visible:text-[#6FAF8F] sm:max-w-[24rem] sm:text-[1.7rem] md:max-w-none md:text-[1.9rem] lg:text-[2.1rem]">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-[42rem] pr-2 text-[0.96rem] leading-[1.8] text-ink-soft sm:mt-4 sm:text-[0.98rem] sm:leading-7 md:max-w-[44rem] md:pr-0">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative hidden h-[154px] w-[264px] shrink-0 overflow-hidden rounded-[0.85rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] opacity-30 shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-500 ease-out group-hover:translate-x-[2px] group-hover:opacity-100 group-focus-visible:translate-x-[2px] group-focus-visible:opacity-100 lg:block">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
                      sizes="264px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,17,17,0.28)] via-[rgba(14,17,17,0.08)] to-transparent" />
                  </div>

                  <span className="hidden shrink-0 text-sm text-muted opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-[2px] group-hover:opacity-100 group-hover:text-[#6FAF8F] group-focus-visible:translate-x-[2px] group-focus-visible:opacity-100 group-focus-visible:text-[#6FAF8F] md:inline-block">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="py-20 sm:py-22 md:py-26 lg:py-34">
          <div className="mx-auto grid w-full max-w-[80rem] gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-[clamp(64px,8vw,120px)]">
            <h2 className="text-balance text-[2.45rem] font-semibold leading-[1.02] tracking-[-0.05em] text-foreground sm:text-[3rem] md:text-[3.55rem] lg:text-[4.4rem]">
              A designer driven by curiosity, clarity, and solving people’s
              problems.
            </h2>

            <div className="max-w-[40rem] space-y-8 text-[1.02rem] leading-[1.82] text-ink-soft sm:text-[1.07rem] md:text-[1.1rem] lg:text-[1.14rem]">
              <p>
                I&apos;m Marcus, a UX designer based in Stockholm. I focus on
                clarity, structure, and how people actually use the products we
                build.
              </p>

              <p>
                I&apos;m drawn to challenging problems and curious about how
                things work, especially in analytics platforms and
                information-dense environments.
              </p>

              <p>
                Before UX, I spent years in music and running my own creative
                business. That still shapes how I think about rhythm, flow, and
                composition.
              </p>

              <p>
                I&apos;ve worked with real audiences, from live performances at
                Gröna Lund to appearances on SVT1 and Sveriges Radio (P4), and
                learned to deliver under pressure. A good interface guides
                attention without friction.
              </p>
            </div>
          </div>
        </section>

        <WhatIDo />

        <section id="contact" className="py-20 sm:py-22 md:py-26 lg:py-34">
          <div className="mx-auto w-full max-w-[72rem]">
            <div className="rounded-[1.1rem] border border-[rgba(43,52,52,0.92)] bg-[linear-gradient(135deg,rgba(18,22,22,0.96)_0%,rgba(14,17,17,0.94)_100%)] px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:px-8 sm:py-10 md:px-10 md:py-12">
              <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:gap-12 lg:gap-16">
                <div>
                  <p className="text-[14px] font-medium tracking-[0.01em] text-muted">
                    Contact
                  </p>
                  <h2 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[2.25rem] md:text-[2.7rem] lg:text-[3rem]">
                    Get in touch.
                  </h2>

                  <p className="mt-6 max-w-[40rem] text-[1rem] leading-[1.78] text-ink-soft sm:text-[1.04rem] md:text-[1.08rem]">
                    Available for freelance, in-house, and product design
                    opportunities. Reach out by email or LinkedIn.
                  </p>
                </div>

                <div className="flex flex-col justify-end">
                  <div className="overflow-hidden rounded-[0.95rem] border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)]">
                    <Link
                      href="mailto:marcus.wiman97@gmail.com"
                      className="group flex items-center justify-between gap-4 px-5 py-5 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.03)] sm:px-6"
                    >
                      <div>
                        <p className="text-[14px] font-medium tracking-[0.01em] text-muted">
                          Email
                        </p>
                        <p className="mt-2 break-all text-[1rem] font-medium text-foreground sm:text-[1.02rem]">
                          marcus.wiman97@gmail.com
                        </p>
                      </div>
                      <span className="shrink-0 text-muted transition duration-200 group-hover:translate-x-[2px] group-hover:text-[var(--accent-green)]">
                        →
                      </span>
                    </Link>

                    <div className="h-px bg-[rgba(255,255,255,0.06)]" />

                    <Link
                      href="https://www.linkedin.com/in/marcus-wiman/"
                      className="group flex items-center justify-between gap-4 px-5 py-5 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.03)] sm:px-6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <p className="text-[14px] font-medium tracking-[0.01em] text-muted">
                          LinkedIn
                        </p>
                        <p className="mt-2 text-[1rem] font-medium text-foreground sm:text-[1.02rem]">
                          linkedin.com/in/marcus-wiman/
                        </p>
                      </div>
                      <span className="shrink-0 text-muted transition duration-200 group-hover:translate-x-[2px] group-hover:text-[var(--accent-green)]">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 text-sm text-muted md:py-14 lg:py-16">
          <div className="mx-auto w-full max-w-[72rem]">
            <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Marcus Wiman</p>
              <p>Stockholm, Sweden</p>
              <p>UX Designer</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
