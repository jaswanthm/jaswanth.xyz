import { CheckoutButton } from "@/components/paddle-checkout";
import { SiteFooter } from "@/components/site-footer";

const outcomes = [
  "Build a GenAI agent from scratch",
  "Connect tools and MCP servers",
  "Test agent behaviour with confidence",
  "Automate evaluations in CI",
];

const curriculum = [
  "Agent architecture and foundational setup",
  "Reliable tool calling and MCP servers",
  "Multi-agent workflows and application integration",
  "Agent testing and evaluation design",
  "Automated evaluations and production readiness",
];

const audience = [
  "Software developers exploring GenAI applications",
  "Backend and full-stack developers adding agentic features",
  "Technical leads evaluating agents for production systems",
];

export default function Home() {
  return (
    <main>
      <section className="course-hero">
        <div className="hero-copy">
          <p className="eyebrow">Live online course for developers</p>
          <h1>Building and Testing GenAI Agents</h1>
          <p className="hero-lead">
            Build a production-minded AI agent and learn how to test it with
            confidence—from tools and MCP to evaluations in CI.
          </p>
          <div className="hero-actions">
            <CheckoutButton />
            <p>
              <strong>₹15,000 INR</strong>
              <span>One-time payment · No subscription</span>
            </p>
          </div>
          <p className="checkout-note">
            Secure checkout and payment receipt provided by Paddle.
          </p>
        </div>

        <div className="system-preview" aria-label="Course application architecture">
          <div className="preview-header">
            <span>agent-system.ts</span>
            <i aria-hidden="true">Live course</i>
          </div>
          <div className="system-flow">
            <div>
              <small>01</small>
              <strong>Application</strong>
              <span>UI + API</span>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <small>02</small>
              <strong>Agent</strong>
              <span>Prompt + tools</span>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <small>03</small>
              <strong>Evaluation</strong>
              <span>Test + ship</span>
            </div>
          </div>
          <div className="preview-status">
            <span><i aria-hidden="true" /> Agent ready</span>
            <span>Evaluation passed ✓</span>
          </div>
        </div>
      </section>

      <div className="course-main">
        <section className="home-section" id="course">
          <p className="section-label">What you will learn</p>
          <h2>One practical journey through the agent stack.</h2>
          <div className="outcomes">
            {outcomes.map((outcome) => (
              <div key={outcome}>
                <span aria-hidden="true">✓</span>
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section" id="curriculum">
          <p className="section-label">Course outline</p>
          <h2>Build, integrate, test, and ship.</h2>
          <ol className="curriculum">
            {curriculum.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
          <p className="section-note">
            Ten guided lessons combine explanation, live demonstrations, and
            prepared code you can run and extend.
          </p>
        </section>

        <section className="home-section fit-section">
          <div>
            <p className="section-label">Who it is for</p>
            <h2>Developers ready to go beyond the demo.</h2>
          </div>
          <ul>
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            You should be comfortable reading and running code. Familiarity with
            APIs is useful. A model API key is optional.
          </p>
        </section>

        <section className="buy-section" id="purchase">
          <div>
            <p className="section-label">Course access</p>
            <h2>Turn AI curiosity into engineering confidence.</h2>
            <p>
              Complete the one-time payment through Paddle. Your Paddle receipt
              is your proof of purchase, and course delivery is handled separately.
            </p>
          </div>
          <div className="buy-card">
            <p>One-time payment</p>
            <strong>₹15,000 <span>INR</span></strong>
            <CheckoutButton />
            <small>No renewal or recurring charge.</small>
          </div>
        </section>

        <SiteFooter />
      </div>

      <div className="mobile-purchase">
        <div>
          <strong>₹15,000 INR</strong>
          <span>One-time</span>
        </div>
        <CheckoutButton className="mobile-purchase-button">Get access</CheckoutButton>
      </div>
    </main>
  );
}
