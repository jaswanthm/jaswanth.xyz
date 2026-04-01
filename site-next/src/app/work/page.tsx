import { AnimatedSection } from "@/components/animated-section";
import { SiteFooter } from "@/components/site-footer";
import { WorkCard } from "@/components/work-card";
import { getWorkEntries } from "@/lib/content";

export default async function WorkPage() {
  const workHighlights = await getWorkEntries();

  return (
    <main className="site-shell page-shell">
      <section className="page-intro">
        <p className="kicker">Work</p>
        <h1>Case studies across AI delivery, platform reliability, and quality.</h1>
        <p>
          Detailed stories of systems shipped, teams grown, and outcomes delivered.
        </p>
      </section>

      <AnimatedSection
        id="work-list"
        title="All Work"
        subtitle="Each card expands with context, scope, and execution details."
      >
        <div className="work-grid">
          {workHighlights.map((item, index) => (
            <div key={item.title} className={`work-slot work-slot-${(index % 6) + 1}`}>
              <WorkCard item={item} />
            </div>
          ))}
        </div>
      </AnimatedSection>

      <SiteFooter />
    </main>
  );
}
