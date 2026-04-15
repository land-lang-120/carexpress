/* CarExpress — Results & Driver Detail Screens */

function ResultsScreen({ onBack, results, onBook }) {
  const [sel,setSel]=useState(null);
  if(sel!==null) return <DriverDetail driver={results[sel]} onBack={()=>setSel(null)} onBook={()=>onBook(results[sel])}/>;
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
