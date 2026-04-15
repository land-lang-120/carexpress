/* CarExpress — History Screen */

function HistoryScreen() {
  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Historique" sub={`${HISTORY.length} trajets`}/>
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
