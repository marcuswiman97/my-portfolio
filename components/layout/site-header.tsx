"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

const navItems = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("");
  };

  useEffect(() => {
    const updateHeaderState = () => {
      setScrolled(window.scrollY > 20);

      if (pathname !== "/") {
        setActiveSection("");
        return;
      }

      const currentSection =
        navItems.find(({ id }) => {
          const element = document.getElementById(id);

          if (!element) {
            return false;
          }

          const rect = element.getBoundingClientRect();
          const offset = 200;

          return rect.top <= offset && rect.bottom > offset;
        })?.id ?? "";

      setActiveSection(currentSection);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, [pathname]);

  return (
    <header
      className={[
        compact
          ? "sticky top-0 z-20 mb-0 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-auto transition-all duration-300 ease-in-out"
          : "sticky top-0 z-20 mb-10 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-auto transition-all duration-300 ease-in-out sm:mb-12 md:mb-16 lg:mb-20",
        scrolled
          ? "border-b border-[#2b3434] bg-[rgba(14,17,17,0.78)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10",
          compact ? "py-4 md:py-5" : "py-5 md:py-6",
        ].join(" ")}
      >
        <div className="flex min-h-12 items-center justify-between gap-8">
          <div className="flex h-12 items-center gap-3">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="inline-flex h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border border-[rgba(255,255,255,0.08)] transition duration-300 ease-in-out hover:scale-[1.05] hover:brightness-110"
              aria-label="Go to homepage"
            >
              <Image
                src="/images/next-to-logo-profile-128.png"
                alt="Marcus Wiman profile"
                width={50}
                height={50}
                className="h-[50px] w-[50px] rounded-full object-cover object-center"
              />
            </Link>

            <Link
              href="/"
              onClick={handleLogoClick}
              className="group flex h-12 w-fit items-center transition-colors duration-300 ease-in-out hover:text-[var(--accent-green)]"
              aria-label="Back to homepage"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 900 320"
                className="site-logo-mark h-[26px] w-auto text-[#e6e8e8] transition-colors duration-300 ease-in-out group-hover:text-[var(--accent-green)] sm:h-[28px]"
                fill="none"
              >
                <path
                  className="site-logo-path"
                  d="M70 240C150 235, 220 190, 300 110C315 95, 328 90, 338 96C346 101, 351 114, 352 136C354 162, 358 185, 366 196C373 205, 383 204, 395 192L480 107C492 95, 503 92, 511 98C518 103, 522 117, 523 139C524 165, 528 188, 536 201C543 211, 553 210, 565 196L730 35"
                  pathLength="1"
                  stroke="currentColor"
                  strokeWidth="18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="site-logo-path"
                  d="M693 41L730 35L724 72"
                  pathLength="1"
                  stroke="currentColor"
                  strokeWidth="18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <nav
            aria-label="Primary"
            className="flex min-h-12 flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm text-muted sm:gap-x-7 md:gap-x-8"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={[
                    "group relative inline-flex h-6 items-center pr-[1px] transition-colors duration-300 ease-in-out hover:text-[var(--accent-green)]",
                    isActive ? "text-foreground" : "text-muted",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute bottom-[-2px] left-0 h-px w-full origin-left bg-current transition-transform duration-300 ease-in-out",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
