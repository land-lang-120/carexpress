/* CarExpress — Profile Screen */

function ProfileScreen() {
  const pts=270, next=300, disc=Math.floor((pts/next)*15);
  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <div style={{ display:"flex",gap:13,alignItems:"center",marginBottom:22 }}>
        <div style={{ width:54,height:54,borderRadius:16,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:19,color:"#fff" }}>KM</div>
        <div>
          <div style={{ display:"flex",gap:7,alignItems:"center",marginBottom:4 }}>
            <span style={{ fontWeight:800,fontSize:19,color:C.text }}>Konan Martin</span>
            <VerBadge verified={true}/>
          </div>
          <p style={{ fontSize:13,color:C.textSec }}>+237 677 123 456</p>
        </div>
      </div>

      <Card style={{ padding:18,marginBottom:12,border:`1.5px solid #A7F3D0` }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:13 }}>
          <div>
            <p style={{ fontSize:11,color:C.textSec,fontWeight:600,textTransform:"uppercase",letterSpacing:.5,marginBottom:5 }}>Points CarExpress</p>
            <p style={{ fontWeight:800,fontSize:30,color:C.text }}>{pts} <span style={{ fontSize:14,color:C.textSec }}>pts</span></p>
          </div>
          <div style={{ background:C.greenBg,border:`1px solid #A7F3D0`,borderRadius:13,padding:"9px 15px",textAlign:"center" }}>
            <p style={{ fontSize:11,color:C.textSec,fontWeight:600,marginBottom:3 }}>Réduction</p>
            <p style={{ fontWeight:800,fontSize:20,color:C.green }}>{disc}%</p>
          </div>
        </div>
        <div style={{ height:5,background:C.bg,borderRadius:3,overflow:"hidden",marginBottom:7 }}>
          <div style={{ height:"100%",background:C.green,borderRadius:3,width:`${(pts/next)*100}%`,transition:"width 1s ease" }}/>
        </div>
        <p style={{ fontSize:12,color:C.textSec }}>{next-pts} pts pour débloquer 15% de réduction sur votre prochain trajet</p>
      </Card>

      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:9,marginBottom:12 }}>
        {[{ v:"12",l:"Trajets" },{ v:"4.9",l:"Note" },{ v:"8 mois",l:"Membre" }].map(s=>(
          <Card key={s.l} style={{ padding:"12px 10px",textAlign:"center" }}>
            <p style={{ fontWeight:800,fontSize:17,color:C.text,marginBottom:2 }}>{s.v}</p>
            <p style={{ fontSize:11,color:C.textSec,fontWeight:600 }}>{s.l}</p>
          </Card>
        ))}
      </div>

      <Card style={{ padding:16,marginBottom:12 }}>
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:13 }}>
          <span style={{ color:C.danger,display:"flex" }}>{Ic.sos}</span>
          <p style={{ fontWeight:800,fontSize:13,color:C.text }}>Numéros d'urgence</p>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14 }}>
          {EMERGENCY.map(e=>(
            <a key={e.label} href={`tel:${e.number}`} style={{ textDecoration:"none",padding:"11px",background:C.bg,borderRadius:11,border:`1px solid ${C.border}`,display:"block" }}>
              <p style={{ fontSize:11,color:C.textSec,fontWeight:600,marginBottom:3 }}>{e.label}</p>
              <p style={{ fontSize:15,fontWeight:800,color:e.color }}>{e.number}</p>
            </a>
          ))}
        </div>
        <p style={{ fontWeight:700,fontSize:12,color:C.text,marginBottom:9 }}>Établissements proches</p>
        {HOSPITALS.map((h,i)=>(
          <div key={h.name} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderTop:i===0?"none":`1px solid ${C.border}` }}>
            <div>
              <p style={{ fontWeight:600,fontSize:13,color:C.text }}>{h.name}</p>
              <p style={{ fontSize:11,color:C.textSec }}>{h.type}</p>
            </div>
            <span style={{ fontSize:12,fontWeight:700,color:C.green }}>{h.dist}</span>
          </div>
        ))}
      </Card>

      <Card style={{ marginBottom:20 }}>
        {[["Vérifier mon profil",Ic.shield,C.green],["Notifications",Ic.bell,null],["Support CarExpress",Ic.phone,null],["Déconnexion",Ic.user,C.danger]].map(([label,icon,color],i,arr)=>(
          <div key={label}>
            <div style={{ display:"flex",alignItems:"center",gap:13,padding:"14px 16px",cursor:"pointer" }}>
              <span style={{ color:color||C.textSec,display:"flex" }}>{icon}</span>
              <span style={{ flex:1,fontSize:14,fontWeight:600,color:color||C.text }}>{label}</span>
              <span style={{ color:C.textLight,fontSize:15 }}>›</span>
            </div>
            {i<arr.length-1&&<div style={{ height:1,background:C.border }}/>}
          </div>
        ))}
      </Card>
    </div>
  );
}
