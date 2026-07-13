export default function ConstructionAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <svg
        viewBox="0 0 400 320"
        className="w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Desk surface */}
        <rect x="0" y="290" width="400" height="10" fill="#D1D5DB" />

        {/* --- Blueprint / Cost Plan Document --- */}
        <rect x="90" y="90" width="180" height="180" rx="6" fill="#E5E7EB" stroke="#0F2D52" strokeWidth="2" />

        {/* Document header bar */}
        <rect x="90" y="90" width="180" height="24" rx="6" fill="#0F2D52" />
        <rect x="104" y="98" width="60" height="8" rx="2" fill="#4FA9FF" />

        {/* Blueprint grid lines */}
        <g stroke="#0F2D52" strokeWidth="1" opacity="0.15">
          <line x1="90" y1="140" x2="270" y2="140" />
          <line x1="90" y1="170" x2="270" y2="170" />
          <line x1="90" y1="200" x2="270" y2="200" />
          <line x1="90" y1="230" x2="270" y2="230" />
          <line x1="140" y1="114" x2="140" y2="270" />
          <line x1="190" y1="114" x2="190" y2="270" />
          <line x1="230" y1="114" x2="230" y2="270" />
        </g>

        {/* Cost line items building in one by one */}
        <g style={{ animation: "row1 5s ease-in-out infinite" }}>
          <rect x="104" y="128" width="120" height="6" rx="2" fill="#0F2D52" opacity="0.6" />
          <rect x="234" y="128" width="24" height="6" rx="2" fill="#4FA9FF" />
        </g>
        <g style={{ animation: "row2 5s ease-in-out infinite 0.4s" }}>
          <rect x="104" y="158" width="90" height="6" rx="2" fill="#0F2D52" opacity="0.6" />
          <rect x="234" y="158" width="24" height="6" rx="2" fill="#4FA9FF" />
        </g>
        <g style={{ animation: "row3 5s ease-in-out infinite 0.8s" }}>
          <rect x="104" y="188" width="105" height="6" rx="2" fill="#0F2D52" opacity="0.6" />
          <rect x="234" y="188" width="24" height="6" rx="2" fill="#4FA9FF" />
        </g>

        {/* Total line */}
        <line x1="104" y1="212" x2="258" y2="212" stroke="#0F2D52" strokeWidth="1.5" opacity="0.3" />
        <g style={{ animation: "totalAppear 5s ease-in-out infinite 1.2s" }}>
          <rect x="104" y="222" width="70" height="8" rx="2" fill="#0F2D52" />
          <rect x="200" y="222" width="58" height="8" rx="2" fill="#0F2D52" />
        </g>

        {/* --- Magnifying glass reviewing the document --- */}
        <g style={{ animation: "magnifySweep 5s ease-in-out infinite" }}>
          <circle cx="0" cy="0" r="26" fill="rgba(79,169,255,0.08)" stroke="#4FA9FF" strokeWidth="4" />
          <line x1="18" y1="18" x2="36" y2="36" stroke="#4FA9FF" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* --- Approval stamp (settles in near the end of the cycle) --- */}
        <g style={{ animation: "stampIn 5s ease-in-out infinite" }} transform="translate(300, 70)">
          <circle cx="0" cy="0" r="28" fill="none" stroke="#0F2D52" strokeWidth="3" />
          <circle cx="0" cy="0" r="28" fill="none" stroke="#4FA9FF" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M -12 0 L -3 10 L 14 -12" stroke="#0F2D52" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Small trending graph, bottom right — cost tracking */}
        <g transform="translate(300, 200)">
          <polyline
            points="0,60 20,45 40,50 60,25 80,15"
            fill="none"
            stroke="#4FA9FF"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ strokeDasharray: 130, strokeDashoffset: 130, animation: "graphDraw 5s ease-in-out infinite" }}
          />
          <circle cx="80" cy="15" r="4" fill="#0F2D52" style={{ animation: "graphDot 5s ease-in-out infinite" }} />
        </g>

        {/* Soft dust/glow particles for polish */}
        <circle cx="60" cy="286" r="3" fill="#D1D5DB" opacity="0.5" style={{ animation: "float 4s ease-in-out infinite" }} />
        <circle cx="330" cy="286" r="4" fill="#D1D5DB" opacity="0.4" style={{ animation: "float 4s ease-in-out infinite 2s" }} />

        <style>{`
          @keyframes magnifySweep {
            0% { transform: translate(120px, 140px); opacity: 0; }
            8% { opacity: 1; }
            30% { transform: translate(190px, 170px); opacity: 1; }
            50% { transform: translate(150px, 210px); opacity: 1; }
            65% { opacity: 1; }
            75%, 100% { transform: translate(150px, 210px); opacity: 0; }
          }
          @keyframes row1 { 0%, 5% { opacity: 0; transform: translateX(-10px); } 20%, 100% { opacity: 1; transform: translateX(0); } }
          @keyframes row2 { 0%, 15% { opacity: 0; transform: translateX(-10px); } 30%, 100% { opacity: 1; transform: translateX(0); } }
          @keyframes row3 { 0%, 25% { opacity: 0; transform: translateX(-10px); } 40%, 100% { opacity: 1; transform: translateX(0); } }
          @keyframes totalAppear { 0%, 35% { opacity: 0; } 50%, 100% { opacity: 1; } }
          @keyframes stampIn {
            0%, 55% { opacity: 0; transform: translate(300px, 70px) scale(0.5); }
            70% { opacity: 1; transform: translate(300px, 70px) scale(1.15); }
            80%, 92% { opacity: 1; transform: translate(300px, 70px) scale(1); }
            100% { opacity: 0; transform: translate(300px, 70px) scale(1); }
          }
          @keyframes graphDraw {
            0%, 40% { stroke-dashoffset: 130; }
            75%, 100% { stroke-dashoffset: 0; }
          }
          @keyframes graphDot {
            0%, 70% { opacity: 0; transform: scale(0.5); }
            85% { opacity: 1; transform: scale(1.3); }
            95%, 100% { opacity: 1; transform: scale(1); }
          }
          @keyframes float {
            0% { opacity: 0; transform: translateY(0) scale(0.8); }
            50% { opacity: 0.5; transform: translateY(-8px) scale(1.1); }
            100% { opacity: 0; transform: translateY(-14px) scale(1.3); }
          }
        `}</style>
      </svg>
    </div>
  );
}