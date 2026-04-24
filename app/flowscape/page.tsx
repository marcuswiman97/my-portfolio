import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Flowscape | Marcus Wiman",
  description:
    "A UX case study focused on restructuring workplace exploration, clarifying filters, and improving visual clarity in Flowscape.",
  openGraph: {
    title: "Flowscape | Marcus Wiman",
    description:
      "A UX case study focused on restructuring workplace exploration, clarifying filters, and improving visual clarity in Flowscape.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowscape | Marcus Wiman",
    description:
      "A UX case study focused on restructuring workplace exploration, clarifying filters, and improving visual clarity in Flowscape.",
  },
};

const metadataItems = [
  { label: "Role", value: "Sole UX Designer + Design System" },
  { label: "Timeline", value: "Dec 2025 - May 2026 (6 months)" },
  { label: "Status", value: "Released MVP" },
  { label: "Platform", value: "FlowAnalytics / Admin Portal" },
];

const problemPoints = [
  "People had to hunt across charts to find a single answer.",
  "Navigation and categories did not match how users think about office data.",
  "Filters felt unpredictable and easy to lose track of once applied.",
  "Metrics lacked context, so it was unclear whether results were good or bad.",
];

const insights = [
  {
    label: "Insight 01",
    title: "Overview came before detail",
    text: "Users wanted a quick overview and clear categories before diving into charts. Without that, they hesitated or defaulted to familiar dashboards.",
  },
  {
    label: "Insight 02",
    title: "Filter state had to be explicit",
    text: "People changed filters often but could not see what was active or what changed, which led to re-checking and second-guessing.",
  },
  {
    label: "Insight 03",
    title: "High density reduced confidence",
    text: "Crowded screens made it harder to spot what mattered and lowered confidence in the numbers.",
  },
];

const processSections = [
  {
    title: "Restructuring the experience",
    image: "/images/flowscape-structure.png",
    alt: "Early layout exploration for restructuring the FlowAnalytics dashboard",
    caption: "Layout studies focused on a clearer path from overview to detail.",
    text: "I reorganized and designed 6 dashboards for the MVP in a fast-paced product environment, aligning the experience with how users think about workplace data. Most users relied on just 1-2 dashboards, while many others were unused, unclear, or not trusted, so I restructured the navigation into seven question-led perspectives: Portfolio, Office, Rooms, Department, User, Climate, and Custom dashboards. This made it easier to orient quickly and compare scenarios without scanning a long tab list. I also introduced AI insights and the Custom dashboards concept, placing insights between filters and KPIs so actions surfaced without hiding the data.",
  },
  {
    title: "Clarifying filter interactions",
    image: "/images/flowscape-filters.png",
    alt: "Filter refinement concept showing quick filters, advanced filters, and active filter states",
    caption:
      "Quick filters, advanced filters, and a sticky active-filter row made the state easier to follow.",
    text: "Filters were standardized into one consistent pattern with a clear Apply action. Active filters stayed visible while scrolling, making it easier to understand what data was being shown. Loading feedback used skeleton states to make updates feel faster and more predictable when data changed.",
  },
  {
    title: "Improving data visualization",
    image: "/images/flowscape-detail-kpi.png",
    alt: "Redesigned KPI cards with clearer hierarchy in FlowAnalytics",
    caption: "KPI cards brought the primary value forward with clearer context.",
    text: "KPI cards were rebuilt to highlight the main value first, with tooltips, targets, trend indicators, and short question prompts to clarify what each metric represents and what \"good\" looks like. Targets were configurable per dashboard through a settings page, based on input from ongoing meetings with customers. For cases where data was missing, I introduced inactive KPI states with a clear call-to-action, guiding users to the settings page to configure the required data. Charts were also simplified with a calmer, more consistent visual style so trends were easier to scan and compare without adding extra cognitive load.",
  },
];

const outcomePoints = [
  "Key metrics and space usage became easier to scan at a glance.",
  "Filter states remained visible, reducing re-checking and uncertainty.",
  "KPIs provided clearer context through targets, trends, and prompts.",
];

const showImages = false;

export default function FlowscapePage() {
  return (
    <main id="main-content" className="grain-overlay min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-14">
        <SiteHeader compact />

        <section className="relative left-1/2 mb-6 w-screen -translate-x-1/2 overflow-hidden sm:mb-8 md:mb-10 lg:mb-12">
          <div className="relative h-[68vh] min-h-[460px] overflow-hidden sm:h-[70vh] sm:min-h-[500px]">
            <Image
              src="/images/flowscape-hero.jpg"
              alt="Flowscape workplace interior hero image"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.52)_54%,rgba(0,0,0,0.2)_76%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0)_48%)]" />

            <div className="absolute inset-0 z-10 flex items-center">
              <div className="w-full px-6 py-16 sm:px-8 sm:py-20">
                <div className="max-w-[600px]">
                  <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.14em] text-[#d4dcdc]">
                    CASE STUDY
                  </p>
                  <h1 className="mb-4 text-balance text-[64px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#e6e8e8]">
                    Flowscape
                  </h1>
                  <p className="max-w-[520px] text-[17px] leading-[1.75] text-[#d9e0e0]">
                    A UX case study about designing a new analytics experience
                    for workplace data in FlowAnalytics, supported by a shared
                    design system, turning fragmented dashboards into a
                    structured and actionable product.
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
                  <p className="text-[14px] font-medium uppercase tracking-[0.14em] text-[rgba(167,176,176,0.8)]">
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
                Flowscape&apos;s admin portal is where facility teams manage
                offices, from spaces and assets to sensors, devices, files,
                and integrations. FlowAnalytics is the analytics area inside
                it, with dashboards that surface workplace usage, pain points,
                and opportunities.
              </p>

              <p>
                Previously, analytics relied on a large set of fragmented
                dashboards, many of which were rarely used. Most users only
                interacted with one or two dashboards and struggled to
                understand what the data meant or what to act on. Even
                internal team members found parts of the dashboards difficult
                to interpret. The structure did not reflect how users think
                about workplace data, which made navigation, discovery, and
                interpretation difficult.
              </p>

              <p>
                As the sole UX designer, I designed a new analytics experience
                and established a shared design system to support it. I
                restructured the information architecture, consolidated
                underused dashboards, and rewrote labels and descriptions to
                make metrics easier to understand.
              </p>

              <p>
                The work shifted the product from a fragmented and low-trust
                dashboard experience to a structured, user-centered system
                aligned with how users think about workplace data. The focus
                was helping facility and workplace managers quickly understand
                space usage, interpret metrics with confidence, and make
                informed decisions without needing to dig through multiple
                dashboards.
              </p>
            </div>

            <div className="mt-6 h-px w-full bg-[rgba(230,232,232,0.12)]" />
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-4 text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
              Problem
            </h2>

            <p className="mb-5 max-w-[50rem] text-[16px] leading-[1.8] text-foreground sm:text-[17px] md:text-[18px]">
              Users could access a large amount of workplace data, but
              struggled to quickly understand what mattered or what to do
              next.
            </p>

            <p className="mb-5 max-w-[50rem] text-[16px] leading-[1.8] text-foreground sm:text-[17px] md:text-[18px]">
              As a result, decisions were often delayed or based on incomplete
              understanding.
            </p>

            <ul className="max-w-[50rem] list-disc space-y-2.5 pl-5 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
              {problemPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="mt-8 max-w-[50rem]">
              <p className="text-[14px] font-medium uppercase tracking-[0.14em] text-[rgba(167,176,176,0.86)]">
                Users
              </p>

              <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                The primary users were facility and workplace managers
                responsible for monitoring office performance and making
                day-to-day decisions.
              </p>

              <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                While roles varied, their needs were similar:
              </p>

              <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                <li>
                  Quickly understanding space usage and key metrics
                </li>
                <li>
                  Navigating dashboards efficiently
                </li>
                <li>
                  Trusting the data to support decisions
                </li>
              </ul>

              <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                Two usage patterns emerged:
              </p>

              <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                <li>Some users focused on a single dashboard for quick answers</li>
                <li>
                  Others explored multiple dashboards for deeper analysis
                </li>
              </ul>
            </div>

            <figure className="mt-10 max-w-[900px] md:mt-12">
              <div className="relative overflow-hidden rounded-[0.5rem] border border-[rgba(43,52,52,0.85)] bg-[#111616] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/flowscape-dashboard.png"
                  alt="Original FlowAnalytics dashboard before the redesign"
                  width={1440}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-[0.9rem] leading-6 text-muted">
                Before the redesign, the dashboard felt dense and harder to
                scan.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="text-[14px] font-medium uppercase tracking-[0.14em] text-[rgba(167,176,176,0.82)]">
              User Insights
            </h2>

            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.7] text-ink-soft md:text-[16px]">
              Interviews and workflow reviews of the previous Power BI setup
              showed where people slowed down, lost confidence, or missed
              important signals.
            </p>

            <p className="mt-4 max-w-[640px] text-[14px] leading-[1.7] text-muted md:text-[15px]">
              Most users relied on just 1-2 dashboards, while others explored
              multiple views, revealing two distinct usage patterns.
            </p>

            <p className="mt-4 max-w-[640px] text-[14px] leading-[1.7] text-muted md:text-[15px]">
              The patterns below shaped the direction of the new analytics
              experience.
            </p>

            <div className="mt-8 space-y-8 md:mt-10 md:space-y-10">
              {insights.map((insight) => (
                <div key={insight.title} className="max-w-[42rem]">
                  <p className="text-[14px] font-medium uppercase tracking-[0.14em] text-[rgba(167,176,176,0.78)]">
                    {insight.label}
                  </p>
                  <h3 className="mt-3 text-balance text-[1.2rem] font-semibold leading-[1.2] text-foreground sm:text-[1.35rem] md:text-[1.5rem]">
                    {insight.title}
                  </h3>
                  <p className="mt-4 max-w-[40rem] text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                    {insight.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="text-[14px] font-medium uppercase tracking-[0.14em] text-[rgba(167,176,176,0.82)]">
              Process / Improvements
            </h2>
          </div>

          <div className="mt-8 space-y-12 sm:space-y-14 md:mt-10 md:space-y-16">
            {processSections.map((section) => (
              <div key={section.title} className="max-w-[50rem]">
                <h3 className="max-w-[34rem] text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
                  {section.title}
                </h3>

                <p className="mt-5 max-w-[65ch] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-6 md:text-[1.0625rem]">
                  {section.text}
                </p>

                {showImages && (
                  <figure
                    className={
                      section.title === "Restructuring the experience"
                        ? "mt-12 md:mt-14"
                        : "mt-9 md:mt-10"
                    }
                  >
                    <div
                      className={
                        section.title === "Restructuring the experience"
                          ? "relative max-w-[1100px] overflow-hidden rounded-[0.55rem] border border-[rgba(43,52,52,0.92)] shadow-[0_24px_54px_rgba(0,0,0,0.24)]"
                          : section.title === "Clarifying filter interactions"
                            ? "relative max-w-[900px] overflow-hidden rounded-[0.5rem] border border-[rgba(43,52,52,0.88)] shadow-[0_20px_44px_rgba(0,0,0,0.2)]"
                            : section.title === "Improving data visualization"
                              ? "relative max-w-[980px] overflow-hidden rounded-[0.52rem] border border-[rgba(43,52,52,0.86)] shadow-[0_22px_48px_rgba(0,0,0,0.2)]"
                              : "relative overflow-hidden rounded-[0.4rem]"
                      }
                    >
                      <Image
                        src={section.image}
                        alt={section.alt}
                        width={
                          section.title === "Restructuring the experience"
                            ? 1600
                            : section.title === "Clarifying filter interactions"
                              ? 1400
                              : section.title === "Improving data visualization"
                                ? 1500
                                : 1200
                        }
                        height={
                          section.title === "Restructuring the experience"
                            ? 980
                            : section.title === "Clarifying filter interactions"
                              ? 920
                              : section.title === "Improving data visualization"
                                ? 980
                                : 675
                        }
                        className="h-auto w-full"
                        sizes={
                          section.title === "Restructuring the experience"
                            ? "(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 4rem), 1100px"
                            : section.title === "Clarifying filter interactions"
                              ? "(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 4rem), 900px"
                              : section.title === "Improving data visualization"
                                ? "(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 4rem), 980px"
                                : "(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 4rem), 50rem"
                        }
                      />
                    </div>
                    <figcaption className="mt-4 max-w-[38rem] text-[0.9rem] leading-6 text-muted">
                      {section.caption}
                    </figcaption>
                  </figure>
                )}

                {showImages &&
                section.title === "Improving data visualization" ? (
                  <figure className="mt-4 md:mt-5">
                    <div className="relative max-w-[860px] overflow-hidden rounded-[0.5rem] border border-[rgba(43,52,52,0.84)] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                      <Image
                        src="/images/flowscape-detail-chart.jpg"
                        alt="Redesigned FlowAnalytics charts using a monochrome palette for clearer trend reading"
                        width={1400}
                        height={920}
                        className="h-auto w-full"
                        sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 4rem), 860px"
                      />
                    </div>
                    <figcaption className="mt-3 max-w-[48rem] text-[0.9rem] leading-6 text-muted">
                      A monochrome palette, shaped by the brand values, made
                      charts feel calmer and easier to separate.
                    </figcaption>
                  </figure>
                ) : showImages &&
                  section.title === "Clarifying filter interactions" ? (
                  <figure className="mt-4 md:mt-5">
                    <div className="relative max-w-[520px] overflow-hidden rounded-[0.5rem] border border-[rgba(43,52,52,0.84)] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                      <Image
                        src="/images/office-floor-zone-filter.png"
                        alt="Office, floor, and zone filter controls with active state"
                        width={1400}
                        height={900}
                        className="h-auto w-full"
                        sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 4rem), 520px"
                      />
                    </div>
                    <figcaption className="mt-3 max-w-[36rem] text-[0.9rem] leading-6 text-muted">
                      Example of the dropdown filter pattern with active
                      selections.
                    </figcaption>
                  </figure>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-6 text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
              Outcome
            </h2>

            <p className="mt-8 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              The MVP made the analytics experience easier to scan,
              understand, and act on. Users could find key metrics faster,
              understand what a number meant in context, and follow filter
              changes without second-guessing. The restructuring of dashboards
              and navigation supported quick decisions first, with clearer
              paths into deeper analysis when needed.
            </p>

            <p className="mt-8 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              Initial feedback from user testing and internal validation
              showed improved clarity and confidence when interpreting the
              data, even with limited exposure to the full set of dashboards.
            </p>

            <p className="mt-8 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              Saved views and custom dashboards are planned next, but are not
              part of the current release.
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
