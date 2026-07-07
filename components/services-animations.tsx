"use client";

const COLORS = {
  dark: "#2C2C2C",
  yellow: "#FFC72C",
  light: "#E5E7EB",
  gray: "#D1D5DB",
};

/* ---------- Scene 1: General Contracting (Crane + Skyscraper) ---------- */
function GeneralContractingScene() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0" y="270" width="400" height="10" fill={COLORS.gray} />
      <rect x="150" y="170" width="80" height="100" fill={COLORS.light} stroke={COLORS.dark} strokeWidth="2" />
      <g fill={COLORS.dark} opacity="0.5">
        <rect x="160" y="185" width="12" height="12" />
        <rect x="182" y="185" width="12" height="12" />
        <rect x="204" y="185" width="12" height="12" />
        <rect x="160" y="210" width="12" height="12" />
        <rect x="182" y="210" width="12" height="12" />
        <rect x="204" y="210" width="12" height="12" />
        <rect x="160" y="235" width="12" height="12" />
        <rect x="182" y="235" width="12" height="12" />
        <rect x="204" y="235" width="12" height="12" />
      </g>
      <g stroke={COLORS.dark} strokeWidth="3" fill="none">
        <rect x="150" y="140" width="80" height="30" />
        <line x1="150" y1="140" x2="150" y2="170" />
        <line x1="175" y1="140" x2="175" y2="170" />
        <line x1="200" y1="140" x2="200" y2="170" />
        <line x1="230" y1="140" x2="230" y2="170" />
      </g>
      <rect x="60" y="30" width="10" height="240" fill={COLORS.dark} />
      <rect x="42" y="264" width="46" height="12" rx="2" fill={COLORS.dark} />
      <g style={{ transformOrigin: "65px 28px", animation: "gcSwing 3s ease-in-out infinite" }}>
        <rect x="65" y="24" width="180" height="8" rx="3" fill={COLORS.yellow} />
        <line x1="185" y1="32" x2="185" y2="130" stroke={COLORS.dark} strokeWidth="1.5" />
      </g>
      <g style={{ animation: "gcBeam 3s ease-in-out infinite" }}>
        <rect x="160" y="130" width="60" height="8" rx="2" fill={COLORS.yellow} stroke={COLORS.dark} strokeWidth="1.5" />
      </g>

      {/* Label: top-left, slides in from left */}
      <g style={{ animation: "labelSlideLeft 0.7s ease-out 0.3s both" }}>
        <text x="30" y="45" fontSize="26" fontWeight="700" fill={COLORS.dark} fontFamily="sans-serif">
          General
        </text>
        <text x="30" y="75" fontSize="26" fontWeight="700" fill={COLORS.yellow} fontFamily="sans-serif" stroke={COLORS.dark} strokeWidth="0.5">
          Contracting
        </text>
      </g>

      <style>{`
        @keyframes gcSwing { 0%,100% { transform: rotate(-6deg); } 50% { transform: rotate(4deg); } }
        @keyframes gcBeam { 0%,20% { transform: translateY(0); } 50% { transform: translateY(35px); } 80%,100% { transform: translateY(0); } }
        @keyframes labelSlideLeft {
          from { opacity: 0; transform: translateX(-25px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </svg>
  );
}

/* ---------- Scene 2: Excavation ---------- */
function ExcavationScene() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0" y="270" width="400" height="10" fill={COLORS.gray} />
      <path d="M 100 270 Q 200 250 300 270 L 300 280 L 100 280 Z" fill={COLORS.dark} opacity="0.15" />
      <g transform="translate(140,150)">
        <rect x="0" y="60" width="90" height="35" rx="6" fill={COLORS.yellow} />
        <circle cx="20" cy="98" r="16" fill={COLORS.dark} />
        <circle cx="70" cy="98" r="16" fill={COLORS.dark} />
        <rect x="15" y="35" width="35" height="28" rx="4" fill={COLORS.dark} />
        <g style={{ transformOrigin: "50px 45px", animation: "excArm 2.5s ease-in-out infinite" }}>
          <rect x="48" y="20" width="55" height="9" rx="3" fill={COLORS.dark} />
          <rect x="95" y="26" width="9" height="24" rx="2" fill={COLORS.dark} />
          <path d="M 98 50 Q 112 55 104 68 L 90 62 Z" fill={COLORS.dark} />
        </g>
      </g>
      <circle cx="270" cy="266" r="4" fill={COLORS.gray} opacity="0.6" style={{ animation: "dust 3s ease-in-out infinite" }} />
      <circle cx="290" cy="266" r="5" fill={COLORS.gray} opacity="0.5" style={{ animation: "dust 3s ease-in-out infinite 1s" }} />

      {/* Label: bottom-right, slides up */}
      <g style={{ animation: "labelSlideUp 0.7s ease-out 0.3s both" }}>
        <text x="230" y="230" fontSize="30" fontWeight="700" fill={COLORS.dark} fontFamily="sans-serif">
          Excavation
        </text>
      </g>

      <style>{`
        @keyframes excArm { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-18deg); } }
        @keyframes dust { 0% { opacity:0; transform: translateY(0) scale(0.8);} 50% { opacity:0.6; transform: translateY(-6px) scale(1.1);} 100% { opacity:0; transform: translateY(-10px) scale(1.3);} }
        @keyframes labelSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </svg>
  );
}

/* ---------- Scene 3: Foundation (Concrete Mixer Pouring) ---------- */
function FoundationScene() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0" y="270" width="400" height="10" fill={COLORS.gray} />
      <rect x="180" y="245" width="140" height="25" fill={COLORS.light} stroke={COLORS.dark} strokeWidth="2" />
      <g transform="translate(30,140)">
        <rect x="0" y="60" width="85" height="38" rx="4" fill={COLORS.dark} />
        <rect x="-28" y="75" width="32" height="23" rx="3" fill={COLORS.yellow} />
        <g style={{ transformOrigin: "52px 48px", animation: "mixerSpin 2s linear infinite" }}>
          <ellipse cx="52" cy="48" rx="28" ry="26" fill={COLORS.yellow} stroke={COLORS.dark} strokeWidth="3" />
          <line x1="52" y1="22" x2="52" y2="74" stroke={COLORS.dark} strokeWidth="2" />
          <line x1="26" y1="48" x2="78" y2="48" stroke={COLORS.dark} strokeWidth="2" />
        </g>
        <circle cx="-8" cy="100" r="11" fill={COLORS.dark} />
        <circle cx="35" cy="100" r="11" fill={COLORS.dark} />
        <circle cx="70" cy="100" r="11" fill={COLORS.dark} />
      </g>
      <path d="M 118 200 Q 150 220 180 245" stroke={COLORS.gray} strokeWidth="5" fill="none" style={{ animation: "pour 1.5s ease-in-out infinite" }} />

      {/* Label: top-right, slides in from right */}
      <g style={{ animation: "labelSlideRight 0.7s ease-out 0.3s both" }}>
        <text x="240" y="50" fontSize="28" fontWeight="700" fill={COLORS.dark} fontFamily="sans-serif">
          Foundation
        </text>
      </g>

      <style>{`
        @keyframes mixerSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pour { 0%,100% { opacity: 0.9; } 50% { opacity: 0.4; } }
        @keyframes labelSlideRight {
          from { opacity: 0; transform: translateX(25px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </svg>
  );
}

/* ---------- Scene 4: Roofing ---------- */
function RoofingScene() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect x="0" y="270" width="400" height="10" fill={COLORS.gray} />
      <rect x="130" y="180" width="140" height="90" fill={COLORS.light} stroke={COLORS.dark} strokeWidth="2" />
      <polygon points="115,180 200,110 285,180" fill={COLORS.dark} />
      <g style={{ animation: "shingle1 3s ease-in-out infinite" }}>
        <polygon points="140,172 200,122 200,140 155,180" fill={COLORS.yellow} opacity="0.9" />
      </g>
      <g style={{ animation: "shingle2 3s ease-in-out infinite 0.4s" }}>
        <polygon points="200,122 260,172 245,180 200,140" fill={COLORS.yellow} opacity="0.9" />
      </g>
      <g transform="translate(195,120)">
        <circle cx="0" cy="0" r="8" fill={COLORS.dark} />
        <rect x="-5" y="6" width="10" height="18" fill={COLORS.yellow} />
        <g style={{ transformOrigin: "8px 10px", animation: "hammer 1s ease-in-out infinite" }}>
          <rect x="6" y="4" width="4" height="16" fill={COLORS.dark} />
        </g>
      </g>

      {/* Label: bottom-left, slides down into place */}
      <g style={{ animation: "labelSlideDown 0.7s ease-out 0.3s both" }}>
        <text x="30" y="250" fontSize="30" fontWeight="700" fill={COLORS.dark} fontFamily="sans-serif">
          Roofing
        </text>
      </g>

      <style>{`
        @keyframes shingle1 { 0%,20% { opacity: 0; } 40%,100% { opacity: 0.9; } }
        @keyframes shingle2 { 0%,40% { opacity: 0; } 60%,100% { opacity: 0.9; } }
        @keyframes hammer { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-40deg); } }
        @keyframes labelSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </svg>
  );
}

const scenes = [GeneralContractingScene, ExcavationScene, FoundationScene, RoofingScene];

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