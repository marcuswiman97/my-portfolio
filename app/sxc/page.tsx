import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { ReadingProgress } from "@/components/reading-progress";

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
      <ReadingProgress />
      <div className="mx-auto flex min-h-screen max-w-[88rem] flex-col px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-14 xl:px-12">
        <SiteHeader compact />

        <section className="relative left-1/2 mb-6 w-screen -translate-x-1/2 overflow-hidden bg-[#050606] sm:mb-8 md:mb-10 lg:mb-12">
          <div className="relative mx-auto h-[clamp(25rem,50svh,36rem)] w-full max-w-[100rem] overflow-hidden sm:h-[clamp(26rem,52svh,38rem)] lg:h-[clamp(28rem,65svh,44rem)]">
            <Image
              src="/images/sxc-hero-v2.jpg"
              alt="Stockholm Xperience Conference hero image"
              fill
              priority
              className="object-cover object-[60%_center]"
              sizes="(max-width: 1600px) 100vw, 1600px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.9)_30%,rgba(0,0,0,0.7)_55%,rgba(0,0,0,0.3)_75%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-0 bg-black/40 sm:bg-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[clamp(5rem,12vw,16.25rem)] bg-[linear-gradient(to_right,#050606,rgba(5,6,6,0))]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[clamp(5rem,12vw,16.25rem)] bg-[linear-gradient(to_left,#050606,rgba(5,6,6,0))]" />

            <div className="absolute inset-0 z-10 flex items-center">
              <div className="mx-auto w-full max-w-[88rem] px-6 py-16 sm:px-8 sm:py-20 md:px-10 xl:px-12">
                <div className="max-w-[72rem]">
                  <div className="max-w-[50rem]">
                    <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.12em] text-[#d4dcdc]">
                      CASE STUDY
                    </p>
                    <h1 className="mb-4 text-balance text-[2.9rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#e6e8e8] sm:text-[3.8rem] md:text-[4.75rem] lg:text-[5.4rem]">
                      Stockholm Xperience Conference
                    </h1>
                    <p className="max-w-[37.5rem] text-[16px] leading-[1.75] text-[#d9e0e0] sm:text-[17px] md:text-[18px]">
                      A mobile-first concept for a hybrid UX conference, helping
                      people find talks, workshops, and relevant attendees more
                      easily.
                    </p>
                  </div>
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

        <section className="pt-6 pb-12 sm:pt-8 sm:pb-14 md:pt-10 md:pb-16 lg:pt-6 lg:pb-18">
          <div className="mx-auto mt-2 max-w-[50rem] sm:mt-3 md:mt-4">
            <h2 className="text-balance text-[1.45rem] font-semibold leading-[1.16] text-foreground sm:text-[1.6rem] md:text-[1.75rem]">
              Overview
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 md:grid-cols-4">
              {metadataItems.map((item) => (
                <div key={item.label}>
                  <p className="text-[0.95rem] font-medium tracking-[0.01em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1.5 max-w-[14rem] text-[15px] leading-6 text-foreground md:text-[16px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-[46rem] space-y-5 text-[0.97rem] leading-[1.8] text-ink-soft sm:text-[1rem] sm:leading-8 md:text-[1.0625rem]">
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
            <h2 className="mb-4 text-balance text-[1.45rem] font-semibold leading-[1.16] text-foreground sm:text-[1.6rem] md:text-[1.75rem]">
              Context
            </h2>

            <p className="max-w-[650px] text-[16px] leading-[1.8] text-ink-soft sm:text-[17px] md:text-[18px]">
              SXC was a hybrid conference for UX designers, combining talks,
              workshops, and networking across physical and digital touchpoints.
              Attendees needed to compare sessions, decide where to spend their
              time, and find relevant people to connect with, often in the
              middle of a fast-moving event. The product needed to support those
              decisions quickly.
            </p>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem]">
            <h2 className="mb-4 text-balance text-[1.45rem] font-semibold leading-[1.16] text-foreground sm:text-[1.6rem] md:text-[1.75rem]">
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
            <h2 className="text-[14px] font-medium uppercase tracking-[0.12em] text-[rgba(167,176,176,0.82)]">
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
                Early sketches exploring how content, people, and actions could
                sit in one flow.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pt-16 pb-12 sm:pt-18 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-18">
          <div className="max-w-[50rem] rounded-[0.9rem] border border-[rgba(43,52,52,0.92)] bg-[rgba(18,22,22,0.9)] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
            <h2 className="text-[14px] font-medium uppercase tracking-[0.12em] text-muted">
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
              conference experience could be structured in a more connected way.
              While the concept was not tested with users at scale, it was
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

        <section className="pt-8 pb-20 sm:pt-10 sm:pb-24 md:pb-28 lg:pb-32">
          <Link
            href="/projekt-vita"
            className="group block max-w-[50rem] border-t border-[#2b3434] pt-8 transition-colors duration-300 hover:border-[rgba(111,175,143,0.36)] focus-visible:border-[rgba(111,175,143,0.5)] focus-visible:outline-none"
          >
            <p className="text-[14px] font-medium uppercase tracking-[0.12em] text-muted">
              Next case study
            </p>
            <div className="mt-4 flex items-center justify-between gap-6">
              <h2 className="text-balance text-[1.55rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground transition-colors duration-300 group-hover:text-[#6FAF8F] group-focus-visible:text-[#6FAF8F] sm:text-[1.8rem] md:text-[2.1rem]">
                Projekt Vita
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
