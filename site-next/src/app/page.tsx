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
        <div className="bento-card hero-intro">
          <p className="kicker">AI engineering leadership</p>
          <h1 id="hero-title">AI ideas. Trusted products.</h1>
          <p className="hero-lead">
            Engineering leadership at the intersection of product pace, platform thinking, and quality.
          </p>
          <div className="hero-cta-row">
            <a className="btn-primary" href="/work">
              Explore my work
            </a>
            <a className="hero-text-link" href="https://www.linkedin.com/in/-jaswanth/" target="_blank" rel="noreferrer">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="bento-card hero-command" aria-label="Jarvis AI product interface">
          <div className="command-topbar">
            <div>
              <span className="command-mark" aria-hidden="true">J</span>
              <p>Jarvis AI</p>
            </div>
            <span className="command-status"><i aria-hidden="true" /> Online</span>
          </div>
          <div className="command-conversation">
            <div className="command-prompt">
              <span>You</span>
              <p>Turn this customer insight into a clear product decision.</p>
            </div>
            <div className="command-response">
              <span className="command-spark" aria-hidden="true">✦</span>
              <div>
                <span>Jarvis</span>
                <p>Prioritise a guided first-run experience and measure activation within seven days.</p>
              </div>
            </div>
          </div>
          <div className="command-footer">
            <span><i className="check-icon" aria-hidden="true">✓</i> Quality checked</span>
            <span><i className="ready-icon" aria-hidden="true" /> Ready to ship</span>
          </div>
        </div>

        <div className="bento-card hero-metric metric-experience">
          <strong>{totalYears}+</strong>
          <span>Years engineering</span>
        </div>

        <div className="bento-card hero-metric metric-focus">
          <strong>GenAI → Production</strong>
          <span>Current focus</span>
        </div>

        <div className="bento-card hero-metric metric-speaking">
          <strong>{Math.floor(events.length / 10) * 10}+</strong>
          <span>Talks and sessions</span>
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
