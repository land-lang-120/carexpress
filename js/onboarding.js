/* CarExpress — Onboarding Screens (first launch only) */

const ONBOARDING_SLIDES = [
  {
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" style={{ width:"100%",maxWidth:260 }}>
        {/* Queue of people waiting */}
        <rect x="20" y="140" width="240" height="50" rx="12" fill="#E8EAED"/>
        <text x="140" y="172" textAnchor="middle" fontSize="11" fill="#9CA3AF" fontWeight="600">AGENCE DE VOYAGE</text>
        {/* People in line */}
        {[40,80,120,160,200].map((x,i)=>(
          <g key={i}>
            <circle cx={x} cy={110} r="14" fill={i===0?"#25D366":"#D1D5DB"}/>
            <rect x={x-8} y={124} width="16" height="16" rx="4" fill={i===0?"#25D366":"#D1D5DB"} opacity=".6"/>
            {i>0&&<text x={x} y={115} textAnchor="middle" fontSize="10" fill="#fff">😩</text>}
            {i===0&&<text x={x} y={115} textAnchor="middle" fontSize="10" fill="#fff">😊</text>}
          </g>
        ))}
        {/* Clock showing long wait */}
        <circle cx="230" cy="45" r="28" fill="#FEF2F2" stroke="#FECACA" strokeWidth="2"/>
        <text x="230" y="42" textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="700">ATTENTE</text>
        <text x="230" y="55" textAnchor="middle" fontSize="12" fill="#EF4444" fontWeight="800">3h+</text>
        {/* X mark over queue */}
        <line x1="30" y1="80" x2="210" y2="180" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" opacity=".3"/>
        <line x1="210" y1="80" x2="30" y2="180" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" opacity=".3"/>
        {/* Phone with CarExpress */}
        <rect x="35" y="20" width="50" height="80" rx="10" fill="#1F2937"/>
        <rect x="40" y="28" width="40" height="60" rx="6" fill="#F5F6F8"/>
        <text x="60" y="55" textAnchor="middle" fontSize="8" fill="#25D366" fontWeight="800">CE</text>
        <text x="60" y="68" textAnchor="middle" fontSize="5" fill="#6B7280">Réservé ✓</text>
        <circle cx="60" cy="80" r="4" fill="#25D366"/>
      </svg>
    ),
    title: "Fini les files d'attente",
    desc: "Plus besoin de passer des heures à l'agence de voyage. Réservez votre place en quelques secondes depuis votre téléphone.",
    accent: "#EF4444",
  },
  {
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" style={{ width:"100%",maxWidth:260 }}>
        {/* Comfortable car */}
        <rect x="30" y="80" width="220" height="90" rx="20" fill="#1F2937"/>
        <rect x="50" y="90" width="80" height="50" rx="10" fill="#374151"/>
        <rect x="150" y="90" width="80" height="50" rx="10" fill="#374151"/>
        {/* Windows */}
        <rect x="55" y="95" width="70" height="35" rx="8" fill="#6EE7B7" opacity=".3"/>
        <rect x="155" y="95" width="70" height="35" rx="8" fill="#6EE7B7" opacity=".3"/>
        {/* Wheels */}
        <circle cx="80" cy="170" r="18" fill="#374151"/>
        <circle cx="80" cy="170" r="10" fill="#6B7280"/>
        <circle cx="200" cy="170" r="18" fill="#374151"/>
        <circle cx="200" cy="170" r="10" fill="#6B7280"/>
        {/* Comfort icons */}
        <g transform="translate(60,30)">
          <rect width="45" height="22" rx="11" fill="#F0FBF4" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="22" y="15" textAnchor="middle" fontSize="9" fill="#1AAD54" fontWeight="700">❄️ Clim</text>
        </g>
        <g transform="translate(115,20)">
          <rect width="55" height="22" rx="11" fill="#F0FBF4" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="27" y="15" textAnchor="middle" fontSize="9" fill="#1AAD54" fontWeight="700">🎵 Musique</text>
        </g>
        <g transform="translate(180,30)">
          <rect width="55" height="22" rx="11" fill="#F0FBF4" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="27" y="15" textAnchor="middle" fontSize="9" fill="#1AAD54" fontWeight="700">💺 Confort</text>
        </g>
        {/* Happy passengers */}
        {[75,125,175].map((x,i)=>(
          <text key={i} x={x} y={118} textAnchor="middle" fontSize="16">😊</text>
        ))}
        {/* Stars */}
        {[50,70,90,110,130].map((x,i)=>(
          <text key={i} x={x} y="65" fontSize="12" fill="#F59E0B">★</text>
        ))}
      </svg>
    ),
    title: "Voyagez dans le confort",
    desc: "Choisissez un véhicule adapté à vos besoins. Climatisation, espace pour vos bagages, sièges confortables — vous méritez le meilleur.",
    accent: "#25D366",
  },
  {
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" style={{ width:"100%",maxWidth:260 }}>
        {/* Speech bubble from passenger */}
        <rect x="20" y="15" width="240" height="60" rx="14" fill="#F5F6F8" stroke="#E8EAED" strokeWidth="1.5"/>
        <polygon points="70,75 85,75 75,90" fill="#F5F6F8" stroke="#E8EAED" strokeWidth="1.5"/>
        <rect x="68" y="73" width="20" height="4" fill="#F5F6F8"/>
        {/* Need icons in bubble */}
        <g transform="translate(35,28)">
          <text fontSize="18">🚻</text>
          <text x="0" y="28" fontSize="8" fill="#6B7280" fontWeight="600">Pause</text>
        </g>
        <g transform="translate(85,28)">
          <text fontSize="18">🍽️</text>
          <text x="0" y="28" fontSize="8" fill="#6B7280" fontWeight="600">Repas</text>
        </g>
        <g transform="translate(135,28)">
          <text fontSize="18">🧳</text>
          <text x="0" y="28" fontSize="8" fill="#6B7280" fontWeight="600">Bagages</text>
        </g>
        <g transform="translate(185,28)">
          <text fontSize="18">⏰</text>
          <text x="0" y="28" fontSize="8" fill="#6B7280" fontWeight="600">Horaire</text>
        </g>
        {/* Passenger speaking */}
        <circle cx="60" cy="120" r="22" fill="#1F2937"/>
        <text x="60" y="125" textAnchor="middle" fontSize="16" fill="#fff">🗣️</text>
        {/* Driver listening with checkmarks */}
        <circle cx="200" cy="120" r="22" fill="#25D366"/>
        <text x="200" y="125" textAnchor="middle" fontSize="16">👂</text>
        {/* Arrow between them */}
        <line x1="90" y1="120" x2="170" y2="120" stroke="#25D366" strokeWidth="2" strokeDasharray="6 4"/>
        <polygon points="170,115 180,120 170,125" fill="#25D366"/>
        {/* Check marks below */}
        <g transform="translate(40,155)">
          <rect width="190" height="30" rx="10" fill="#F0FBF4" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="95" y="20" textAnchor="middle" fontSize="10" fill="#1AAD54" fontWeight="700">✓ Vos besoins sont pris en compte</text>
        </g>
      </svg>
    ),
    title: "Vos besoins comptent",
    desc: "Pauses pipi, repas en route, bagages volumineux, horaire flexible... Communiquez directement avec le chauffeur et personnalisez votre trajet.",
    accent: "#F59E0B",
  },
  {
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" style={{ width:"100%",maxWidth:260 }}>
        {/* Shield */}
        <path d="M140 20 L200 45 L200 110 C200 150 140 185 140 185 C140 185 80 150 80 110 L80 45 Z" fill="#F0FBF4" stroke="#25D366" strokeWidth="2.5"/>
        <text x="140" y="95" textAnchor="middle" fontSize="36" fill="#25D366">✓</text>
        {/* GPS tracking line */}
        <path d="M30 170 Q80 140 140 150 Q200 160 250 130" stroke="#25D366" strokeWidth="2" strokeDasharray="6 4" fill="none"/>
        <circle cx="140" cy="150" r="5" fill="#25D366"/>
        <circle cx="140" cy="150" r="10" fill="#25D366" opacity=".2"/>
        {/* Verified badge */}
        <g transform="translate(30,30)">
          <rect width="60" height="24" rx="12" fill="#1F2937"/>
          <text x="30" y="16" textAnchor="middle" fontSize="9" fill="#25D366" fontWeight="700">✓ Vérifié</text>
        </g>
        {/* ID card icon */}
        <g transform="translate(195,25)">
          <rect width="55" height="35" rx="6" fill="#fff" stroke="#E8EAED" strokeWidth="1.5"/>
          <rect x="8" y="8" width="15" height="15" rx="3" fill="#E8EAED"/>
          <rect x="28" y="10" width="20" height="3" rx="1.5" fill="#E8EAED"/>
          <rect x="28" y="17" width="15" height="3" rx="1.5" fill="#E8EAED"/>
          <text x="27" y="50" fontSize="8" fill="#6B7280" fontWeight="600">CNI + Permis</text>
        </g>
        {/* SOS button */}
        <g transform="translate(105,165)">
          <rect width="70" height="24" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
          <text x="35" y="16" textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="700">🆘 SOS</text>
        </g>
      </svg>
    ),
    title: "Sécurité maximale",
    desc: "Chauffeurs vérifiés (CNI, permis, carte grise), suivi GPS en temps réel et bouton d'urgence SOS. Voyagez l'esprit tranquille.",
    accent: "#25D366",
  },
];

function OnboardingScreen({ onDone }) {
  const [idx, setIdx] = useState(0);
  const slide = ONBOARDING_SLIDES[idx];
  const isLast = idx === ONBOARDING_SLIDES.length - 1;

  return (
    <div style={{ position:"fixed",inset:0,zIndex:9000,background:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:430,margin:"0 auto" }}>
      {/* Skip button */}
      {!isLast && (
        <button onClick={onDone} style={{ position:"absolute",top:16,right:16,background:"none",border:"none",fontSize:13,fontWeight:600,color:C.textSec,cursor:"pointer",padding:"8px 12px",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
          Passer
        </button>
      )}

      {/* Illustration */}
      <div style={{ flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 30px 0",animation:"fadeIn .4s ease" }}>
        {slide.illustration}
      </div>

      {/* Text content */}
      <div style={{ padding:"0 32px 20px",textAlign:"center",animation:"fadeUp .4s ease" }}>
        <h2 style={{ fontWeight:800,fontSize:22,color:C.text,marginBottom:10,lineHeight:1.3 }}>{slide.title}</h2>
        <p style={{ fontSize:14,color:C.textSec,lineHeight:1.7,maxWidth:320,margin:"0 auto" }}>{slide.desc}</p>
      </div>

      {/* Dots */}
      <div style={{ display:"flex",gap:8,marginBottom:20 }}>
        {ONBOARDING_SLIDES.map((_,i) => (
          <div key={i} style={{
            width: i===idx ? 24 : 8,
            height: 8,
            borderRadius: 4,
            background: i===idx ? slide.accent : C.border,
            transition: "all .3s ease",
          }}/>
        ))}
      </div>

      {/* Button */}
      <div style={{ padding:"0 32px 40px",width:"100%" }}>
        <button
          onClick={() => isLast ? onDone() : setIdx(i => i + 1)}
          style={{
            width:"100%",padding:"15px",borderRadius:14,border:"none",
            background: isLast ? C.green : C.dark,
            color:"#fff",fontWeight:700,fontSize:15,cursor:"pointer",
            fontFamily:"'Plus Jakarta Sans',sans-serif",
            display:"flex",alignItems:"center",justifyContent:"center",gap:8,
            transition:"opacity .15s",
          }}
          onMouseEnter={e=>e.currentTarget.style.opacity=".9"}
          onMouseLeave={e=>e.currentTarget.style.opacity="1"}
        >
          {isLast ? "Commencer" : "Suivant →"}
        </button>
      </div>
    </div>
  );
}
