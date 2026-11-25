import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatIDo } from "@/components/what-i-do";

export const metadata: Metadata = {
  title: "Marcus Wiman | Fullstack JavaScript & UX",
  description:
    "Fullstack JavaScript student and UX designer based in Stockholm. Follow my JavaScript studies and explore UX case studies.",
  openGraph: {
    title: "Marcus Wiman | Fullstack JavaScript & UX",
    description:
      "Fullstack JavaScript student and UX designer based in Stockholm. Follow my JavaScript studies and explore UX case studies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Wiman | Fullstack JavaScript & UX",
    description:
      "Fullstack JavaScript student and UX designer based in Stockholm. Follow my JavaScript studies and explore UX case studies.",
  },
};

const selectedWork = [
  {
    title: "Flowscape",
    href: "/flowscape",
    context: "UX internship · 6 months · 2025–2026",
    role: "UX / Product Designer",
    problem: "Workplace analytics that were difficult to scan and navigate.",
    image: "/flowscape-hero.jpg",
    imageAlt: "Flowscape workplace interior",
  },
  {
    title: "Stockholm Xperience Conference",
    href: "/sxc",
    context: "UX coursework · Team of 5 · 2025",
    role: "UX/UI Design + Research",
    problem:
      "A mobile concept for conference sessions and in-person networking.",
    image: "/images/sxc-hero-v2.jpg",
    imageAlt: "Stockholm Xperience Conference mobile interface concept",
  },
  {
    title: "Projekt Vita",
    href: "/projekt-vita",
    context: "UX coursework · Team of 4 · 2024",
    role: "UX Research",
    problem:
      "Companies and nonprofits had different expectations of a partnership.",
    image: "/images/projekt-vita-hero.jpg",
    imageAlt: "Projekt Vita partnership research project",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-[88rem] flex-col px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 lg:px-10 xl:px-12">
        <SiteHeader compact />

        <section
          aria-labelledby="intro-title"
          className="flex items-center py-16 sm:py-20 lg:min-h-[68svh] lg:py-24"
        >
          <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
            <div>
              <p className="mb-6 text-sm font-medium tracking-[0.04em] text-muted">
                Seeking junior developer roles · Stockholm
              </p>
              <h1
                id="intro-title"
                className="max-w-[15ch] text-balance text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem]"
              >
                Fullstack{" "}
                <span className="text-[var(--accent-green)]">JavaScript</span>{" "}
                student
              </h1>
            </div>
            <div className="max-w-[38rem]">
              <p className="text-lg leading-8 text-ink-soft sm:text-xl">
                I&apos;m Marcus, a UX designer currently studying fullstack
                JavaScript at Chas Academy, with experience from freelance
                client work and product design.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                I&apos;m building my skills in web development while bringing a
                background in user research, interaction design and
                accessibility.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="#work"
                  className="inline-flex min-h-11 items-center rounded-md bg-[var(--accent-green)] px-5 py-3 text-base font-medium text-[#0e1111] transition-colors hover:bg-[#8fc6aa]"
                >
                  View my work
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex min-h-11 items-center py-2 text-base font-medium text-foreground underline decoration-[#596666] underline-offset-4 hover:decoration-[var(--accent-green)]"
                >
                  Contact &amp; CV
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          aria-labelledby="work-title"
          className="scroll-mt-28 py-10 sm:py-14 lg:py-16"
        >
          <div className="mx-auto w-full max-w-[72rem]">
            <h2
              id="work-title"
              className="mb-8 text-[1.95rem] font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-[2.4rem] lg:text-[2.95rem]"
            >
              Selected work
            </h2>
            <article
              aria-labelledby="quiz-tajm-title"
              className="grid gap-6 border-t border-[#2b3434] py-8 md:grid-cols-[0.85fr_1.4fr] md:gap-8 lg:gap-12"
            >
              <Link
                href="/quiz-tajm"
                aria-label="Read about Quiz Tajm"
                className="relative block aspect-[16/10] self-start overflow-hidden rounded-md"
              >
                <Image
                  src="/images/quiz-tajm-preview.jpg"
                  unoptimized
                  loading="eager"
                  alt="Quiz Tajm start screen with theme selection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) calc(100vw - 2rem), 440px"
                />
              </Link>
              <div>
                <p className="text-sm font-medium text-[var(--accent-green)]">
                  JavaScript · Published · 2026
                </p>
                <h3
                  id="quiz-tajm-title"
                  className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[1.8rem]"
                >
                  <Link
                    href="/quiz-tajm"
                    className="hover:text-[var(--accent-green)]"
                  >
                    Quiz Tajm
                  </Link>
                </h3>
                <p className="mt-3 text-base leading-7 text-ink-soft">
                  A published quiz built with vanilla JavaScript, Vite and Open
                  Trivia DB. Originally developed as group coursework and
                  individually extended with new features and improved
                  reliability.
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Individual improvements: API caching, rate limiting, error
                  handling, dynamic results and persistent game history.
                </p>
                <Link
                  href="/quiz-tajm"
                  className="mt-3 inline-flex min-h-11 items-center text-base font-medium text-[var(--accent-green)] underline underline-offset-4"
                >
                  View project<span className="sr-only">: Quiz Tajm</span>
                </Link>
              </div>
            </article>

            <h2 className="mt-8 mb-6 text-[1.95rem] font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-[2.4rem] lg:text-[2.95rem]">
              UX &amp; product work
            </h2>
            <article
              aria-labelledby="legalisering-title"
              className="grid gap-6 border-t border-[#2b3434] py-8 md:grid-cols-[0.85fr_1.4fr] md:gap-8 lg:gap-12"
            >
              <div>
                <p className="text-sm font-medium text-[var(--accent-green)]">
                  Freelance client work · Prototype in progress
                </p>
                <h3
                  id="legalisering-title"
                  className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[1.8rem]"
                >
                  <Link
                    href="/legalisering"
                    className="hover:text-[var(--accent-green)]"
                  >
                    Legalisering.se
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Alla Visum · Autumn 2026
                </p>
              </div>
              <div>
                <p className="text-base leading-7 text-ink-soft">
                  Leading UX and product design for a document legalisation
                  service, from research to an interactive frontend prototype
                  covering five countries.
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Goal: help customers order the right service online and reduce
                  unnecessary manual support.
                </p>
                <Link
                  href="/legalisering"
                  className="mt-3 inline-flex min-h-11 items-center text-base font-medium text-[var(--accent-green)] underline underline-offset-4"
                >
                  View ongoing project
                  <span className="sr-only">: Legalisering.se</span>
                </Link>
              </div>
            </article>

            <div className="border-t border-[#2b3434]">
              {selectedWork.map((project) => (
                <article
                  key={project.href}
                  className="grid gap-6 border-b border-[#2b3434] py-8 sm:py-10 md:grid-cols-[0.85fr_1.4fr] md:gap-8 lg:gap-12"
                >
                  <Link
                    href={project.href}
                    aria-label={`Read ${project.title} case study`}
                    className="group block self-start overflow-hidden rounded-md"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={720}
                      height={450}
                      className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
                      sizes="(max-width: 767px) calc(100vw - 2rem), 440px"
                    />
                  </Link>
                  <div>
                    <p className="text-sm text-muted">{project.context}</p>
                    <h3 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[1.8rem]">
                      <Link
                        href={project.href}
                        className="hover:text-[var(--accent-green)]"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-base leading-7 text-ink-soft">
                      {project.problem}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {project.role}
                    </p>
                    <Link
                      href={project.href}
                      className="mt-4 inline-flex min-h-11 items-center text-base font-medium text-[var(--accent-green)] underline decoration-[rgba(111,175,143,0.5)] underline-offset-4 hover:decoration-current"
                    >
                      Read case study
                      <span className="sr-only">: {project.title}</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-title"
          className="scroll-mt-28 py-10 sm:py-14"
        >
          <div className="mx-auto grid w-full max-w-[72rem] gap-8 md:grid-cols-[0.65fr_1.4fr] md:gap-12">
            <Image
              src="/images/about-me-outdoor.jpg"
              alt="Portrait of Marcus Wiman"
              width={4032}
              height={3024}
              className="aspect-[4/3] w-full max-w-[20rem] self-start rounded-md object-cover object-[72%_28%]"
              sizes="(max-width: 767px) 320px, 360px"
            />
            <div>
              <h2
                id="about-title"
                className="text-[1.95rem] font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-[2.4rem]"
              >
                About me
              </h2>
              <p className="mt-4 text-base leading-7 text-ink-soft">
                I&apos;m based in Stockholm, studying fullstack JavaScript after
                a UX education. Freelance work with Legalisering.se and my
                internship at Flowscape have given me experience of real client
                needs and working with developers.
              </p>
              <p className="mt-4 text-base leading-7 text-ink-soft">
                I use AI for exercises and feedback, then practise writing code
                myself until I can explain and apply it. Outside work and
                studies, I&apos;m usually close to music, training, or a new
                challenge.
              </p>
              <dl className="mt-6 grid gap-5 border-t border-[#2b3434] pt-5 sm:grid-cols-2">
                <div>
                  <dt className="text-base font-medium text-foreground">
                    Chas Academy
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">
                    Fullstack JavaScript · 2026–2028
                    <br />
                    Now: Vanilla JavaScript · Next: TypeScript
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-foreground">
                    Nackademin
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">
                    UX Design · 2024–2026
                    <br />
                    <a
                      href="/documents/ux-designer-diploma.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center text-[var(--accent-green)] underline underline-offset-4"
                    >
                      View diploma
                      <span className="sr-only">
                        {" "}
                        (PDF, opens in a new tab)
                      </span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <details className="group mx-auto mt-8 w-full max-w-[72rem] border-y border-[#2b3434]">
            <summary className="cursor-pointer py-5 text-lg font-medium text-foreground marker:text-[var(--accent-green)]">
              My approach to UX
            </summary>
            <WhatIDo showHeading={false} />
          </details>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="scroll-mt-28 py-12 sm:py-16 lg:py-20"
        >
          <div className="mx-auto grid w-full max-w-[72rem] gap-8 border-t border-[#2b3434] pt-9 md:grid-cols-[1fr_1.2fr] md:gap-12">
            <div>
              <h2
                id="contact-title"
                className="text-[1.95rem] font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-[2.4rem]"
              >
                Let&apos;s talk
              </h2>
              <p className="mt-4 max-w-[30rem] text-base leading-7 text-ink-soft">
                Have a junior developer opening? I&apos;d like to hear about the
                team and the work. I&apos;m also open to UX roles.
              </p>
            </div>
            <div>
              <a
                href="mailto:marcus.wiman97@gmail.com"
                className="inline-flex min-h-11 max-w-full items-center break-all py-2 text-lg font-medium text-[var(--accent-green)] underline underline-offset-4 sm:text-xl"
              >
                marcus.wiman97@gmail.com
              </a>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-base text-foreground">
                <li>
                  <a
                    href="mailto:marcus.wiman97@gmail.com?subject=CV%20request"
                    className="inline-flex min-h-11 items-center underline decoration-[#596666] underline-offset-4 hover:decoration-[var(--accent-green)]"
                  >
                    Request my CV
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/marcuswiman97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center underline decoration-[#596666] underline-offset-4 hover:decoration-[var(--accent-green)]"
                  >
                    GitHub
                    <span className="sr-only">
                      {" "}
                      profile (opens in a new tab)
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/marcus-wiman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center underline decoration-[#596666] underline-offset-4 hover:decoration-[var(--accent-green)]"
                  >
                    LinkedIn
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer className="mx-auto flex w-full max-w-[72rem] flex-col gap-2 border-t border-[#2b3434] py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© 2026 Marcus Wiman</p>
          <p>Stockholm, Sweden</p>
        </footer>
      </div>
    </main>
  );
}
