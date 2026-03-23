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
  { label: "Role", value: "UX/UI Design + Design System" },
  { label: "Timeline", value: "Dec 2025 - May 2026" },
  { label: "Status", value: "Released MVP" },
  { label: "Platform", value: "FlowAnalytics / Workplace Manager" },
];

const problemPoints = [
  "The interface felt overwhelming and difficult to scan",
  "Important metrics were hard to locate quickly",
  "Lack of context made decision-making slower",
  "The experience did not adapt well to different user roles",
];

const insights = [
  {
    label: "Insight 01",
    title: "Users needed orientation before detail",
    text: "Users wanted to understand what they were seeing, why it mattered, and how it connected before diving into specifics.",
  },
  {
    label: "Insight 02",
    title: "Filters needed clearer cause and effect",
    text: "Filters were central to the workflow, but unclear cause and effect made users rely on guesswork or manual workarounds.",
  },
  {
    label: "Insight 03",
    title: "High visual density reduced trust",
    text: "When too much information appeared at once, users hesitated more and were less willing to act on what they saw.",
  },
];

const processSections = [
  {
    title: "Restructuring the experience",
    image: "/images/flowscape-structure.jpg",
    alt: "Early layout exploration for restructuring the FlowAnalytics dashboard",
    caption: "A first step toward a more structured and readable overview.",
    text: "As a first step, I explored how the layout could be reorganized by bringing all key elements into a single structure. This was a way to test what a clearer and more structured overview could look like. The focus was on grouping related information and starting to introduce hierarchy, rather than solving everything at once.",
  },
  {
    title: "Clarifying filter interactions",
    image: "/images/flowscape-detail-filter.jpg",
    alt: "Filter refinement concept showing quick filters, advanced filters, and active filter states",
    caption:
      "Quick filters, advanced filters, and a sticky active-filter row made the state easier to follow.",
    text: "I introduced dashboard-specific quick filters for the most common actions, with the last option leading to all filters / advanced filters. Below that, a sticky active-filter section stayed visible while scrolling so users could understand what was applied while reading the data.",
  },
  {
    title: "Improving data visualization",
    image: "/images/flowscape-detail-kpi.jpg",
    alt: "Redesigned KPI cards with clearer hierarchy in FlowAnalytics",
    caption: "Key metrics surfaced and easier to compare at a glance",
    text: "The visualizations were simplified to make key metrics easier to read at a glance. Important values were brought forward, while less critical information was toned down. This made it faster to understand how spaces were used and reduced the effort needed to interpret the data.",
  },
];

const outcomePoints = [
  "Key metrics and space usage data were surfaced more clearly.",
  "Filter interactions were redesigned to make changes easier to follow.",
  "Charts and KPI cards were simplified to support faster reading.",
];

export default function FlowscapePage() {
  return (
    <main id="main-content" className="grain-overlay min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-14">
        <SiteHeader compact />

        <section className="relative left-1/2 mb-8 w-screen -translate-x-1/2 overflow-hidden sm:mb-10 md:mb-14 lg:mb-16">
          <div className="relative h-[68vh] min-h-[460px] overflow-hidden sm:h-[70vh] sm:min-h-[500px]">
            <Image
              src="/images/flowscape-hero.jpg"
              alt="Flowscape workplace interior hero image"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0e1111]" />

            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-6 py-16 sm:px-8 sm:py-20">
                <div className="max-w-[600px]">
                  <p className="mb-3 text-[12px] uppercase tracking-[0.2em] text-[rgba(167,176,176,0.6)]">
                    CASE STUDY
                  </p>
                  <h1 className="mb-4 text-balance text-[64px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#e6e8e8]">
                    Flowscape
                  </h1>
                  <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#a7b0b0]">
                    A UX case study about reworking FlowAnalytics and the shared
                    design system around it to make workplace data easier to
                    understand and act on.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute left-8 top-8 z-10 md:left-10 md:top-10">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 text-sm text-[rgba(230,232,232,0.78)] transition-colors duration-200 hover:text-white"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-[2px]">
                  ←
                </span>
                <span>Back to homepage</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-12 pb-16 sm:pt-14 sm:pb-18 md:pt-18 md:pb-20 lg:pt-24 lg:pb-24">
          <div className="mx-auto mt-14 max-w-[800px] sm:mt-16 md:mt-20">
            <h2 className="text-[20px] font-semibold text-foreground sm:text-[22px] md:text-[24px]">
              Overview
            </h2>

            <div className="mt-8 grid gap-x-6 gap-y-8 sm:gap-x-8 md:grid-cols-4">
              {metadataItems.map((item) => (
                <div key={item.label}>
                  <p className="text-[12px] uppercase tracking-[0.12em] text-[rgba(167,176,176,0.6)]">
                    {item.label}
                  </p>
                  <p className="mt-1.5 max-w-[14rem] text-[14px] leading-6 text-foreground md:text-[15px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-[760px] space-y-6 text-[0.97rem] leading-7 text-[#b3bbbb] sm:text-[1rem] sm:leading-8 md:mt-12 md:text-[1.0625rem]">
              <p>
                I reworked FlowAnalytics, the analytics product, and created a
                shared design system for both FlowAnalytics and Workplace
                Manager, the admin portal it sits within. The work focused on
                improving usability, consistency, and clarity across both
                products.
              </p>

              <p>
                The goal was to make office space usage easier to read, easier
                to navigate, and easier to act on for facility managers.
              </p>
            </div>

            <div className="mt-10 h-px w-full bg-[rgba(230,232,232,0.12)]" />
          </div>
        </section>

        <section className="pt-24 pb-16 sm:pt-28 sm:pb-18 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-[800px]">
            <h2 className="mb-5 text-[20px] font-semibold text-foreground sm:text-[22px] md:mb-6 md:text-[24px]">
              Problem
            </h2>

            <p className="mb-6 max-w-[650px] text-[16px] leading-[1.7] text-foreground sm:text-[17px] md:text-[18px]">
              Users struggled to interpret key metrics in a dense and complex
              dashboard.
            </p>

            <ul className="max-w-[760px] list-disc space-y-2.5 pl-5 text-[15px] leading-[1.7] text-[#b3bbbb] md:text-[16px]">
              {problemPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="mt-10 max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[rgba(167,176,176,0.72)]">
                Users
              </p>

              <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-[1.7] text-[#b3bbbb] md:text-[16px]">
                <li>
                  Facility managers monitoring occupancy, space usage, and
                  workplace performance
                </li>
                <li>
                  Workplace managers using data to plan resources and support
                  day-to-day decisions
                </li>
                <li>
                  Office administrators needing quick access to clear metrics,
                  filters, and saved views
                </li>
              </ul>
            </div>

            <figure className="mt-14 max-w-[900px] md:mt-16">
              <div className="relative overflow-hidden rounded-[0.5rem] border border-[rgba(43,52,52,0.85)] bg-[#111616] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/flowscape-dashboard.png"
                  alt="Original FlowAnalytics dashboard before the redesign"
                  width={1440}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-7 text-muted">
                Before the redesign, the dashboard felt dense and harder to
                scan.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pt-28 pb-16 sm:pt-32 sm:pb-18 md:pt-36 md:pb-20 lg:pt-44 lg:pb-24">
          <div className="mx-auto max-w-[800px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[rgba(167,176,176,0.72)]">
              USER INSIGHTS
            </p>

            <p className="mt-4 max-w-[640px] text-[14px] leading-[1.6] text-[#b3bbbb] md:text-[15px]">
              Based on user interviews with both facility managers and analytics specialists, key behavioral patterns and pain points emerged across how users interpret and act on data.
            </p>

            <p className="mt-4 max-w-[640px] text-[13px] leading-[1.6] text-[#8f9999] md:text-[14px]">
              Two primary user types emerged: a core user focused on quick decision-making, and a power user working deeply with reporting and analysis.
            </p>

            <p className="mt-4 max-w-[640px] text-[13px] leading-[1.6] text-[#8f9999] md:text-[14px]">
              Understanding how users behaved in the current experience revealed recurring patterns.
            </p>

            <div className="mt-10 space-y-12 md:mt-12 md:space-y-14">
              {insights.map((insight) => (
                <div key={insight.title} className="max-w-[42rem]">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[rgba(167,176,176,0.72)]">
                    {insight.label}
                  </p>
                  <h2 className="mt-3 text-balance text-[20px] font-semibold leading-[1.25] text-foreground sm:text-[22px] md:text-[24px]">
                    {insight.title}
                  </h2>
                  <p className="mt-4 max-w-[40rem] text-[14px] leading-[1.6] text-[#b3bbbb] md:text-[15px]">
                    {insight.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-32 pb-16 sm:pt-36 sm:pb-18 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
          <div className="max-w-[50rem]">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">
              Process / Improvements
            </p>
          </div>

          <div className="mt-12 space-y-24 sm:space-y-26 md:mt-14 md:space-y-30">
            {processSections.map((section) => (
              <div key={section.title} className="max-w-[50rem]">
                <h2 className="max-w-[34rem] text-balance text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-[1.7rem] md:text-[1.95rem]">
                  {section.title}
                </h2>

                <p className="mt-5 max-w-[65ch] text-[0.96rem] leading-[1.65] text-[#b3bbbb] sm:text-[0.98rem] sm:leading-[1.7] md:mt-6 md:text-[1rem]">
                  {section.text}
                </p>

                <figure
                  className={
                    section.title === "Restructuring the experience"
                      ? "mt-18 md:mt-20"
                      : "mt-14 md:mt-16"
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
                  <figcaption className="mt-6 max-w-[38rem] text-sm leading-7 text-muted">
                    {section.caption}
                  </figcaption>
                </figure>

                {section.title === "Improving data visualization" ? (
                  <figure className="mt-6 md:mt-7">
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
                    <figcaption className="mt-5 max-w-[48rem] text-sm leading-7 text-muted">
                      A monochrome palette, shaped by the brand values, made
                      charts feel calmer and easier to separate.
                    </figcaption>
                  </figure>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="pt-24 pb-16 sm:pt-28 sm:pb-18 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-[50rem]">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">
              Outcome
            </p>

            <p className="mt-8 max-w-[44rem] text-[0.97rem] leading-7 text-[#b3bbbb] sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
              The redesign gave the dashboard a clearer structure and a more
              consistent way of showing data. Key metrics, filters, and chart
              views were reworked to be easier to follow and easier to scan.
            </p>

            <ul className="mt-8 max-w-[44rem] space-y-4 text-[0.97rem] leading-7 text-[#b3bbbb] sm:mt-9 sm:text-[1rem] sm:leading-8">
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
