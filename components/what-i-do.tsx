"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const uxActivities = [
  {
    step: "01",
    label: "Research",
    title: "Understand users",
    description:
      "Interview users, review existing data, and look for patterns in how people think, work, and make decisions.",
  },
  {
    step: "02",
    label: "Define",
    title: "Turn insights into decisions",
    description:
      "Turn research into clear problem statements, user needs, priorities, and design goals.",
  },
  {
    step: "03",
    label: "Ideate",
    title: "Design clear flows",
    description:
      "Explore different directions, map flows, and turn rough ideas into possible solutions.",
  },
  {
    step: "04",
    label: "Prototype",
    title: "Structure information",
    description:
      "Create wireframes and interactive prototypes that make the structure, content, and key interactions easier to evaluate.",
  },
  {
    step: "05",
    label: "Test",
    title: "Test and improve",
    description:
      "Run usability tests by observing users, asking open questions, and finding where the experience feels unclear, slow, or difficult.",
  },
];

export function WhatIDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-18 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[72rem]">
        <h2 className="text-balance text-[1.95rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[2.1rem] md:text-[2.4rem] lg:text-[2.95rem]">
          My design process
        </h2>

        <p className="mt-5 max-w-[40rem] text-[0.98rem] leading-[1.75] text-ink-soft sm:text-[1.02rem] md:text-[1.06rem]">
          A simple UX process from research to testing. Hover or tap each step
          to see how I work.
        </p>

        <div className="mt-9 space-y-1 md:mt-12">
          {uxActivities.map((activity, index) => {
            const isActive = index === activeIndex;
            const descriptionId = `what-i-do-${index}`;

            return (
              <div
                key={activity.label}
                className="grid gap-x-5 border-b border-[rgba(255,255,255,0.06)] md:grid-cols-[minmax(17rem,0.78fr)_minmax(4rem,1fr)_minmax(20rem,0.95fr)] md:items-center md:gap-x-7"
              >
                <button
                  type="button"
                  aria-controls={descriptionId}
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 rounded-[0.35rem] py-4 text-left transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-green)] sm:py-4.5 md:col-span-2 md:grid-cols-[minmax(17rem,0.78fr)_minmax(4rem,1fr)] md:py-5"
                >
                  <span className="flex min-w-0 items-baseline gap-4">
                    <span
                      className={`font-mono text-[0.82rem] leading-none transition-colors duration-200 ease-in-out ${
                        isActive
                          ? "text-[var(--accent-green)]"
                          : "text-muted group-hover:text-[rgba(111,175,143,0.86)] group-focus-visible:text-[rgba(111,175,143,0.86)]"
                      }`}
                    >
                      {activity.step}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-[1.18rem] font-medium leading-tight tracking-[-0.02em] transition-colors duration-200 ease-in-out sm:text-[1.28rem] md:text-[1.38rem] ${
                          isActive
                            ? "text-[color-mix(in_srgb,var(--foreground)_82%,var(--accent-green)_18%)]"
                            : "text-foreground group-hover:text-[color-mix(in_srgb,var(--foreground)_86%,var(--accent-green)_14%)] group-focus-visible:text-[color-mix(in_srgb,var(--foreground)_86%,var(--accent-green)_14%)]"
                        }`}
                      >
                        {activity.label}
                      </span>
                      <span className="mt-1 block text-[0.9rem] leading-6 text-muted sm:text-[0.94rem]">
                        {activity.title}
                      </span>
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex items-center gap-4 md:gap-5"
                  >
                    <span
                      className={`hidden h-px min-w-10 flex-1 transition-colors duration-200 ease-in-out md:block ${
                        isActive
                          ? "bg-[rgba(111,175,143,0.48)]"
                          : "bg-[rgba(255,255,255,0.08)] group-hover:bg-[rgba(111,175,143,0.3)] group-focus-visible:bg-[rgba(111,175,143,0.3)]"
                      }`}
                    />
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[1rem] leading-none transition duration-200 ease-in-out ${
                        isActive
                          ? "border-[rgba(111,175,143,0.56)] text-[var(--accent-green)]"
                          : "border-[rgba(255,255,255,0.1)] text-muted group-hover:border-[rgba(111,175,143,0.4)] group-hover:text-[var(--accent-green)] group-focus-visible:border-[rgba(111,175,143,0.4)] group-focus-visible:text-[var(--accent-green)]"
                      }`}
                    >
                      {isActive ? (
                        <Minus aria-hidden="true" size={18} strokeWidth={1.75} />
                      ) : (
                        <Plus aria-hidden="true" size={18} strokeWidth={1.75} />
                      )}
                    </span>
                  </span>
                </button>

                <p
                  id={descriptionId}
                  className={`overflow-hidden text-[0.98rem] leading-[1.75] text-ink-soft transition-[max-height,opacity,transform,padding] duration-200 ease-out motion-reduce:transition-none md:max-h-none md:overflow-visible md:pb-0 md:text-[1.02rem] md:leading-[1.72] ${
                    isActive
                      ? "max-h-28 translate-y-0 pb-4 opacity-100 md:translate-x-0"
                      : "max-h-0 -translate-y-1 pb-0 opacity-0 md:translate-x-2 md:translate-y-0"
                  }`}
                >
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
