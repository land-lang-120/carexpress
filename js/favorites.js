/* CarExpress — Favorites Screen */

function FavoritesScreen({ setTab }) {
  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Favoris" sub="Vos itinéraires enregistrés"/>
      <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
        {FAVS.map(f=>(
          <Card key={f.id} style={{ padding:"14px 16px",display:"flex",alignItems:"center",gap:13 }}>
            <div style={{ width:40,height:40,borderRadius:11,background:C.bg,border:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:C.textSec }}>{Ic.heart}</div>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                <span style={{ fontWeight:800,fontSize:13,color:C.text }}>{f.from}</span>
                <span style={{ color:C.textLight }}>→</span>
                <span style={{ fontWeight:800,fontSize:13,color:C.text }}>{f.to}</span>
              </div>
              <p style={{ fontSize:12,color:C.textSec,marginTop:2 }}>{f.freq}</p>
            </div>
            <button onClick={()=>setTab("home")} style={{ background:C.dark,color:"#fff",border:"none",padding:"7px 13px",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Chercher</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
