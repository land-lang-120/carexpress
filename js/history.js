/* CarExpress — History Screen */

function HistoryScreen({ activeTrip, arrived, onCancelTrip }) {
  const hasActive = activeTrip && !arrived;

  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Historique" sub={hasActive ? "1 trajet en cours" : `${HISTORY.length} trajets`}/>

      {/* Active / In-progress trip */}
      {activeTrip && (
        <div style={{ marginBottom:16 }}>
          <p style={{ fontSize:11,fontWeight:700,color:C.textSec,textTransform:"uppercase",letterSpacing:.5,marginBottom:8,paddingLeft:2 }}>
            {arrived ? "Trajet terminé (chat actif 24h)" : "En cours"}
          </p>
          <Card style={{ padding:0,border:`1.5px solid ${arrived?"#A7F3D0":C.green}`,overflow:"hidden" }}>
            {/* Status bar */}
            <div style={{ background:arrived?C.greenBg:`${C.green}12`,padding:"10px 16px",display:"flex",alignItems:"center",gap:8 }}>
              {!arrived && <div style={{ width:8,height:8,borderRadius:4,background:C.green,animation:"pulse 1.5s ease-in-out infinite" }}/>}
              <span style={{ fontSize:12,fontWeight:700,color:arrived?C.greenDark:C.green }}>
                {arrived?"Arrivé à destination":"Trajet en cours"}
              </span>
              <span style={{ marginLeft:"auto",fontSize:11,color:C.textSec,fontWeight:600 }}>
                Départ {activeTrip.dep} · Durée {activeTrip.dur}
              </span>
            </div>

            <div style={{ padding:16 }}>
              {/* Driver info */}
              <div style={{ display:"flex",gap:11,alignItems:"center",marginBottom:12 }}>
                <div style={{ width:42,height:42,borderRadius:12,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:13,color:"#fff",flexShrink:0 }}>{activeTrip.ini}</div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:6 }}>
                    <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{activeTrip.name}</span>
                    <VerBadge verified={activeTrip.verified}/>
                  </div>
                  <p style={{ fontSize:12,color:C.textSec,marginTop:2 }}>{activeTrip.vehicle}</p>
                </div>
              </div>

              {/* Route */}
              <div style={{ display:"flex",alignItems:"center",gap:8,padding:"10px 12px",background:C.bg,borderRadius:10,marginBottom:12 }}>
                <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{activeTrip.from}</span>
                <div style={{ flex:1,height:1,background:C.border }}/>
                <span style={{ fontSize:11,color:C.textSec }}>{activeTrip.dur}</span>
                <div style={{ flex:1,height:1,background:C.border }}/>
                <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{activeTrip.to}</span>
              </div>

              {/* Price + role */}
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:hasActive?12:0 }}>
                <span style={{ fontWeight:800,fontSize:15,color:C.text }}>{fmt(activeTrip.price)} FCFA</span>
                <span style={{ padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:700,
                  background:activeTrip.role==="driver"?"#EFF6FF":"#F0FBF4",
                  color:activeTrip.role==="driver"?"#3B82F6":C.greenDark,
                  border:`1px solid ${activeTrip.role==="driver"?"#BFDBFE":"#A7F3D0"}` }}>
                  {activeTrip.role==="driver"?"Chauffeur":"Passager"}
                </span>
              </div>

              {/* Action buttons — only if not arrived */}
              {hasActive && (
                <div style={{ display:"flex",gap:9,marginTop:4 }}>
                  <Btn variant="outline" full onClick={onCancelTrip} style={{ borderRadius:12,flex:1 }}>
                    Voir les détails
                  </Btn>
                </div>
              )}

              {/* Arrived info */}
              {arrived && (
                <div style={{ display:"flex",gap:8,alignItems:"center",padding:"10px 12px",background:C.greenBg,borderRadius:10,marginTop:10,border:"1px solid #A7F3D0" }}>
                  <span style={{ color:C.green,display:"flex" }}>{Ic.chat}</span>
                  <p style={{ fontSize:12,color:C.textSec,lineHeight:1.5 }}>
                    Le chat reste ouvert <strong style={{ color:C.text }}>24h</strong> pour contacter le {activeTrip.role==="driver"?"passager":"chauffeur"} en cas de perte d'objet.
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      )}

      {/* Past trips */}
      <p style={{ fontSize:11,fontWeight:700,color:C.textSec,textTransform:"uppercase",letterSpacing:.5,marginBottom:8,paddingLeft:2 }}>Trajets passés</p>
      <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
        {HISTORY.map(h=>(
          <Card key={h.id} style={{ padding:"14px 16px" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10 }}>
              <div>
                <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                  <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{h.from}</span>
                  <span style={{ color:C.textLight }}>→</span>
                  <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{h.to}</span>
                </div>
                <p style={{ fontSize:12,color:C.textSec,marginTop:3 }}>{h.date}</p>
              </div>
              <span style={{ padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:700,background:h.ok?C.greenBg:C.dangerBg,color:h.ok?C.greenDark:C.danger,border:`1px solid ${h.ok?"#A7F3D0":"#FECACA"}` }}>{h.ok?"Terminé":"Annulé"}</span>
            </div>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,borderTop:`1px solid ${C.border}` }}>
              <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{fmt(h.price)} FCFA</span>
              {h.pts>0&&<span style={{ display:"flex",alignItems:"center",gap:5,background:"#FFFBEB",padding:"3px 10px",borderRadius:20,border:"1px solid #FDE68A" }}><span style={{ color:"#F59E0B",display:"flex" }}>{Ic.star}</span><span style={{ fontSize:12,fontWeight:700,color:"#D97706" }}>+{h.pts} pts</span></span>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
