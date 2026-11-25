import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { ReadingProgress } from "@/components/reading-progress";

export const metadata: Metadata = {
  title: "Flowscape | Marcus Wiman",
  description:
    "A UX case study focused on making workplace analytics easier to scan, understand, and act on.",
  openGraph: {
    title: "Flowscape | Marcus Wiman",
    description:
      "A UX case study focused on making workplace analytics easier to scan, understand, and act on.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowscape | Marcus Wiman",
    description:
      "A UX case study focused on making workplace analytics easier to scan, understand, and act on.",
  },
};

type OverviewItem =
  | {
      type: "text";
      label: string;
      value: string;
    }
  | {
      type: "tags";
      label: string;
      tags: string[];
    };

const overviewItems: OverviewItem[] = [
  { type: "text", label: "Role", value: "UX / Product Designer" },
  { type: "text", label: "Timeline", value: "6 months" },
  { type: "text", label: "Platform", value: "Web app / analytics dashboard" },
  {
    type: "tags",
    label: "Focus areas",
    tags: [
      "Analytics UX",
      "Dashboard design",
      "Information architecture",
      "Filters",
      "KPI cards",
      "Graphs",
      "Design system",
    ],
  },
  { type: "text", label: "Status", value: "MVP designed and implemented" },
];

const roleParagraphs = [
  "During my six-month UX internship, I worked on the dashboard layouts, filters, KPI cards, and design handoff for FlowAnalytics.",
  "My supervisor was Kristin Palmberg, UX/UI Designer at Flowscape. We reviewed iterations several times a week. Weekly product meetings covered scope and data logic with the product owner and analytics stakeholder. I also worked with the frontend developer on feasibility and handoff.",
];

const problemParagraphs = [
  "The previous Power BI-based experience had dense dashboards and short KPI labels. Loading could be slow, and users had little feedback about whether a filter was still being applied.",
  "Users preparing material for meetings also had to export whole dashboards when they only needed a particular chart. The redesign happened alongside a technical rebuild, so the work involved both interface changes and coordination with developers.",
];

const usersParagraphs = [
  "FlowAnalytics supports facility managers and workplace teams making decisions about office space. Their tasks range from preparing a report for a meeting to exploring occupancy and utilization over time.",
];

const researchMethods = [
  "Interviews and product walkthroughs",
  "Conversations with internal stakeholders",
  "Review of the existing dashboards and other analytics tools",
  "Design reviews with my UX supervisor",
];

const userObservations = [
  {
    title: "Keep the depth for experienced users",
    observation:
      "In an interview and walkthrough, a superuser showed how extensively he used the existing analytics features. I had been exploring ways to simplify the product; seeing his workflow made removing functionality a much less straightforward choice.",
    decision:
      "I kept the dashboard model and focused on the structure around the analysis, preserving the depth experienced users needed.",
  },
  {
    title: "Get from analysis to a meeting",
    observation:
      "Another user relied on the reports as evidence in meetings. She wanted a faster path from opening the product to analysing, exporting, and bringing the findings with her. She often returned to the same filter combinations.",
    decision:
      "That made filter visibility and export part of the reporting workflow. Saved filter combinations and a customisable dashboard were directions to explore further, rather than features I could present as delivered.",
  },
];

const researchArtifacts = [
  {
    title: "Personas",
    body: "Summarized two behavior patterns: users who needed quick reporting and users who needed deeper analysis.",
  },
  {
    title: "Journey map",
    body: "Mapped the facility manager workflow from opening a dashboard to filtering data, interpreting KPIs, exporting material, and preparing insights for meetings.",
  },
  {
    title: "Storyboard",
    body: "Helped frame the meeting-preparation scenario, where slow loading, unclear data states, and limited export created uncertainty.",
  },
];

const designedSections = [
  {
    title: "Dashboard layout",
    paragraphs: [
      "I iterated towards a shared structure across the dashboards: filters, key metrics, a summary, and charts. Users could switch between perspectives and dashboards without starting from a different layout each time.",
    ],
  },
  {
    title: "Quick and advanced filters",
    paragraphs: [
      "I kept five to six common filters visible and put the full set behind Advanced filters. An active-filter summary stays visible while scrolling.",
      "I also designed loading states for fetching data and applying filters. These show when the interface is still working on a request.",
    ],
  },
  {
    title: "KPI cards and targets",
    paragraphs: [
      "I added short explanations, targets, and trends to the KPI cards, usually limiting the overview to four metrics.",
      "I first explored progress bars for the targets. After stakeholder and customer input, I moved to gauges. We also chose Flowscape’s brand colour over a red–yellow–green status system. A checkmark indicates when a value meets its target.",
      "I included disabled states for metrics whose required data was missing.",
    ],
  },
  {
    title: "Tabs and navigation",
    paragraphs: [
      "I organised navigation around perspectives such as offices, rooms, and company-level analysis, with tabs for the dashboards within each perspective. I moved tabs below the heading and added icons to distinguish sections.",
    ],
  },
  {
    title: "Simulator inputs",
    paragraphs: [
      "The simulator previously used grouped input fields and technical labels. I designed separate cards with explanatory copy and sliders so users could adjust a value and explore the scenario.",
    ],
  },
  {
    title: "Shared components",
    paragraphs: [
      "I adapted Flowscape’s existing product language for the analytics MVP and documented reusable components for handoff.",
    ],
    bullets: [
      "KPI cards and filter patterns",
      "Buttons, loading states, and disabled states",
      "Colour, typography, spacing, and chart styling",
    ],
  },
  {
    title: "Export touchpoints",
    paragraphs: [
      "I designed export controls at both dashboard and chart level. Developers handled the export functionality and performance as part of the rebuild; my contribution was the interface and where those actions appeared.",
    ],
  },
];

const resultsParagraphs = [
  "I delivered designs for five dashboards, prototypes, a lightweight design system, and developer handoff material. The designs were implemented in the new analytics portal.",
  "I reviewed the design through repeated iterations. Users responded positively to the direction, including AI summaries and the idea of customisable dashboards, but much of what they saw used test data while backend routes for the graphs were still being built.",
  "That feedback supported the design direction. It did not establish that the finished reporting workflow was faster in practice; users had not yet tested the complete flow with live data.",
];

const learningParagraphs = [
  "The superuser changed my view of simplification. A feature I might have removed could be essential to someone doing detailed analysis. I had to improve the structure without discarding that depth.",
  "The reporting interview gave me a different reference point: how quickly someone could turn analysis into material for a meeting. Together, these users helped me judge the dashboard iterations against two different ways of working.",
];

const nextSteps = [
  "Test the complete analysis-to-export workflow with live data once the backend integration is ready.",
  "Explore saved filter combinations and customisable dashboards with users who repeatedly prepare the same reports.",
];

const caseStudySectionClass = "scroll-mt-24 py-14 sm:py-16 md:py-18 lg:py-20";

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-7 max-w-[50rem] md:mb-9">
      <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.12em] text-muted">
        {eyebrow}
      </p>
      <h2 className="text-balance text-[1.55rem] font-semibold leading-[1.12] text-foreground sm:text-[1.75rem] md:text-[2rem]">
        {title}
      </h2>
    </div>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="max-w-[46rem] space-y-5 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:text-[1.0625rem]">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 max-w-[44rem] space-y-2.5 text-[0.97rem] leading-[1.75] text-ink-soft sm:text-[1rem]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.7rem] h-1 w-1 shrink-0 rounded-full bg-[#6FAF8F]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FlowscapePage() {
  return (
    <main id="main-content" className="grain-overlay min-h-screen">
      <ReadingProgress />
      <div className="mx-auto flex min-h-screen max-w-[88rem] flex-col px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-14 xl:px-12">
        <SiteHeader compact />

        <section className="relative left-1/2 mb-0 w-screen -translate-x-1/2 overflow-hidden bg-[#050606]">
          <div className="relative mx-auto h-[clamp(24rem,56svh,36rem)] w-full max-w-[100rem] overflow-hidden sm:h-[clamp(26rem,58svh,38rem)] lg:h-[clamp(27rem,54svh,38rem)]">
            <Image
              src="/flowscape-hero.jpg"
              alt="Flowscape workplace interior hero image"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1600px) 100vw, 1600px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.9)_30%,rgba(0,0,0,0.7)_55%,rgba(0,0,0,0.3)_75%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-0 bg-black/40 sm:bg-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[clamp(5rem,12vw,16.25rem)] bg-[linear-gradient(to_right,#050606,rgba(5,6,6,0))]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[clamp(5rem,12vw,16.25rem)] bg-[linear-gradient(to_left,#050606,rgba(5,6,6,0))]" />

            <div className="absolute inset-0 z-10 flex items-center">
              <div className="mx-auto w-full max-w-[88rem] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 xl:px-12">
                <div className="max-w-[640px]">
                  <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.12em] text-[#d4dcdc]">
                    CASE STUDY
                  </p>
                  <h1 className="mb-4 text-balance text-[3.5rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#e6e8e8] sm:text-[4rem] md:text-[4.6rem]">
                    Flowscape
                  </h1>
                  <p className="max-w-[34rem] text-[17px] leading-[1.75] text-[#d9e0e0] md:text-[18px]">
                    Making workplace data easier to understand and act on
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 top-8 z-20 md:top-10">
              <div className="mx-auto max-w-[88rem] px-6 sm:px-8 lg:px-10 xl:px-12">
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

        <section
          id="overview"
          className="scroll-mt-24 pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-18 lg:pt-16 lg:pb-20"
        >
          <SectionHeading
            eyebrow="01 Overview"
            title="FlowAnalytics redesign"
          />

          <Paragraphs
            items={[
              "FlowAnalytics helps workplace teams understand how office space is used. During my UX internship at Flowscape, I redesigned parts of its analytics experience as the team rebuilt the product.",
              "My design work covered five dashboards and shared patterns for filters, KPI cards, and navigation. The designs were handed over to developers and implemented in the new portal.",
            ]}
          />

          <div className="mt-8 grid max-w-[70rem] gap-3.5 sm:grid-cols-2 md:mt-9 md:grid-cols-3 md:gap-4">
            {overviewItems.map((item) => (
              <div
                key={item.label}
                className="rounded-[0.75rem] border border-[rgba(43,52,52,0.9)] bg-[rgba(18,22,22,0.72)] px-4 py-4 shadow-[0_16px_34px_rgba(0,0,0,0.12)] sm:px-5 sm:py-5"
              >
                <p className="text-[0.82rem] font-medium uppercase tracking-[0.1em] text-muted">
                  {item.label}
                </p>
                {item.type === "tags" ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(111,175,143,0.24)] bg-[rgba(111,175,143,0.08)] px-2.5 py-1 text-[0.78rem] leading-none text-[#d4dcdc]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 max-w-[18rem] text-[15px] leading-6 text-foreground">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="role" className={caseStudySectionClass}>
          <SectionHeading eyebrow="02 Role" title="My role in the team" />
          <Paragraphs items={roleParagraphs} />
        </section>

        <section id="problem" className={caseStudySectionClass}>
          <SectionHeading
            eyebrow="03 Problem"
            title="The previous experience"
          />
          <Paragraphs items={problemParagraphs} />

          <figure className="mt-9 max-w-[56rem] md:mt-10">
            <div className="relative overflow-hidden rounded-[0.55rem] border border-[rgba(43,52,52,0.85)] bg-[#111616] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <Image
                src="/images/flowscape-dashboard.png"
                alt="Original FlowAnalytics dashboard before the redesign"
                width={1440}
                height={900}
                className="h-auto w-full"
                sizes="(max-width: 1024px) calc(100vw - 2rem), 56rem"
              />
            </div>
            <figcaption className="mt-3 text-[0.9rem] leading-6 text-muted">
              The previous dashboard experience contained useful data, but the
              density and hierarchy made it harder to scan.
            </figcaption>
          </figure>
        </section>

        <section id="users" className={caseStudySectionClass}>
          <SectionHeading eyebrow="04 Users" title="Who uses FlowAnalytics" />
          <Paragraphs items={usersParagraphs} />
        </section>

        <section id="process" className={caseStudySectionClass}>
          <SectionHeading eyebrow="05 Process" title="Research and scope" />

          <Paragraphs
            items={[
              "Workplace analytics was new to me. I began by learning how the product was used, reviewing the existing dashboards, and discussing the domain with users and the product team.",
            ]}
          />

          <div className="mt-8 max-w-[50rem] md:mt-9">
            <h3 className="text-[1.15rem] font-semibold leading-[1.2] text-foreground md:text-[1.3rem]">
              Research included
            </h3>
            <BulletList items={researchMethods} />
          </div>

          <div className="mt-9 max-w-[50rem] space-y-8">
            <h3 className="text-xl font-medium text-foreground">
              Two users who shaped the direction
            </h3>
            {userObservations.map((item) => (
              <section
                key={item.title}
                className="border-l-2 border-[var(--accent-green)] pl-5 sm:pl-6"
              >
                <h4 className="text-lg font-medium text-foreground">
                  {item.title}
                </h4>
                <p className="mt-3 text-base leading-7 text-ink-soft">
                  {item.observation}
                </p>
                <p className="mt-3 text-base leading-7 text-ink-soft">
                  {item.decision}
                </p>
              </section>
            ))}
          </div>

          <figure className="mt-8 max-w-[50rem] md:mt-10">
            <div className="relative aspect-[4/3] max-h-[28rem] overflow-hidden rounded-[0.7rem] border border-[rgba(43,52,52,0.9)] bg-[#111616] shadow-[0_20px_48px_rgba(0,0,0,0.22)] sm:aspect-[16/10]">
              <Image
                src="/images/flowscape-pattern-mapping.png"
                alt="Anonymized research board showing pattern mapping for analytics dashboards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) calc(100vw - 2rem), 50rem"
              />
            </div>
            <figcaption className="mt-3 max-w-[42rem] text-[0.9rem] leading-6 text-muted">
              I mapped patterns from other analytics tools to understand how
              they handled KPI cards, filters, navigation, and dashboard
              hierarchy.
            </figcaption>
          </figure>

          <div className="mt-10 max-w-[60rem] md:mt-11">
            <div className="max-w-[46rem]">
              <h3 className="text-[1.15rem] font-semibold leading-[1.2] text-foreground md:text-[1.3rem]">
                Research artifacts
              </h3>
              <p className="mt-4 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8">
                I used the following artifacts to discuss workflows and needs
                with the team.
              </p>
            </div>

            <div className="mt-6 grid gap-3.5 md:grid-cols-3 md:gap-4">
              {researchArtifacts.map((artifact) => (
                <div
                  key={artifact.title}
                  className="rounded-[0.75rem] border border-[rgba(43,52,52,0.9)] bg-[rgba(18,22,22,0.72)] px-4 py-4 shadow-[0_16px_34px_rgba(0,0,0,0.12)] sm:px-5 sm:py-5"
                >
                  <h4 className="text-[1rem] font-semibold leading-[1.25] text-foreground">
                    {artifact.title}
                  </h4>
                  <p className="mt-3 text-[0.92rem] leading-6 text-ink-soft">
                    {artifact.body}
                  </p>
                </div>
              ))}
            </div>

            <figure className="mt-7 max-w-[56rem] md:mt-8">
              <div className="relative overflow-hidden rounded-[0.7rem] border border-[rgba(43,52,52,0.9)] bg-[#111616] shadow-[0_20px_48px_rgba(0,0,0,0.22)]">
                <Image
                  src="/images/flowscape-user-journey.png"
                  alt="User journey map showing a facility manager workflow for office analytics, filtering, exporting, reporting, and presenting insights"
                  width={7958}
                  height={3932}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) calc(100vw - 2rem), 56rem"
                />
              </div>
              <figcaption className="mt-3 max-w-[42rem] text-[0.9rem] leading-6 text-muted">
                I mapped the facility manager workflow to understand where slow
                loading, unclear metrics, repeated filtering, and limited export
                options created friction.
              </figcaption>
            </figure>
          </div>

          <div className="mt-11 max-w-[50rem] rounded-[0.9rem] border border-[rgba(43,52,52,0.92)] bg-[rgba(18,22,22,0.86)] px-6 py-8 sm:px-8 sm:py-10 md:mt-12">
            <h3 className="text-[1.2rem] font-semibold leading-[1.2] text-foreground md:text-[1.45rem]">
              Design direction
            </h3>
            <p className="mt-5 max-w-[44rem] text-base leading-7 text-ink-soft">
              We kept the dashboard model. The work then centred on a shared
              layout, KPI cards, filters, and navigation within the MVP scope.
              KPI cards went through many iterations as I worked towards a
              structure that could be used across dashboards.
            </p>
          </div>
        </section>

        <section id="designed" className={caseStudySectionClass}>
          <SectionHeading
            eyebrow="06 What I designed"
            title="Design decisions"
          />

          <div className="space-y-12 md:space-y-14">
            {designedSections.map((section, index) => (
              <section
                key={section.title}
                className="max-w-[50rem] border-t border-[rgba(255,255,255,0.08)] pt-7 md:pt-8"
              >
                <p className="text-[14px] font-medium uppercase tracking-[0.12em] text-[rgba(167,176,176,0.78)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 max-w-[36rem] text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
                  {section.title}
                </h3>

                <div className="mt-4 max-w-[46rem] space-y-5 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-5 md:text-[1.0625rem]">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <div key={paragraph}>
                      <p>{paragraph}</p>

                      {section.title === "KPI cards and targets" &&
                      paragraphIndex === 1 ? (
                        <figure className="mt-7 max-w-[46rem] md:mt-8">
                          <div className="relative overflow-hidden rounded-[0.55rem] border border-[rgba(43,52,52,0.92)] bg-[#111616] shadow-[0_20px_48px_rgba(0,0,0,0.22)]">
                            <Image
                              src="/images/flowscape-kpi-evolution.png"
                              alt="Anonymized KPI design exploration showing progress bars evolving into gauge-based KPI cards"
                              width={1672}
                              height={941}
                              className="h-auto w-full"
                              sizes="(max-width: 1024px) calc(100vw - 2rem), 46rem"
                            />
                          </div>
                          <figcaption className="mt-3 max-w-[38rem] text-[0.9rem] leading-6 text-muted">
                            KPI explorations: progress bars, gauges, targets,
                            and status indicators.
                          </figcaption>
                        </figure>
                      ) : null}
                    </div>
                  ))}
                </div>

                {section.bullets ? (
                  <BulletList items={section.bullets} />
                ) : null}

                {section.title === "Dashboard layout" ? (
                  <figure className="mt-7 max-w-[47rem] md:mt-8">
                    <div className="relative overflow-hidden rounded-[0.55rem] border border-[rgba(43,52,52,0.92)] shadow-[0_24px_54px_rgba(0,0,0,0.24)]">
                      <Image
                        src="/dashboard.png?v=2"
                        alt="Flowscape dashboard overview"
                        width={1536}
                        height={1024}
                        className="h-auto w-full"
                        sizes="(max-width: 1024px) calc(100vw - 2rem), 47rem"
                      />
                    </div>
                    <figcaption className="mt-4 max-w-[38rem] text-[0.9rem] leading-6 text-muted">
                      Wireframe illustrating the dashboard layout proposed for
                      the MVP.
                    </figcaption>
                  </figure>
                ) : null}

                {section.title === "Shared components" ? (
                  <figure className="mt-7 max-w-[47rem] md:mt-8">
                    <div className="relative overflow-hidden rounded-[0.85rem] border border-white/20 shadow-[0_20px_48px_rgba(0,0,0,0.18)]">
                      <Image
                        src="/images/flowscape-desingsystem.png"
                        alt="Flowscape design system overview"
                        width={1536}
                        height={1024}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 1024px) calc(100vw - 2rem), 47rem"
                      />
                    </div>
                  </figure>
                ) : null}
              </section>
            ))}
          </div>
        </section>

        <section id="results" className={caseStudySectionClass}>
          <SectionHeading
            eyebrow="07 Results and learnings"
            title="Delivery and user feedback"
          />
          <Paragraphs items={resultsParagraphs} />

          <aside
            aria-labelledby="public-demo-heading"
            className="mt-8 max-w-[50rem] border-l-2 border-[var(--accent-green)] pl-5 sm:pl-6"
          >
            <h3
              id="public-demo-heading"
              className="text-xl font-medium text-foreground"
            >
              The implemented product
            </h3>
            <p className="mt-3 text-base leading-7 text-ink-soft">
              Flowscape presents FlowAnalytics on its official product page,
              including an instructional video. These public materials offer a
              view of the product alongside the design work in this case study.
            </p>
            <a
              href="https://flowscapesolutions.com/solutions/workplace-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex min-h-11 w-fit items-center text-base font-medium text-[var(--accent-green)] underline underline-offset-4"
            >
              Explore FlowAnalytics on Flowscape&apos;s website
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://www.linkedin.com/posts/flowscape-ab_f%C3%A5-koll-p%C3%A5-vad-som-h%C3%A4nder-i-era-lokaler-med-ugcPost-7510661864947781635-h0Xw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center text-base font-medium text-[var(--accent-green)] underline underline-offset-4"
            >
              Watch Flowscape&apos;s product demonstration
              <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
            </a>
          </aside>

          <div className="mt-11 max-w-[50rem] md:mt-12">
            <h3 className="mb-6 text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
              What I learned
            </h3>
            <Paragraphs items={learningParagraphs} />
          </div>

          <div className="mt-9 max-w-[50rem] rounded-[0.9rem] border border-[rgba(43,52,52,0.92)] bg-[rgba(18,22,22,0.86)] px-6 py-8 sm:px-8 sm:py-9 md:mt-10">
            <h3 className="text-[1.2rem] font-semibold leading-[1.2] text-foreground md:text-[1.45rem]">
              What I would do next
            </h3>
            <BulletList items={nextSteps} />
          </div>
        </section>

        <section className="pt-4 pb-20 sm:pt-6 sm:pb-24 md:pt-8 md:pb-28 lg:pb-32">
          <Link
            href="/sxc"
            className="group block max-w-[50rem] border-t border-[#2b3434] pt-8 transition-colors duration-300 hover:border-[rgba(111,175,143,0.36)] focus-visible:border-[rgba(111,175,143,0.5)] focus-visible:outline-none"
          >
            <p className="text-[14px] font-medium uppercase tracking-[0.12em] text-muted">
              Next case study
            </p>
            <div className="mt-4 flex items-center justify-between gap-6">
              <h2 className="text-balance text-[1.55rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground transition-colors duration-300 group-hover:text-[#6FAF8F] group-focus-visible:text-[#6FAF8F] sm:text-[1.8rem] md:text-[2.1rem]">
                Stockholm Xperience Conference
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
