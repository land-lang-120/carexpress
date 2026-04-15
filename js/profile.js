/* CarExpress — Profile Screen */

function ProfileScreen() {
  const pts=270, next=300, disc=Math.floor((pts/next)*15);
  const [subScreen, setSubScreen] = useState(null);
  const [notifEnabled, setNotifEnabled] = useState({ trips:true, promo:true, security:false, messages:true });
  const [toast, setToast] = useState(null);
  const [userRole] = useState("driver"); // "driver" or "passenger"

  // Document states: verified, pending, expired, none
  const [docs, setDocs] = useState([
    { label:"Carte Nationale d'Identité (CNI)", status:"verified", icon:"🪪",  expiry:"15 Mar 2028", role:"both" },
    { label:"Permis de conduire",               status:"verified", icon:"🚗",  expiry:"20 Jan 2027", role:"driver" },
    { label:"Carte grise du véhicule",           status:"pending",  icon:"📄",  expiry:null,          role:"driver" },
    { label:"Visite technique",                  status:"expired",  icon:"🔧",  expiry:"01 Fév 2026", role:"driver" },
    { label:"Assurance véhicule",                status:"none",     icon:"🛡️", expiry:null,          role:"driver" },
    { label:"Photo du véhicule",                 status:"none",     icon:"📸",  expiry:null,          role:"driver" },
    { label:"Selfie avec CNI (Chauffeur)",       status:"verified", icon:"🤳",  expiry:null,          role:"driver" },
    { label:"Selfie avec CNI (Passager)",        status:"none",     icon:"🤳",  expiry:null,          role:"passenger" },
  ]);

  const hasExpired = docs.some(d => d.status === "expired");
  const allDriverVerified = docs.filter(d=>d.role==="driver"||d.role==="both").every(d=>d.status==="verified");
  const passengerVerified = docs.find(d=>d.label.includes("Passager"))?.status === "verified"
    && docs.find(d=>d.label==="Carte Nationale d'Identité (CNI)")?.status === "verified";

  const statusLabel = s => {
    if (s==="verified") return "✓ Vérifié";
    if (s==="pending")  return "⏳ En cours de vérification";
    if (s==="expired")  return "⚠ Document périmé";
    return "Non soumis";
  };
  const statusColor = s => {
    if (s==="verified") return C.greenDark;
    if (s==="pending")  return "#D97706";
    if (s==="expired")  return C.danger;
    return C.textLight;
  };
  const borderColor = s => {
    if (s==="verified") return "#A7F3D0";
    if (s==="expired")  return "#FECACA";
    return C.border;
  };

  // ─── Verify Profile Sub-screen ───
  if (subScreen === "verify") {
    const driverDocs = docs.filter(d=>d.role==="driver"||d.role==="both");
    const passengerDocs = [
      docs.find(d=>d.label==="Carte Nationale d'Identité (CNI)"),
      docs.find(d=>d.label.includes("Passager")),
    ].filter(Boolean);

    return (
      <div style={{ animation:"fadeUp .3s ease" }}>
        <PageHdr title="Vérification du profil" sub="Documents requis" onBack={()=>setSubScreen(null)}/>

        {hasExpired && (
          <div style={{ display:"flex",gap:10,alignItems:"flex-start",padding:"13px 14px",background:C.dangerBg,borderRadius:13,border:"1px solid #FECACA",marginBottom:12 }}>
            <span style={{ color:C.danger,display:"flex",flexShrink:0 }}>{Ic.warn}</span>
            <div>
              <p style={{ fontWeight:700,fontSize:13,color:C.danger }}>Document(s) périmé(s)</p>
              <p style={{ fontSize:12,color:"#B91C1C",marginTop:3,lineHeight:1.5 }}>
                Un ou plusieurs documents ont expiré. Votre statut <strong>Vérifié</strong> est suspendu jusqu'au renouvellement.
              </p>
            </div>
          </div>
        )}

        {/* Driver Documents */}
        <Card style={{ padding:16,marginBottom:12 }}>
          <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:14 }}>
            <span style={{ fontSize:16 }}>🚗</span>
            <p style={{ fontWeight:800,fontSize:14,color:C.text }}>Documents Chauffeur</p>
            {allDriverVerified && !hasExpired ? (
              <span style={{ marginLeft:"auto",fontSize:11,fontWeight:700,color:C.green,background:C.greenBg,border:"1px solid #A7F3D0",padding:"2px 10px",borderRadius:20 }}>✓ Complet</span>
            ) : (
              <span style={{ marginLeft:"auto",fontSize:11,fontWeight:700,color:hasExpired?C.danger:"#D97706",background:hasExpired?C.dangerBg:"#FFFBEB",border:`1px solid ${hasExpired?"#FECACA":"#FDE68A"}`,padding:"2px 10px",borderRadius:20 }}>{hasExpired?"Suspendu":"Incomplet"}</span>
            )}
          </div>
          <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6,marginBottom:14 }}>
            Pour devenir <strong style={{ color:C.text }}>Chauffeur Vérifié ✓</strong>, transmettez tous les documents ci-dessous. Statut mis à jour sous 24-48h.
          </p>
          {driverDocs.map((doc,i)=>(
            <div key={i} style={{ display:"flex",alignItems:"center",gap:12,padding:"13px 14px",background:doc.status==="expired"?C.dangerBg:C.bg,borderRadius:12,marginBottom:8,border:`1px solid ${borderColor(doc.status)}` }}>
              <span style={{ fontSize:20 }}>{doc.icon}</span>
              <div style={{ flex:1 }}>
                <p style={{ fontSize:13,fontWeight:600,color:C.text }}>{doc.label}</p>
                <p style={{ fontSize:11,color:statusColor(doc.status),fontWeight:600,marginTop:2 }}>
                  {statusLabel(doc.status)}
                </p>
                {doc.expiry && (
                  <p style={{ fontSize:10,color:doc.status==="expired"?C.danger:C.textLight,marginTop:2 }}>
                    {doc.status==="expired"?"Expiré le":"Expire le"} {doc.expiry}
                  </p>
                )}
              </div>
              {(doc.status==="none"||doc.status==="expired")&&(
                <button style={{ padding:"7px 14px",borderRadius:10,border:"none",background:doc.status==="expired"?C.danger:C.dark,color:"#fff",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
                  {doc.status==="expired"?"Renouveler":"Envoyer"}
                </button>
              )}
            </div>
          ))}
        </Card>

        {/* Passenger Documents */}
        <Card style={{ padding:16,marginBottom:12 }}>
          <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:14 }}>
            <span style={{ fontSize:16 }}>👤</span>
            <p style={{ fontWeight:800,fontSize:14,color:C.text }}>Vérification Passager</p>
            {passengerVerified ? (
              <span style={{ marginLeft:"auto",fontSize:11,fontWeight:700,color:C.green,background:C.greenBg,border:"1px solid #A7F3D0",padding:"2px 10px",borderRadius:20 }}>✓ Vérifié</span>
            ) : (
              <span style={{ marginLeft:"auto",fontSize:11,fontWeight:700,color:"#D97706",background:"#FFFBEB",border:"1px solid #FDE68A",padding:"2px 10px",borderRadius:20 }}>Non vérifié</span>
            )}
          </div>
          <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6,marginBottom:14 }}>
            Pour la <strong style={{ color:C.text }}>sécurité des chauffeurs</strong>, les passagers doivent aussi vérifier leur identité avec un selfie tenant leur CNI à côté de leur visage.
          </p>
          {passengerDocs.map((doc,i)=>(
            <div key={i} style={{ display:"flex",alignItems:"center",gap:12,padding:"13px 14px",background:C.bg,borderRadius:12,marginBottom:8,border:`1px solid ${borderColor(doc.status)}` }}>
              <span style={{ fontSize:20 }}>{doc.icon}</span>
              <div style={{ flex:1 }}>
                <p style={{ fontSize:13,fontWeight:600,color:C.text }}>{doc.label}</p>
                <p style={{ fontSize:11,color:statusColor(doc.status),fontWeight:600,marginTop:2 }}>
                  {statusLabel(doc.status)}
                </p>
              </div>
              {doc.status==="none"&&(
                <button style={{ padding:"7px 14px",borderRadius:10,border:"none",background:C.dark,color:"#fff",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
                  Envoyer
                </button>
              )}
            </div>
          ))}
        </Card>

        {/* Info boxes */}
        <div style={{ display:"flex",gap:10,alignItems:"flex-start",padding:"12px 14px",background:C.greenBg,borderRadius:13,border:"1px solid #A7F3D0",marginBottom:10 }}>
          <span style={{ color:C.green,display:"flex",flexShrink:0 }}>{Ic.shield}</span>
          <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6 }}>Vos documents sont traités de manière confidentielle et ne sont jamais partagés avec les autres utilisateurs.</p>
        </div>
        <div style={{ display:"flex",gap:10,alignItems:"flex-start",padding:"12px 14px",background:"#FFFBEB",borderRadius:13,border:"1px solid #FDE68A" }}>
          <span style={{ color:"#D97706",display:"flex",flexShrink:0 }}>{Ic.clock}</span>
          <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6 }}>Les documents périmés entraînent la <strong style={{ color:C.text }}>suspension automatique</strong> du statut Vérifié. Renouvelez-les pour restaurer votre badge.</p>
        </div>
      </div>
    );
  }

  // ─── Notifications Sub-screen ───
  if (subScreen === "notifs") return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Notifications" sub="Gérez vos alertes" onBack={()=>setSubScreen(null)}/>
      <Card style={{ padding:0,marginBottom:12 }}>
        {[
          { key:"trips",    label:"Trajets & Réservations", desc:"Rappels de départ, confirmations" },
          { key:"promo",    label:"Promotions & Points",    desc:"Offres spéciales, réductions" },
          { key:"security", label:"Alertes de sécurité",    desc:"Mises à jour du trajet en cours" },
          { key:"messages", label:"Messages chauffeur",     desc:"Discussions et ajustements" },
        ].map((item,i,arr)=>(
          <div key={item.key}>
            <div style={{ display:"flex",alignItems:"center",gap:13,padding:"15px 16px" }}>
              <div style={{ flex:1 }}>
                <p style={{ fontSize:14,fontWeight:600,color:C.text }}>{item.label}</p>
                <p style={{ fontSize:12,color:C.textSec,marginTop:2 }}>{item.desc}</p>
              </div>
              <button onClick={()=>setNotifEnabled(p=>({...p,[item.key]:!p[item.key]}))}
                style={{ width:48,height:28,borderRadius:14,border:"none",cursor:"pointer",position:"relative",transition:"background .2s",
                  background:notifEnabled[item.key]?C.green:C.border }}>
                <div style={{ width:22,height:22,borderRadius:11,background:"#fff",position:"absolute",top:3,
                  left:notifEnabled[item.key]?23:3,transition:"left .2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)" }}/>
              </button>
            </div>
            {i<arr.length-1&&<div style={{ height:1,background:C.border,marginLeft:16,marginRight:16 }}/>}
          </div>
        ))}
      </Card>
      <Btn variant="green" full onClick={()=>{setSubScreen(null);setToast("Préférences sauvegardées");}}>
        Enregistrer
      </Btn>
    </div>
  );

  // ─── Support Sub-screen ───
  if (subScreen === "support") return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Support CarExpress" sub="Comment pouvons-nous vous aider ?" onBack={()=>setSubScreen(null)}/>
      <Card style={{ padding:0,marginBottom:12 }}>
        {[
          { icon:"💬", label:"FAQ — Questions fréquentes",    desc:"Réponses aux questions courantes" },
          { icon:"📧", label:"Envoyer un email",              desc:"support@carexpress.cm" },
          { icon:"📞", label:"Appeler le support",            desc:"+237 233 00 00 00" },
          { icon:"💡", label:"Signaler un problème",          desc:"Bug, comportement suspect, plainte" },
        ].map((item,i,arr)=>(
          <div key={i}>
            <div style={{ display:"flex",alignItems:"center",gap:13,padding:"15px 16px",cursor:"pointer" }}
              onClick={()=>{if(i===2)window.location.href="tel:+237233000000";}}>
              <span style={{ fontSize:20 }}>{item.icon}</span>
              <div style={{ flex:1 }}>
                <p style={{ fontSize:14,fontWeight:600,color:C.text }}>{item.label}</p>
                <p style={{ fontSize:12,color:C.textSec,marginTop:2 }}>{item.desc}</p>
              </div>
              <span style={{ color:C.textLight,fontSize:15 }}>›</span>
            </div>
            {i<arr.length-1&&<div style={{ height:1,background:C.border,marginLeft:16,marginRight:16 }}/>}
          </div>
        ))}
      </Card>
      <Card style={{ padding:16 }}>
        <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6,textAlign:"center" }}>
          Disponible du lundi au samedi, 8h — 18h.<br/>
          Temps de réponse moyen : <strong style={{ color:C.text }}>moins de 2h</strong>
        </p>
      </Card>
    </div>
  );

  // ─── Logout Confirmation ───
  if (subScreen === "logout") return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Déconnexion" onBack={()=>setSubScreen(null)}/>
      <div style={{ textAlign:"center",padding:"40px 20px" }}>
        <div style={{ width:70,height:70,borderRadius:20,background:C.dangerBg,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",border:"1px solid #FECACA" }}>
          <span style={{ fontSize:30 }}>👋</span>
        </div>
        <h3 style={{ fontWeight:800,fontSize:18,color:C.text,marginBottom:8 }}>Vous partez déjà ?</h3>
        <p style={{ fontSize:14,color:C.textSec,lineHeight:1.6,marginBottom:28,maxWidth:280,margin:"0 auto 28px" }}>
          Vous serez déconnecté de votre compte CarExpress. Vos données et points seront conservés.
        </p>
        <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
          <Btn variant="danger" full onClick={()=>{setSubScreen(null);setToast("Déconnecté avec succès");}}>
            Confirmer la déconnexion
          </Btn>
          <Btn variant="outline" full onClick={()=>setSubScreen(null)}>
            Annuler
          </Btn>
        </div>
      </div>
    </div>
  );

  // ─── Main Profile ───
  const menuActions = {
    "Vérifier mon profil": ()=>setSubScreen("verify"),
    "Notifications":       ()=>setSubScreen("notifs"),
    "Support CarExpress":  ()=>setSubScreen("support"),
    "Déconnexion":         ()=>setSubScreen("logout"),
  };

  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      {toast && <Toast message={toast} onClose={()=>setToast(null)}/>}

      <div style={{ display:"flex",gap:13,alignItems:"center",marginBottom:22 }}>
        <div style={{ width:54,height:54,borderRadius:16,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:19,color:"#fff" }}>KM</div>
        <div>
          <div style={{ display:"flex",gap:7,alignItems:"center",marginBottom:4 }}>
            <span style={{ fontWeight:800,fontSize:19,color:C.text }}>Konan Martin</span>
            <VerBadge verified={!hasExpired && allDriverVerified}/>
          </div>
          <p style={{ fontSize:13,color:C.textSec }}>+237 677 123 456</p>
          {hasExpired && (
            <p style={{ fontSize:11,color:C.danger,fontWeight:700,marginTop:3 }}>⚠ Vérification suspendue — document périmé</p>
          )}
        </div>
      </div>

      <Card style={{ padding:18,marginBottom:12,border:`1.5px solid ${hasExpired?"#FECACA":"#A7F3D0"}` }}>
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

      {/* Expired document alert on main profile */}
      {hasExpired && (
        <Card style={{ padding:14,marginBottom:12,border:"1.5px solid #FECACA",background:C.dangerBg }}>
          <div style={{ display:"flex",gap:10,alignItems:"center" }}>
            <span style={{ color:C.danger,display:"flex",flexShrink:0 }}>{Ic.warn}</span>
            <div style={{ flex:1 }}>
              <p style={{ fontWeight:700,fontSize:13,color:C.danger }}>Document périmé</p>
              <p style={{ fontSize:12,color:"#B91C1C",marginTop:2 }}>Renouvelez vos documents pour restaurer votre badge Vérifié.</p>
            </div>
            <button onClick={()=>setSubScreen("verify")} style={{ padding:"7px 14px",borderRadius:10,border:"none",background:C.danger,color:"#fff",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
              Voir
            </button>
          </div>
        </Card>
      )}

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
            <div onClick={menuActions[label]} style={{ display:"flex",alignItems:"center",gap:13,padding:"14px 16px",cursor:"pointer",transition:"background .15s" }}
              onMouseEnter={e=>e.currentTarget.style.background=C.bg}
              onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
              <span style={{ color:color||C.textSec,display:"flex" }}>{icon}</span>
              <span style={{ flex:1,fontSize:14,fontWeight:600,color:color||C.text }}>{label}</span>
              {label==="Vérifier mon profil"&&hasExpired&&<span style={{ width:8,height:8,borderRadius:4,background:C.danger,flexShrink:0 }}/>}
              <span style={{ color:C.textLight,fontSize:15 }}>›</span>
            </div>
            {i<arr.length-1&&<div style={{ height:1,background:C.border }}/>}
          </div>
        ))}
      </Card>
    </div>
  );
}
