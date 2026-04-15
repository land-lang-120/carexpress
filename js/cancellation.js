/* CarExpress — Cancellation Policy System */

// ─── POLICY DIALOG (shown once per role) ───────────────────────────────────
function CancellationPolicyDialog({ role, onAccept, onDecline }) {
  // role: "passenger" or "driver"
  const isPassenger = role === "passenger";

  return (
    <div style={{ position:"fixed",inset:0,zIndex:600,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(4px)",padding:16,animation:"fadeIn .25s ease" }}>
      <div style={{ background:C.card,borderRadius:22,maxWidth:400,width:"100%",maxHeight:"85vh",overflowY:"auto",animation:"slideUp .3s ease",boxShadow:C.shadowLg }}>
        <div style={{ padding:"24px 20px 0",textAlign:"center" }}>
          <div style={{ width:64,height:64,borderRadius:18,background:"#FFFBEB",border:"1.5px solid #FDE68A",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px" }}>
            <span style={{ fontSize:30 }}>⚖️</span>
          </div>
          <h3 style={{ fontWeight:800,fontSize:18,color:C.text,marginBottom:6 }}>Politique d'annulation</h3>
          <p style={{ fontSize:13,color:C.textSec,lineHeight:1.6 }}>
            Lisez attentivement avant de continuer
          </p>
        </div>

        <div style={{ padding:"16px 20px" }}>
          {/* Rule: 1 hour minimum */}
          <div style={{ display:"flex",gap:11,alignItems:"flex-start",padding:"13px 14px",background:C.greenBg,borderRadius:13,border:"1px solid #A7F3D0",marginBottom:10 }}>
            <span style={{ fontSize:18,flexShrink:0 }}>⏰</span>
            <div>
              <p style={{ fontWeight:700,fontSize:13,color:C.text }}>Annulation gratuite</p>
              <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6,marginTop:3 }}>
                Vous pouvez annuler <strong style={{ color:C.green }}>gratuitement</strong> jusqu'à <strong style={{ color:C.text }}>1 heure avant le départ</strong>. Un message facultatif peut être envoyé à l'autre partie.
              </p>
            </div>
          </div>

          {/* Penalty section */}
          <div style={{ display:"flex",gap:11,alignItems:"flex-start",padding:"13px 14px",background:C.dangerBg,borderRadius:13,border:"1px solid #FECACA",marginBottom:10 }}>
            <span style={{ fontSize:18,flexShrink:0 }}>⚠️</span>
            <div>
              <p style={{ fontWeight:700,fontSize:13,color:C.danger }}>Annulation tardive (moins d'1h)</p>
              <p style={{ fontSize:12,color:"#B91C1C",lineHeight:1.6,marginTop:3 }}>
                {isPassenger
                  ? "En cas d'annulation tardive, des sanctions seront appliquées pour compenser le chauffeur."
                  : "En cas d'annulation tardive, des sanctions seront appliquées pour compenser vos passagers."
                }
              </p>
            </div>
          </div>

          {/* Detailed penalties */}
          <div style={{ padding:"14px",background:C.bg,borderRadius:13,border:`1px solid ${C.border}`,marginBottom:10 }}>
            <p style={{ fontWeight:800,fontSize:12,color:C.text,textTransform:"uppercase",letterSpacing:.5,marginBottom:10 }}>
              {isPassenger ? "Sanctions passager" : "Sanctions chauffeur"}
            </p>
            {isPassenger ? (
              <>
                <div style={{ display:"flex",gap:10,alignItems:"flex-start",marginBottom:10 }}>
                  <span style={{ fontSize:15,flexShrink:0 }}>🔄</span>
                  <div>
                    <p style={{ fontWeight:700,fontSize:13,color:C.text }}>Points réinitialisés</p>
                    <p style={{ fontSize:12,color:C.textSec,lineHeight:1.5,marginTop:2 }}>Tous vos points bonus CarExpress seront remis à zéro.</p>
                  </div>
                </div>
                <div style={{ display:"flex",gap:10,alignItems:"flex-start" }}>
                  <span style={{ fontSize:15,flexShrink:0 }}>💸</span>
                  <div>
                    <p style={{ fontWeight:700,fontSize:13,color:C.text }}>Surcharge de 30%</p>
                    <p style={{ fontSize:12,color:C.textSec,lineHeight:1.5,marginTop:2 }}>
                      Votre prochain trajet sur le même itinéraire sera majoré de <strong style={{ color:C.danger }}>30%</strong>. Ce montant sera payé en ligne et reversé intégralement au chauffeur impacté.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div style={{ display:"flex",gap:10,alignItems:"flex-start",marginBottom:10 }}>
                  <span style={{ fontSize:15,flexShrink:0 }}>📉</span>
                  <div>
                    <p style={{ fontWeight:700,fontSize:13,color:C.text }}>Réduction forcée de 30%</p>
                    <p style={{ fontSize:12,color:C.textSec,lineHeight:1.5,marginTop:2 }}>
                      Votre prochain trajet sur le même itinéraire subira une <strong style={{ color:C.danger }}>réduction automatique de 30%</strong> sur votre tarif (au minimum le tarif proposé aux passagers impactés).
                    </p>
                  </div>
                </div>
                <div style={{ display:"flex",gap:10,alignItems:"flex-start" }}>
                  <span style={{ fontSize:15,flexShrink:0 }}>🎁</span>
                  <div>
                    <p style={{ fontWeight:700,fontSize:13,color:C.text }}>Compensation passagers</p>
                    <p style={{ fontSize:12,color:C.textSec,lineHeight:1.5,marginTop:2 }}>
                      La différence sera reversée aux passagers impactés sous forme de <strong style={{ color:C.green }}>points bonus</strong> utilisables sur leurs prochains trajets.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mutual respect note */}
          <div style={{ display:"flex",gap:10,alignItems:"flex-start",padding:"12px 14px",background:"#EFF6FF",borderRadius:13,border:"1px solid #BFDBFE" }}>
            <span style={{ fontSize:15,flexShrink:0 }}>🤝</span>
            <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6 }}>
              Cette politique protège <strong style={{ color:C.text }}>chauffeurs et passagers</strong>. Une annulation tardive cause des pertes réelles pour l'autre partie. Soyons responsables !
            </p>
          </div>
        </div>

        <div style={{ padding:"12px 20px 20px",display:"flex",flexDirection:"column",gap:8 }}>
          <Btn variant="green" full onClick={onAccept}>
            J'ai compris et j'accepte
          </Btn>
          <Btn variant="outline" full onClick={onDecline}>
            Annuler
          </Btn>
        </div>
      </div>
    </div>
  );
}

// ─── CANCEL TRIP SCREEN ────────────────────────────────────────────────────
function CancelTripScreen({ trip, role, onBack, onConfirmCancel }) {
  const [message, setMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const isPassenger = role === "passenger";

  // Simulate: departure is in less than 1 hour (for demo, we show both states)
  const [isLate] = useState(() => {
    // In real app, compare trip.dep with current time
    // For demo: randomly decide (or use a fixed value for showcase)
    return true; // Show the penalty scenario
  });

  const penalty = isLate;
  const surchargeAmount = Math.round((trip.price || 3500) * 0.3);

  const handleCancel = () => {
    setConfirmed(true);
    setTimeout(() => onConfirmCancel({ message, penalty }), 2200);
  };

  if (confirmed) return (
    <div style={{ animation:"fadeUp .3s ease",textAlign:"center",padding:"50px 20px" }}>
      <div style={{ width:80,height:80,borderRadius:22,background:penalty?C.dangerBg:C.greenBg,border:`2px solid ${penalty?"#FECACA":"#A7F3D0"}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 22px" }}>
        <span style={{ fontSize:36 }}>{penalty?"⚠️":"✓"}</span>
      </div>
      <h3 style={{ fontWeight:800,fontSize:20,color:C.text,marginBottom:8 }}>Trajet annulé</h3>
      <p style={{ fontSize:14,color:C.textSec,lineHeight:1.6,marginBottom:6 }}>{trip.from} → {trip.to}</p>
      {penalty ? (
        <div style={{ marginTop:16 }}>
          <p style={{ fontSize:13,color:C.danger,fontWeight:700,marginBottom:8 }}>Sanctions appliquées :</p>
          {isPassenger ? (
            <>
              <p style={{ fontSize:13,color:C.textSec }}>Points bonus : <strong style={{ color:C.danger }}>réinitialisés à 0</strong></p>
              <p style={{ fontSize:13,color:C.textSec,marginTop:4 }}>Surcharge prochain trajet : <strong style={{ color:C.danger }}>+{fmt(surchargeAmount)} FCFA</strong></p>
            </>
          ) : (
            <>
              <p style={{ fontSize:13,color:C.textSec }}>Réduction forcée prochain trajet : <strong style={{ color:C.danger }}>−30%</strong></p>
              <p style={{ fontSize:13,color:C.textSec,marginTop:4 }}>Compensation passagers : <strong style={{ color:C.green }}>{fmt(surchargeAmount)} pts</strong></p>
            </>
          )}
        </div>
      ) : (
        <p style={{ fontSize:13,color:C.green,fontWeight:600,marginTop:10 }}>Aucune sanction — annulation dans les délais</p>
      )}
    </div>
  );

  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Annuler le trajet" sub={`${trip.from} → ${trip.to}`} onBack={onBack}/>

      {/* Time warning */}
      {penalty ? (
        <div style={{ display:"flex",gap:10,alignItems:"flex-start",padding:"13px 14px",background:C.dangerBg,borderRadius:13,border:"1px solid #FECACA",marginBottom:12 }}>
          <span style={{ color:C.danger,display:"flex",flexShrink:0 }}>{Ic.warn}</span>
          <div>
            <p style={{ fontWeight:700,fontSize:13,color:C.danger }}>Annulation tardive</p>
            <p style={{ fontSize:12,color:"#B91C1C",marginTop:3,lineHeight:1.5 }}>
              Le départ est dans moins d'1 heure. Des <strong>sanctions seront appliquées</strong> conformément à la politique d'annulation.
            </p>
          </div>
        </div>
      ) : (
        <div style={{ display:"flex",gap:10,alignItems:"flex-start",padding:"13px 14px",background:C.greenBg,borderRadius:13,border:"1px solid #A7F3D0",marginBottom:12 }}>
          <span style={{ color:C.green,display:"flex",flexShrink:0 }}>{Ic.shield}</span>
          <div>
            <p style={{ fontWeight:700,fontSize:13,color:C.greenDark }}>Annulation gratuite</p>
            <p style={{ fontSize:12,color:C.textSec,marginTop:3,lineHeight:1.5 }}>
              Le départ est dans plus d'1 heure. Vous pouvez annuler sans aucune sanction.
            </p>
          </div>
        </div>
      )}

      {/* Trip recap */}
      <Card style={{ padding:16,marginBottom:12 }}>
        <div style={{ display:"flex",gap:12,alignItems:"center",marginBottom:12 }}>
          <div style={{ width:44,height:44,borderRadius:13,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,color:"#fff",flexShrink:0 }}>{trip.ini}</div>
          <div style={{ flex:1 }}>
            <p style={{ fontWeight:800,fontSize:14,color:C.text }}>{trip.name}</p>
            <p style={{ fontSize:12,color:C.textSec }}>{trip.vehicle}</p>
          </div>
          <div style={{ textAlign:"right" }}>
            <p style={{ fontWeight:800,fontSize:15,color:C.text }}>{fmt(trip.price)} F</p>
            <p style={{ fontSize:11,color:C.textSec }}>Départ {trip.dep}</p>
          </div>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:8,padding:"9px 12px",background:C.bg,borderRadius:10 }}>
          <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{trip.from}</span>
          <div style={{ flex:1,height:1,background:C.border }}/>
          <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{trip.to}</span>
        </div>
      </Card>

      {/* Penalties breakdown if late */}
      {penalty && (
        <Card style={{ padding:16,marginBottom:12,border:"1.5px solid #FECACA" }}>
          <p style={{ fontWeight:800,fontSize:13,color:C.danger,marginBottom:12 }}>Sanctions applicables</p>
          {isPassenger ? (
            <>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0" }}>
                <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                  <span style={{ fontSize:14 }}>🔄</span>
                  <span style={{ fontSize:13,color:C.text,fontWeight:600 }}>Points bonus</span>
                </div>
                <span style={{ fontWeight:800,fontSize:13,color:C.danger }}>Remis à 0</span>
              </div>
              <div style={{ height:1,background:C.border }}/>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0" }}>
                <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                  <span style={{ fontSize:14 }}>💸</span>
                  <span style={{ fontSize:13,color:C.text,fontWeight:600 }}>Surcharge prochain trajet</span>
                </div>
                <span style={{ fontWeight:800,fontSize:13,color:C.danger }}>+{fmt(surchargeAmount)} FCFA</span>
              </div>
              <div style={{ height:1,background:C.border }}/>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0" }}>
                <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                  <span style={{ fontSize:14 }}>🔒</span>
                  <span style={{ fontSize:13,color:C.text,fontWeight:600 }}>Paiement</span>
                </div>
                <span style={{ fontWeight:700,fontSize:12,color:C.textSec }}>En ligne uniquement</span>
              </div>
              <p style={{ fontSize:11,color:C.textSec,lineHeight:1.5,marginTop:6 }}>
                Le montant de la surcharge sera reversé intégralement au chauffeur impacté.
              </p>
            </>
          ) : (
            <>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0" }}>
                <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                  <span style={{ fontSize:14 }}>📉</span>
                  <span style={{ fontSize:13,color:C.text,fontWeight:600 }}>Réduction forcée</span>
                </div>
                <span style={{ fontWeight:800,fontSize:13,color:C.danger }}>−30%</span>
              </div>
              <div style={{ height:1,background:C.border }}/>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0" }}>
                <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                  <span style={{ fontSize:14 }}>🎁</span>
                  <span style={{ fontSize:13,color:C.text,fontWeight:600 }}>Compensation passagers</span>
                </div>
                <span style={{ fontWeight:800,fontSize:13,color:C.green }}>{fmt(surchargeAmount)} pts</span>
              </div>
              <p style={{ fontSize:11,color:C.textSec,lineHeight:1.5,marginTop:6 }}>
                La réduction sera appliquée automatiquement sur votre prochain trajet {trip.from} → {trip.to}. Les points seront crédités aux passagers.
              </p>
            </>
          )}
        </Card>
      )}

      {/* Optional message */}
      <Card style={{ padding:16,marginBottom:14 }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:10 }}>Message (facultatif)</p>
        <p style={{ fontSize:12,color:C.textSec,lineHeight:1.5,marginBottom:10 }}>
          Expliquez brièvement la raison de votre annulation. Ce message sera envoyé {isPassenger?"au chauffeur":"à vos passagers"}.
        </p>
        <textarea
          value={message}
          onChange={e=>setMessage(e.target.value)}
          placeholder={isPassenger?"Ex: Imprévu personnel, désolé pour le désagrément...":"Ex: Problème mécanique, impossible de partir aujourd'hui..."}
          maxLength={200}
          style={{
            width:"100%",height:80,padding:"12px 14px",borderRadius:12,border:`1.5px solid ${C.border}`,background:C.bg,
            fontSize:13,color:C.text,fontFamily:"'Plus Jakarta Sans',sans-serif",resize:"none",outline:"none",boxSizing:"border-box",
            transition:"border-color .2s"
          }}
          onFocus={e=>e.target.style.borderColor=C.green}
          onBlur={e=>e.target.style.borderColor=C.border}
        />
        <p style={{ fontSize:11,color:C.textLight,textAlign:"right",marginTop:4 }}>{message.length}/200</p>
      </Card>

      {/* Action buttons */}
      <Btn variant="danger" full onClick={handleCancel} style={{ height:50,fontSize:14,borderRadius:13,marginBottom:8 }}>
        {penalty?"Confirmer l'annulation (avec sanctions)":"Confirmer l'annulation"}
      </Btn>
      <Btn variant="outline" full onClick={onBack} style={{ borderRadius:13 }}>
        Garder ma réservation
      </Btn>
    </div>
  );
}
