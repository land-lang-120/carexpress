/* CarExpress — Notifications Screen */

function NotificationsScreen({ onBack }) {
  const [notifs] = useState([
    {
      id: 1, type: "reminder", read: false, time: "Il y a 15 min",
      title: "Rappel — Départ dans 1h",
      body: "Votre trajet Yaoundé → Douala avec Jean-Paul Mbarga part à 06:30. Préparez-vous !",
      icon: "⏰", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE",
      action: null,
    },
    {
      id: 2, type: "reminder", read: false, time: "Il y a 30 min",
      title: "Rappel — Départ dans 30 min",
      body: "Plus que 30 minutes avant votre départ ! Rendez-vous au point de prise en charge : Carrefour Bastos.",
      icon: "🚨", color: "#DC2626", bg: "#FEF2F2", border: "#FECACA",
      action: null,
    },
    {
      id: 3, type: "document", read: false, time: "Aujourd'hui",
      title: "Document périmé — Visite technique",
      body: "Votre visite technique a expiré le 01 Fév 2026. Votre statut Vérifié est suspendu. Renouvelez ce document pour restaurer votre badge.",
      icon: "⚠️", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A",
      action: "verify",
    },
    {
      id: 4, type: "message", read: false, time: "Hier",
      title: "Message de Jean-Paul Mbarga",
      body: "Bonjour, je confirme le départ demain à 06:30 depuis Carrefour Bastos. À demain !",
      icon: "💬", color: "#25D366", bg: "#F0FBF4", border: "#A7F3D0",
      action: "reply",
    },
    {
      id: 5, type: "booking", read: true, time: "12 Mar 2026",
      title: "Réservation confirmée",
      body: "Votre trajet Yaoundé → Douala du 12 Mars est confirmé. Départ à 06:30 avec Jean-Paul Mbarga.",
      icon: "✅", color: "#25D366", bg: "#F0FBF4", border: "#A7F3D0",
      action: null,
    },
    {
      id: 6, type: "cancellation", read: true, time: "10 Mar 2026",
      title: "Annulation — Sanctions appliquées",
      body: "Votre annulation tardive du trajet Bafoussam → Yaoundé a entraîné la réinitialisation de vos points et une surcharge de 30% sur votre prochain trajet.",
      icon: "🚫", color: "#EF4444", bg: "#FEF2F2", border: "#FECACA",
      action: null,
    },
    {
      id: 7, type: "promo", read: true, time: "8 Mar 2026",
      title: "Bonus de bienvenue",
      body: "Bienvenue sur CarExpress ! Vous avez reçu 50 points bonus pour votre inscription. Utilisez-les sur votre prochain trajet.",
      icon: "🎁", color: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE",
      action: null,
    },
    {
      id: 8, type: "document", read: true, time: "5 Mar 2026",
      title: "Document vérifié — Permis de conduire",
      body: "Votre permis de conduire a été vérifié avec succès. Merci !",
      icon: "✓", color: "#25D366", bg: "#F0FBF4", border: "#A7F3D0",
      action: null,
    },
  ]);

  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [toast, setToast] = useState(null);

  const unreadCount = notifs.filter(n => !n.read).length;

  // ─── Reply sub-screen ───
  if (replyingTo !== null) {
    const notif = notifs.find(n => n.id === replyingTo);
    return (
      <div style={{ animation:"fadeUp .3s ease" }}>
        <PageHdr title="Répondre" sub={notif?.title || ""} onBack={() => setReplyingTo(null)}/>
        <Card style={{ padding:16,marginBottom:12 }}>
          <div style={{ display:"flex",gap:10,alignItems:"flex-start",marginBottom:14 }}>
            <div style={{ width:38,height:38,borderRadius:11,background:notif?.bg||C.bg,border:`1px solid ${notif?.border||C.border}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
              <span style={{ fontSize:16 }}>{notif?.icon}</span>
            </div>
            <div>
              <p style={{ fontWeight:700,fontSize:13,color:C.text }}>{notif?.title}</p>
              <p style={{ fontSize:12,color:C.textSec,marginTop:4,lineHeight:1.6 }}>{notif?.body}</p>
            </div>
          </div>
        </Card>
        <Card style={{ padding:16,marginBottom:14 }}>
          <p style={{ fontWeight:700,fontSize:13,color:C.text,marginBottom:10 }}>Votre réponse</p>
          <textarea
            value={replyText}
            onChange={e => setReplyText(e.target.value)}
            placeholder="Écrivez votre réponse..."
            maxLength={300}
            style={{
              width:"100%",height:100,padding:"12px 14px",borderRadius:12,border:`1.5px solid ${C.border}`,background:C.bg,
              fontSize:13,color:C.text,fontFamily:"'Plus Jakarta Sans',sans-serif",resize:"none",outline:"none",boxSizing:"border-box",
              transition:"border-color .2s"
            }}
            onFocus={e=>e.target.style.borderColor=C.green}
            onBlur={e=>e.target.style.borderColor=C.border}
          />
          <p style={{ fontSize:11,color:C.textLight,textAlign:"right",marginTop:4 }}>{replyText.length}/300</p>
        </Card>
        <Btn variant="green" full onClick={() => { setReplyingTo(null); setReplyText(""); setToast("Message envoyé"); }} disabled={!replyText.trim()}>
          {Ic.send} Envoyer la réponse
        </Btn>
      </div>
    );
  }

  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      {toast && <Toast message={toast} onClose={() => setToast(null)}/>}
      <PageHdr title="Notifications" sub={unreadCount > 0 ? `${unreadCount} non lue${unreadCount>1?"s":""}` : "Tout est à jour"} onBack={onBack}/>

      {/* Unread section */}
      {unreadCount > 0 && (
        <>
          <p style={{ fontSize:11,fontWeight:700,color:C.textSec,textTransform:"uppercase",letterSpacing:.5,marginBottom:8,paddingLeft:2 }}>Non lues</p>
          <div style={{ display:"flex",flexDirection:"column",gap:8,marginBottom:18 }}>
            {notifs.filter(n => !n.read).map(n => (
              <Card key={n.id} style={{ padding:14,borderLeft:`4px solid ${n.color}`,cursor:n.action?"pointer":"default" }}
                onClick={() => { if(n.action==="reply") setReplyingTo(n.id); }}>
                <div style={{ display:"flex",gap:11,alignItems:"flex-start" }}>
                  <div style={{ width:38,height:38,borderRadius:11,background:n.bg,border:`1px solid ${n.border}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                    <span style={{ fontSize:16 }}>{n.icon}</span>
                  </div>
                  <div style={{ flex:1,minWidth:0 }}>
                    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8,marginBottom:4 }}>
                      <p style={{ fontWeight:700,fontSize:13,color:C.text }}>{n.title}</p>
                      <span style={{ fontSize:10,color:C.textLight,fontWeight:600,flexShrink:0,whiteSpace:"nowrap" }}>{n.time}</span>
                    </div>
                    <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6 }}>{n.body}</p>
                    {n.action==="reply" && (
                      <div style={{ display:"flex",alignItems:"center",gap:5,marginTop:8,color:C.green,fontSize:12,fontWeight:700 }}>
                        {Ic.send} Répondre
                      </div>
                    )}
                    {n.action==="verify" && (
                      <div style={{ display:"flex",alignItems:"center",gap:5,marginTop:8,color:"#D97706",fontSize:12,fontWeight:700 }}>
                        {Ic.shield} Mettre à jour le document
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Read section */}
      <p style={{ fontSize:11,fontWeight:700,color:C.textSec,textTransform:"uppercase",letterSpacing:.5,marginBottom:8,paddingLeft:2 }}>Précédentes</p>
      <div style={{ display:"flex",flexDirection:"column",gap:8,marginBottom:20 }}>
        {notifs.filter(n => n.read).map(n => (
          <Card key={n.id} style={{ padding:14,opacity:.7 }}>
            <div style={{ display:"flex",gap:11,alignItems:"flex-start" }}>
              <div style={{ width:34,height:34,borderRadius:10,background:C.bg,border:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <span style={{ fontSize:14 }}>{n.icon}</span>
              </div>
              <div style={{ flex:1,minWidth:0 }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8,marginBottom:3 }}>
                  <p style={{ fontWeight:600,fontSize:13,color:C.text }}>{n.title}</p>
                  <span style={{ fontSize:10,color:C.textLight,fontWeight:500,flexShrink:0,whiteSpace:"nowrap" }}>{n.time}</span>
                </div>
                <p style={{ fontSize:12,color:C.textSec,lineHeight:1.5 }}>{n.body}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
