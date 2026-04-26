"use client";

import { useState } from "react";

const uxActivities = [
  {
    title: "Understand users",
    description: "Interviews, research, and identifying real problems",
  },
  {
    title: "Turn insights into decisions",
    description: "Translating findings into clear product direction",
  },
  {
    title: "Design clear flows",
    description: "Mapping and designing intuitive user journeys",
  },
  {
    title: "Test and improve",
    description: "Validating ideas and iterating based on feedback",
  },
  {
    title: "Structure information",
    description: "Making complex systems easy to navigate and understand",
  },
];

export function WhatIDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-18 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[72rem]">
        <h2 className="text-balance text-[1.95rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[2.1rem] md:text-[2.4rem] lg:text-[2.95rem]">
          What I do
        </h2>

        <div className="mt-10 space-y-1 md:mt-12">
          {uxActivities.map((activity, index) => {
            const isActive = index === activeIndex;
            const descriptionId = `what-i-do-${index}`;

            return (
              <div
                key={activity.title}
                className="grid gap-x-5 md:grid-cols-[minmax(13rem,0.75fr)_minmax(4rem,1fr)_minmax(20rem,0.95fr)] md:items-center md:gap-x-7"
              >
                <button
                  type="button"
                  aria-controls={descriptionId}
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group grid w-full grid-cols-[minmax(0,max-content)_minmax(2rem,1fr)] items-center gap-5 rounded-[0.35rem] py-3 text-left transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-green)] sm:py-3.5 md:col-span-2 md:grid-cols-[minmax(13rem,0.75fr)_minmax(4rem,1fr)]"
                >
                  <span
                    className={`text-[1.18rem] font-medium leading-tight tracking-[-0.02em] transition-colors duration-200 ease-in-out sm:text-[1.28rem] md:text-[1.38rem] ${
                      isActive
                        ? "text-[color-mix(in_srgb,var(--foreground)_82%,var(--accent-green)_18%)]"
                        : "text-foreground group-hover:text-[color-mix(in_srgb,var(--foreground)_86%,var(--accent-green)_14%)] group-focus-visible:text-[color-mix(in_srgb,var(--foreground)_86%,var(--accent-green)_14%)]"
                    }`}
                  >
                    {activity.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-px transition-colors duration-200 ease-in-out ${
                      isActive
                        ? "bg-[rgba(111,175,143,0.48)]"
                        : "bg-[rgba(255,255,255,0.08)] group-hover:bg-[rgba(111,175,143,0.3)] group-focus-visible:bg-[rgba(111,175,143,0.3)]"
                    }`}
                  />
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
