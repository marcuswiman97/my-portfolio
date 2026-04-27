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
    caption:
      "Layout studies focused on a clearer path from overview to detail.",
    text: `I reorganized and designed 6 dashboards for the MVP, representing roughly half of the product, aligning the experience with how users think about workplace data. I worked closely with stakeholders, including the company founder, a frontend developer, and a backend analytics specialist, to ensure alignment between design, data, and implementation.`,
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
    caption:
      "KPI cards brought the primary value forward with clearer context.",
    text: 'KPI cards were rebuilt to highlight the main value first, with tooltips, targets, trend indicators, and short question prompts to clarify what each metric represents and what "good" looks like. Targets were configurable per dashboard through a settings page, based on input from ongoing meetings with customers. For cases where data was missing, I introduced inactive KPI states with a clear call-to-action, guiding users to the settings page to configure the required data. Charts were also simplified with a calmer, more consistent visual style so trends were easier to scan and compare without adding extra cognitive load.',
  },
];

const outcomePoints = [
  "Key metrics and space usage became easier to scan",
  "Filter states remained visible, reducing uncertainty",
  "KPIs provided clearer context through trends and targets",
];

const showImages = false;

export default function FlowscapePage() {
  return (
    <main id="main-content" className="grain-overlay min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-14">
        <SiteHeader compact />

        <section className="relative left-1/2 mb-0 w-screen -translate-x-1/2 overflow-hidden">
          <div className="relative h-[68vh] min-h-[460px] overflow-hidden sm:h-[70vh] sm:min-h-[500px] lg:h-[64vh] lg:min-h-[470px]">
            <Image
              src="/flowscape-hero.jpg"
              alt="Flowscape workplace interior hero image"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.9)_30%,rgba(0,0,0,0.7)_55%,rgba(0,0,0,0.3)_75%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-0 bg-black/40 sm:bg-transparent" />

            <div className="absolute inset-0 z-10 flex items-center">
              <div className="w-full px-6 py-16 sm:px-8 sm:py-20">
                <div className="max-w-[600px]">
                  <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.12em] text-[#d4dcdc]">
                    CASE STUDY
                  </p>
                  <h1 className="mb-4 text-balance text-[64px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#e6e8e8]">
                    Flowscape
                  </h1>
                  <p className="max-w-[520px] text-[17px] leading-[1.75] text-[#d9e0e0]">
                    Designing a new analytics experience for workplace data in
                    FlowAnalytics, supported by a shared design system.
                    <br />
                    <br />
                    Previously, users struggled to navigate fragmented
                    dashboards and understand what to act on.
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

        <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 lg:pt-10 lg:pb-18">
          <div className="mx-auto mt-6 max-w-[50rem] sm:mt-7 md:mt-8 lg:mt-6">
            <h2 className="text-balance text-[1.45rem] font-semibold leading-[1.16] text-foreground sm:text-[1.6rem] md:text-[1.75rem]">
              Overview
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 md:grid-cols-4 lg:mt-5">
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

            <div className="mt-8 max-w-[46rem] space-y-5 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem] lg:mt-14">
              <p>
                Flowscape’s admin portal is where facility teams manage offices,
                assets, and workplace data. FlowAnalytics is the analytics area
                within it.
              </p>

              <p>
                As the sole UX designer, I redesigned the analytics experience
                and established a shared design system to support it.
              </p>

              <p>
                I restructured the information architecture, simplified
                dashboards, and made key metrics easier to understand and act
                on.
              </p>
            </div>

            <div className="mt-6 h-px w-full bg-[rgba(230,232,232,0.12)]" />
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-4 text-balance text-[1.45rem] font-semibold leading-[1.16] text-foreground sm:text-[1.6rem] md:text-[1.75rem]">
              Problem
            </h2>

            <p className="mb-5 max-w-[50rem] text-[16px] leading-[1.8] text-foreground sm:text-[17px] md:text-[18px]">
              Users could access a large amount of workplace data, but struggled
              to quickly understand what mattered or what to do next.
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
              <p className="text-[0.95rem] font-medium text-muted">Users</p>

              <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                The primary users were facility and workplace managers
                responsible for monitoring office performance and making
                day-to-day decisions.
              </p>

              <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                While roles varied, their needs were similar:
              </p>

              <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                <li>Quickly understanding space usage and key metrics</li>
                <li>Navigating dashboards efficiently</li>
                <li>Trusting the data to support decisions</li>
              </ul>

              <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                Two usage patterns emerged:
              </p>

              <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                <li>
                  Some users focused on a single dashboard for quick answers
                </li>
                <li>Others explored multiple dashboards for deeper analysis</li>
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
            <h2 className="text-balance text-[1.45rem] font-semibold leading-[1.16] text-foreground sm:text-[1.6rem] md:text-[1.75rem]">
              Design system
            </h2>

            <div className="mt-8 max-w-[46rem] space-y-5 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              <p>
                As part of building a new admin portal from scratch, I defined a
                lightweight design system to support long-term consistency and
                scalability. Previously, the analytics experience was built in
                Power BI using a more fragmented, drag-and-drop approach.
              </p>

              <p>
                The portal was developed using Next.js and TailAdmin as a
                foundation, which I adapted and structured to fit the needs of
                the analytics experience.
              </p>

              <p>
                As the sole designer, I shaped the visual language and component
                patterns across the product, working closely with the frontend
                developer to ensure a smooth handoff.
              </p>

              <p>
                The system focused on clarity and consistency, using a
                structured spacing scale and an accessible color palette. The
                color system was explored through multiple variations and
                refined together with stakeholders to align with the
                company&apos;s core values.
              </p>
            </div>
          </div>
          <img
            src="/images/flowscape-desingsystem.png"
            alt="Flowscape design system overview"
            className="mt-8 mb-12 w-full max-w-[47rem] rounded-2xl border border-white/20 object-contain"
          />
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="text-[14px] font-medium uppercase tracking-[0.12em] text-[rgba(167,176,176,0.82)]">
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
                  <p className="text-[14px] font-medium uppercase tracking-[0.12em] text-[rgba(167,176,176,0.78)]">
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
            <h2 className="text-[14px] font-medium uppercase tracking-[0.12em] text-[rgba(167,176,176,0.82)]">
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

        <figure className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="relative max-w-[47rem] overflow-hidden rounded-[0.55rem] border border-[rgba(43,52,52,0.92)] shadow-[0_24px_54px_rgba(0,0,0,0.24)]">
            <Image
              src="/dashboard.png?v=2"
              alt="Flowscape dashboard overview"
              width={1536}
              height={1024}
              className="h-auto w-full"
              sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 4rem), 47rem"
            />
          </div>
          <figcaption className="mt-4 max-w-[38rem] text-[0.9rem] leading-6 text-muted">
            Wireframe of the final MVP dashboard structure, designed to make
            complex data easier to scan and understand.
          </figcaption>
        </figure>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-6 text-balance text-[1.45rem] font-semibold leading-[1.16] text-foreground sm:text-[1.6rem] md:text-[1.75rem]">
              Outcome
            </h2>

            <p className="mt-8 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              The MVP transformed a fragmented and hard-to-navigate analytics
              experience into a structured system where users could quickly
              understand what mattered and take action with confidence.
            </p>

            <p className="mt-8 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              The restructuring of dashboards and navigation created clearer
              paths into deeper analysis, supporting faster and more confident
              decision-making.
            </p>

            <p className="mt-8 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              I worked closely with stakeholders throughout the process,
              ensuring alignment and clear handovers to developers.
            </p>

            <p className="mt-8 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              The project was delivered in a fast-paced environment, applying an
              MVP mindset to prioritize and deliver value early.
            </p>

            <ul className="mt-8 max-w-[44rem] space-y-4 text-[0.97rem] leading-[1.8] text-ink-soft sm:mt-9 sm:text-[1rem] sm:leading-8">
              {outcomePoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-[0.65rem] h-1 w-1 rounded-full bg-[#6FAF8F]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              Feedback from the team highlighted improved clarity and better
              alignment with how users interpret and act on data.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
