/* CarExpress — App Root */

function App() {
  const [tab,       setTab]      = useState("home");
  const [screen,    setScreen]   = useState("home");
  const [results,   setResults]  = useState([]);
  const [activeTrip,setActiveTrip]= useState(null);
  const [bookedAt,  setBookedAt] = useState(null);
  const [arrived,   setArrived]  = useState(false);
  const [mapOpen,   setMapOpen]  = useState(false);
  const [toast,     setToast]    = useState(null);
  const [cancelOpen,setCancelOpen]= useState(false);
  const [notifsOpen,setNotifsOpen]= useState(false);

  // Policy dialog state (show once per role)
  const [policyDialog, setPolicyDialog] = useState(null);
  const [pendingAction, setPendingAction] = useState(null);

  // Simulate arrival after trip duration
  useEffect(() => {
    if (!activeTrip || !bookedAt || arrived) return;
    // Parse duration in minutes from trip.dur (e.g. "5h30" → 330 min)
    const dur = activeTrip.dur || "5h00";
    const hMatch = dur.match(/(\d+)h/), mMatch = dur.match(/h(\d+)/);
    const totalMin = ((hMatch ? +hMatch[1] : 0) * 60) + (mMatch ? +mMatch[1] : 0);
    // For demo: simulate arrival after 2 min (real would be totalMin * 60000)
    const demoMs = 120000;
    const t = setTimeout(() => {
      setArrived(true);
      setMapOpen(false);
      setToast("Vous êtes arrivé à destination !");
    }, demoMs);
    return () => clearTimeout(t);
  }, [activeTrip, bookedAt, arrived]);

  // After arrival, auto-clear trip after 24h (chat stays via bookedAt)
  // In real app this would be server-driven

  const checkPolicy = (role, action) => {
    const key = `ce_policy_${role}`;
    if (localStorage.getItem(key) === "1") {
      action();
    } else {
      setPolicyDialog(role);
      setPendingAction(() => action);
    }
  };

  const acceptPolicy = () => {
    localStorage.setItem(`ce_policy_${policyDialog}`, "1");
    setPolicyDialog(null);
    if (pendingAction) pendingAction();
    setPendingAction(null);
  };

  const declinePolicy = () => {
    setPolicyDialog(null);
    setPendingAction(null);
  };

  const handleBook = d => {
    checkPolicy("passenger", () => {
      setActiveTrip({ ...d, role:"passenger" });
      setBookedAt(Date.now());
      setArrived(false);
      setScreen("home");
      setTab("home");
      setToast(`Réservé · ${d.from} → ${d.to}`);
    });
  };

  const handleDriverSubmit = form => {
    checkPolicy("driver", () => {
      const synthetic = {
        ...DRIVERS[0],
        name: "Moi (Chauffeur)",
        ini: "MOI",
        verified: true,
        role: "driver",
        from: form.from, to: form.to,
        dep: form.time, dur: form.duration || "5h00",
        price: +form.price || 0,
        pickup: form.pickup,
      };
      setActiveTrip(synthetic);
      setBookedAt(Date.now());
      setArrived(false);
      setScreen("home");
      setToast("Trajet publié ! Vos boutons de suivi sont actifs.");
    });
  };

  const handleCancelTrip = ({ message, penalty }) => {
    const role = activeTrip?.role || "passenger";
    setActiveTrip(null);
    setBookedAt(null);
    setArrived(false);
    setCancelOpen(false);
    setTab("history");
    if (penalty) {
      setToast(role === "passenger"
        ? "Trajet annulé — sanctions appliquées"
        : "Trajet annulé — compensation passagers en cours"
      );
    } else {
      setToast("Trajet annulé avec succès");
    }
  };

  const render = () => {
    if (notifsOpen) {
      return <NotificationsScreen onBack={()=>setNotifsOpen(false)}/>;
    }
    if (cancelOpen && activeTrip) {
      return <CancelTripScreen trip={activeTrip} role={activeTrip.role||"passenger"} onBack={()=>{setCancelOpen(false);setTab("history");}} onConfirmCancel={handleCancelTrip}/>;
    }
    if (tab !== "home") {
      if (tab==="history")    return <HistoryScreen activeTrip={activeTrip} arrived={arrived} onCancelTrip={()=>setCancelOpen(true)}/>;
      if (tab==="favorites")  return <FavoritesScreen setTab={setTab}/>;
      if (tab==="profile")    return <ProfileScreen/>;
    }
    if (screen==="driver")    return <DriverScreen onBack={()=>setScreen("home")} onSubmit={handleDriverSubmit}/>;
    if (screen==="passenger") return <PassengerScreen onBack={()=>setScreen("home")} setScreen={setScreen} setResults={setResults}/>;
    if (screen==="results")   return <ResultsScreen onBack={()=>setScreen("passenger")} results={results} onBook={handleBook}/>;
    return <HomeScreen setScreen={s=>{ setTab("home"); setScreen(s); }}/>;
  };

  // Show map button only if trip active and NOT arrived
  const showMap = activeTrip && bookedAt && !arrived && tab === "home" && screen === "home";
  // Show chat if trip exists and within 24h window (even after arrival)
  const showChat = activeTrip && bookedAt && tab === "home" && screen === "home";

  return (
    <div style={{ display:"flex",justifyContent:"center",background:"#DCDFE4",minHeight:"100vh" }}>
      <div style={{ width:"100%",maxWidth:430,minHeight:"100vh",background:C.bg,position:"relative",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
        <div style={{ padding:"10px 16px 0",display:"flex",justifyContent:"space-between",alignItems:"center",background:C.bg,position:"sticky",top:0,zIndex:50 }}>
          <div style={{ display:"flex",alignItems:"center",gap:8 }}>
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#1F2937"/>
              <path d="M7 24 C 12 19 18 15 26 11" stroke="rgba(255,255,255,0.06)" strokeWidth="4" strokeLinecap="round" fill="none"/>
              <path d="M7 24 C 12 19 18 15 26 11" stroke="#25D366" strokeWidth="0.6" strokeLinecap="round" fill="none" strokeDasharray="2 2"/>
              <rect x="6" y="16" width="16" height="4" rx="1.2" fill="#25D366"/>
              <path d="M10 16l2-5h6l2 5" fill="#25D366"/>
              <path d="M12.5 11.5l-1.5 4h4z" fill="#1F2937" opacity="0.5"/>
              <rect x="16" y="11.5" width="4" height="3.8" fill="#1F2937" opacity="0.5"/>
              <circle cx="21" cy="17.5" r="0.7" fill="#FBBF24"/>
              <circle cx="10" cy="20.5" r="2.2" fill="#111827"/><circle cx="10" cy="20.5" r="1.2" fill="#374151"/>
              <circle cx="18" cy="20.5" r="2.2" fill="#111827"/><circle cx="18" cy="20.5" r="1.2" fill="#374151"/>
              <circle cx="26" cy="10" r="2" fill="#25D366" opacity="0.3"/><circle cx="26" cy="10" r="1.2" fill="#25D366"/>
            </svg>
            <span style={{ fontWeight:800,fontSize:16,color:C.text,letterSpacing:-.3 }}>CarExpress</span>
          </div>
          <button onClick={()=>setNotifsOpen(true)} style={{ width:38,height:38,borderRadius:11,border:`1.5px solid ${C.border}`,background:C.card,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:C.dark,position:"relative",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
            {Ic.bell}
            <span style={{ position:"absolute",top:5,right:5,width:8,height:8,borderRadius:4,background:C.danger,border:"2px solid #fff" }}/>
          </button>
        </div>
        <div style={{ padding:"16px 16px 96px",overflowY:"auto",maxHeight:"100vh" }}>
          {render()}
        </div>
        <BottomNav tab={tab} setTab={t=>{ setTab(t); if(t==="home") setScreen("home"); setCancelOpen(false); setNotifsOpen(false); }}/>

        {/* Floating buttons: map only when not arrived, chat always within 24h */}
        {showChat && (
          <div style={{ position:"fixed",right:18,bottom:82,zIndex:200,display:"flex",flexDirection:"column",alignItems:"center",gap:10 }}>
            {showMap && <FloatingMapButton onOpen={()=>setMapOpen(true)} trip={activeTrip}/>}
            <FloatingChat trip={activeTrip} bookedAt={bookedAt}/>
          </div>
        )}

        {mapOpen && activeTrip && !arrived && (
          <MapOverlay trip={activeTrip} onClose={()=>setMapOpen(false)}/>
        )}
        {toast && <Toast message={toast} onClose={()=>setToast(null)}/>}

        {/* Policy dialog overlay */}
        {policyDialog && (
          <CancellationPolicyDialog role={policyDialog} onAccept={acceptPolicy} onDecline={declinePolicy}/>
        )}
      </div>
    </div>
  );
}
