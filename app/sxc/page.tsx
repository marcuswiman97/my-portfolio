import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "SXC | Marcus Wiman",
  description:
    "A UX case study about improving navigation and flow in a conference experience.",
  openGraph: {
    title: "Stockholm Xperience Conference | Marcus Wiman",
    description:
      "A UX case study about improving navigation and flow in a conference experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stockholm Xperience Conference | Marcus Wiman",
    description:
      "A UX case study about improving navigation and flow in a conference experience.",
  },
};

const metadataItems = [
  { label: "Role", value: "UX/UI Design + Research" },
  { label: "Timeline", value: "4 Weeks" },
  { label: "Team", value: "4 Designers" },
  { label: "Outcome", value: "Stakeholder Presentation" },
];

const problemPoints = [
  "Relevant people were hard to find in the flow of the event",
  "Sessions and networking felt disconnected from each other",
  "Users lacked clear ways to start a conversation or make contact",
];

const keyDesignDecisions = [
  {
    title: "Two concept directions were explored in parallel",
    text: "We split into two groups to test two different directions before deciding what felt strongest.",
  },
  {
    title: "One concept used a more gamified approach",
    text: "This direction explored whether discovery and networking could feel more playful through game-like interaction patterns.",
  },
  {
    title: "The other focused on a simpler flow",
    text: "This direction tested a more direct structure where sessions, people, and actions were easier to understand without added mechanics.",
  },
];

const learningPoints = [
  "Our design concept made it easier to move between conference content and networking.",
  "Stakeholder feedback showed interest in taking the idea further.",
  "The project showed how much clarity matters in a fast-moving event setting.",
];

export default function SxcPage() {
  return (
    <main id="main-content" className="grain-overlay min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-14">
        <SiteHeader compact />

        <section className="relative left-1/2 mb-6 w-screen -translate-x-1/2 overflow-hidden sm:mb-8 md:mb-10 lg:mb-12">
          <div className="relative h-[68vh] min-h-[460px] overflow-hidden sm:h-[70vh] sm:min-h-[500px]">
            <Image
              src="/images/sxc-hero-v2.jpg"
              alt="Stockholm Xperience Conference hero image"
              fill
              priority
              className="object-cover object-[60%_center]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.52)_54%,rgba(0,0,0,0.2)_76%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0)_48%)]" />

            <div className="absolute inset-0 z-10 flex items-center">
              <div className="w-full px-6 py-16 sm:px-8 sm:py-20 md:px-10">
                <div className="max-w-[72rem]">
                  <div className="max-w-[50rem]">
                    <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.14em] text-[#d4dcdc]">
                      CASE STUDY
                    </p>
                    <h1 className="mb-4 text-balance text-[2.9rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#e6e8e8] sm:text-[3.8rem] md:text-[4.75rem] lg:text-[5.4rem]">
                      Stockholm Xperience Conference
                    </h1>
                    <p className="max-w-[37.5rem] text-[16px] leading-[1.75] text-[#d9e0e0] sm:text-[17px] md:text-[18px]">
                      A mobile-first concept for a hybrid UX conference,
                      helping people find talks, workshops, and relevant
                      attendees more easily.
                    </p>
                  </div>
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
                  <p className="text-[0.95rem] font-medium text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1.5 max-w-[14rem] text-[15px] leading-6 text-foreground md:text-[16px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-[50rem] space-y-5 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:text-[1.0625rem]">
              <p>
                I reworked a mobile-first conference concept to make talks,
                workshops, people, and key actions easier to navigate in one
                place. The focus was on how attendees moved through the event,
                compared options, and decided where to spend their time.
              </p>

              <p>
                The goal was to make it easier to move between content and
                networking without the experience feeling split up. The concept
                brought them into one simpler flow. The project was done at
                Nackademin during Year 2.
              </p>
            </div>

            <div className="mt-6 h-px w-full bg-[rgba(230,232,232,0.12)]" />
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-4 text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
              Context
            </h2>

            <p className="max-w-[650px] text-[16px] leading-[1.8] text-ink-soft sm:text-[17px] md:text-[18px]">
              SXC was a hybrid conference for UX designers, combining talks,
              workshops, and networking across physical and digital touchpoints.
              Attendees needed to compare sessions, decide where to spend their
              time, and find relevant people to connect with, often in the
              middle of a fast-moving event. The product needed to support
              those decisions quickly.
            </p>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-4 text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
              Problem
            </h2>

            <ul className="max-w-[50rem] list-disc space-y-2.5 pl-5 text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
              {problemPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="text-[14px] font-medium uppercase tracking-[0.14em] text-[rgba(167,176,176,0.82)]">
              Process
            </h2>

            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.7] text-ink-soft md:text-[16px]">
              I used early sketches to test different ways of connecting
              sessions, networking, and key actions in one flow. The aim was to
              see what felt easiest to follow before moving into more detailed
              design work.
            </p>

            <figure className="mt-9 md:mt-10">
              <div className="relative overflow-hidden rounded-[0.5rem] border border-[rgba(43,52,52,0.85)] bg-[#111616] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/sxc-detail.jpg"
                  alt="Early sketches and workshop material from the SXC concept"
                  width={1600}
                  height={1040}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50rem"
                />
              </div>
              <figcaption className="mt-3 text-[0.9rem] leading-6 text-muted">
                Early sketches exploring how content, people, and actions
                could sit in one flow.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem] rounded-[0.9rem] border border-[rgba(43,52,52,0.92)] bg-[rgba(18,22,22,0.9)] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
            <h2 className="text-[14px] font-medium uppercase tracking-[0.14em] text-muted">
              Concept Exploration
            </h2>

            <div className="mt-6 space-y-6">
              {keyDesignDecisions.map((decision) => (
                <div key={decision.title}>
                  <h3 className="max-w-[36rem] text-balance text-[1.2rem] font-semibold leading-[1.2] text-foreground sm:text-[1.35rem] md:text-[1.5rem]">
                    {decision.title}
                  </h3>
                  <p className="mt-3 max-w-[42rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:text-[1.0625rem]">
                    {decision.text}
                  </p>
                </div>
              ))}
            </div>

            <figure className="mt-7 max-w-[28rem] md:mt-8">
              <div className="relative overflow-hidden rounded-[0.6rem] border border-[rgba(43,52,52,0.82)] bg-[#111616] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/sxc-mobile.jpg"
                  alt="Two SXC mobile concept directions, one gamified and one more direct"
                  width={900}
                  height={1600}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 80vw, 28rem"
                />
              </div>
              <figcaption className="mt-3 text-[0.9rem] leading-6 text-muted">
                Two concept directions explored in parallel: one playful, one
                more direct.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="text-[14px] font-medium uppercase tracking-[0.14em] text-muted">
              Example Feature
            </h2>

            <h3 className="mt-6 text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
              Quick Connect
            </h3>

            <p className="mt-5 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:text-[1.0625rem]">
              Quick Connect explored how networking could feel less separate
              from the rest of the conference journey. It made relevant people
              easier to discover around sessions and shared interests.
            </p>

            <figure className="mt-9 max-w-[36rem] md:mt-10">
              <div className="relative overflow-hidden rounded-[0.6rem] border border-[rgba(43,52,52,0.82)] bg-[#111616] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/sxc-outcome.jpg"
                  alt="Quick Connect concept showing content, people, and next steps in one flow"
                  width={1200}
                  height={1600}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 36rem"
                />
              </div>
              <figcaption className="mt-3 text-[0.9rem] leading-6 text-muted">
                Quick Connect concept linking content, people, and next steps
                more directly.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-6 text-balance text-[1.35rem] font-semibold leading-[1.2] text-foreground sm:text-[1.5rem] md:text-[1.65rem]">
              Outcome & Learnings
            </h2>

            <p className="mt-6 max-w-[44rem] text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:mt-8 md:text-[1.0625rem]">
              The project gave stakeholders a clearer picture of how the
              conference experience could be structured in a more connected
              way. While the concept was not tested with users at scale, it was
              presented to the organization, received positive feedback, and
              felt worth developing further.
            </p>

            <div className="mt-6">
              <h3 className="text-[1rem] font-semibold leading-[1.2] text-foreground">
                Key Learnings
              </h3>

              <ul className="mt-4 max-w-[44rem] space-y-4 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8">
                {learningPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[0.65rem] h-1 w-1 rounded-full bg-[#6FAF8F]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
