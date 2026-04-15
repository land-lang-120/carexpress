/* CarExpress — Floating Chat */

function useChatCountdown(bookedAt) {
  const [remaining, setRemaining] = useState(null);
  const [expired,   setExpired]   = useState(false);
  useEffect(() => {
    if (!bookedAt) return;
    const tick = () => {
      const diff = CHAT_WINDOW_MS - (Date.now() - bookedAt);
      if (diff <= 0) { setExpired(true); setRemaining(null); return; }
      const h  = Math.floor(diff / 3600000);
      const m  = Math.floor((diff % 3600000) / 60000);
      const s  = Math.floor((diff % 60000) / 1000);
      setRemaining(`${h > 0 ? h + "h" : ""}${m.toString().padStart(2,"0")}m${s.toString().padStart(2,"0")}s`);
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [bookedAt]);
  return { remaining, expired };
}

function FloatingChat({ trip, bookedAt }) {
  const { remaining, expired } = useChatCountdown(bookedAt);
  const [open,    setOpen]    = useState(false);
  const [mode,    setMode]    = useState("adjust");
  const [input,   setInput]   = useState("");
  const [unread,  setUnread]  = useState(1);
  const [typing,  setTyping]  = useState(false);
  const [lastSug, setLastSug] = useState(null);
  const scrollRef = useRef(null);

  const [msgs, setMsgs] = useState([{
    id:1, from:"driver", mode:"adjust",
    text:`Bonjour ! Je suis votre chauffeur pour ${trip.from} → ${trip.to}. Rendez-vous à ${trip.dep} au point convenu.\n\nSi vous souhaitez ajuster quoi que ce soit (point de RDV, horaire, bagages…) ou me contacter après le trajet pour un oubli, ce chat est disponible 24 h.`,
    time:"à l'instant", read:true,
  }]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, open]);

  useEffect(() => { if (open) setUnread(0); }, [open]);

  if (expired || !bookedAt) return null;

  const tsNow = () => { const d=new Date(); return `${d.getHours()}:${d.getMinutes().toString().padStart(2,"0")}`; };
  const now = tsNow;

  const sendText = (txt, sugLabel=null) => {
    if (!txt.trim()) return;
    setMsgs(p=>[...p,{ id:Date.now(), from:"me", mode, text:txt.trim(), time:now(), read:false }]);
    setInput("");
    setLastSug(sugLabel);
    setTyping(true);
    setTimeout(()=>{
      setTyping(false);
      const cfg = CHAT_MODES[mode];
      const pool = (sugLabel && cfg.replies[sugLabel]) ? cfg.replies[sugLabel] : cfg.replies.default;
      const reply = pool[Math.floor(Math.random()*pool.length)];
      setMsgs(p=>[...p,{ id:Date.now()+1, from:"driver", mode, text:reply, time:now(), read:false }]);
      if (!open) setUnread(u=>u+1);
    }, 1400+Math.random()*700);
  };

  const currentMode = CHAT_MODES[mode];
  const modeTag = {
    adjust:{ bg:"#F3F4F6", color:C.dark,   border:C.border   },
    lost:  { bg:"#FFFBEB", color:"#92400E", border:"#FDE68A" },
  };

  return (
    <>
      {!open && (
        <button onClick={()=>setOpen(true)}
          style={{ width:56,height:56,borderRadius:"50%",background:C.dark,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",position:"relative",transition:"transform .2s,box-shadow .2s",animation:"popIn .3s ease .1s both" }}
          onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";e.currentTarget.style.boxShadow="0 6px 28px rgba(0,0,0,0.3)"}}
          onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.25)"}}>
          {Ic.chat}
          {unread>0&&<div style={{ position:"absolute",top:1,right:1,width:17,height:17,borderRadius:"50%",background:C.danger,border:"2px solid #fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:"#fff" }}>{unread}</div>}
          <div style={{ position:"absolute",bottom:3,right:3,width:10,height:10,borderRadius:"50%",background:C.green,border:"2px solid #fff" }}/>
        </button>
      )}

      {open && (
        <div style={{ position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,height:"76vh",background:C.card,borderRadius:"24px 24px 0 0",boxShadow:C.shadowLg,zIndex:300,display:"flex",flexDirection:"column",animation:"slideUp .3s ease" }}>
          <div style={{ width:36,height:3,borderRadius:2,background:C.border,margin:"10px auto 0" }}/>
          <div style={{ display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderBottom:`1px solid ${C.border}` }}>
            <div style={{ width:40,height:40,borderRadius:12,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,color:"#fff",flexShrink:0,position:"relative" }}>
              {trip.ini}
              <div style={{ position:"absolute",bottom:-1,right:-1,width:11,height:11,borderRadius:"50%",background:C.green,border:"2px solid #fff" }}/>
            </div>
            <div style={{ flex:1,minWidth:0 }}>
              <div style={{ display:"flex",alignItems:"center",gap:6,marginBottom:2 }}>
                <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{trip.name}</span>
                <VerBadge verified={trip.verified}/>
              </div>
              <p style={{ fontSize:11,color:C.textSec }}>{trip.from} → {trip.to} · Dép. {trip.dep}</p>
            </div>
            <button onClick={()=>setOpen(false)} style={{ width:30,height:30,borderRadius:9,border:`1px solid ${C.border}`,background:C.bg,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:C.textSec,flexShrink:0 }}>
              {Ic.close}
            </button>
          </div>

          <div style={{ display:"flex",gap:8,padding:"10px 14px 0",borderBottom:`1px solid ${C.border}`,paddingBottom:10 }}>
            {Object.entries(CHAT_MODES).map(([key,cfg])=>(
              <button key={key} onClick={()=>setMode(key)} style={{
                flex:1, display:"flex",alignItems:"center",justifyContent:"center",gap:6,
                padding:"8px 10px", borderRadius:11,
                border:`1.5px solid ${mode===key?(key==="lost"?"#FDE68A":C.green):C.border}`,
                background: mode===key?(key==="lost"?"#FFFBEB":C.greenBg):C.bg,
                cursor:"pointer", transition:"all .18s",
                fontFamily:"'Plus Jakarta Sans',sans-serif",
              }}>
                <span style={{ fontSize:15 }}>{cfg.icon}</span>
                <span style={{ fontSize:11,fontWeight:700,color:mode===key?(key==="lost"?"#92400E":C.greenDark):C.textSec }}>{cfg.label}</span>
              </button>
            ))}
          </div>

          <div style={{ padding:"7px 14px",background:C.bg,borderBottom:`1px solid ${C.border}` }}>
            <p style={{ fontSize:11,color:C.textSec,lineHeight:1.5,marginBottom:4 }}>{currentMode.intro}</p>
            <div style={{ display:"flex",alignItems:"center",gap:5 }}>
              <span style={{ color:C.textSec,display:"flex" }}>{Ic.timer}</span>
              <span style={{ fontSize:11,fontWeight:600,color:C.textSec }}>Disponible encore</span>
              <span style={{ fontSize:11,fontWeight:800,color:C.dark,fontVariantNumeric:"tabular-nums" }}>{remaining}</span>
            </div>
          </div>

          <div ref={scrollRef} style={{ flex:1,overflowY:"auto",padding:"12px 14px 8px",display:"flex",flexDirection:"column",gap:10 }}>
            <div style={{ textAlign:"center",marginBottom:2 }}>
              <span style={{ fontSize:11,fontWeight:600,color:C.textLight,background:C.bg,padding:"3px 10px",borderRadius:20 }}>Aujourd'hui</span>
            </div>
            {msgs.map(msg=>{
              const isMe = msg.from==="me";
              const tag = msg.mode && modeTag[msg.mode];
              return (
                <div key={msg.id} style={{ display:"flex",flexDirection:"column",alignItems:isMe?"flex-end":"flex-start",animation:"fadeIn .2s ease" }}>
                  {!isMe&&(
                    <div style={{ display:"flex",alignItems:"flex-end",gap:7,maxWidth:"84%" }}>
                      <div style={{ width:26,height:26,borderRadius:8,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:"#fff",flexShrink:0 }}>{trip.ini}</div>
                      <div>
                        {msg.mode&&<span style={{ display:"inline-block",fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:20,marginBottom:4,background:tag.bg,color:tag.color,border:`1px solid ${tag.border}` }}>{CHAT_MODES[msg.mode].icon} {CHAT_MODES[msg.mode].label}</span>}
                        <div style={{ background:C.bg,border:`1px solid ${C.border}`,borderRadius:"14px 14px 14px 4px",padding:"9px 13px" }}>
                          <p style={{ fontSize:13,color:C.text,lineHeight:1.55,whiteSpace:"pre-line" }}>{msg.text}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {isMe&&(
                    <div style={{ maxWidth:"84%" }}>
                      {msg.mode&&<div style={{ textAlign:"right",marginBottom:4 }}><span style={{ display:"inline-block",fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:20,background:tag.bg,color:tag.color,border:`1px solid ${tag.border}` }}>{CHAT_MODES[msg.mode].icon} {CHAT_MODES[msg.mode].label}</span></div>}
                      <div style={{ background:C.dark,borderRadius:"14px 14px 4px 14px",padding:"9px 13px" }}>
                        <p style={{ fontSize:13,color:"#fff",lineHeight:1.55 }}>{msg.text}</p>
                      </div>
                    </div>
                  )}
                  <div style={{ display:"flex",alignItems:"center",gap:4,marginTop:3,paddingLeft:isMe?0:33 }}>
                    <span style={{ fontSize:10,color:C.textLight }}>{msg.time}</span>
                    {isMe&&<span style={{ color:C.textLight,display:"flex" }}>{Ic.dblcheck}</span>}
                  </div>
                </div>
              );
            })}
            {typing&&(
              <div style={{ display:"flex",alignItems:"flex-end",gap:7 }}>
                <div style={{ width:26,height:26,borderRadius:8,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:"#fff",flexShrink:0 }}>{trip.ini}</div>
                <div style={{ background:C.bg,border:`1px solid ${C.border}`,borderRadius:"14px 14px 14px 4px",padding:"10px 14px",display:"flex",gap:4,alignItems:"center" }}>
                  {[0,1,2].map(i=><div key={i} style={{ width:6,height:6,borderRadius:"50%",background:C.textLight,animation:`blink 1.2s ease ${i*.2}s infinite` }}/>)}
                </div>
              </div>
            )}
          </div>

          <div style={{ padding:"8px 14px 0",borderTop:`1px solid ${C.border}` }}>
            <p style={{ fontSize:10,fontWeight:700,color:C.textLight,textTransform:"uppercase",letterSpacing:.6,marginBottom:7 }}>Suggestions rapides</p>
            <div style={{ display:"flex",gap:7,overflowX:"auto",paddingBottom:8 }}>
              {currentMode.suggestions.map(s=>(
                <button key={s.label} onClick={()=>sendText(s.text, s.label)}
                  style={{ display:"flex",alignItems:"center",gap:5,flexShrink:0,padding:"6px 12px",borderRadius:20,border:`1px solid ${mode==="lost"?"#FDE68A":C.border}`,background:mode==="lost"?"#FFFBEB":C.bg,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",transition:"all .15s" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=mode==="lost"?"#F59E0B":C.green;e.currentTarget.style.background=mode==="lost"?"#FEF3C7":C.greenBg}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=mode==="lost"?"#FDE68A":C.border;e.currentTarget.style.background=mode==="lost"?"#FFFBEB":C.bg}}>
                  <span style={{ fontSize:14 }}>{s.icon}</span>
                  <span style={{ fontSize:12,fontWeight:600,color:mode==="lost"?"#92400E":C.textSec,whiteSpace:"nowrap" }}>{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding:"6px 14px 14px",display:"flex",gap:9,alignItems:"center" }}>
            <div style={{ flex:1,background:C.bg,borderRadius:22,border:`1.5px solid ${C.border}`,padding:"10px 14px",display:"flex",alignItems:"center",transition:"border-color .2s" }}>
              <input value={input} onChange={e=>setInput(e.target.value)}
                onKeyDown={e=>{ if(e.key==="Enter"&&!e.shiftKey){ e.preventDefault(); sendText(input); }}}
                placeholder="Écrire un message..."
                style={{ border:"none",background:"transparent",outline:"none",fontSize:14,color:C.text,width:"100%" }}
              />
            </div>
            <button onClick={()=>sendText(input)} disabled={!input.trim()}
              style={{ width:42,height:42,borderRadius:"50%",border:"none",background:input.trim()?C.green:"#E5E7EB",cursor:input.trim()?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",flexShrink:0,transition:"background .2s,transform .15s" }}
              onMouseEnter={e=>{if(input.trim())e.currentTarget.style.transform="scale(1.08)"}}
              onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
              {Ic.send}
            </button>
          </div>

          <div style={{ padding:"0 14px 10px",textAlign:"center" }}>
            <p style={{ fontSize:10,color:C.textLight,lineHeight:1.5 }}>Conversation supprimée automatiquement 24 h après la réservation.</p>
          </div>
        </div>
      )}

      {open&&<div onClick={()=>setOpen(false)} style={{ position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:290,animation:"fadeIn .2s ease" }}/>}
    </>
  );
}
