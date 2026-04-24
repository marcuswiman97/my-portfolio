import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

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
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-14">
        <SiteHeader compact />

        <section className="relative left-1/2 mb-6 w-screen -translate-x-1/2 overflow-hidden sm:mb-8 md:mb-10 lg:mb-12">
          <div className="relative h-[68vh] min-h-[460px] overflow-hidden sm:h-[70vh] sm:min-h-[500px]">
            <Image
              src="/images/projekt-vita-hero.jpg"
              alt="Projekt Vita hero image"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.52)_54%,rgba(0,0,0,0.2)_76%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0)_48%)]" />

            <div className="absolute inset-0 z-10 flex items-end">
              <div className="w-full px-6 pb-12 pt-16 sm:px-8 sm:pb-14 sm:pt-20 md:px-10 md:pb-18">
                <div className="max-w-[44rem]">
                  <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.14em] text-[#d4dcdc]">
                    CASE STUDY
                  </p>
                  <h1 className="mb-4 text-balance text-[2.9rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#e6e8e8] sm:text-[3.8rem] md:text-[4.75rem] lg:text-[5.4rem]">
                    Projekt Vita
                  </h1>
                  <p className="max-w-[34rem] text-[16px] leading-[1.75] text-[#d9e0e0] sm:text-[17px] md:max-w-[36rem] md:text-[18px]">
                    A UX research project about trust, communication, and early
                    collaboration around nonprofit partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute left-8 top-8 z-20 md:left-10 md:top-10">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 text-sm text-[#f1f3f3] transition-colors duration-200 hover:text-white"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-[2px]">
                  ←
                </span>
                <span>Back to homepage</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="mx-auto mt-10 max-w-[50rem] sm:mt-12 md:mt-14">
            <h2 className="text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
              Overview
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 md:grid-cols-4">
              {metadataItems.map((item) => (
                <div key={item.label}>
                  <p className="text-[14px] font-medium uppercase tracking-[0.14em] text-[rgba(167,176,176,0.72)]">
                    {item.label}
                  </p>
                  <p className="mt-1.5 max-w-[14rem] text-[15px] leading-6 text-foreground md:text-[16px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-[50rem] space-y-5 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              <p>
                Projekt Vita is a nonprofit organization working with
                long-term, locally rooted development projects through
                knowledge sharing and collaboration. This project explored how
                companies understood that work, and what made a partnership
                feel credible enough to take further.
              </p>

              <p>
                My role was to investigate that relationship and translate the
                research into a clearer direction. The work looked at where
                trust broke down, what both sides needed to understand earlier,
                and why that mattered for companies deciding whether a
                partnership felt credible enough to explore further. The
                project was done in school as part of Year 1 at Nackademin.
              </p>
            </div>

            <div className="mt-6 h-px w-full bg-[rgba(230,232,232,0.12)]" />
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-4 text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
              Problem / Context
            </h2>

            <p className="mb-3 inline-flex rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-[14px] font-medium uppercase tracking-[0.14em] text-[rgba(167,176,176,0.82)]">
              Context
            </p>
            <p className="mb-5 max-w-[50rem] text-[16px] leading-[1.8] text-ink-soft sm:text-[17px] md:text-[18px]">
              Companies and nonprofit organizations both rely on trust when
              starting a partnership, but they often come in with different
              expectations, needs, and ways of communicating. For companies,
              the question is often whether the collaboration feels credible
              and relevant. For nonprofits, it is about being understood,
              supported, and taken seriously.
            </p>

            <p className="mb-4 mt-8 inline-flex rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-[14px] font-medium uppercase tracking-[0.14em] text-[rgba(167,176,176,0.82)]">
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
            <h2 className="text-[14px] font-medium uppercase tracking-[0.14em] text-muted">
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
              understand sooner, and how credibility affected the willingness
              to move forward.
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
      </div>
    </main>
  );
}
