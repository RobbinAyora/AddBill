"use client";

const COLORS = {
  dark: "#0F2D52",
  yellow: "#4FA9FF",
  light: "#E5E7EB",
  gray: "#D1D5DB",
};

/* ---------- Scene 1: Cost Estimation & Budgeting (Calculator + Rising Bar Chart) ---------- */
function CostEstimationScene() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0" y="270" width="400" height="10" fill={COLORS.gray} />

      {/* Desk surface */}
      <rect x="60" y="200" width="280" height="6" fill={COLORS.gray} opacity="0.5" />

      {/* Calculator */}
      <g transform="translate(70,120)">
        <rect x="0" y="0" width="70" height="90" rx="6" fill={COLORS.dark} />
        <rect x="8" y="10" width="54" height="18" rx="2" fill={COLORS.light} />
        <g fill={COLORS.yellow}>
          <rect x="8" y="36" width="12" height="10" rx="2" />
          <rect x="24" y="36" width="12" height="10" rx="2" />
          <rect x="40" y="36" width="12" height="10" rx="2" />
          <rect x="8" y="50" width="12" height="10" rx="2" />
          <rect x="24" y="50" width="12" height="10" rx="2" />
          <rect x="40" y="50" width="12" height="10" rx="2" />
          <rect x="8" y="64" width="12" height="10" rx="2" />
          <rect x="24" y="64" width="12" height="10" rx="2" />
          <rect x="40" y="64" width="12" height="10" rx="2" style={{ animation: "keyPress 2s ease-in-out infinite" }} />
        </g>
      </g>

      {/* Rising bar chart */}
      <g transform="translate(200,0)">
        <rect x="0" y="200" width="26" height="0" fill={COLORS.yellow} style={{ animation: "bar1 3s ease-in-out infinite" }} />
        <rect x="34" y="200" width="26" height="0" fill={COLORS.dark} style={{ animation: "bar2 3s ease-in-out infinite" }} />
        <rect x="68" y="200" width="26" height="0" fill={COLORS.yellow} style={{ animation: "bar3 3s ease-in-out infinite" }} />
        <rect x="102" y="200" width="26" height="0" fill={COLORS.dark} style={{ animation: "bar4 3s ease-in-out infinite" }} />
        <line x1="0" y1="200" x2="128" y2="200" stroke={COLORS.gray} strokeWidth="2" />
      </g>

      {/* Label */}
      <g style={{ animation: "labelSlideLeft 0.7s ease-out 0.3s both" }}>
        <text x="30" y="45" fontSize="24" fontWeight="700" fill={COLORS.dark} fontFamily="sans-serif">
          Cost Estimation
        </text>
        <text x="30" y="75" fontSize="24" fontWeight="700" fill={COLORS.yellow} fontFamily="sans-serif" stroke={COLORS.dark} strokeWidth="0.5">
          &amp; Budgeting
        </text>
      </g>

      <style>{`
        @keyframes keyPress { 0%,100% { transform: translateY(0); } 50% { transform: translateY(2px); } }
        @keyframes bar1 { 0%,15% { height: 0; y: 200; } 40%,100% { height: 50px; y: 150; } }
        @keyframes bar2 { 0%,25% { height: 0; y: 200; } 50%,100% { height: 75px; y: 125; } }
        @keyframes bar3 { 0%,35% { height: 0; y: 200; } 60%,100% { height: 95px; y: 105; } }
        @keyframes bar4 { 0%,45% { height: 0; y: 200; } 70%,100% { height: 65px; y: 135; } }
        @keyframes labelSlideLeft {
          from { opacity: 0; transform: translateX(-25px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </svg>
  );
}

/* ---------- Scene 2: Tendering & Procurement (Documents + Handshake/Selection) ---------- */
function TenderingScene() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0" y="270" width="400" height="10" fill={COLORS.gray} />

      {/* Stack of tender documents */}
      <g transform="translate(230,150)">
        <rect x="0" y="20" width="80" height="100" rx="4" fill={COLORS.light} stroke={COLORS.dark} strokeWidth="2" />
        <rect x="-10" y="10" width="80" height="100" rx="4" fill={COLORS.light} stroke={COLORS.dark} strokeWidth="2" style={{ animation: "docShift 3s ease-in-out infinite" }} />
        <line x1="2" y1="30" x2="62" y2="30" stroke={COLORS.dark} strokeWidth="2" opacity="0.5" />
        <line x1="2" y1="42" x2="62" y2="42" stroke={COLORS.dark} strokeWidth="2" opacity="0.5" />
        <line x1="2" y1="54" x2="50" y2="54" stroke={COLORS.dark} strokeWidth="2" opacity="0.5" />
      </g>

      {/* Magnifying glass evaluating bids */}
      <g style={{ animation: "magnifyMove 3s ease-in-out infinite" }}>
        <circle cx="140" cy="150" r="30" fill="none" stroke={COLORS.yellow} strokeWidth="6" />
        <line x1="162" y1="172" x2="185" y2="195" stroke={COLORS.yellow} strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Checkmark stamp appearing */}
      <g style={{ animation: "stampAppear 3s ease-in-out infinite" }} transform="translate(120,80)">
        <circle cx="0" cy="0" r="22" fill="none" stroke={COLORS.dark} strokeWidth="3" />
        <path d="M -10 0 L -2 8 L 12 -10" stroke={COLORS.dark} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Label */}
      <g style={{ animation: "labelSlideUp 0.7s ease-out 0.3s both" }}>
        <text x="30" y="230" fontSize="26" fontWeight="700" fill={COLORS.dark} fontFamily="sans-serif">
          Tendering &amp;
        </text>
        <text x="30" y="260" fontSize="26" fontWeight="700" fill={COLORS.yellow} fontFamily="sans-serif" stroke={COLORS.dark} strokeWidth="0.5">
          Procurement
        </text>
      </g>

      <style>{`
        @keyframes docShift { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-6px,-4px); } }
        @keyframes magnifyMove { 0%,20% { transform: translate(0,0); } 50% { transform: translate(40px,10px); } 80%,100% { transform: translate(0,0); } }
        @keyframes stampAppear { 0%,30% { opacity: 0; transform: scale(0.6); } 55%,80% { opacity: 1; transform: scale(1); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes labelSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </svg>
  );
}

/* ---------- Scene 3: Contract Administration (Signing + Clipboard Checklist) ---------- */
function ContractAdminScene() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0" y="270" width="400" height="10" fill={COLORS.gray} />

      {/* Clipboard */}
      <g transform="translate(50,90)">
        <rect x="0" y="0" width="110" height="150" rx="6" fill={COLORS.light} stroke={COLORS.dark} strokeWidth="2" />
        <rect x="35" y="-10" width="40" height="20" rx="4" fill={COLORS.dark} />
        <g style={{ animation: "checkItem1 3s ease-in-out infinite" }}>
          <rect x="14" y="26" width="14" height="14" rx="2" fill="none" stroke={COLORS.dark} strokeWidth="2" />
          <path d="M 16 33 L 20 37 L 27 28" stroke={COLORS.yellow} strokeWidth="2.5" fill="none" />
        </g>
        <line x1="36" y1="33" x2="96" y2="33" stroke={COLORS.dark} strokeWidth="2" opacity="0.4" />

        <g style={{ animation: "checkItem2 3s ease-in-out infinite 0.6s" }}>
          <rect x="14" y="56" width="14" height="14" rx="2" fill="none" stroke={COLORS.dark} strokeWidth="2" />
          <path d="M 16 63 L 20 67 L 27 58" stroke={COLORS.yellow} strokeWidth="2.5" fill="none" />
        </g>
        <line x1="36" y1="63" x2="96" y2="63" stroke={COLORS.dark} strokeWidth="2" opacity="0.4" />

        <g style={{ animation: "checkItem3 3s ease-in-out infinite 1.2s" }}>
          <rect x="14" y="86" width="14" height="14" rx="2" fill="none" stroke={COLORS.dark} strokeWidth="2" />
          <path d="M 16 93 L 20 97 L 27 88" stroke={COLORS.yellow} strokeWidth="2.5" fill="none" />
        </g>
        <line x1="36" y1="93" x2="96" y2="93" stroke={COLORS.dark} strokeWidth="2" opacity="0.4" />
      </g>

      {/* Pen signing a contract */}
      <g transform="translate(210,190)">
        <rect x="0" y="0" width="130" height="70" rx="4" fill={COLORS.light} stroke={COLORS.dark} strokeWidth="2" />
        <path d="M 15 45 Q 35 20 55 45 T 95 45" stroke={COLORS.dark} strokeWidth="2" fill="none" opacity="0.6" />
        <g style={{ animation: "penMove 2.5s ease-in-out infinite" }}>
          <line x1="90" y1="10" x2="115" y2="45" stroke={COLORS.yellow} strokeWidth="6" strokeLinecap="round" />
        </g>
      </g>

      {/* Label */}
      <g style={{ animation: "labelSlideRight 0.7s ease-out 0.3s both" }}>
        <text x="200" y="60" fontSize="24" fontWeight="700" fill={COLORS.dark} fontFamily="sans-serif">
          Contract
        </text>
        <text x="200" y="90" fontSize="24" fontWeight="700" fill={COLORS.yellow} fontFamily="sans-serif" stroke={COLORS.dark} strokeWidth="0.5">
          Administration
        </text>
      </g>

      <style>{`
        @keyframes checkItem1 { 0%,15% { opacity: 0; } 35%,100% { opacity: 1; } }
        @keyframes checkItem2 { 0%,35% { opacity: 0; } 55%,100% { opacity: 1; } }
        @keyframes checkItem3 { 0%,55% { opacity: 0; } 75%,100% { opacity: 1; } }
        @keyframes penMove { 0%,100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(-15px,10px) rotate(-8deg); } }
        @keyframes labelSlideRight {
          from { opacity: 0; transform: translateX(25px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </svg>
  );
}

/* ---------- Scene 4: Project Valuation & Cost Control (Coins + Trending Graph) ---------- */
function ValuationScene() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0" y="270" width="400" height="10" fill={COLORS.gray} />

      {/* Coin stack growing */}
      <g transform="translate(80,0)">
        <ellipse cx="0" cy="260" rx="30" ry="9" fill={COLORS.dark} style={{ animation: "coin1 3s ease-in-out infinite" }} />
        <ellipse cx="0" cy="246" rx="30" ry="9" fill={COLORS.yellow} style={{ animation: "coin2 3s ease-in-out infinite" }} />
        <ellipse cx="0" cy="232" rx="30" ry="9" fill={COLORS.dark} style={{ animation: "coin3 3s ease-in-out infinite" }} />
        <ellipse cx="0" cy="218" rx="30" ry="9" fill={COLORS.yellow} style={{ animation: "coin4 3s ease-in-out infinite" }} />
      </g>

      {/* Trending line graph with magnifier for valuation review */}
      <g transform="translate(180,60)">
        <polyline points="0,150 40,110 80,130 120,70 160,40" fill="none" stroke={COLORS.yellow} strokeWidth="4" strokeLinecap="round" style={{ strokeDasharray: 320, strokeDashoffset: 320, animation: "drawLine 2.5s ease-out infinite" }} />
        <circle cx="160" cy="40" r="6" fill={COLORS.dark} style={{ animation: "dotPulse 2.5s ease-out infinite" }} />
      </g>

      {/* Magnifying glass reviewing figures */}
      <g style={{ animation: "magnifyBounce 3s ease-in-out infinite" }} transform="translate(300,90)">
        <circle cx="0" cy="0" r="22" fill="none" stroke={COLORS.dark} strokeWidth="5" />
        <line x1="16" y1="16" x2="34" y2="34" stroke={COLORS.dark} strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Label */}
      <g style={{ animation: "labelSlideDown 0.7s ease-out 0.3s both" }}>
        <text x="30" y="55" fontSize="22" fontWeight="700" fill={COLORS.dark} fontFamily="sans-serif">
          Project Valuation
        </text>
        <text x="30" y="82" fontSize="22" fontWeight="700" fill={COLORS.yellow} fontFamily="sans-serif" stroke={COLORS.dark} strokeWidth="0.5">
          &amp; Cost Control
        </text>
      </g>

      <style>{`
        @keyframes coin1 { 0%,10% { opacity: 0; transform: translateY(20px); } 30%,100% { opacity: 1; transform: translateY(0); } }
        @keyframes coin2 { 0%,25% { opacity: 0; transform: translateY(20px); } 45%,100% { opacity: 1; transform: translateY(0); } }
        @keyframes coin3 { 0%,40% { opacity: 0; transform: translateY(20px); } 60%,100% { opacity: 1; transform: translateY(0); } }
        @keyframes coin4 { 0%,55% { opacity: 0; transform: translateY(20px); } 75%,100% { opacity: 1; transform: translateY(0); } }
        @keyframes drawLine { 0% { stroke-dashoffset: 320; } 60%,100% { stroke-dashoffset: 0; } }
        @keyframes dotPulse { 0%,55% { opacity: 0; } 65% { opacity: 1; transform: scale(1.4); } 80%,100% { opacity: 1; transform: scale(1); } }
        @keyframes magnifyBounce { 0%,100% { transform: translate(300px,90px) scale(1); } 50% { transform: translate(295px,85px) scale(1.08); } }
        @keyframes labelSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </svg>
  );
}

const scenes = [CostEstimationScene, TenderingScene, ContractAdminScene, ValuationScene];

export default function ServicesAnimation({ activeIndex }: { activeIndex: number }) {
  const ActiveScene = scenes[activeIndex] ?? scenes[0];

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div key={activeIndex} className="w-full max-w-md animate-fadeIn">
        <ActiveScene />
      </div>
      <style>{`
        @keyframes fadeInScene {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeInScene 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}