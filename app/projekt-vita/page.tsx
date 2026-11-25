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
  { label: "Discipline", value: "UX Research" },
  { label: "Timeline", value: "12 Weeks" },
  { label: "Research", value: "Interviews + synthesis" },
  { label: "Team", value: "4 UX Designers" },
];

const researchQuestions = [
  "What did companies need to know before considering a partnership?",
  "What kinds of support were they willing to contribute?",
  "How could Projekt Vita explain its work and partnership needs?",
];

const researchThemes = [
  {
    title: "Support through goods and money",
    text: "The research considered support through goods as well as money. IKEA was one of the interview contacts. A question for the partnership was how a company’s potential contribution could meet the organisation’s needs.",
  },
  {
    title: "Explaining the partnership",
    text: "The material also concerned what companies understood about the organisation’s work and what each side expected to contribute.",
  },
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
                    Exploratory UX research into partnerships between companies
                    and a nonprofit organisation.
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
                Projekt Vita asked us to investigate what would help companies
                feel confident about supporting a nonprofit organisation,
                financially or through other contributions. This was a group
                project during my first year at Nackademin.
              </p>

              <p>
                Our interview contacts included an IKEA representative, the
                CEO of APiC (Africa Power &amp; infra Consultant), and project
                stakeholders. APiC works in the energy sector in Southern Africa.
              </p>
            </div>

            <div className="mt-6 h-px w-full bg-[rgba(230,232,232,0.12)]" />
          </div>
        </section>

        <section className="py-10 sm:py-12">
          <div className="max-w-[50rem]">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-foreground">
              My contribution
            </h2>
            <p className="mt-4 max-w-[46rem] text-base leading-7 text-ink-soft">
              I recruited an interview participant, conducted the interview, and
              transcribed it. We then worked together as a group to organise
              observations with post-it notes and discuss what the material
              meant.
            </p>
          </div>
        </section>

        <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 lg:pt-10 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-4 text-balance text-[1.45rem] font-semibold leading-[1.16] text-foreground sm:text-[1.6rem] md:text-[1.75rem]">
              Research questions
            </h2>

            <ul className="max-w-[50rem] list-disc space-y-2.5 pl-5 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
              {researchQuestions.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-22 lg:pb-18">
          <div className="max-w-[50rem] rounded-[0.9rem] border border-[rgba(43,52,52,0.88)] bg-[rgba(18,22,22,0.88)] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
            <figure className="mt-5 md:mt-7">
              <div className="relative overflow-hidden rounded-[0.55rem] border border-[rgba(43,52,52,0.82)] bg-[#111616] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/projekt-vita-field.jpg"
                  alt="Contextual image accompanying the Projekt Vita case study"
                  width={1600}
                  height={1066}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50rem"
                />
              </div>
              <figcaption className="mt-3 text-[0.9rem] leading-6 text-muted">
                Projekt Vita · Project context
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="text-[14px] font-medium uppercase tracking-[0.12em] text-muted">
              Themes in the research
            </h2>

            <div className="mt-8 space-y-8 md:mt-10 md:space-y-10">
              {researchThemes.map((section) => (
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
                  alt="Portrait accompanying the Projekt Vita case study"
                  width={1400}
                  height={1750}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50rem"
                />
              </div>
              <figcaption className="mt-3 text-[0.9rem] leading-6 text-muted">
                Projekt Vita · Project image
              </figcaption>
            </figure>
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
                Flowscape
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
