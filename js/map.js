/* CarExpress — Map Overlay & Floating Buttons */

function MapOverlay({ trip, onClose }) {
  const [progress,setProgress]=useState(14),[elapsed,setElapsed]=useState(46);
  useEffect(()=>{
    const t=setInterval(()=>{ setProgress(p=>Math.min(93,p+.25)); setElapsed(e=>e+1); },2000);
    return()=>clearInterval(t);
  },[]);
  const pct=Math.round(progress), remaining=Math.max(0,330-elapsed);
  const h=Math.floor(remaining/60), m=remaining%60;
  const wps=["Yaoundé","Nkolafamba","Ayos","Sakbayemé","Douala"];
  const wi=Math.min(Math.floor((progress/100)*(wps.length-1)),wps.length-2);

  return (
    <div style={{ position:"fixed",inset:0,zIndex:500,display:"flex",flexDirection:"column",background:"#0F1C13",maxWidth:430,left:"50%",transform:"translateX(-50%)",animation:"slideUp .35s ease" }}>
      <div style={{ flex:1,position:"relative",overflow:"hidden" }}>
        <svg width="100%" height="100%" style={{ position:"absolute",inset:0 }}>
          <defs><pattern id="gr2" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M 34 0 L 0 0 0 34" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#gr2)"/>
          <path d="M 55 360 C 130 290 210 210 370 115" stroke="rgba(255,255,255,0.07)" strokeWidth="14" fill="none" strokeLinecap="round"/>
          <path d="M 55 360 C 130 290 210 210 370 115" stroke={C.green} strokeWidth="2.5" fill="none" strokeLinecap="round"
            strokeDasharray="500" strokeDashoffset={500-(progress/100)*430} style={{ transition:"stroke-dashoffset 2s ease" }}/>
          <circle cx="55" cy="360" r="6" fill={C.green} opacity=".9"/>
          <circle cx="55" cy="360" r="13" fill={C.green} opacity=".15"/>
          <circle cx="370" cy="115" r="6" fill="rgba(255,255,255,0.6)"/>
          <circle cx="370" cy="115" r="12" fill="rgba(255,255,255,0.08)"/>
          {[{x:128,y:296,l:"Nkol."},{x:210,y:218,l:"Ayos"},{x:295,y:162,l:"Sakb."}].map((lm,i)=>(
            <g key={i}>
              <circle cx={lm.x} cy={lm.y} r="3.5" fill="rgba(255,255,255,0.18)"/>
              <text x={lm.x+7} y={lm.y+4} fill="rgba(255,255,255,0.25)" fontSize="10" fontFamily="Plus Jakarta Sans">{lm.l}</text>
            </g>
          ))}
        </svg>

        <div style={{ position:"absolute",left:`${8+(progress/100)*69}%`,top:`${76-(progress/100)*47}%`,transform:"translate(-50%,-50%)",transition:"left 2s ease,top 2s ease",zIndex:10 }}>
          <div style={{ position:"absolute",inset:-9,borderRadius:"50%",background:`${C.green}28`,animation:"ping 2s ease-out infinite" }}/>
          <div style={{ width:26,height:26,borderRadius:"50%",background:"#0F1C13",border:`2.5px solid ${C.green}`,display:"flex",alignItems:"center",justifyContent:"center",color:C.green }}>{Ic.car}</div>
        </div>

        <p style={{ position:"absolute",bottom:"31%",left:"7%",color:"rgba(255,255,255,0.5)",fontSize:12,fontWeight:700 }}>{trip.from}</p>
        <p style={{ position:"absolute",top:"18%",right:"7%",color:"rgba(255,255,255,0.5)",fontSize:12,fontWeight:700 }}>{trip.to}</p>

        <div style={{ position:"absolute",top:0,left:0,right:0,padding:"44px 16px 14px",background:"linear-gradient(to bottom,rgba(15,28,19,0.95),transparent)" }}>
          <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:9 }}>
            <div style={{ width:7,height:7,borderRadius:"50%",background:C.green,animation:"pulse 1.5s ease-in-out infinite" }}/>
            <span style={{ fontWeight:700,fontSize:13,color:"#fff" }}>Trajet en cours</span>
            <span style={{ marginLeft:"auto",fontSize:12,color:"rgba(255,255,255,0.4)",fontWeight:600 }}>{pct}%</span>
          </div>
          <div style={{ height:3,background:"rgba(255,255,255,0.08)",borderRadius:3,overflow:"hidden" }}>
            <div style={{ height:"100%",background:C.green,borderRadius:3,width:`${progress}%`,transition:"width 2s ease" }}/>
          </div>
        </div>

        <div style={{ position:"absolute",top:"33%",left:"50%",transform:"translateX(-50%)",background:"rgba(15,28,19,0.82)",backdropFilter:"blur(8px)",borderRadius:18,padding:"7px 16px",border:`1px solid rgba(37,211,102,0.25)`,whiteSpace:"nowrap" }}>
          <p style={{ fontSize:11,color:"rgba(255,255,255,0.4)",textAlign:"center",marginBottom:1 }}>Prochain arrêt</p>
          <p style={{ fontSize:13,fontWeight:800,color:C.green,textAlign:"center" }}>{wps[wi+1]}</p>
        </div>

        <button onClick={onClose} style={{ position:"absolute",top:50,right:14,background:"rgba(15,28,19,0.82)",backdropFilter:"blur(8px)",border:`1px solid rgba(255,255,255,0.1)`,color:"rgba(255,255,255,0.7)",padding:"8px 14px",borderRadius:20,cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"'Plus Jakarta Sans',sans-serif",display:"flex",alignItems:"center",gap:6 }}>
          {Ic.back} Retour
        </button>
      </div>

      <div style={{ background:C.card,borderRadius:"24px 24px 0 0",padding:"16px 16px 32px",boxShadow:"0 -8px 30px rgba(0,0,0,0.3)" }}>
        <div style={{ width:34,height:3,borderRadius:2,background:C.border,margin:"0 auto 14px" }}/>
        <div style={{ display:"flex",alignItems:"center",gap:11,padding:"11px 13px",background:C.bg,borderRadius:13,marginBottom:13 }}>
          <div style={{ width:40,height:40,borderRadius:11,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:13,color:"#fff",flexShrink:0 }}>{trip.ini}</div>
          <div style={{ flex:1,minWidth:0 }}>
            <div style={{ display:"flex",gap:7,alignItems:"center",flexWrap:"wrap" }}>
              <span style={{ fontWeight:800,fontSize:13,color:C.text }}>{trip.name}</span>
              <VerBadge verified={trip.verified}/>
            </div>
            <p style={{ fontSize:11,color:C.textSec,marginTop:2 }}>{trip.vehicle} · {trip.plate}</p>
          </div>
          <a href={`tel:${trip.phone}`} style={{ width:36,height:36,borderRadius:10,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",color:"#fff",flexShrink:0 }}>{Ic.phone}</a>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:9,marginBottom:13 }}>
          {[
            { l:"Restant",  v:`${h}h${m.toString().padStart(2,"0")}` },
            { l:"Étape",    v:wps[wi] },
            { l:"Prix",     v:`${fmt(trip.price)} F` },
          ].map(s=>(
            <div key={s.l} style={{ background:C.bg,borderRadius:11,padding:"10px 8px",textAlign:"center" }}>
              <p style={{ fontWeight:800,fontSize:13,color:C.text }}>{s.v}</p>
              <p style={{ fontSize:10,color:C.textSec,fontWeight:600,marginTop:3 }}>{s.l}</p>
            </div>
          ))}
        </div>
        <Btn variant="danger" full style={{ borderRadius:13 }}>{Ic.sos} Urgence — SOS</Btn>
      </div>
    </div>
  );
}

function FloatingStack({ trip, bookedAt, onMapOpen }) {
  return (
    <div style={{ position:"fixed",right:18,bottom:82,zIndex:200,display:"flex",flexDirection:"column",alignItems:"center",gap:10 }}>
      <FloatingMapButton onOpen={onMapOpen} trip={trip}/>
      <FloatingChat trip={trip} bookedAt={bookedAt}/>
    </div>
  );
}

function FloatingMapButton({ onOpen, trip }) {
  const [pulse, setPulse] = useState(true);
  useEffect(()=>{ const t=setTimeout(()=>setPulse(false),4000); return()=>clearTimeout(t); },[]);

  return (
    <div style={{ position:"relative" }}>
      {pulse && <div style={{ position:"absolute",inset:-6,borderRadius:"50%",border:`2px solid ${C.green}`,animation:"ping 1.8s ease-out 3" }}/>}
      <button onClick={onOpen}
        style={{ width:56,height:56,borderRadius:"50%",background:C.green,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:`0 4px 20px ${C.green}55`,transition:"transform .2s,box-shadow .2s",animation:"popIn .35s ease" }}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";e.currentTarget.style.boxShadow=`0 6px 28px ${C.green}77`}}
        onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow=`0 4px 20px ${C.green}55`}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
          <line x1="9" y1="3" x2="9" y2="18"/>
          <line x1="15" y1="6" x2="15" y2="21"/>
        </svg>
      </button>
      <div style={{ position:"absolute",right:64,top:"50%",transform:"translateY(-50%)",background:C.dark,color:"#fff",padding:"5px 10px",borderRadius:10,fontSize:11,fontWeight:700,whiteSpace:"nowrap",pointerEvents:"none",opacity:pulse?1:0,transition:"opacity .5s" }}>
        Voir la carte
        <div style={{ position:"absolute",right:-5,top:"50%",transform:"translateY(-50%)",width:0,height:0,borderLeft:"5px solid #1F2937",borderTop:"5px solid transparent",borderBottom:"5px solid transparent" }}/>
      </div>
    </div>
  );
}
