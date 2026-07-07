export default function ConstructionAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <svg
        viewBox="0 0 400 320"
        className="w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground */}
        <rect x="0" y="290" width="400" height="10" fill="#D1D5DB" />

        {/* --- Skyscraper (unfinished) --- */}
        {/* Completed lower floors */}
        <rect x="140" y="180" width="90" height="110" fill="#E5E7EB" stroke="#2C2C2C" strokeWidth="2" />
        {/* Windows on completed floors */}
        <g fill="#2C2C2C" opacity="0.5">
          <rect x="150" y="195" width="14" height="14" />
          <rect x="175" y="195" width="14" height="14" />
          <rect x="200" y="195" width="14" height="14" />
          <rect x="150" y="220" width="14" height="14" />
          <rect x="175" y="220" width="14" height="14" />
          <rect x="200" y="220" width="14" height="14" />
          <rect x="150" y="245" width="14" height="14" />
          <rect x="175" y="245" width="14" height="14" />
          <rect x="200" y="245" width="14" height="14" />
          <rect x="150" y="270" width="14" height="14" />
          <rect x="175" y="270" width="14" height="14" />
          <rect x="200" y="270" width="14" height="14" />
        </g>

        {/* Unfinished top floor - exposed steel frame */}
        <g stroke="#2C2C2C" strokeWidth="3" fill="none">
          <rect x="140" y="150" width="90" height="30" />
          <line x1="140" y1="150" x2="140" y2="180" />
          <line x1="165" y1="150" x2="165" y2="180" />
          <line x1="190" y1="150" x2="190" y2="180" />
          <line x1="215" y1="150" x2="215" y2="180" />
          <line x1="230" y1="150" x2="230" y2="180" />
        </g>

        {/* Scaffolding on the side */}
        <g stroke="#FFC72C" strokeWidth="2">
          <line x1="235" y1="150" x2="235" y2="290" />
          <line x1="245" y1="150" x2="245" y2="290" />
          <line x1="235" y1="160" x2="245" y2="160" />
          <line x1="235" y1="190" x2="245" y2="190" />
          <line x1="235" y1="220" x2="245" y2="220" />
          <line x1="235" y1="250" x2="245" y2="250" />
          <line x1="235" y1="280" x2="245" y2="280" />
        </g>

        {/* Beam being placed on top (rises + settles into place, loops) */}
        <g style={{ animation: "beamLift 6s ease-in-out infinite" }}>
          <rect x="150" y="0" width="70" height="10" rx="2" fill="#FFC72C" stroke="#2C2C2C" strokeWidth="1.5" />
        </g>

        {/* --- Crane --- */}
        {/* Crane mast */}
        <rect x="60" y="40" width="10" height="250" fill="#2C2C2C" />
        <rect x="42" y="284" width="46" height="12" rx="2" fill="#2C2C2C" />

        {/* Crane counter-jib (short side, back) */}
        <rect x="20" y="34" width="45" height="8" rx="3" fill="#2C2C2C" />
        <rect x="24" y="42" width="10" height="14" fill="#9CA3AF" />

        {/* Crane jib (long arm, swings) */}
        <g style={{ transformOrigin: "65px 38px", animation: "craneSwing 6s ease-in-out infinite" }}>
          <rect x="65" y="34" width="200" height="8" rx="3" fill="#FFC72C" />
          {/* Trolley */}
          <rect x="180" y="42" width="10" height="6" fill="#2C2C2C" />
          {/* Cable down to the beam */}
          <line x1="185" y1="48" x2="185" y2="150" stroke="#2C2C2C" strokeWidth="1.5" />
        </g>

        {/* Hook + beam load (bobs, synced loosely with beamLift) */}
        <g style={{ animation: "hookBob 6s ease-in-out infinite" }}>
          <rect x="170" y="150" width="30" height="8" rx="2" fill="#FFC72C" stroke="#2C2C2C" strokeWidth="1.5" />
        </g>

        {/* Dust puffs at base */}
        <circle cx="110" cy="286" r="4" fill="#D1D5DB" opacity="0.6" style={{ animation: "dustPuff 3s ease-in-out infinite" }} />
        <circle cx="255" cy="286" r="5" fill="#D1D5DB" opacity="0.5" style={{ animation: "dustPuff 3s ease-in-out infinite 1.5s" }} />

        <style>{`
          @keyframes craneSwing {
            0%, 15% { transform: rotate(-8deg); }
            50% { transform: rotate(6deg); }
            85%, 100% { transform: rotate(-8deg); }
          }
          @keyframes hookBob {
            0% { transform: translateY(0px); opacity: 1; }
            40% { transform: translateY(20px); opacity: 1; }
            50% { transform: translateY(20px); opacity: 0; }
            51% { transform: translateY(-40px); opacity: 0; }
            60% { transform: translateY(-40px); opacity: 1; }
            100% { transform: translateY(0px); opacity: 1; }
          }
          @keyframes beamLift {
            0% { transform: translateY(150px); opacity: 0; }
            10% { opacity: 1; }
            45% { transform: translateY(150px); opacity: 1; }
            55% { transform: translateY(150px); opacity: 0; }
            56% { transform: translateY(110px); opacity: 0; }
            65% { opacity: 1; }
            100% { transform: translateY(150px); opacity: 1; }
          }
          @keyframes dustPuff {
            0% { opacity: 0; transform: translateY(0) scale(0.8); }
            50% { opacity: 0.6; transform: translateY(-6px) scale(1.1); }
            100% { opacity: 0; transform: translateY(-10px) scale(1.3); }
          }
        `}</style>
      </svg>
    </div>
  );
}