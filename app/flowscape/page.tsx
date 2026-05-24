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
  "I worked as a UX / Product Designer on FlowAnalytics over a 6-month period, from research and early exploration to MVP design, implementation support, and handoff.",
  "I was responsible for the UX work across research, dashboard structure, information architecture, wireframes, UI design, KPI cards, filter patterns, navigation, microcopy, design system work, and developer handoff.",
  "The project was highly collaborative. I had regular UX feedback sessions with my supervisor several times a week, where we discussed design decisions, tested ideas, and refined the direction together.",
  "I also worked closely with the product owner and backend analytics stakeholder through weekly product meetings, where we aligned on scope, data logic, user needs, and what was realistic for the MVP. As the design moved closer to implementation, I collaborated with the frontend developer to check feasibility, clarify handoff details, and make sure the design patterns could work in the product.",
  "A key decision point came after the first research phase. I explored broader ways to rethink the analytics experience, including more simplified alternatives. But because the MVP needed to move quickly and still support advanced analysis, we chose to keep the dashboard model and improve it from within.",
  "That meant focusing on clearer structure, better hierarchy, more useful KPI context, predictable filters, clearer navigation, and a more consistent visual system.",
];

const problemParagraphs = [
  "FlowAnalytics contained a lot of useful workplace data, but the experience had become difficult to scan, understand, and use in daily decision-making.",
  "Users could get value from parts of the analytics experience, especially when preparing insights for meetings, but many dashboards and graphs were rarely used. The problem was not only the amount of data, but how it was presented. The interface felt dense, the visual style was inconsistent, and many KPI cards relied on short labels without enough explanation.",
  "In the previous setup, dashboards could take a long time to load, and it was not always clear when the data was still loading, filters were being applied, or the dashboard was ready to use. Exporting was also slow and inflexible. Users often had to export a whole dashboard instead of one specific graph or view, which was frustrating when they needed material before a meeting.",
  "Navigation also created friction. Some views and tabs were placed in ways that did not match common dashboard patterns, which made it harder for users to understand what was clickable or where to go next.",
  "Because dashboard purposes were not always clear, users often stayed in one or two familiar views instead of exploring the full analytics experience. Filters could also be hard to keep track of, which made it difficult to understand exactly what data was being shown.",
  "The challenge was not simply to show more data. It was to make the data easier to scan, understand, filter, navigate, and act on.",
];

const usersParagraphs = [
  "The product supported workplace teams, facility managers, HR, administrators, and people responsible for understanding how office spaces were used.",
  "They needed to understand occupancy, utilization, space performance, and workplace patterns over time. Some users needed quick answers before meetings, while others needed deeper analysis to understand trends and make decisions.",
  "A key user behavior was that many users stayed in one or two familiar dashboards instead of exploring the full analytics experience. That showed that the product needed clearer dashboard purposes, stronger orientation, and better support for interpretation.",
];

const researchMethods = [
  "User interviews",
  "Internal stakeholder conversations",
  "Analytics pattern review",
  "Product walkthroughs",
  "Reviewing the existing analytics setup",
  "Mapping problems and patterns",
  "Exploring common dashboard and analytics conventions",
  "Discussing design directions with my UX supervisor",
];

const keyInsights = [
  {
    title: "Users needed clearer dashboard purposes",
    text: "The existing experience included many views, but it was not always clear what each dashboard was meant to help users understand. This made the product feel bigger and more complex than it needed to be.",
  },
  {
    title: "KPI cards needed more context",
    text: "Many KPI cards showed a number, but not enough explanation. Users needed help understanding what the number meant, why it mattered, and whether it needed attention.",
  },
  {
    title: "Filter states had to be visible",
    text: "Filters were important for analysis, but users could lose track of what was active. This made it harder to trust what data was being shown.",
  },
  {
    title: "Navigation needed stronger cues",
    text: "Some navigation elements were easy to miss or hard to understand. Users needed clearer visual cues around where they were, what was clickable, and how different views related to each other.",
  },
  {
    title: "The product needed a more consistent visual system",
    text: "The new analytics experience needed to feel like part of Flowscape's own product, not like a separate reporting tool. Consistency, accessibility, and chart readability became important parts of the solution.",
  },
];

const designDirectionPoints = [
  "Clearer dashboard purposes",
  "Stronger information hierarchy",
  "More helpful KPI cards",
  "Visible filter states",
  "Clearer navigation",
  "Reusable component patterns",
  "A calmer and more consistent visual system",
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
    title: "Dashboard structure and hierarchy",
    paragraphs: [
      "I kept the dashboard model because it matched how users and stakeholders expected advanced analytics to work, but improved the structure around it.",
      "Each dashboard needed a clearer purpose, with a stronger hierarchy between overview, filters, KPI cards, charts, and deeper analysis.",
      "This helped make each view easier to scan and reduced the feeling that every chart had the same importance.",
    ],
    bullets: ["Overview", "Filters", "KPI cards", "Charts", "Deeper analysis"],
  },
  {
    title: "Making filters easier to understand",
    paragraphs: [
      "The old experience made it hard for users to keep track of what data they were looking at. I redesigned the filter experience around a clearer hierarchy.",
      "I designed the filter experience with quick filters and an Advanced filters option. The most common filters were shown directly in the dashboard, while Advanced filters opened the full filter set, including both the quick filters and the more detailed options.",
      "This kept the default dashboard easier to scan without hiding the full filtering logic.",
      "I added an active filter summary that showed what was currently affecting the data. It stayed visible while scrolling, so users did not have to return to the top of the page to check their filter state.",
      "Because data loading could take time, loading states became important. The new experience needed to show users when data was being fetched, when filters were being applied, and when a chart or dashboard was ready to use. This helped reduce uncertainty and made the analytics experience feel more predictable.",
    ],
    bullets: [
      "5 to 6 quick filters visible directly in the dashboard",
      "One Advanced filters option",
      "A full filter set that included quick filters and more detailed filters",
      "Active filters",
    ],
  },
  {
    title: "Turning KPI cards into interpretation support",
    paragraphs: [
      "A major problem was that KPI cards often showed a number without enough context. I redesigned them to help users understand what the number meant, why it mattered, and whether it needed attention.",
      "Instead of showing too many metrics at once, the dashboards focused on a smaller set of key KPIs, usually up to four. The goal was to help users scan the most important signals first.",
      "One of the biggest iterations was how to show a KPI in relation to a target. I first explored progress bars, then moved into a gauge-style indicator after stakeholder and customer input.",
      "I explored red, yellow, and green status logic, but after feedback and stakeholder discussions we chose a calmer direction using Flowscape's brand color instead of a traffic-light system. To keep the status scannable, I added a checkmark when a value met its target.",
      "This became a design trade-off: the KPI needed to be clear enough to interpret quickly, but still feel consistent with the brand and avoid making the dashboard feel too noisy.",
      "The KPI cards also included disabled states for cases where required data was missing, helping users understand why a metric was unavailable instead of leaving the card empty or confusing.",
    ],
    bullets: [
      "Clearer titles",
      "Short explanatory subtitles or questions",
      "Tooltips",
      "Targets",
      "Trend indicators",
      "Visual indicators in some variants",
      "Disabled states for missing data",
    ],
  },
  {
    title: "Improving navigation and orientation",
    paragraphs: [
      "The previous setup made some navigation elements harder to understand than they needed to be. In some areas, tabs were placed in uncommon positions, which made them easy to miss.",
      "I moved tabs to a more familiar position below the dashboard heading, making them easier to recognize as tabs and easier to use when switching between related views.",
      "I also added icons where the difference between sections needed to be clearer, especially in the sidebar and tab navigation. The icons were not added for decoration, but to support quicker scanning and help users understand what each section represented before clicking.",
      "This helped the product feel easier to move through and reduced the need to read every label in detail.",
    ],
  },
  {
    title: "Making the simulator easier to interact with",
    paragraphs: [
      "One dashboard had a simulation use case where users could explore how changes in an office setup might affect the results.",
      "In the previous version, the simulator relied on grouped input fields and technical labels. This made the interaction feel more like filling in a form than exploring a scenario.",
      "I redesigned the simulator into separate interactive cards. Each card had enough space for clearer copy, so users could understand what they were adjusting and why it mattered.",
      "Instead of only relying on text input fields, I introduced sliders to make the simulation more visual and easier to explore. The goal was to help users understand the direction and size of a change while adjusting values, rather than forcing them to type a number without much context.",
      "This made the simulator feel more interactive and helped users understand that they were exploring possible changes, not just entering static data.",
    ],
  },
  {
    title: "Creating a lightweight design system",
    paragraphs: [
      "Since the new analytics experience was being built as part of Flowscape's own product, I created a lightweight design system for the MVP.",
      "It built on the company's existing product language, but adapted it for a more data-heavy analytics environment.",
      "A large part of the work was making the analytics experience feel clearer, calmer, and more connected to Flowscape's brand. I also focused on accessible color choices and chart readability, especially because analytics can quickly become visually overwhelming.",
    ],
    bullets: [
      "Colors",
      "Typography",
      "Spacing",
      "Rounded cards",
      "Buttons",
      "Loading states",
      "Disabled states",
      "KPI card patterns",
      "Filter patterns",
      "Chart styling",
      "Reusable components",
    ],
  },
  {
    title: "Export touchpoints",
    paragraphs: [
      "Exporting was a known pain point in the previous experience. Users often needed to bring specific charts or dashboard views into meetings, but the old export flow could be slow and too broad. Instead of exporting only what they needed, users often had to export a whole dashboard.",
      "Part of this was solved through the technical rebuild, but I also helped shape cleaner export touchpoints in the interface, including dashboard-level export and chart-level export options. This gave users more control over what they exported and made the experience feel less like one large all-or-nothing action.",
    ],
  },
];

const resultsParagraphs = [
  "The project resulted in a new FlowAnalytics MVP with 5 redesigned dashboards, a lightweight design system, reusable component patterns, design files, prototypes, and developer handoff material. The designs I delivered were implemented into the new analytics portal.",
  "For users, the new experience made workplace data easier to scan, navigate, and interpret. KPI cards gave more context around key numbers, filters became more transparent, navigation became easier to understand, and the visual system made the product feel more consistent.",
  "Testing and feedback indicated that the new direction was easier to understand and navigate, but because user testing happened late, some findings became recommendations for future iterations.",
  "This was one of the reasons Flowscape wanted to move away from the previous Power BI-based setup and build FlowAnalytics as part of their own product. The new setup gave the team more control over performance, export logic, frontend patterns, and the overall user experience. My UX work built on that opportunity by improving clarity, feedback, structure, loading states, export touchpoints, and the overall experience.",
  "Internal feedback was positive. My supervisor highlighted my role in making complex data easier to understand and use for decision-making, adapting to a fast-paced MVP environment, aligning with stakeholders, creating clear developer handoffs, and exploring AI as a way to iterate more efficiently.",
];

const learningParagraphs = [
  "This project taught me how to design in a real product environment, where user needs, business goals, technical constraints, and time all have to be balanced.",
  "As the main designer on the project, I got to work through the full design process: research, analysis, structure, prototyping, UI design, stakeholder alignment, handoff, and iteration. It made me more confident in making design decisions, asking better questions, and explaining why UX decisions matter.",
  "I also learned how complex analytics UX can be. A dashboard can contain valuable data and still be hard to use if the structure, labels, filters, navigation, and visual hierarchy are unclear.",
  "In this project, copy became especially important. When a metric or chart could not be changed completely, better wording, tooltips, targets, trends, and clearer interaction patterns helped make the information easier to understand.",
  "Working with stakeholders also taught me how important it is to listen carefully, document decisions, and separate ideas from actual user needs. Users and stakeholders often suggest features, but the real design work is understanding the problem behind the request.",
];

const nextSteps = [
  "Run usability tests earlier and more often, especially after the first dashboard was ready.",
  "Explore saved filters so users could return to important views faster.",
  "Explore custom dashboards for teams with recurring reporting workflows.",
  "Test export flows more deeply around meeting preparation.",
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
            title="What the project was about"
          />

          <Paragraphs
            items={[
              "FlowAnalytics is an analytics experience that helps workplace teams understand how office spaces are used.",
              "The previous experience gave users access to a large amount of data, but much of it was hard to scan, understand, and act on. My work focused on making the product clearer through dashboard structure, KPI cards, filter logic, navigation, microcopy, visual design, and a lightweight design system.",
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
          <SectionHeading
            eyebrow="02 Role"
            title="My responsibility and collaboration"
          />
          <Paragraphs items={roleParagraphs} />
        </section>

        <section id="problem" className={caseStudySectionClass}>
          <SectionHeading
            eyebrow="03 Problem"
            title="Useful data was hard to understand"
          />
          <Paragraphs items={problemParagraphs} />

          <div className="mt-8 max-w-[46rem] rounded-[0.85rem] border border-[rgba(43,52,52,0.92)] bg-[rgba(18,22,22,0.82)] px-5 py-6 sm:px-6 md:mt-9 md:px-7">
            <p className="text-[14px] font-medium uppercase tracking-[0.12em] text-muted">
              Hypothesis
            </p>
            <p className="mt-4 text-[1rem] leading-[1.8] text-foreground md:text-[1.06rem]">
              If FlowAnalytics became more structured, easier to scan, and
              clearer about what each metric meant, users would be able to
              understand workplace data faster, use more of the product, and
              make more confident decisions.
            </p>
          </div>

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
          <SectionHeading
            eyebrow="04 Users"
            title="Who the analytics experience needed to support"
          />
          <Paragraphs items={usersParagraphs} />
        </section>

        <section id="process" className={caseStudySectionClass}>
          <SectionHeading
            eyebrow="05 Process"
            title="Research, insight, and design direction"
          />

          <Paragraphs
            items={[
              "I started the project with a research phase to understand the product, the users, and the business context behind workplace analytics. Since the domain was new to me, I spent time learning the language of facility management, how workplace data is used, and what decisions the analytics experience needed to support.",
            ]}
          />

          <div className="mt-8 max-w-[50rem] md:mt-9">
            <h3 className="text-[1.15rem] font-semibold leading-[1.2] text-foreground md:text-[1.3rem]">
              Research included
            </h3>
            <BulletList items={researchMethods} />
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

          <div className="mt-9 max-w-[46rem] space-y-5 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-10 md:text-[1.0625rem]">
            <p>
              One important insight was that users did not need more data. They
              needed a clearer way to understand the data already available.
            </p>
            <p>
              Many users stayed in familiar dashboards, while other views were
              rarely used or harder to interpret. This shaped the direction of
              the redesign: instead of adding more features, the experience
              needed better structure, clearer language, and more support for
              interpretation.
            </p>
          </div>

          <div className="mt-10 max-w-[60rem] md:mt-11">
            <div className="max-w-[46rem]">
              <h3 className="text-[1.15rem] font-semibold leading-[1.2] text-foreground md:text-[1.3rem]">
                Research artifacts
              </h3>
              <p className="mt-4 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8">
                I translated the research into lightweight artifacts that made
                user needs easier to discuss with stakeholders.
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

            <p className="mt-5 max-w-[46rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8">
              These artifacts connected technical pain points to real user
              situations, especially around trust, speed, and confidence in the
              data.
            </p>
          </div>

          <div className="mt-11 space-y-7 md:mt-12 md:space-y-8">
            {keyInsights.map((insight, index) => (
              <div key={insight.title} className="max-w-[46rem]">
                <p className="text-[14px] font-medium uppercase tracking-[0.12em] text-[rgba(167,176,176,0.78)]">
                  Insight {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-balance text-[1.2rem] font-semibold leading-[1.2] text-foreground sm:text-[1.35rem] md:text-[1.5rem]">
                  {insight.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                  {insight.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-11 max-w-[50rem] rounded-[0.9rem] border border-[rgba(43,52,52,0.92)] bg-[rgba(18,22,22,0.86)] px-6 py-8 sm:px-8 sm:py-10 md:mt-12">
            <h3 className="text-[1.2rem] font-semibold leading-[1.2] text-foreground md:text-[1.45rem]">
              Design direction
            </h3>
            <div className="mt-5 max-w-[44rem] space-y-5 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8">
              <p>
                Early on, I explored more radical ways to simplify the
                experience, including reducing the number of views or moving
                further away from a traditional dashboard format.
              </p>
              <p>
                But through user feedback, stakeholder discussions, technical
                alignment, and feedback sessions with my supervisor, it became
                clear that dashboards still made sense for this type of advanced
                analysis. The better direction was to improve the model users
                already understood, rather than replace it completely.
              </p>
            </div>
            <BulletList items={designDirectionPoints} />
          </div>
        </section>

        <section id="designed" className={caseStudySectionClass}>
          <SectionHeading
            eyebrow="06 What I designed"
            title="The main design work"
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
                  {section.paragraphs.map((paragraph) => (
                    <div key={paragraph}>
                      <p>{paragraph}</p>

                      {section.title ===
                        "Turning KPI cards into interpretation support" &&
                      paragraph.endsWith(
                        "To keep the status scannable, I added a checkmark when a value met its target."
                      ) ? (
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
                            Early KPI explorations led to a more scannable card
                            system with targets, trends, tooltips, and visual
                            status cues.
                          </figcaption>
                        </figure>
                      ) : null}
                    </div>
                  ))}
                </div>

                {section.bullets ? (
                  <BulletList items={section.bullets} />
                ) : null}

                {section.title === "Dashboard structure and hierarchy" ? (
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
                      Wireframe of the final MVP dashboard structure, designed
                      to make complex data easier to scan and understand.
                    </figcaption>
                  </figure>
                ) : null}

                {section.title === "Creating a lightweight design system" ? (
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
            title="What changed and what I took with me"
          />
          <Paragraphs items={resultsParagraphs} />

          <blockquote className="mt-9 max-w-[48rem] border-l border-[#6FAF8F] pl-5 text-[1.15rem] font-medium leading-[1.65] text-foreground sm:text-[1.25rem] md:mt-10 md:pl-6">
            “Marcus played a key role in improving an analytics platform,
            focusing on making complex data easier to understand and use for
            decision-making.”
          </blockquote>

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
