/* CarExpress — Results, Driver Detail & Booking Confirmation */

function ResultsScreen({ onBack, results, onBook }) {
  const [sel,setSel]=useState(null);
  const [booking,setBooking]=useState(null);

  if(booking) return <BookingConfirm driver={booking} onBack={()=>setBooking(null)} onConfirm={()=>onBook(booking)}/>;
  if(sel!==null) return <DriverDetail driver={results[sel]} onBack={()=>setSel(null)} onBook={()=>setBooking(results[sel])}/>;

  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Trajets disponibles" sub={`${results[0]?.from||""} → ${results[0]?.to||""} · ${results.length} résultat${results.length>1?"s":""}`} onBack={onBack}/>
      {results.length===0?(
        <div style={{ textAlign:"center",padding:"60px 20px" }}>
          <p style={{ fontSize:40,opacity:.3,marginBottom:14 }}>◌</p>
          <p style={{ fontWeight:700,fontSize:15,color:C.text,marginBottom:6 }}>Aucun trajet trouvé</p>
          <p style={{ fontSize:13,color:C.textSec }}>Aucun chauffeur ne propose ce trajet actuellement.</p>
        </div>
      ):(
        <div style={{ display:"flex",flexDirection:"column",gap:11 }}>
          {results.map((d,i)=>(
            <Card key={d.id} onClick={()=>setSel(i)} style={{ padding:16,cursor:"pointer",borderColor:d.verified?"#A7F3D0":C.border,animation:`fadeUp .3s ease ${i*.07}s both`,transition:"box-shadow .15s,transform .15s" }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow=C.shadowMd;e.currentTarget.style.transform="translateY(-1px)"}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow=C.shadow;e.currentTarget.style.transform=""}}>
              <div style={{ display:"flex",gap:11,alignItems:"center",marginBottom:13 }}>
                <div style={{ width:44,height:44,borderRadius:13,background:d.verified?C.dark:C.bg,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,color:d.verified?"#fff":C.textSec,flexShrink:0,border:d.verified?"none":`1px solid ${C.border}` }}>{d.ini}</div>
                <div style={{ flex:1,minWidth:0 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:7,marginBottom:4,flexWrap:"wrap" }}>
                    <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{d.name}</span>
                    <VerBadge verified={d.verified}/>
                  </div>
                  <div style={{ display:"flex",alignItems:"center",gap:4,color:"#F59E0B",fontSize:12 }}>
                    {Ic.star}<span style={{ color:C.textSec }}>{d.rating} · {d.trips} trajets · {d.vehicle}</span>
                  </div>
                </div>
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:11,padding:"9px 12px",background:C.bg,borderRadius:10 }}>
                <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{d.from}</span>
                <div style={{ flex:1,height:1,background:C.border }}/>
                <span style={{ fontSize:11,color:C.textSec }}>{d.dur}</span>
                <div style={{ flex:1,height:1,background:C.border }}/>
                <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{d.to}</span>
              </div>
              <div style={{ display:"flex",gap:6,flexWrap:"wrap",marginBottom:13 }}>
                <Chip>{d.dep}</Chip>
                <Chip>{d.seats} places</Chip>
                {d.wc>0&&<Chip>WC ×{d.wc}</Chip>}
                {d.food>0&&<Chip>Repas ×{d.food}</Chip>}
                {d.luggage.includes("xlarge")&&<Chip>Gros colis</Chip>}
              </div>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                <div><span style={{ fontWeight:800,fontSize:19,color:C.text }}>{fmt(d.price)}</span><span style={{ fontSize:12,color:C.textSec }}> FCFA / pers.</span></div>
                <span style={{ display:"flex",alignItems:"center",gap:5,fontSize:13,fontWeight:700,color:C.green }}>Voir {Ic.arrow}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function DriverDetail({ driver:d, onBack, onBook }) {
  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Détail du trajet" onBack={onBack}/>
      <Card style={{ padding:18,marginBottom:12 }}>
        <div style={{ display:"flex",gap:13,alignItems:"center",marginBottom:14 }}>
          <div style={{ width:52,height:52,borderRadius:15,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:17,color:"#fff",flexShrink:0 }}>{d.ini}</div>
          <div>
            <div style={{ display:"flex",gap:7,alignItems:"center",marginBottom:5,flexWrap:"wrap" }}>
              <span style={{ fontWeight:800,fontSize:16,color:C.text }}>{d.name}</span>
              <VerBadge verified={d.verified}/>
            </div>
            <div style={{ display:"flex",alignItems:"center",gap:4,fontSize:12,color:C.textSec }}>
              <span style={{ color:"#F59E0B" }}>{Ic.star}</span>{d.rating} · {d.trips} trajets · {d.vehicle} · {d.plate}
            </div>
          </div>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:10,padding:"11px",background:C.bg,borderRadius:11 }}>
          <span style={{ fontWeight:800,fontSize:15,color:C.text }}>{d.from}</span>
          <div style={{ flex:1,height:1,background:C.border }}/>
          <span style={{ fontSize:11,color:C.textSec,fontWeight:600 }}>{d.dur}</span>
          <div style={{ flex:1,height:1,background:C.border }}/>
          <span style={{ fontWeight:800,fontSize:15,color:C.text }}>{d.to}</span>
        </div>
      </Card>

      <Card style={{ padding:15,marginBottom:12 }}>
        <div style={{ display:"flex",gap:11,alignItems:"flex-start" }}>
          <span style={{ color:C.green,display:"flex",flexShrink:0,marginTop:1 }}>{Ic.pin}</span>
          <div>
            <p style={{ fontSize:11,fontWeight:700,color:C.textLight,textTransform:"uppercase",letterSpacing:.5,marginBottom:4 }}>Point de prise en charge</p>
            <p style={{ fontSize:14,fontWeight:600,color:C.text,lineHeight:1.5 }}>{d.pickup}</p>
          </div>
        </div>
      </Card>

      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:12 }}>
        {[["Départ",d.dep,Ic.clock],["Durée",d.dur,Ic.clock],["Places",`${d.seats} dispo.`,Ic.users],["Prix",`${fmt(d.price)} FCFA`,Ic.money]].map(([l,v,icon])=>(
          <Card key={l} style={{ padding:"12px 13px" }}>
            <div style={{ display:"flex",gap:7,alignItems:"center",marginBottom:5 }}>
              <span style={{ color:C.textSec,display:"flex" }}>{icon}</span>
              <p style={{ fontSize:11,color:C.textSec,fontWeight:600 }}>{l}</p>
            </div>
            <p style={{ fontWeight:800,fontSize:14,color:C.text }}>{v}</p>
          </Card>
        ))}
      </div>

      <Card style={{ padding:16,marginBottom:12 }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:12 }}>Arrêts prévus</p>
        {[["Besoins / Pipi",d.wc],["Repas",d.food],["Achats",d.shop]].map(([l,n],i)=>(
          <div key={l} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderTop:i===0?"none":`1px solid ${C.border}` }}>
            <span style={{ fontSize:13,color:C.textSec }}>{l}</span>
            <span style={{ fontWeight:700,fontSize:13,color:n>0?C.text:C.textLight }}>{n>0?`${n} fois`:"Aucun"}</span>
          </div>
        ))}
      </Card>

      <Card style={{ padding:16,marginBottom:12 }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:11 }}>Bagages acceptés</p>
        <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
          {[["small","Petit"],["large","Gros"],["xlarge","Très gros"]].map(([t,l])=>(
            <div key={t} style={{ padding:"6px 12px",borderRadius:10,background:d.luggage.includes(t)?C.greenBg:C.bg,border:`1px solid ${d.luggage.includes(t)?"#A7F3D0":C.border}`,display:"flex",alignItems:"center",gap:6 }}>
              <span style={{ color:d.luggage.includes(t)?C.green:C.textLight,display:"flex" }}>{Ic.bag}</span>
              <span style={{ fontSize:12,fontWeight:700,color:d.luggage.includes(t)?C.greenDark:C.textLight }}>{l}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ padding:15,marginBottom:12 }}>
        <div style={{ display:"flex",gap:11,alignItems:"center" }}>
          <span style={{ color:C.textSec,display:"flex" }}>{Ic.card}</span>
          <div>
            <p style={{ fontSize:11,fontWeight:700,color:C.textLight,textTransform:"uppercase",letterSpacing:.5,marginBottom:2 }}>Mode de paiement</p>
            <p style={{ fontSize:14,fontWeight:700,color:C.text }}>{plab(d.pay)}</p>
            <p style={{ fontSize:12,color:C.textSec }}>{psub(d.pay)}</p>
          </div>
        </div>
      </Card>

      {!d.verified&&(
        <div style={{ display:"flex",gap:10,alignItems:"flex-start",padding:13,background:C.dangerBg,borderRadius:13,border:`1px solid #FECACA`,marginBottom:13 }}>
          <span style={{ color:C.danger,display:"flex",flexShrink:0 }}>{Ic.warn}</span>
          <div>
            <p style={{ fontWeight:700,fontSize:13,color:C.danger }}>Chauffeur non vérifié</p>
            <p style={{ fontSize:12,color:"#B91C1C",marginTop:3,lineHeight:1.5 }}>Paiement uniquement par Mobile Money (MTN MoMo ou Orange Money).</p>
          </div>
        </div>
      )}
      <Btn variant="green" full onClick={onBook} style={{ height:50,fontSize:14,borderRadius:13 }}>
        Réserver · {fmt(d.price)} FCFA
      </Btn>
    </div>
  );
}

// ─── BOOKING CONFIRMATION + PAYMENT SELECTION ────────────────────────────────
function BookingConfirm({ driver:d, onBack, onConfirm }) {
  const PAY_METHODS = [
    { id:"card",   label:"Carte bancaire",    sub:"Visa, Mastercard",           icon:Ic.card,   color:"#3B82F6" },
    { id:"momo",   label:"MTN Mobile Money",  sub:"Paiement via MTN MoMo",      icon:Ic.mobile, color:"#FBBF24" },
    { id:"orange", label:"Orange Money",       sub:"Paiement via Orange Money",  icon:Ic.mobile, color:"#F97316" },
    { id:"cash",   label:"Espèces",           sub:"Paiement en main propre",    icon:Ic.money,  color:C.textSec },
  ];

  // Filter methods based on driver's accepted payment
  const available = d.pay === "all" || d.pay === "card"
    ? PAY_METHODS
    : d.pay === "momo"   ? PAY_METHODS.filter(p=>p.id==="momo"||p.id==="cash")
    : d.pay === "orange" ? PAY_METHODS.filter(p=>p.id==="orange"||p.id==="cash")
    : d.pay === "cash"   ? PAY_METHODS.filter(p=>p.id==="cash")
    : PAY_METHODS;

  const [payMethod, setPayMethod] = useState(available[0]?.id || "cash");
  const [seats, setSeats] = useState(1);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const maxSeats = d.seats || 3;
  const total = (d.price || 0) * seats;

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
      setTimeout(() => onConfirm(), 1800);
    }, 1500);
  };

  // ─── Success Animation ───
  if (confirmed) return (
    <div style={{ animation:"fadeUp .3s ease",textAlign:"center",padding:"50px 20px" }}>
      <div style={{ width:80,height:80,borderRadius:22,background:C.greenBg,border:"2px solid #A7F3D0",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 22px",animation:"pulse 1s ease infinite" }}>
        <span style={{ fontSize:36 }}>✓</span>
      </div>
      <h3 style={{ fontWeight:800,fontSize:20,color:C.text,marginBottom:8 }}>Réservation confirmée !</h3>
      <p style={{ fontSize:14,color:C.textSec,lineHeight:1.6,marginBottom:6 }}>{d.from} → {d.to}</p>
      <p style={{ fontSize:13,color:C.textSec }}>Départ à {d.dep} avec {d.name}</p>
      <p style={{ fontWeight:800,fontSize:22,color:C.green,marginTop:16 }}>{fmt(total)} FCFA</p>
      <p style={{ fontSize:12,color:C.textSec,marginTop:4 }}>
        {payMethod==="card"?"Carte bancaire":payMethod==="momo"?"MTN MoMo":payMethod==="orange"?"Orange Money":"Espèces"}
      </p>
    </div>
  );

  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Confirmer la réservation" sub="Vérifiez et payez" onBack={onBack}/>

      {/* Trip summary */}
      <Card style={{ padding:16,marginBottom:12 }}>
        <div style={{ display:"flex",gap:12,alignItems:"center",marginBottom:14 }}>
          <div style={{ width:46,height:46,borderRadius:14,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:15,color:"#fff",flexShrink:0 }}>{d.ini}</div>
          <div style={{ flex:1 }}>
            <div style={{ display:"flex",alignItems:"center",gap:6,marginBottom:3 }}>
              <span style={{ fontWeight:800,fontSize:15,color:C.text }}>{d.name}</span>
              <VerBadge verified={d.verified}/>
            </div>
            <p style={{ fontSize:12,color:C.textSec }}>{d.vehicle} · {d.plate}</p>
          </div>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:8,padding:"10px 12px",background:C.bg,borderRadius:11,marginBottom:10 }}>
          <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{d.from}</span>
          <div style={{ flex:1,height:1,background:C.border }}/>
          <span style={{ fontSize:11,color:C.textSec,fontWeight:600 }}>{d.dur}</span>
          <div style={{ flex:1,height:1,background:C.border }}/>
          <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{d.to}</span>
        </div>
        <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
          <Chip>{d.dep}</Chip>
          <Chip>{d.pickup?.split(",")[0] || "Point de RDV"}</Chip>
        </div>
      </Card>

      {/* Number of seats */}
      <Card style={{ padding:16,marginBottom:12 }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:12 }}>Nombre de places</p>
        <div style={{ display:"flex",alignItems:"center",gap:14,justifyContent:"center" }}>
          <button onClick={()=>setSeats(s=>Math.max(1,s-1))}
            style={{ width:40,height:40,borderRadius:12,border:`1.5px solid ${seats<=1?C.border:C.dark}`,background:seats<=1?C.bg:C.card,cursor:seats<=1?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:700,color:seats<=1?C.textLight:C.dark,fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
            −
          </button>
          <div style={{ textAlign:"center",minWidth:60 }}>
            <p style={{ fontWeight:800,fontSize:28,color:C.text }}>{seats}</p>
            <p style={{ fontSize:11,color:C.textSec,fontWeight:600 }}>place{seats>1?"s":""}</p>
          </div>
          <button onClick={()=>setSeats(s=>Math.min(maxSeats,s+1))}
            style={{ width:40,height:40,borderRadius:12,border:`1.5px solid ${seats>=maxSeats?C.border:C.dark}`,background:seats>=maxSeats?C.bg:C.card,cursor:seats>=maxSeats?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:700,color:seats>=maxSeats?C.textLight:C.dark,fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
            +
          </button>
        </div>
        <p style={{ fontSize:12,color:C.textSec,textAlign:"center",marginTop:8 }}>{fmt(d.price)} FCFA × {seats} = <strong style={{ color:C.text }}>{fmt(total)} FCFA</strong></p>
      </Card>

      {/* Payment method selection */}
      <Card style={{ padding:16,marginBottom:12 }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:12 }}>Mode de paiement</p>
        <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
          {available.map(m=>(
            <label key={m.id} onClick={()=>setPayMethod(m.id)}
              style={{ display:"flex",alignItems:"center",gap:12,padding:"13px 14px",background:payMethod===m.id?C.greenBg:C.card,borderRadius:12,cursor:"pointer",border:`1.5px solid ${payMethod===m.id?"#A7F3D0":C.border}`,transition:"all .2s" }}>
              <div style={{ width:38,height:38,borderRadius:11,background:payMethod===m.id?`${m.color}18`:C.bg,display:"flex",alignItems:"center",justifyContent:"center",color:m.color,flexShrink:0,border:`1px solid ${payMethod===m.id?m.color+"40":C.border}` }}>
                {m.icon}
              </div>
              <div style={{ flex:1 }}>
                <p style={{ fontWeight:700,fontSize:13,color:C.text }}>{m.label}</p>
                <p style={{ fontSize:11,color:C.textSec,marginTop:1 }}>{m.sub}</p>
              </div>
              <div style={{ width:20,height:20,borderRadius:"50%",border:`2px solid ${payMethod===m.id?C.green:C.border}`,background:payMethod===m.id?C.green:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .2s" }}>
                {payMethod===m.id&&<div style={{ width:7,height:7,borderRadius:"50%",background:"#fff" }}/>}
              </div>
            </label>
          ))}
        </div>
      </Card>

      {/* Price breakdown */}
      <Card style={{ padding:16,marginBottom:14,border:`1.5px solid #A7F3D0` }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:12 }}>Récapitulatif</p>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${C.border}` }}>
          <span style={{ fontSize:13,color:C.textSec }}>Trajet ({seats} place{seats>1?"s":""})</span>
          <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{fmt(total)} FCFA</span>
        </div>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${C.border}` }}>
          <span style={{ fontSize:13,color:C.textSec }}>Frais CarExpress</span>
          <span style={{ fontWeight:700,fontSize:13,color:C.green }}>Gratuit</span>
        </div>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0 0" }}>
          <span style={{ fontWeight:800,fontSize:15,color:C.text }}>Total</span>
          <span style={{ fontWeight:800,fontSize:20,color:C.text }}>{fmt(total)} FCFA</span>
        </div>
      </Card>

      {/* Confirm button */}
      <Btn variant="green" full onClick={handleConfirm} disabled={loading} style={{ height:52,fontSize:15,borderRadius:14 }}>
        {loading
          ? <><span style={{ animation:"spin .8s linear infinite",display:"inline-block" }}>◌</span> Traitement...</>
          : <>Confirmer et payer · {fmt(total)} FCFA</>
        }
      </Btn>

      <p style={{ fontSize:11,color:C.textSec,textAlign:"center",marginTop:10,lineHeight:1.5 }}>
        En confirmant, vous acceptez les conditions d'utilisation de CarExpress.
        Annulation gratuite jusqu'à 1h avant le départ.
      </p>
    </div>
  );
}
