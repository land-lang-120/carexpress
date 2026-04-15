/* CarExpress — Home Screen */

function HomeScreen({ setScreen }) {
  return (
    <div style={{ animation:"fadeUp .35s ease" }}>
      <div style={{ marginBottom:26 }}>
        <p style={{ fontSize:13,color:C.textSec,fontWeight:500 }}>Bonjour 👋</p>
        <h1 style={{ fontWeight:800,fontSize:25,color:C.text,marginTop:2 }}>Où allons-nous ?</h1>
      </div>

      <div style={{ display:"flex",gap:9,marginBottom:26 }}>
        {[{ v:"1 240+",l:"Trajets" },{ v:"4.8 ★",l:"Note moy." },{ v:"98 %",l:"Sécurité" }].map(s=>(
          <div key={s.l} style={{ flex:1,background:C.card,border:`1px solid ${C.border}`,borderRadius:13,padding:"12px 10px",textAlign:"center" }}>
            <p style={{ fontWeight:800,fontSize:16,color:C.text }}>{s.v}</p>
            <p style={{ fontSize:11,color:C.textSec,marginTop:2,fontWeight:500 }}>{s.l}</p>
          </div>
        ))}
      </div>

      <Label>Je suis</Label>

      <div onClick={()=>setScreen("driver")} style={{ background:C.dark,borderRadius:18,padding:"22px 20px",marginBottom:11,cursor:"pointer",position:"relative",overflow:"hidden",animation:"fadeUp .35s ease .07s both",transition:"opacity .2s" }}
        onMouseEnter={e=>e.currentTarget.style.opacity=".9"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
        <div style={{ position:"absolute",right:-14,top:-14,width:90,height:90,borderRadius:"50%",background:"rgba(255,255,255,0.04)" }}/>
        <div style={{ position:"absolute",right:18,bottom:14,color:"rgba(255,255,255,0.08)",transform:"scale(2.8)",transformOrigin:"bottom right" }}>{Ic.car}</div>
        <span style={{ display:"inline-block",fontSize:10,fontWeight:700,color:C.textSec,background:C.bg,padding:"2px 9px",borderRadius:20,marginBottom:12,letterSpacing:.5 }}>CHAUFFEUR</span>
        <h3 style={{ fontWeight:800,fontSize:19,color:"#fff",marginBottom:5 }}>Je propose un trajet</h3>
        <p style={{ fontSize:13,color:"rgba(255,255,255,0.45)",maxWidth:"68%",lineHeight:1.5 }}>Publiez votre itinéraire et définissez vos conditions</p>
        <div style={{ marginTop:14,display:"flex",alignItems:"center",gap:6,color:C.green,fontWeight:700,fontSize:13 }}>Commencer {Ic.arrow}</div>
      </div>

      <div onClick={()=>setScreen("passenger")} style={{ background:C.card,border:`1.5px solid ${C.border}`,borderRadius:18,padding:"22px 20px",cursor:"pointer",position:"relative",overflow:"hidden",animation:"fadeUp .35s ease .13s both",transition:"border-color .2s" }}
        onMouseEnter={e=>e.currentTarget.style.borderColor=C.green} onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
        <div style={{ position:"absolute",right:-14,top:-14,width:90,height:90,borderRadius:"50%",background:"rgba(37,211,102,0.04)" }}/>
        <div style={{ position:"absolute",right:18,bottom:14,color:"rgba(0,0,0,0.04)",transform:"scale(2.8)",transformOrigin:"bottom right" }}>{Ic.compass}</div>
        <span style={{ display:"inline-block",fontSize:10,fontWeight:700,color:C.greenDark,background:C.greenBg,padding:"2px 9px",borderRadius:20,marginBottom:12,letterSpacing:.5,border:`1px solid #A7F3D0` }}>VOYAGEUR</span>
        <h3 style={{ fontWeight:800,fontSize:19,color:C.text,marginBottom:5 }}>Je cherche un trajet</h3>
        <p style={{ fontSize:13,color:C.textSec,maxWidth:"68%",lineHeight:1.5 }}>Trouvez un chauffeur de confiance vers votre destination</p>
        <div style={{ marginTop:14,display:"flex",alignItems:"center",gap:6,color:C.dark,fontWeight:700,fontSize:13 }}>Rechercher {Ic.arrow}</div>
      </div>

      <div style={{ marginTop:14,display:"flex",gap:10,alignItems:"flex-start",padding:"13px 15px",background:C.card,borderRadius:13,border:`1px solid ${C.border}`,animation:"fadeUp .35s ease .19s both" }}>
        <span style={{ color:C.green,flexShrink:0,marginTop:1,display:"flex" }}>{Ic.shield}</span>
        <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6 }}>Les chauffeurs <strong style={{ color:C.text }}>Vérifiés ✓</strong> ont transmis leurs documents officiels à CarExpress.</p>
      </div>
    </div>
  );
}
