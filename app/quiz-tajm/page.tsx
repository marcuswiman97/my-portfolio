import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLayout } from "@/components/project-layout";

const title = "Quiz Tajm | Marcus Wiman";
const description =
  "A published vanilla JavaScript quiz, originally developed as group coursework and individually extended with modern frontend tooling, API integration and UX improvements.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

const projectLinks: { github: string | null; demo: string | null } = {
  github: "https://github.com/marcuswiman97/quiztajm-vite",
  demo: "https://quiztajm-vite.vercel.app",
};

export default function QuizTajmPage() {
  return (
    <ProjectLayout
      title="Quiz Tajm"
      status="Published · Individual development · 2026"
      description="Choose a theme, answer ten questions, and see your score. A vanilla JavaScript quiz using Open Trivia DB."
    >
      <figure>
        <Image
          src="/images/quiz-tajm-preview.jpg"
          unoptimized
          loading="eager"
          alt="Quiz Tajm start screen with three themes and a start button"
          width={1000}
          height={850}
          className="h-auto w-full max-w-[46rem] rounded-md"
          sizes="(max-width: 767px) calc(100vw - 2rem), 736px"
        />
        <figcaption className="mt-3 text-sm text-muted">
          Quiz Tajm · Start screen
        </figcaption>
      </figure>
      <section className="max-w-[46rem]">
        <h2 className="mb-3 text-2xl font-semibold tracking-[-0.025em] text-foreground">
          My contribution
        </h2>
        <p>
          This started as group coursework at Chas Academy. I built the start
          screen, category selection, and its HTML/CSS. My responsibility later
          expanded to helping finish the question and result views with
          substantial AI support.
        </p>
      </section>
      <section className="max-w-[46rem]">
        <h2 className="mb-3 text-2xl font-semibold tracking-[-0.025em] text-foreground">
          Individual development
        </h2>
        <p>
          I continued the project individually, migrating it to Vite and
          introducing npm, ESLint, Prettier, and date-fns.
        </p>
        <p className="mt-4">
          The improvements include API caching, rate limiting, loading states,
          error handling, dynamic results, and persistent game history.
        </p>
        <p className="mt-4">
          The application is publicly available on Vercel, with its source code
          published on GitHub. The interface is in Swedish and the questions are
          in English.
        </p>
      </section>
      <section className="max-w-[46rem]">
        <h2 className="mb-3 text-2xl font-semibold tracking-[-0.025em] text-foreground">
          What I learned
        </h2>
        <p>
          This was my first experience of connecting JavaScript features into a
          larger application and working with branches and pull requests. With
          more time, I would work in smaller steps and write more of the
          JavaScript myself, making sure I could explain and test each part.
        </p>
      </section>
      {projectLinks.demo || projectLinks.github ? (
        <div className="flex flex-wrap gap-6">
          {projectLinks.demo ? (
            <a
              href={projectLinks.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-[var(--accent-green)] underline underline-offset-4"
            >
              Live demo<span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          {projectLinks.github ? (
            <a
              href={projectLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-[var(--accent-green)] underline underline-offset-4"
            >
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      ) : (
        <p className="text-sm text-muted">In development · Not published yet</p>
      )}
    </ProjectLayout>
  );
}
