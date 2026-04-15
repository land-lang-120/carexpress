/* CarExpress — App Root */

function App() {
  const [tab,       setTab]      = useState("home");
  const [screen,    setScreen]   = useState("home");
  const [results,   setResults]  = useState([]);
  const [activeTrip,setActiveTrip]= useState(null);
  const [bookedAt,  setBookedAt] = useState(null);
  const [mapOpen,   setMapOpen]  = useState(false);
  const [toast,     setToast]    = useState(null);

  const handleBook = d => {
    setActiveTrip({ ...d, role:"passenger" });
    setBookedAt(Date.now());
    setScreen("home");
    setTab("home");
    setToast(`Réservé · ${d.from} → ${d.to}`);
  };

  const handleDriverSubmit = form => {
    const synthetic = {
      ...DRIVERS[0],
      name: "Moi (Chauffeur)",
      ini: "MOI",
      verified: true,
      role: "driver",
      from: form.from, to: form.to,
      dep: form.time, dur: "—",
      price: +form.price || 0,
      pickup: form.pickup,
    };
    setActiveTrip(synthetic);
    setBookedAt(Date.now());
    setScreen("home");
    setToast("Trajet publié ! Vos boutons de suivi sont actifs.");
  };

  const render = () => {
    if (tab !== "home") {
      if (tab==="history")    return <HistoryScreen/>;
      if (tab==="favorites")  return <FavoritesScreen setTab={setTab}/>;
      if (tab==="profile")    return <ProfileScreen/>;
    }
    if (screen==="driver")    return <DriverScreen onBack={()=>setScreen("home")} onSubmit={handleDriverSubmit}/>;
    if (screen==="passenger") return <PassengerScreen onBack={()=>setScreen("home")} setScreen={setScreen} setResults={setResults}/>;
    if (screen==="results")   return <ResultsScreen onBack={()=>setScreen("passenger")} results={results} onBook={handleBook}/>;
    return <HomeScreen setScreen={s=>{ setTab("home"); setScreen(s); }}/>;
  };

  return (
    <div style={{ display:"flex",justifyContent:"center",background:"#DCDFE4",minHeight:"100vh" }}>
      <div style={{ width:"100%",maxWidth:430,minHeight:"100vh",background:C.bg,position:"relative",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
        <div style={{ padding:"10px 16px 0",display:"flex",justifyContent:"space-between",alignItems:"center",background:C.bg,position:"sticky",top:0,zIndex:50 }}>
          <div style={{ display:"flex",alignItems:"center",gap:8 }}>
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="9" fill="#1F2937"/>
              <path d="M8 20.5h16M10 17l2-6h8l2 6" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="21" r="2" fill="#25D366"/><circle cx="20" cy="21" r="2" fill="#25D366"/>
              <path d="M16 8v3" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="16" cy="7" r="1.5" fill="#25D366"/>
            </svg>
            <span style={{ fontWeight:800,fontSize:16,color:C.text,letterSpacing:-.3 }}>CarExpress</span>
          </div>
        </div>
        <div style={{ padding:"16px 16px 96px",overflowY:"auto",maxHeight:"100vh" }}>
          {render()}
        </div>
        <BottomNav tab={tab} setTab={t=>{ setTab(t); if(t==="home") setScreen("home"); }}/>
        {activeTrip && bookedAt && tab === "home" && screen === "home" && (
          <FloatingStack trip={activeTrip} bookedAt={bookedAt} onMapOpen={()=>setMapOpen(true)}/>
        )}
        {mapOpen && activeTrip && (
          <MapOverlay trip={activeTrip} onClose={()=>setMapOpen(false)}/>
        )}
        {toast && <Toast message={toast} onClose={()=>setToast(null)}/>}
      </div>
    </div>
  );
}
