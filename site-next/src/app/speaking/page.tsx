import { AnimatedSection } from "@/components/animated-section";
import { EventCard } from "@/components/event-card";
import { SiteFooter } from "@/components/site-footer";
import { getEventEntries } from "@/lib/content";

export default async function SpeakingPage() {
  const events = await getEventEntries();
  const featuredEvents = events.slice(0, 3);

  const groupedByYear = events.reduce<Record<string, typeof events>>((acc, event) => {
    if (!acc[event.year]) {
      acc[event.year] = [];
    }
    acc[event.year].push(event);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <main className="site-shell page-shell">
      <section className="page-intro">
        <p className="kicker">Speaking</p>
        <h1>Conference talks, keynotes, and sessions with practical takeaways.</h1>
        <p>
          A focused view of talks and workshops across quality, AI engineering, and product delivery.
        </p>
      </section>

      <AnimatedSection
        id="featured-events"
        title="Featured Talks"
        subtitle="Recent talks with visual highlights."
      >
        <div className="events-grid">
          {featuredEvents.map((event, index) => (
            <div key={event.title} className={`event-slot event-slot-${(index % 5) + 1}`}>
              <EventCard item={event} />
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="speaking-timeline"
        title="Speaking Timeline"
        subtitle="A complete timeline of talks, panels, podcasts, and community sessions."
      >
        <div className="timeline-wrap" role="list" aria-label="Speaking timeline by year">
          {years.map((year) => (
            <section key={year} className="timeline-year" role="listitem" aria-label={`Events from ${year}`}>
              <h3>{year}</h3>
              <ul className="timeline-list">
                {groupedByYear[year].map((event) => (
                  <li key={event.slug} className="timeline-item">
                    <div className="timeline-item-head">
                      <p className="timeline-topic">{event.title}</p>
                      <span className="timeline-event">{event.event}</span>
                    </div>
                    <p className="timeline-link-row">
                      <a href={event.link} target="_blank" rel="noreferrer">
                        Open recording or event link
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </AnimatedSection>

      <SiteFooter />
    </main>
  );
}
