import type { Metadata } from "next";
import { ProjectLayout } from "@/components/project-layout";

const title = "Legalisering.se | Marcus Wiman";
const description =
  "An ongoing freelance UX and product design assignment for Legalisering.se / Alla Visum, including guided ordering and an interactive frontend prototype.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function LegaliseringPage() {
  return (
    <ProjectLayout
      title="Legalisering.se"
      status="Ongoing freelance client work · Autumn 2026 · Prototype stage"
      description="UX and product design for Legalisering.se / Alla Visum, helping customers understand document legalisation requirements and order the right service."
    >
      <section className="max-w-[46rem]">
        <h2 className="mb-3 text-2xl font-semibold tracking-[-0.025em] text-foreground">
          The problem
        </h2>
        <p>
          Customers need to understand which service applies to their documents,
          what it costs, and how to proceed. Uncertainty around those steps
          creates a need for manual support.
        </p>
      </section>
      <section className="max-w-[46rem]">
        <h2 className="mb-3 text-2xl font-semibold tracking-[-0.025em] text-foreground">
          My role
        </h2>
        <p>
          As Freelance UX/UI &amp; Product Designer, I lead the design work from
          research, competitor analysis, and stakeholder interviews to customer
          journeys, information architecture, and interaction design.
        </p>
        <p className="mt-4">
          I translate business rules into user flows and build interactive
          prototypes with frontend code, working with the client and developers.
          The design is mobile-first with accessibility in mind.
        </p>
      </section>
      <section className="max-w-[46rem]">
        <h2 className="mb-3 text-2xl font-semibold tracking-[-0.025em] text-foreground">
          Current progress
        </h2>
        <p>
          An interactive prototype covers five countries and different
          legalisation scenarios, with service packages, price overviews, and
          the steps required to order.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Guided ordering for customers who need help choosing a service.
          </li>
          <li>AI-assisted guidance as an alternative route.</li>
          <li>Direct ordering for customers who know what they need.</li>
        </ul>
      </section>
      <section className="max-w-[46rem]">
        <h2 className="mb-3 text-2xl font-semibold tracking-[-0.025em] text-foreground">
          Project goal
        </h2>
        <p>
          Increase self-service, improve online conversion, and reduce
          unnecessary customer support. These are project goals, rather than
          measured results from a launched service.
        </p>
      </section>
    </ProjectLayout>
  );
}
