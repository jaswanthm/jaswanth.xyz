import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <main className="site-shell page-shell">
      <section className="page-intro">
        <p className="kicker">About</p>
        <h1>Builder mindset. Product pace. Quality discipline.</h1>
        <p>
          I lead engineering teams that deliver ambitious product goals without trading off trust,
          maintainability, or execution velocity.
        </p>
      </section>

      <section className="about-grid" aria-label="About details">
        <article className="about-card">
          <h2>How I lead</h2>
          <p>
            I combine systems thinking with pragmatic delivery. Teams get clear architecture,
            measurable quality bars, and room to experiment responsibly.
          </p>
        </article>

        <article className="about-card">
          <h2>What I focus on</h2>
          <p>
            GenAI product engineering, platform reliability, modern quality strategy, and high-impact
            mobile/web experiences.
          </p>
        </article>

        <article className="about-card">
          <h2>Ways to collaborate</h2>
          <p>
            Engineering leadership roles, fractional advisory for scaling teams, and speaking
            opportunities around AI and quality.
          </p>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
