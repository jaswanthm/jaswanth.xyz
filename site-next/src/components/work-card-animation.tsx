"use client";

import { motion } from "framer-motion";
import { WorkAnimationKey } from "@/lib/content";

type WorkCardAnimationProps = {
  animation: WorkAnimationKey;
};

function TaxiRouteAnimation() {
  const roadPath = "M-40 154 C 40 136, 96 126, 156 116 C 220 104, 286 96, 360 82";
  const routePath = "M44 136 C 94 118, 146 120, 194 102 C 232 90, 262 92, 286 87";

  return (
    <div className="work-animation work-animation-taxi" aria-hidden="true">
      <div className="ride-phone">
        <div className="ride-topbar">
          <span>13:43</span>
          <span className="ride-status" />
        </div>

        <div className="ride-map">
          <div className="ride-water-yarra" />
          <div className="ride-park-district" />
          <div className="ride-map-texture" />

          <svg className="ride-route-svg" viewBox="0 0 320 220" preserveAspectRatio="none">
            <g className="ride-road-network">
              <path d="M88 -80 L44 300" className="ride-road-major" />
              <path d="M-90 160 L430 62" className="ride-road-major" />
              <path d="M-84 214 L426 120" className="ride-road-major" />
              <path d="M-58 122 L404 34" className="ride-road-secondary" />
              <path d="M156 -76 L102 308" className="ride-road-secondary" />
            </g>

            <path d={roadPath} className="ride-road-edge" />
            <path d={roadPath} className="ride-road-path" />
            <path d={routePath} className="ride-route-line" />

            <g className="ride-stop ride-stop-pickup" transform="translate(44 136)">
              <circle r="10" />
              <text x="0" y="1" textAnchor="middle" dominantBaseline="middle">A</text>
            </g>
            <g className="ride-stop ride-stop-dropoff" transform="translate(286 87)">
              <circle r="10" />
              <text x="0" y="1" textAnchor="middle" dominantBaseline="middle">B</text>
            </g>

            <g className="ride-car-svg">
              <circle r="8" className="ride-car-shell" />
              <circle r="3.2" className="ride-car-core" />
              <animateMotion dur="5.4s" repeatCount="indefinite" rotate="auto" path={routePath} />
            </g>
          </svg>

          <div className="ride-eta-pill">8 min</div>
        </div>

        <motion.div
          className="ride-bottom-sheet"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="ride-destination">Heading to: Southbank Office</p>
          <p className="ride-sub">Pickup: Collins St · Driver arriving</p>
        </motion.div>
      </div>
    </div>
  );
}

function AiCoachChatAnimation() {
  return (
    <div className="work-animation work-animation-coach" aria-hidden="true">
      <div className="coach-studio">
        <div className="coach-topbar">
          <div>
            <span className="coach-logo">✦</span>
            <strong>AI Coach</strong>
          </div>
          <span className="coach-mode">Goal studio</span>
        </div>
        <div className="coach-canvas">
          <div className="coach-rail">
            <span className="is-active">✦</span>
            <span>◎</span>
            <span>↗</span>
          </div>
          <div className="coach-workspace">
            <div className="coach-context">
              <span>Focus</span>
              <p>Improve onboarding activation</p>
            </div>
            <div className="coach-goal-card">
              <div className="coach-goal-head">
                <span>Suggested goal</span>
                <i>Ready</i>
              </div>
              <strong>Lift activation to 55% by Q3</strong>
              <div className="coach-progress">
                <span><i /></span>
                <small>42% baseline</small>
                <small>55% target</small>
              </div>
              <div className="coach-signals">
                <span>✓ Measurable</span>
                <span>✓ Time-bound</span>
              </div>
            </div>
          </div>
        </div>
        <div className="coach-prompt">
          <span>Ask AI Coach to refine this goal</span>
          <i>↑</i>
        </div>
      </div>
    </div>
  );
}

export function WorkCardAnimation({ animation }: WorkCardAnimationProps) {
  if (animation === "taxi-route") {
    return <TaxiRouteAnimation />;
  }

  if (animation === "ai-coach-chat") {
    return <AiCoachChatAnimation />;
  }

  return null;
}
