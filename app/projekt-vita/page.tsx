import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { ReadingProgress } from "@/components/reading-progress";

export const metadata: Metadata = {
  title: "Projekt Vita | Marcus Wiman",
  description:
    "A UX research case study about trust between companies and nonprofit organizations.",
  openGraph: {
    title: "Projekt Vita | Marcus Wiman",
    description:
      "A UX research case study about trust between companies and nonprofit organizations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projekt Vita | Marcus Wiman",
    description:
      "A UX research case study about trust between companies and nonprofit organizations.",
  },
};

const metadataItems = [
  { label: "Role", value: "UX Research" },
  { label: "Timeline", value: "12 Weeks" },
  { label: "Research", value: "Surveys + Interviews" },
  { label: "Team", value: "4 UX Designers" },
];

const challengePoints = [
  "Companies struggled to understand what nonprofit organizations actually needed from a partnership.",
  "Nonprofits found it hard to communicate their value in a way that felt clear and credible.",
  "Different expectations made early conversations uncertain and difficult to align.",
  "Missing trust early in the process made collaboration feel harder to commit to.",
];

const sections = [
  {
    title: "Clear intent was often missing",
    text: "Companies wanted to help, but often struggled to understand what the nonprofit actually needed from the partnership.",
  },
  {
    title: "Trust depended on how value was explained",
    text: "Nonprofits had to make their work feel credible and concrete before companies felt confident moving forward.",
  },
  {
    title: "Early conversations were hard to align",
    text: "Both sides entered the relationship with different expectations, which made it harder to build momentum from the start.",
  },
  {
    title: "Support often started with products, not money",
    text: "For many companies, the first step felt easier when they could contribute something tangible, often their own products, before committing financially.",
  },
];

const outcomePoints = [
  "Trust was shaped as much by communication as by intention.",
  "Early clarity around needs and expectations made conversations easier to align.",
  "Making value easier to explain gave both sides a stronger starting point.",
];

export default function ProjektVitaPage() {
  return (
    <main id="main-content" className="grain-overlay min-h-screen">
      <ReadingProgress />
      <div className="mx-auto flex min-h-screen max-w-[88rem] flex-col px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-14 xl:px-12">
        <SiteHeader compact />

        <section className="relative left-1/2 mb-6 w-screen -translate-x-1/2 overflow-hidden bg-[#050606] sm:mb-8 md:mb-10 lg:mb-12">
          <div className="relative mx-auto h-[clamp(24rem,52svh,36rem)] w-full max-w-[100rem] overflow-hidden sm:h-[clamp(25rem,54svh,38rem)] lg:h-[clamp(27rem,65svh,44rem)]">
            <Image
              src="/images/projekt-vita-hero.jpg"
              alt="Projekt Vita hero image"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1600px) 100vw, 1600px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.9)_30%,rgba(0,0,0,0.7)_55%,rgba(0,0,0,0.3)_75%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-0 bg-black/40 sm:bg-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[clamp(5rem,12vw,16.25rem)] bg-[linear-gradient(to_right,#050606,rgba(5,6,6,0))]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[clamp(5rem,12vw,16.25rem)] bg-[linear-gradient(to_left,#050606,rgba(5,6,6,0))]" />

            <div className="absolute inset-0 z-10 flex items-center">
              <div className="mx-auto w-full max-w-[88rem] px-6 pb-12 pt-16 sm:px-8 sm:pb-14 sm:pt-20 md:px-10 md:pb-18 xl:px-12">
                <div className="max-w-[44rem]">
                  <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.12em] text-[#d4dcdc]">
                    CASE STUDY
                  </p>
                  <h1 className="mb-4 text-balance text-[2.9rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#e6e8e8] sm:text-[3.8rem] md:text-[4.75rem] lg:text-[5.4rem]">
                    Projekt Vita
                  </h1>
                  <p className="max-w-[34rem] text-[16px] leading-[1.75] text-[#d9e0e0] sm:text-[17px] md:max-w-[36rem] md:text-[18px]">
                    A UX research project about trust, communication, and early
                    collaboration around nonprofit partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 top-8 z-20 md:top-10">
              <div className="mx-auto max-w-[88rem] px-6 sm:px-8 md:px-10 xl:px-12">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 text-sm text-[#f1f3f3] transition-colors duration-200 hover:text-white"
                >
                  <ArrowLeft
                    aria-hidden="true"
                    size={16}
                    strokeWidth={1.75}
                    className="transition-transform duration-200 group-hover:-translate-x-[2px]"
                  />
                  <span>Back to homepage</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-6 pb-12 sm:pt-8 sm:pb-14 md:pt-10 md:pb-16 lg:pt-8 lg:pb-18">
          <div className="mx-auto mt-4 max-w-[50rem] sm:mt-5 md:mt-6 lg:mt-4">
            <h2 className="text-balance text-[1.45rem] font-semibold leading-[1.16] text-foreground sm:text-[1.6rem] md:text-[1.75rem]">
              Overview
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 md:grid-cols-4">
              {metadataItems.map((item) => (
                <div key={item.label}>
                  <p className="text-[0.95rem] font-medium text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1.5 max-w-[14rem] text-[15px] leading-6 text-foreground md:text-[16px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-[46rem] space-y-5 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              <p>
                Projekt Vita is a nonprofit organization working with long-term,
                locally rooted development projects through knowledge sharing
                and collaboration. This project explored how companies
                understood that work, and what made a partnership feel credible
                enough to take further.
              </p>

              <p>
                My role was to investigate that relationship and translate the
                research into a clearer direction. The work looked at where
                trust broke down, what both sides needed to understand earlier,
                and why that mattered for companies deciding whether a
                partnership felt credible enough to explore further. The project
                was done in school as part of Year 1 at Nackademin.
              </p>
            </div>

            <div className="mt-6 h-px w-full bg-[rgba(230,232,232,0.12)]" />
          </div>
        </section>

        <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 lg:pt-10 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-4 text-balance text-[1.45rem] font-semibold leading-[1.16] text-foreground sm:text-[1.6rem] md:text-[1.75rem]">
              Problem / Context
            </h2>

            <p className="mb-3 inline-flex rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-[14px] font-medium uppercase tracking-[0.12em] text-[rgba(167,176,176,0.82)]">
              Context
            </p>
            <p className="mb-5 max-w-[50rem] text-[16px] leading-[1.8] text-ink-soft sm:text-[17px] md:text-[18px]">
              Companies and nonprofit organizations both rely on trust when
              starting a partnership, but they often come in with different
              expectations, needs, and ways of communicating. For companies, the
              question is often whether the collaboration feels credible and
              relevant. For nonprofits, it is about being understood, supported,
              and taken seriously.
            </p>

            <p className="mb-4 mt-8 inline-flex rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-[14px] font-medium uppercase tracking-[0.12em] text-[rgba(167,176,176,0.82)]">
              Problem
            </p>
            <ul className="max-w-[50rem] list-disc space-y-2.5 pl-5 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
              {challengePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-22 lg:pb-18">
          <div className="max-w-[50rem] rounded-[0.9rem] border border-[rgba(43,52,52,0.88)] bg-[rgba(18,22,22,0.88)] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
            <p className="max-w-[42rem] text-[0.97rem] leading-7 text-ink-soft sm:text-[1rem] sm:leading-8 md:text-[1.0625rem]">
              Field research showed that trust often broke down early when
              expectations, needs, and value were not clearly understood. The
              concept responded by making the first steps of a partnership
              easier to follow and easier to explain from both sides.
            </p>

            <figure className="mt-5 md:mt-7">
              <div className="relative overflow-hidden rounded-[0.55rem] border border-[rgba(43,52,52,0.82)] bg-[#111616] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/projekt-vita-field.jpg"
                  alt="Field research visit showing the local context around Projekt Vita"
                  width={1600}
                  height={1066}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50rem"
                />
              </div>
              <figcaption className="mt-3 text-[0.9rem] leading-6 text-muted">
                Field research made early trust gaps easier to see in context.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="text-[14px] font-medium uppercase tracking-[0.12em] text-muted">
              Approach
            </h2>

            <div className="mt-8 space-y-8 md:mt-10 md:space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="max-w-[34rem] text-balance text-[1.2rem] font-semibold leading-[1.2] text-foreground sm:text-[1.35rem] md:text-[1.5rem]">
                    {section.title}
                  </h3>
                  <p className="mt-4 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-5 md:text-[1.0625rem]">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-22 lg:pb-18">
          <div className="max-w-[50rem]">
            <figure className="mt-2 md:mt-3">
              <div className="relative overflow-hidden rounded-[0.55rem] border border-[rgba(43,52,52,0.82)] bg-[#111616] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/projekt-vita-portrait.jpg"
                  alt="Research portrait used in the Projekt Vita case study"
                  width={1400}
                  height={1750}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50rem"
                />
              </div>
              <figcaption className="mt-3 text-[0.9rem] leading-6 text-muted">
                Research insights translated into clearer ways to frame the
                partnership.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-6 text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
              Outcome
            </h2>

            <p className="mt-6 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-8 md:text-[1.0625rem]">
              The project showed what helped trust form early in partnerships
              between companies and nonprofit organizations. It made it easier
              to see where uncertainty started, what both sides needed to
              understand sooner, and how credibility affected the willingness to
              move forward.
            </p>

            <ul className="mt-8 max-w-[44rem] space-y-4 text-[0.97rem] leading-[1.8] text-ink-soft sm:mt-9 sm:text-[1rem] sm:leading-8">
              {outcomePoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-[0.65rem] h-1 w-1 rounded-full bg-[#6FAF8F]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pt-8 pb-20 sm:pt-10 sm:pb-24 md:pb-28 lg:pb-32">
          <Link
            href="/flowscape"
            className="group block max-w-[50rem] border-t border-[#2b3434] pt-8 transition-colors duration-300 hover:border-[rgba(111,175,143,0.36)] focus-visible:border-[rgba(111,175,143,0.5)] focus-visible:outline-none"
          >
            <p className="text-[14px] font-medium uppercase tracking-[0.12em] text-muted">
              Next case study
            </p>
            <div className="mt-4 flex items-center justify-between gap-6">
              <h2 className="text-balance text-[1.55rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground transition-colors duration-300 group-hover:text-[#6FAF8F] group-focus-visible:text-[#6FAF8F] sm:text-[1.8rem] md:text-[2.1rem]">
                FlowScape
              </h2>
              <ArrowRight
                aria-hidden="true"
                size={22}
                strokeWidth={1.75}
                className="shrink-0 text-muted transition duration-300 group-hover:translate-x-1 group-hover:text-[#6FAF8F] group-focus-visible:translate-x-1 group-focus-visible:text-[#6FAF8F]"
              />
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
