import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";

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
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-14">
        <SiteHeader />

        <section className="mb-16 pt-0 sm:mb-18 sm:pt-1 md:mb-22 md:pt-2 lg:mb-28 lg:pt-4">
          <div className="mx-auto w-full max-w-[74rem]">
            <p className="mb-6 text-[14px] font-medium uppercase tracking-[0.12em] text-muted sm:mb-7 md:mb-8">
              UX Designer + Musician
            </p>

            <h1 className="max-w-[70rem] text-balance text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground sm:text-[3.4rem] md:text-[4.1rem] lg:text-[5.2rem]">
              Making complex digital
              <br />
              products easier to
              <br />
              understand and use
            </h1>

            <p className="mt-8 max-w-[38rem] text-[0.98rem] leading-[1.8] text-ink-soft sm:mt-9 sm:text-[1rem] sm:leading-8 md:mt-10 md:max-w-[40rem] md:text-[1.05rem] lg:mt-12 lg:text-[1.125rem]">
              Stockholm-based. Focused on product clarity, structure, and
              creative thinking shaped by music.
            </p>

            <p className="mt-4 max-w-[38rem] text-[0.98rem] leading-[1.8] text-ink-soft sm:mt-5 sm:text-[1rem] sm:leading-8 md:max-w-[40rem] md:text-[1.05rem] lg:mt-6 lg:text-[1.125rem]">
              My background in music sharpened how I think about rhythm,
              emotion, and flow. I bring that creative instinct into digital
              products that need to feel clear, intuitive, and memorable.
            </p>

            <p className="mt-6 max-w-[40rem] text-[0.93rem] leading-7 text-muted sm:text-[0.96rem] md:mt-7">
              Working across UX research, interface design, prototyping,
              design systems, and accessibility-aware decisions.
            </p>
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
          <div className="mx-auto w-full max-w-[72rem]">
            <h2 className="text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[2.25rem] md:text-[2.7rem] lg:text-[3rem]">
              About
            </h2>

            <p className="mt-12 max-w-[52rem] text-[1.03rem] leading-[1.82] text-ink-soft sm:mt-14 sm:text-[1.08rem] md:text-[1.12rem] lg:text-[1.18rem]">
              I&apos;m Marcus Wiman, a UX designer based in Stockholm. I like
              working on products that have a bit of complexity to them, things
              like dense information, multi-step tasks, or decisions that
              actually matter. My job is to make that feel simple and usable.
            </p>

            <p className="mt-10 max-w-[52rem] text-[1.03rem] leading-[1.82] text-ink-soft sm:mt-12 sm:text-[1.08rem] md:text-[1.12rem] lg:text-[1.18rem]">
              I focus on structure, interaction logic, and making it clear what
              the user should do next. Not by guessing, but by looking at how
              people actually use the product and where they get stuck.
            </p>

            <p className="mt-10 max-w-[52rem] text-[1.03rem] leading-[1.82] text-ink-soft sm:mt-12 sm:text-[1.08rem] md:text-[1.12rem] lg:text-[1.18rem]">
              If there isn&apos;t enough user input, I&apos;d rather slow things
              down than push a change based on assumptions. I try to make
              decisions that improve the experience for users while also making
              sense for the business.
            </p>

            <p className="mt-10 max-w-[52rem] text-[1.03rem] leading-[1.82] text-ink-soft sm:mt-12 sm:text-[1.08rem] md:text-[1.12rem] lg:text-[1.18rem]">
              It&apos;s not about removing features, it&apos;s about making
              better decisions easier and reducing friction along the way. I
              work across UX research, interface design, prototyping, and
              design systems, with accessibility in mind.
            </p>

            <p className="mt-10 max-w-[52rem] text-[1.03rem] leading-[1.82] text-ink-soft sm:mt-12 sm:text-[1.08rem] md:text-[1.12rem] lg:text-[1.18rem]">
              I enjoy challenges and figuring things out over time. The best
              solutions rarely come straight away, it usually takes a few turns
              before things really click.
            </p>

            <p className="mt-10 max-w-[52rem] text-[1.03rem] leading-[1.82] text-ink-soft sm:mt-12 sm:text-[1.08rem] md:text-[1.12rem] lg:text-[1.18rem]">
              Outside of work, I spend a lot of time training, being with my
              family, and making music.
            </p>

            <p className="mt-10 max-w-[52rem] text-[1.03rem] leading-[1.82] text-ink-soft sm:mt-12 sm:text-[1.08rem] md:text-[1.12rem] lg:text-[1.18rem]">
              I care about visual systems too, but only when they help with
              clarity. If you&apos;re building something that needs clearer
              flows or a stronger structure, feel free to reach out.
            </p>
          </div>
        </section>

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
          <div className="mx-auto flex w-full max-w-[72rem] flex-col gap-2 sm:gap-3 md:flex-row md:items-center md:justify-between">
            <p>Marcus Wiman</p>
            <p>Stockholm, Sweden</p>
            <p>UX Designer</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
