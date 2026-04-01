import { AnimatedSection } from "@/components/animated-section";
import { EventCard } from "@/components/event-card";
import { SiteFooter } from "@/components/site-footer";
import { WorkCard } from "@/components/work-card";
import { getEventEntries, getWorkEntries } from "@/lib/content";

export default async function Home() {
  const [workHighlights, events] = await Promise.all([
    getWorkEntries(),
    getEventEntries(),
  ]);

  const featuredWork = workHighlights.slice(0, 2);
  const featuredEvents = events.slice(0, 2);
  const totalYears = new Date().getFullYear() - 2013;

  return (
    <main className="site-shell">
      <section className="hero-bento" aria-labelledby="hero-title">
        <div className="bento-card bento-intro">
          <p className="kicker">From idea to production, responsibly</p>
          <h1 id="hero-title">Ambitious AI ideas, delivered as dependable products.</h1>
          <div className="hero-cta-row">
            <a className="btn-primary" href="https://www.linkedin.com/in/-jaswanth/" target="_blank" rel="noreferrer">
              Start a thoughtful conversation
            </a>
            <a className="btn-secondary" href="#events">
              Talks and events
            </a>
          </div>
        </div>

        <div className="bento-card bento-profile">
          <p className="rail-label">Profile Snapshot</p>
          <p className="rail-value">Engineering Leader</p>
          <p className="note-text">
            I focus on practical innovation: strong engineering foundations, measurable quality,
            and teams that move quickly without cutting corners. I care about outcomes, but also
            how we get there: transparent decisions, inclusive collaboration, and technology that
            earns user trust.
          </p>
        </div>

        <div className="bento-card bento-chip bento-focus">
          <p className="rail-label">Focus</p>
          <p className="rail-value">AI Platform · Quality · Web · Mobile</p>
        </div>

        <div className="bento-card bento-chip bento-years">
          <p className="rail-label">Experience</p>
          <p className="rail-value">{totalYears}+ years</p>
        </div>

        <div className="bento-card bento-note">
          <p className="note-title">Principles</p>
          <p className="note-text">Trust over buzz. Craft over shortcuts.</p>
        </div>
      </section>

      <AnimatedSection id="work" title="Selected Work" subtitle="Two highlights from larger case studies.">
        <div className="work-grid">
          {featuredWork.map((item, index) => (
            <div key={item.title} className={`work-slot work-slot-${(index % 6) + 1}`}>
              <WorkCard item={item} />
            </div>
          ))}
        </div>
        <p className="section-link-row">
          <a className="section-link" href="/work">See all work case studies</a>
        </p>
      </AnimatedSection>

      <AnimatedSection id="events" title="Speaking" subtitle="Recent talks and sessions from conferences.">
        <div className="events-grid">
          {featuredEvents.map((event, index) => (
            <div key={event.title} className={`event-slot event-slot-${(index % 5) + 1}`}>
              <EventCard item={event} />
            </div>
          ))}
        </div>
        <p className="section-link-row">
          <a className="section-link" href="/speaking">View all talks and events</a>
        </p>
      </AnimatedSection>

      <SiteFooter />
    </main>
  );
}
