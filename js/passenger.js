/* CarExpress — Passenger Search Screen */

function PassengerScreen({ onBack, setScreen, setResults }) {
  const [from,setFrom]=useState("Yaoundé"),[to,setTo]=useState("Douala"),[date,setDate]=useState(""),[loading,setLoading]=useState(false);
  const search=()=>{ setLoading(true); setTimeout(()=>{ setResults(DRIVERS.filter(d=>d.from===from&&d.to===to)); setLoading(false); setScreen("results"); },1200); };
  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Trouver un trajet" sub="Voyageur" onBack={onBack}/>
      <Card style={{ padding:18,marginBottom:14 }}>
        <div style={{ display:"flex",flexDirection:"column",gap:13 }}>
          <Sel label="Départ"      icon={Ic.map}  value={from} onChange={setFrom} options={CITIES}/>
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ flex:1,height:1,background:C.border }}/>
            <button onClick={()=>{const t=from;setFrom(to);setTo(t);}} style={{ width:34,height:34,borderRadius:10,border:`1.5px solid ${C.border}`,background:C.card,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:C.dark,transition:"border-color .2s" }}
              onMouseEnter={e=>e.currentTarget.style.borderColor=C.green} onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
              {Ic.swap}
            </button>
            <div style={{ flex:1,height:1,background:C.border }}/>
          </div>
          <Sel label="Destination" icon={Ic.flag} value={to}   onChange={setTo}   options={CITIES.filter(c=>c!==from)}/>
          <Field label="Date (optionnel)" icon={Ic.cal} type="date" value={date} onChange={setDate}/>
        </div>
      </Card>
      <Btn variant="green" full onClick={search} disabled={loading} style={{ height:50,fontSize:14,borderRadius:14 }}>
        {loading?<><span style={{ animation:"spin .8s linear infinite",display:"inline-block" }}>◌</span> Recherche...</>:<>{Ic.search} Rechercher un trajet</>}
      </Btn>
      <div style={{ marginTop:13,display:"flex",gap:10,alignItems:"flex-start",padding:"12px 14px",background:C.card,borderRadius:13,border:`1px solid ${C.border}` }}>
        <span style={{ color:C.green,flexShrink:0,marginTop:1,display:"flex" }}>{Ic.shield}</span>
        <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6 }}>Privilégiez les chauffeurs <strong style={{ color:C.text }}>Vérifiés</strong> — CNI, permis et carte grise transmis à CarExpress.</p>
      </div>
    </div>
  );
}
