/* CarExpress — Auto-generated bundle. Do not edit manually. */


/* ═══ js/config.js ═══ */
/* CarExpress — Config & Design Tokens */

const { useState, useEffect, useRef } = React;

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const C = {
  bg:        "#F5F6F8",
  card:      "#FFFFFF",
  border:    "#E8EAED",
  text:      "#111827",
  textSec:   "#6B7280",
  textLight: "#9CA3AF",
  green:     "#25D366",
  greenBg:   "#F0FBF4",
  greenDark: "#1AAD54",
  dark:      "#1F2937",
  danger:    "#EF4444",
  dangerBg:  "#FEF2F2",
  shadow:    "0 1px 4px rgba(0,0,0,0.07)",
  shadowMd:  "0 4px 20px rgba(0,0,0,0.11)",
  shadowLg:  "0 8px 32px rgba(0,0,0,0.15)",
};

const PAYMENT_OPTS = [
  { value:"all",    label:"Tout accepté",       sub:"Carte · MTN MoMo · Orange Money · Espèces" },
  { value:"card",   label:"Carte bancaire",     sub:"Visa, Mastercard — paiement sécurisé" },
  { value:"momo",   label:"MTN Mobile Money",   sub:"Paiement mobile MTN uniquement" },
  { value:"orange", label:"Orange Money",       sub:"Paiement mobile Orange uniquement" },
  { value:"cash",   label:"Espèces uniquement", sub:"Paiement en main propre" },
];

const fmt  = n => (+n||0).toLocaleString("fr-FR");
const plab = v => PAYMENT_OPTS.find(p=>p.value===v)?.label || v;
const psub = v => PAYMENT_OPTS.find(p=>p.value===v)?.sub   || "";


/* ═══ js/data.js ═══ */
/* CarExpress — Data */

const CITIES = ["Yaoundé","Douala","Bafoussam","Bamenda","Kribi","Garoua","Maroua","Ngaoundéré","Bertoua","Ebolowa","Limbé","Buéa","Nkongsamba","Dschang","Kumba"];

const DRIVERS = [
  { id:1, name:"Jean-Paul Mbarga", ini:"JP", rating:4.9, trips:214, verified:true,  from:"Yaoundé", to:"Douala",    pickup:"Carrefour Bastos, en face de la pharmacie", dep:"06:30", dur:"5h30", seats:3, price:3500, wc:2, food:1, shop:0, luggage:["small","large"],          vehicle:"Toyota Hiace",     plate:"LT 4821 A", phone:"+237 699 123 456", pay:"all" },
  { id:2, name:"Fatima Aboubakar", ini:"FA", rating:4.7, trips:89,  verified:false, from:"Yaoundé", to:"Douala",    pickup:"Rond-point Nlongkak, côté station Total",     dep:"08:00", dur:"6h00", seats:2, price:3000, wc:1, food:1, shop:1, luggage:["small"],               vehicle:"Mitsubishi L200",  plate:"CE 2247 B", phone:"+237 677 654 321", pay:"momo" },
  { id:3, name:"Emmanuel Nkoa",    ini:"EN", rating:5.0, trips:412, verified:true,  from:"Yaoundé", to:"Douala",    pickup:"Agence Bini Voyages, Mvan — après le marché", dep:"10:00", dur:"5h15", seats:4, price:4000, wc:2, food:2, shop:0, luggage:["small","large","xlarge"], vehicle:"Mercedes Sprinter",plate:"LT 0093 C", phone:"+237 655 987 654", pay:"all" },
  { id:4, name:"Alice Mbappe",     ini:"AM", rating:4.8, trips:156, verified:true,  from:"Yaoundé", to:"Bafoussam", pickup:"Carrefour Warda, en face du marché Mfoundi",  dep:"07:00", dur:"4h00", seats:2, price:2500, wc:1, food:1, shop:0, luggage:["small","large"],          vehicle:"Renault Trafic",   plate:"SW 5541 D", phone:"+237 690 111 222", pay:"orange" },
];

const HISTORY = [
  { id:1, from:"Yaoundé",   to:"Douala",    date:"12 Mar 2026", price:3500, ok:true,  pts:35 },
  { id:2, from:"Douala",    to:"Kribi",     date:"5 Mar 2026",  price:2000, ok:true,  pts:20 },
  { id:3, from:"Bafoussam", to:"Yaoundé",   date:"20 Fév 2026", price:2500, ok:false, pts:0  },
];

const FAVS = [
  { id:1, from:"Yaoundé", to:"Douala",  freq:"Hebdomadaire" },
  { id:2, from:"Douala",  to:"Kribi",   freq:"Mensuel" },
];

const EMERGENCY = [
  { label:"Police",     number:"117",               color:"#1D4ED8" },
  { label:"Pompiers",   number:"118",               color:C.danger  },
  { label:"SAMU",       number:"15",                color:C.green   },
  { label:"Croix-Rouge",number:"+237 222 22 28 40", color:C.danger  },
];

const HOSPITALS = [
  { name:"Hôpital Central de Yaoundé", dist:"1.2 km", type:"Hôpital"     },
  { name:"Clinique Bastos",             dist:"2.4 km", type:"Clinique"    },
  { name:"Dispensaire Mvog-Mbi",        dist:"3.1 km", type:"Dispensaire" },
];

const CHAT_WINDOW_MS = 24 * 60 * 60 * 1000;

const CHAT_MODES = {
  adjust: {
    label: "Ajuster le trajet",
    icon: "✏️",
    color: "#1F2937",
    colorLight: "#F3F4F6",
    intro: "Discutez ici des ajustements au trajet : nouveau point de rendez-vous, modification du prix, bagages supplémentaires, heure de départ, arrêts…",
    suggestions: [
      { icon: "📍", label: "Changer le point de RDV",   text: "Bonjour, serait-il possible de changer le point de prise en charge ?" },
      { icon: "💰", label: "Renégocier le prix",         text: "Bonjour, peut-on s'accorder sur un ajustement du tarif ?" },
      { icon: "🧳", label: "Bagage supplémentaire",      text: "J'ai un bagage en plus, est-ce que c'est possible ?" },
      { icon: "⏰", label: "Modifier l'heure de départ", text: "Pourrait-on décaler légèrement l'heure de départ ?" },
      { icon: "🛑", label: "Ajouter un arrêt",           text: "Est-ce qu'on peut prévoir un arrêt supplémentaire sur la route ?" },
      { icon: "👥", label: "Place pour un +1",           text: "Je voudrais ajouter une personne, y a-t-il encore de la place ?" },
    ],
    replies: {
      default: [
        "Pas de problème, je suis flexible. Dites-moi ce qui vous convient.",
        "C'est possible, on peut s'arranger. Parlez-moi des détails.",
        "Je vais voir ce que je peux faire et vous réponds dans un instant.",
        "Entendu. On s'adapte selon les besoins.",
      ],
      "Changer le point de RDV":    ["Aucun problème. Quel nouveau point vous convient le mieux ?", "Dites-moi l'adresse exacte, je m'y rendrai."],
      "Renégocier le prix":         ["Je comprends. Quelle somme proposez-vous ?", "On peut discuter — faites votre proposition."],
      "Bagage supplémentaire":      ["Décrivez le bagage, je vous dis si c'est faisable.", "Cela dépend de la taille. Quel type de bagage ?"],
      "Modifier l'heure de départ": ["De combien de minutes souhaitez-vous décaler ?", "Possible dans une certaine limite. Quelle heure vous convient ?"],
      "Ajouter un arrêt":           ["Où souhaitez-vous l'arrêt ? Je vérifie si c'est sur le trajet.", "Précisez le lieu, on en discute."],
      "Place pour un +1":           ["Il me reste de la place. La personne sera au même point de RDV ?", "Pas de problème, prévenez-moi pour que je confirme."],
    },
  },
  lost: {
    label: "Objet perdu / oublié",
    icon: "🔍",
    color: "#92400E",
    colorLight: "#FFFBEB",
    intro: "Vous avez oublié quelque chose dans le véhicule, ou le chauffeur a retrouvé un objet ? Utilisez ce canal pour vous coordonner.",
    suggestions: [
      { icon: "🎒", label: "J'ai oublié un bagage",         text: "Bonjour, j'ai oublié un bagage dans votre véhicule. Pouvez-vous vérifier ?" },
      { icon: "📱", label: "J'ai oublié mon téléphone",     text: "J'ai laissé mon téléphone dans la voiture. Il est toujours là ?" },
      { icon: "👜", label: "J'ai oublié mon sac",           text: "Mon sac est resté dans le véhicule, comment puis-je le récupérer ?" },
      { icon: "🔑", label: "J'ai oublié mes clés",          text: "Mes clés sont dans votre voiture. Comment faire pour les récupérer ?" },
      { icon: "📄", label: "J'ai oublié des documents",     text: "J'ai laissé des documents importants dans le véhicule." },
      { icon: "📦", label: "J'ai trouvé un objet (chauffeur)", text: "J'ai trouvé un objet oublié par un passager. Comment vous le remettre ?" },
    ],
    replies: {
      default: [
        "Je vérifie dans le véhicule et vous réponds de suite.",
        "Laissez-moi regarder — je vous confirme dans un instant.",
        "Je suis disponible pour l'organisation de la récupération.",
        "D'accord, on va arranger ça. Dites-moi où vous trouvez.",
      ],
      "J'ai oublié un bagage":           ["Je vois un bagage ici. Décrivez-le pour confirmer.", "J'ai bien quelque chose. Comment souhaitez-vous récupérer ?"],
      "J'ai oublié mon téléphone":       ["Je retrouve un téléphone. C'est quelle marque / couleur ?", "Il y a un téléphone ici. Comment vous le rendre ?"],
      "J'ai oublié mon sac":             ["J'ai un sac. Décrivez sa couleur et son contenu pour confirmer.", "Retrouvé. On peut se retrouver à un point fixe."],
      "J'ai oublié mes clés":            ["Effectivement j'ai des clés. À quel moment vous convient la récupération ?", "Je les garde en sécurité. Dites-moi où vous rejoindre."],
      "J'ai oublié des documents":       ["Je vérifie — quels documents exactement ?", "Il y a des papiers ici. Décrivez-les pour confirmer que c'est bien les vôtres."],
      "J'ai trouvé un objet (chauffeur)":["Merci de le signaler. Le passager va être notifié.", "Je transmets l'information. Gardez l'objet en sécurité."],
    },
  },
};


/* ═══ js/components.js ═══ */
/* CarExpress — Icons & Shared Components */

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const Ic = {
  map:     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  flag:    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
  cal:     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  clock:   <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  users:   <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  money:   <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  card:    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  pin:     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>,
  car:     <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>,
  compass: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  shield:  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  check:   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  dblcheck:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/><polyline points="16 6 5 17"/></svg>,
  arrow:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  back:    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>,
  swap:    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>,
  bell:    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  home:    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  hist:    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>,
  heart:   <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  user:    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  search:  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  phone:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a2 2 0 012-2.18h3A2 2 0 0110 8.53l.7 2.81a2 2 0 01-.45 2.11L9.09 14.6a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45l2.81.7A2 2 0 0122 21v2z"/></svg>,
  star:    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  warn:    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  bag:     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  sos:     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  chat:    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  mobile:  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  send:    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  close:   <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  timer:   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
};

// ─── PRIMITIVES ───────────────────────────────────────────────────────────────
const Card = ({ children, style:s={}, onClick }) => (
  <div onClick={onClick} style={{ background:C.card,borderRadius:16,border:`1px solid ${C.border}`,boxShadow:C.shadow,...s }}>
    {children}
  </div>
);

const Btn = ({ children, onClick, variant="dark", full, style:s={}, disabled }) => {
  const v = {
    dark:    { background:C.dark,    color:"#fff"    },
    green:   { background:C.green,   color:"#fff"    },
    outline: { background:"transparent", color:C.dark, border:`1.5px solid ${C.border}` },
    danger:  { background:C.dangerBg, color:C.danger, border:`1px solid #FECACA` },
  };
  return (
    <button onClick={onClick} disabled={disabled}
      style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:7,padding:"13px 20px",borderRadius:13,border:"none",cursor:disabled?"not-allowed":"pointer",fontWeight:700,fontSize:14,width:full?"100%":"auto",opacity:disabled?.5:1,transition:"opacity .15s,transform .15s",...v[variant],...s }}
      onMouseEnter={e=>{if(!disabled){e.currentTarget.style.opacity=".85";e.currentTarget.style.transform="translateY(-1px)"}}}
      onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform=""}}>
      {children}
    </button>
  );
};

const Label = ({ children }) => (
  <p style={{ fontSize:11,fontWeight:700,color:C.textLight,textTransform:"uppercase",letterSpacing:.7,marginBottom:8 }}>{children}</p>
);

const inputCss = icon => ({
  width:"100%",padding:icon?"13px 13px 13px 41px":"13px",
  borderRadius:12,border:`1.5px solid ${C.border}`,
  background:C.card,fontSize:14,color:C.text,outline:"none",transition:"border-color .2s",
});

const Field = ({ label, icon, value, onChange, type="text", placeholder }) => (
  <div>
    {label && <Label>{label}</Label>}
    <div style={{ position:"relative" }}>
      {icon && <span style={{ position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:C.textSec,display:"flex" }}>{icon}</span>}
      <input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
        style={inputCss(!!icon)}
        onFocus={e=>e.target.style.borderColor=C.green}
        onBlur={e=>e.target.style.borderColor=C.border} />
    </div>
  </div>
);

const Sel = ({ label, icon, value, onChange, options }) => (
  <div>
    {label && <Label>{label}</Label>}
    <div style={{ position:"relative" }}>
      {icon && <span style={{ position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:C.textSec,display:"flex",zIndex:1 }}>{icon}</span>}
      <select value={value} onChange={e=>onChange(e.target.value)}
        style={{ ...inputCss(!!icon),appearance:"none",cursor:"pointer" }}
        onFocus={e=>e.target.style.borderColor=C.green}
        onBlur={e=>e.target.style.borderColor=C.border}>
        {options.map(o=><option key={o.value||o} value={o.value||o}>{o.label||o}</option>)}
      </select>
      <span style={{ position:"absolute",right:13,top:"50%",transform:"translateY(-50%)",color:C.textSec,pointerEvents:"none",fontSize:11 }}>▾</span>
    </div>
  </div>
);

const Counter = ({ label, sub, value, onChange }) => (
  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 14px",background:C.card,borderRadius:12,border:`1.5px solid ${C.border}` }}>
    <div>
      <p style={{ fontSize:14,fontWeight:600,color:C.text }}>{label}</p>
      {sub&&<p style={{ fontSize:11,color:C.textLight,marginTop:2 }}>{sub}</p>}
    </div>
    <div style={{ display:"flex",alignItems:"center",gap:10 }}>
      <button onClick={()=>onChange(Math.max(0,value-1))} style={{ width:29,height:29,borderRadius:8,border:`1.5px solid ${C.border}`,background:C.bg,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:C.dark,fontWeight:800,fontSize:17 }}>−</button>
      <span style={{ fontSize:16,fontWeight:800,color:C.dark,minWidth:18,textAlign:"center" }}>{value}</span>
      <button onClick={()=>onChange(Math.min(5,value+1))} style={{ width:29,height:29,borderRadius:8,border:"none",background:C.dark,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:17 }}>+</button>
    </div>
  </div>
);

const VerBadge = ({ verified }) => (
  <span style={{ display:"inline-flex",alignItems:"center",gap:4,padding:"2px 9px",borderRadius:20,fontSize:11,fontWeight:700,
    background:verified?C.greenBg:"#FFFBEB",color:verified?C.greenDark:"#92400E",
    border:`1px solid ${verified?"#A7F3D0":"#FDE68A"}` }}>
    {verified
      ? <><span style={{ color:C.green,display:"flex" }}>{Ic.check}</span>Vérifié</>
      : <><span style={{ display:"flex" }}>{Ic.warn}</span>Non vérifié</>}
  </span>
);

const Chip = ({ children }) => (
  <span style={{ display:"inline-flex",alignItems:"center",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600,background:C.bg,color:C.textSec,border:`1px solid ${C.border}` }}>
    {children}
  </span>
);

// ─── BOTTOM NAV ───────────────────────────────────────────────────────────────
const NAV = [
  { k:"home",     icon:Ic.home,  label:"Accueil"   },
  { k:"history",  icon:Ic.hist,  label:"Historique" },
  { k:"favorites",icon:Ic.heart, label:"Favoris"   },
  { k:"profile",  icon:Ic.user,  label:"Profil"    },
];
const BottomNav = ({ tab, setTab }) => (
  <div style={{ position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:C.card,borderTop:`1px solid ${C.border}`,display:"flex",zIndex:100,paddingBottom:"env(safe-area-inset-bottom,8px)" }}>
    {NAV.map(({ k,icon,label })=>{
      const on = tab===k;
      return (
        <button key={k} onClick={()=>setTab(k)} style={{ flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"10px 4px 8px",border:"none",background:"transparent",cursor:"pointer" }}>
          <span style={{ color:on?C.green:C.textLight,display:"flex",transition:"color .2s" }}>{icon}</span>
          <span style={{ fontSize:10,fontWeight:700,color:on?C.green:C.textLight,transition:"color .2s" }}>{label}</span>
          {on&&<div style={{ width:18,height:2,borderRadius:1,background:C.green }}/>}
        </button>
      );
    })}
  </div>
);

const PageHdr = ({ title, sub, onBack }) => (
  <div style={{ display:"flex",alignItems:"center",gap:11,marginBottom:22 }}>
    {onBack&&(
      <button onClick={onBack} style={{ width:37,height:37,borderRadius:11,border:`1.5px solid ${C.border}`,background:C.card,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:C.dark,flexShrink:0 }}>
        {Ic.back}
      </button>
    )}
    <div>
      <h2 style={{ fontWeight:800,fontSize:19,color:C.text }}>{title}</h2>
      {sub&&<p style={{ fontSize:12,color:C.textSec,marginTop:2 }}>{sub}</p>}
    </div>
  </div>
);

const Toast = ({ message, onClose }) => {
  useEffect(()=>{ const t=setTimeout(onClose,3000); return()=>clearTimeout(t); },[]);
  return (
    <div style={{ position:"fixed",top:54,left:"50%",transform:"translateX(-50%)",background:C.dark,color:"#fff",padding:"11px 16px",borderRadius:14,fontSize:13,fontWeight:600,zIndex:400,boxShadow:C.shadowMd,display:"flex",alignItems:"center",gap:9,whiteSpace:"nowrap",animation:"fadeUp .25s ease",maxWidth:"88%" }}>
      <span style={{ color:C.green,display:"flex" }}>{Ic.check}</span>{message}
    </div>
  );
};


/* ═══ js/home.js ═══ */
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


/* ═══ js/driver.js ═══ */
/* CarExpress — Driver Form Screen */

function DriverScreen({ onBack, onSubmit }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ from:"Yaoundé",to:"Douala",pickup:"",date:"",time:"06:00",duration:"5h30",seats:"3",wc:2,food:1,shop:0,luggage:{small:true,large:false,xlarge:false},price:"3500",pay:"all" });
  const set = (k,v) => setForm(p=>({...p,[k]:v}));
  const STEPS = ["Itinéraire","Conditions","Tarif"];

  const S1 = () => (
    <div style={{ display:"flex",flexDirection:"column",gap:13 }}>
      <Sel label="Ville de départ" icon={Ic.map}   value={form.from}   onChange={v=>set("from",v)}   options={CITIES}/>
      <Sel label="Destination"     icon={Ic.flag}  value={form.to}     onChange={v=>set("to",v)}     options={CITIES.filter(c=>c!==form.from)}/>
      <div>
        <Field label="Point de prise en charge" icon={Ic.pin} value={form.pickup} onChange={v=>set("pickup",v)} placeholder="Ex: Rond-point Nlongkak, station Total"/>
        <p style={{ fontSize:11,color:C.textSec,marginTop:6,lineHeight:1.5,paddingLeft:2 }}>Indiquez un endroit connu : point de repère, agence ou carrefour précis.</p>
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:11 }}>
        <Field label="Date"  icon={Ic.cal}   type="date" value={form.date} onChange={v=>set("date",v)}/>
        <Field label="Heure" icon={Ic.clock} type="time" value={form.time} onChange={v=>set("time",v)}/>
      </div>
      <div>
        <Sel label="Durée estimée du trajet" icon={Ic.clock} value={form.duration} onChange={v=>set("duration",v)}
          options={["2h00","2h30","3h00","3h30","4h00","4h30","5h00","5h30","6h00","6h30","7h00","8h00","9h00","10h00","12h00"].map(v=>({ value:v,label:v }))}/>
        <p style={{ fontSize:11,color:C.textSec,marginTop:6,lineHeight:1.5,paddingLeft:2 }}>Estimez la durée en tenant compte du trafic habituel sur cette route.</p>
      </div>
      <Sel label="Places disponibles" icon={Ic.users} value={form.seats} onChange={v=>set("seats",v)}
        options={["1","2","3","4","5","6","7","8"].map(v=>({ value:v,label:`${v} place${v>1?"s":""}` }))}/>
    </div>
  );

  const S2 = () => (
    <div style={{ display:"flex",flexDirection:"column",gap:11 }}>
      <Label>Arrêts prévus</Label>
      <Counter label="Besoins / Pipi"     sub="Arrêts sanitaires"   value={form.wc}   onChange={v=>set("wc",v)}/>
      <Counter label="Repas / Restaurant" sub="Pauses alimentation" value={form.food} onChange={v=>set("food",v)}/>
      <Counter label="Achats / Marché"    sub="Arrêts commerciaux"  value={form.shop} onChange={v=>set("shop",v)}/>
      <div style={{ marginTop:4 }}><Label>Bagages acceptés</Label></div>
      {[["small","Petit bagage","Sac à dos, bagage cabine"],["large","Gros bagage","Valise standard"],["xlarge","Très gros bagage","Gros colis, carton"]].map(([k,name,desc])=>(
        <label key={k} style={{ display:"flex",alignItems:"center",gap:11,padding:"12px 14px",background:C.card,borderRadius:12,cursor:"pointer",border:`1.5px solid ${form.luggage[k]?C.green:C.border}`,transition:"border-color .2s" }}>
          <input type="checkbox" checked={form.luggage[k]} onChange={e=>set("luggage",{...form.luggage,[k]:e.target.checked})} style={{ display:"none" }}/>
          <span style={{ color:C.textSec,display:"flex" }}>{Ic.bag}</span>
          <div style={{ flex:1 }}>
            <p style={{ fontWeight:700,fontSize:13,color:C.text }}>{name}</p>
            <p style={{ fontSize:11,color:C.textSec }}>{desc}</p>
          </div>
          <div style={{ width:19,height:19,borderRadius:5,border:`2px solid ${form.luggage[k]?C.green:C.border}`,background:form.luggage[k]?C.green:"transparent",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",transition:"all .2s",flexShrink:0 }}>
            {form.luggage[k]&&Ic.check}
          </div>
        </label>
      ))}
    </div>
  );

  const S3 = () => (
    <div style={{ display:"flex",flexDirection:"column",gap:13 }}>
      <Field label="Prix par personne (FCFA)" icon={Ic.money} type="number" value={form.price} onChange={v=>set("price",v)} placeholder="ex: 3500"/>
      <div>
        <Label>Mode de paiement accepté</Label>
        <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
          {PAYMENT_OPTS.map(opt=>(
            <label key={opt.value} style={{ display:"flex",alignItems:"center",gap:11,padding:"13px 14px",background:C.card,borderRadius:12,cursor:"pointer",border:`1.5px solid ${form.pay===opt.value?C.green:C.border}`,transition:"border-color .2s" }}>
              <input type="radio" name="pay" checked={form.pay===opt.value} onChange={()=>set("pay",opt.value)} style={{ display:"none" }}/>
              <span style={{ color:C.textSec,display:"flex" }}>{Ic.card}</span>
              <div style={{ flex:1 }}>
                <p style={{ fontWeight:700,fontSize:13,color:C.text }}>{opt.label}</p>
                <p style={{ fontSize:11,color:C.textSec }}>{opt.sub}</p>
              </div>
              <div style={{ width:18,height:18,borderRadius:"50%",border:`2px solid ${form.pay===opt.value?C.green:C.border}`,background:form.pay===opt.value?C.green:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .2s" }}>
                {form.pay===opt.value&&<div style={{ width:6,height:6,borderRadius:"50%",background:"#fff" }}/>}
              </div>
            </label>
          ))}
        </div>
      </div>
      <Card style={{ padding:16,background:C.bg,border:"none" }}>
        <Label>Récapitulatif</Label>
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:12 }}>
          <span style={{ fontWeight:800,fontSize:16,color:C.text }}>{form.from}</span>
          <span style={{ color:C.textLight }}>→</span>
          <span style={{ fontWeight:800,fontSize:16,color:C.text }}>{form.to}</span>
        </div>
        {form.pickup&&(
          <div style={{ display:"flex",gap:8,padding:"9px 11px",background:C.card,borderRadius:10,marginBottom:10,border:`1px solid ${C.border}` }}>
            <span style={{ color:C.green,display:"flex",flexShrink:0 }}>{Ic.pin}</span>
            <p style={{ fontSize:12,color:C.text,lineHeight:1.4 }}>{form.pickup}</p>
          </div>
        )}
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8 }}>
          {[["Départ",form.time],["Durée",form.duration],["Places",form.seats],["Prix",`${fmt(+form.price)} FCFA`],["Paiement",plab(form.pay)]].map(([l,v])=>(
            <div key={l} style={{ padding:"9px 11px",background:C.card,borderRadius:10,border:`1px solid ${C.border}` }}>
              <p style={{ fontSize:10,color:C.textSec,fontWeight:600 }}>{l}</p>
              <p style={{ fontSize:13,fontWeight:700,color:C.text,marginTop:2 }}>{v}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Proposer un trajet" sub="Chauffeur" onBack={onBack}/>
      <div style={{ display:"flex",alignItems:"center",marginBottom:26 }}>
        {STEPS.map((s,i)=>(
          <div key={s} style={{ display:"flex",alignItems:"center",flex:i<STEPS.length-1?1:0 }}>
            <div style={{ display:"flex",flexDirection:"column",alignItems:"center" }}>
              <div style={{ width:28,height:28,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,transition:"all .3s",background:step>i+1?C.green:step===i+1?C.dark:C.border,color:step>=i+1?"#fff":C.textSec }}>
                {step>i+1?Ic.check:i+1}
              </div>
              <span style={{ fontSize:10,fontWeight:600,color:step===i+1?C.text:C.textLight,marginTop:4 }}>{s}</span>
            </div>
            {i<STEPS.length-1&&<div style={{ flex:1,height:2,background:step>i+1?C.green:C.border,margin:"0 6px 13px",transition:"all .3s" }}/>}
          </div>
        ))}
      </div>
      <div style={{ marginBottom:22 }}>{step===1?<S1/>:step===2?<S2/>:<S3/>}</div>
      <div style={{ display:"flex",gap:9 }}>
        {step>1&&<Btn variant="outline" onClick={()=>setStep(s=>s-1)} style={{ flex:1 }}>← Retour</Btn>}
        <Btn variant={step===3?"green":"dark"} onClick={()=>step<3?setStep(s=>s+1):onSubmit(form)} style={{ flex:2 }}>
          {step<3?<>Continuer {Ic.arrow}</>:"Publier le trajet"}
        </Btn>
      </div>
    </div>
  );
}


/* ═══ js/passenger.js ═══ */
/* CarExpress — Passenger Search Screen */

function PassengerScreen({ onBack, setScreen, setResults }) {
  const [from,setFrom]=useState("Yaoundé"),[to,setTo]=useState("Douala"),[date,setDate]=useState(""),[loading,setLoading]=useState(false);
  const search=()=>{ setLoading(true); setTimeout(()=>{ setResults(DRIVERS.filter(d=>d.from===from&&d.to===to)); setLoading(false); setScreen("results"); },1200); };
  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Trouver un trajet" sub="Voyageur" onBack={onBack}/>
      <Card style={{ padding:18,marginBottom:14 }}>
        <div style={{ display:"flex",flexDirection:"column",gap:13 }}>
          <Sel label="Départ"      icon={Ic.map}  value={from} onChange={setFrom} options={CITIES}/>
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ flex:1,height:1,background:C.border }}/>
            <button onClick={()=>{const t=from;setFrom(to);setTo(t);}} style={{ width:34,height:34,borderRadius:10,border:`1.5px solid ${C.border}`,background:C.card,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:C.dark,transition:"border-color .2s" }}
              onMouseEnter={e=>e.currentTarget.style.borderColor=C.green} onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
              {Ic.swap}
            </button>
            <div style={{ flex:1,height:1,background:C.border }}/>
          </div>
          <Sel label="Destination" icon={Ic.flag} value={to}   onChange={setTo}   options={CITIES.filter(c=>c!==from)}/>
          <Field label="Date (optionnel)" icon={Ic.cal} type="date" value={date} onChange={setDate}/>
        </div>
      </Card>
      <Btn variant="green" full onClick={search} disabled={loading} style={{ height:50,fontSize:14,borderRadius:14 }}>
        {loading?<><span style={{ animation:"spin .8s linear infinite",display:"inline-block" }}>◌</span> Recherche...</>:<>{Ic.search} Rechercher un trajet</>}
      </Btn>
      <div style={{ marginTop:13,display:"flex",gap:10,alignItems:"flex-start",padding:"12px 14px",background:C.card,borderRadius:13,border:`1px solid ${C.border}` }}>
        <span style={{ color:C.green,flexShrink:0,marginTop:1,display:"flex" }}>{Ic.shield}</span>
        <p style={{ fontSize:12,color:C.textSec,lineHeight:1.6 }}>Privilégiez les chauffeurs <strong style={{ color:C.text }}>Vérifiés</strong> — CNI, permis et carte grise transmis à CarExpress.</p>
      </div>
    </div>
  );
}


/* ═══ js/results.js ═══ */
/* CarExpress — Results, Driver Detail & Booking Confirmation */

function ResultsScreen({ onBack, results, onBook }) {
  const [sel,setSel]=useState(null);
  const [booking,setBooking]=useState(null);

  if(booking) return <BookingConfirm driver={booking} onBack={()=>setBooking(null)} onConfirm={()=>onBook(booking)}/>;
  if(sel!==null) return <DriverDetail driver={results[sel]} onBack={()=>setSel(null)} onBook={()=>setBooking(results[sel])}/>;

  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Trajets disponibles" sub={`${results[0]?.from||""} → ${results[0]?.to||""} · ${results.length} résultat${results.length>1?"s":""}`} onBack={onBack}/>
      {results.length===0?(
        <div style={{ textAlign:"center",padding:"60px 20px" }}>
          <p style={{ fontSize:40,opacity:.3,marginBottom:14 }}>◌</p>
          <p style={{ fontWeight:700,fontSize:15,color:C.text,marginBottom:6 }}>Aucun trajet trouvé</p>
          <p style={{ fontSize:13,color:C.textSec }}>Aucun chauffeur ne propose ce trajet actuellement.</p>
        </div>
      ):(
        <div style={{ display:"flex",flexDirection:"column",gap:11 }}>
          {results.map((d,i)=>(
            <Card key={d.id} onClick={()=>setSel(i)} style={{ padding:16,cursor:"pointer",borderColor:d.verified?"#A7F3D0":C.border,animation:`fadeUp .3s ease ${i*.07}s both`,transition:"box-shadow .15s,transform .15s" }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow=C.shadowMd;e.currentTarget.style.transform="translateY(-1px)"}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow=C.shadow;e.currentTarget.style.transform=""}}>
              <div style={{ display:"flex",gap:11,alignItems:"center",marginBottom:13 }}>
                <div style={{ width:44,height:44,borderRadius:13,background:d.verified?C.dark:C.bg,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,color:d.verified?"#fff":C.textSec,flexShrink:0,border:d.verified?"none":`1px solid ${C.border}` }}>{d.ini}</div>
                <div style={{ flex:1,minWidth:0 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:7,marginBottom:4,flexWrap:"wrap" }}>
                    <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{d.name}</span>
                    <VerBadge verified={d.verified}/>
                  </div>
                  <div style={{ display:"flex",alignItems:"center",gap:4,color:"#F59E0B",fontSize:12 }}>
                    {Ic.star}<span style={{ color:C.textSec }}>{d.rating} · {d.trips} trajets · {d.vehicle}</span>
                  </div>
                </div>
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:11,padding:"9px 12px",background:C.bg,borderRadius:10 }}>
                <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{d.from}</span>
                <div style={{ flex:1,height:1,background:C.border }}/>
                <span style={{ fontSize:11,color:C.textSec }}>{d.dur}</span>
                <div style={{ flex:1,height:1,background:C.border }}/>
                <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{d.to}</span>
              </div>
              <div style={{ display:"flex",gap:6,flexWrap:"wrap",marginBottom:13 }}>
                <Chip>{d.dep}</Chip>
                <Chip>{d.seats} places</Chip>
                {d.wc>0&&<Chip>WC ×{d.wc}</Chip>}
                {d.food>0&&<Chip>Repas ×{d.food}</Chip>}
                {d.luggage.includes("xlarge")&&<Chip>Gros colis</Chip>}
              </div>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                <div><span style={{ fontWeight:800,fontSize:19,color:C.text }}>{fmt(d.price)}</span><span style={{ fontSize:12,color:C.textSec }}> FCFA / pers.</span></div>
                <span style={{ display:"flex",alignItems:"center",gap:5,fontSize:13,fontWeight:700,color:C.green }}>Voir {Ic.arrow}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function DriverDetail({ driver:d, onBack, onBook }) {
  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Détail du trajet" onBack={onBack}/>
      <Card style={{ padding:18,marginBottom:12 }}>
        <div style={{ display:"flex",gap:13,alignItems:"center",marginBottom:14 }}>
          <div style={{ width:52,height:52,borderRadius:15,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:17,color:"#fff",flexShrink:0 }}>{d.ini}</div>
          <div>
            <div style={{ display:"flex",gap:7,alignItems:"center",marginBottom:5,flexWrap:"wrap" }}>
              <span style={{ fontWeight:800,fontSize:16,color:C.text }}>{d.name}</span>
              <VerBadge verified={d.verified}/>
            </div>
            <div style={{ display:"flex",alignItems:"center",gap:4,fontSize:12,color:C.textSec }}>
              <span style={{ color:"#F59E0B" }}>{Ic.star}</span>{d.rating} · {d.trips} trajets · {d.vehicle} · {d.plate}
            </div>
          </div>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:10,padding:"11px",background:C.bg,borderRadius:11 }}>
          <span style={{ fontWeight:800,fontSize:15,color:C.text }}>{d.from}</span>
          <div style={{ flex:1,height:1,background:C.border }}/>
          <span style={{ fontSize:11,color:C.textSec,fontWeight:600 }}>{d.dur}</span>
          <div style={{ flex:1,height:1,background:C.border }}/>
          <span style={{ fontWeight:800,fontSize:15,color:C.text }}>{d.to}</span>
        </div>
      </Card>

      <Card style={{ padding:15,marginBottom:12 }}>
        <div style={{ display:"flex",gap:11,alignItems:"flex-start" }}>
          <span style={{ color:C.green,display:"flex",flexShrink:0,marginTop:1 }}>{Ic.pin}</span>
          <div>
            <p style={{ fontSize:11,fontWeight:700,color:C.textLight,textTransform:"uppercase",letterSpacing:.5,marginBottom:4 }}>Point de prise en charge</p>
            <p style={{ fontSize:14,fontWeight:600,color:C.text,lineHeight:1.5 }}>{d.pickup}</p>
          </div>
        </div>
      </Card>

      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:12 }}>
        {[["Départ",d.dep,Ic.clock],["Durée",d.dur,Ic.clock],["Places",`${d.seats} dispo.`,Ic.users],["Prix",`${fmt(d.price)} FCFA`,Ic.money]].map(([l,v,icon])=>(
          <Card key={l} style={{ padding:"12px 13px" }}>
            <div style={{ display:"flex",gap:7,alignItems:"center",marginBottom:5 }}>
              <span style={{ color:C.textSec,display:"flex" }}>{icon}</span>
              <p style={{ fontSize:11,color:C.textSec,fontWeight:600 }}>{l}</p>
            </div>
            <p style={{ fontWeight:800,fontSize:14,color:C.text }}>{v}</p>
          </Card>
        ))}
      </div>

      <Card style={{ padding:16,marginBottom:12 }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:12 }}>Arrêts prévus</p>
        {[["Besoins / Pipi",d.wc],["Repas",d.food],["Achats",d.shop]].map(([l,n],i)=>(
          <div key={l} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderTop:i===0?"none":`1px solid ${C.border}` }}>
            <span style={{ fontSize:13,color:C.textSec }}>{l}</span>
            <span style={{ fontWeight:700,fontSize:13,color:n>0?C.text:C.textLight }}>{n>0?`${n} fois`:"Aucun"}</span>
          </div>
        ))}
      </Card>

      <Card style={{ padding:16,marginBottom:12 }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:11 }}>Bagages acceptés</p>
        <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
          {[["small","Petit"],["large","Gros"],["xlarge","Très gros"]].map(([t,l])=>(
            <div key={t} style={{ padding:"6px 12px",borderRadius:10,background:d.luggage.includes(t)?C.greenBg:C.bg,border:`1px solid ${d.luggage.includes(t)?"#A7F3D0":C.border}`,display:"flex",alignItems:"center",gap:6 }}>
              <span style={{ color:d.luggage.includes(t)?C.green:C.textLight,display:"flex" }}>{Ic.bag}</span>
              <span style={{ fontSize:12,fontWeight:700,color:d.luggage.includes(t)?C.greenDark:C.textLight }}>{l}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ padding:15,marginBottom:12 }}>
        <div style={{ display:"flex",gap:11,alignItems:"center" }}>
          <span style={{ color:C.textSec,display:"flex" }}>{Ic.card}</span>
          <div>
            <p style={{ fontSize:11,fontWeight:700,color:C.textLight,textTransform:"uppercase",letterSpacing:.5,marginBottom:2 }}>Mode de paiement</p>
            <p style={{ fontSize:14,fontWeight:700,color:C.text }}>{plab(d.pay)}</p>
            <p style={{ fontSize:12,color:C.textSec }}>{psub(d.pay)}</p>
          </div>
        </div>
      </Card>

      {!d.verified&&(
        <div style={{ display:"flex",gap:10,alignItems:"flex-start",padding:13,background:C.dangerBg,borderRadius:13,border:`1px solid #FECACA`,marginBottom:13 }}>
          <span style={{ color:C.danger,display:"flex",flexShrink:0 }}>{Ic.warn}</span>
          <div>
            <p style={{ fontWeight:700,fontSize:13,color:C.danger }}>Chauffeur non vérifié</p>
            <p style={{ fontSize:12,color:"#B91C1C",marginTop:3,lineHeight:1.5 }}>Paiement uniquement par Mobile Money (MTN MoMo ou Orange Money).</p>
          </div>
        </div>
      )}
      <Btn variant="green" full onClick={onBook} style={{ height:50,fontSize:14,borderRadius:13 }}>
        Réserver · {fmt(d.price)} FCFA
      </Btn>
    </div>
  );
}

// ─── BOOKING CONFIRMATION + PAYMENT SELECTION ────────────────────────────────
function BookingConfirm({ driver:d, onBack, onConfirm }) {
  const PAY_METHODS = [
    { id:"card",   label:"Carte bancaire",    sub:"Visa, Mastercard",           icon:Ic.card,   color:"#3B82F6" },
    { id:"momo",   label:"MTN Mobile Money",  sub:"Paiement via MTN MoMo",      icon:Ic.mobile, color:"#FBBF24" },
    { id:"orange", label:"Orange Money",       sub:"Paiement via Orange Money",  icon:Ic.mobile, color:"#F97316" },
    { id:"cash",   label:"Espèces",           sub:"Paiement en main propre",    icon:Ic.money,  color:C.textSec },
  ];

  // Filter methods based on driver's accepted payment
  const available = d.pay === "all" || d.pay === "card"
    ? PAY_METHODS
    : d.pay === "momo"   ? PAY_METHODS.filter(p=>p.id==="momo"||p.id==="cash")
    : d.pay === "orange" ? PAY_METHODS.filter(p=>p.id==="orange"||p.id==="cash")
    : d.pay === "cash"   ? PAY_METHODS.filter(p=>p.id==="cash")
    : PAY_METHODS;

  const [payMethod, setPayMethod] = useState(available[0]?.id || "cash");
  const [seats, setSeats] = useState(1);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const maxSeats = d.seats || 3;
  const total = (d.price || 0) * seats;

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
      setTimeout(() => onConfirm(), 1800);
    }, 1500);
  };

  // ─── Success Animation ───
  if (confirmed) return (
    <div style={{ animation:"fadeUp .3s ease",textAlign:"center",padding:"50px 20px" }}>
      <div style={{ width:80,height:80,borderRadius:22,background:C.greenBg,border:"2px solid #A7F3D0",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 22px",animation:"pulse 1s ease infinite" }}>
        <span style={{ fontSize:36 }}>✓</span>
      </div>
      <h3 style={{ fontWeight:800,fontSize:20,color:C.text,marginBottom:8 }}>Réservation confirmée !</h3>
      <p style={{ fontSize:14,color:C.textSec,lineHeight:1.6,marginBottom:6 }}>{d.from} → {d.to}</p>
      <p style={{ fontSize:13,color:C.textSec }}>Départ à {d.dep} avec {d.name}</p>
      <p style={{ fontWeight:800,fontSize:22,color:C.green,marginTop:16 }}>{fmt(total)} FCFA</p>
      <p style={{ fontSize:12,color:C.textSec,marginTop:4 }}>
        {payMethod==="card"?"Carte bancaire":payMethod==="momo"?"MTN MoMo":payMethod==="orange"?"Orange Money":"Espèces"}
      </p>
    </div>
  );

  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Confirmer la réservation" sub="Vérifiez et payez" onBack={onBack}/>

      {/* Trip summary */}
      <Card style={{ padding:16,marginBottom:12 }}>
        <div style={{ display:"flex",gap:12,alignItems:"center",marginBottom:14 }}>
          <div style={{ width:46,height:46,borderRadius:14,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:15,color:"#fff",flexShrink:0 }}>{d.ini}</div>
          <div style={{ flex:1 }}>
            <div style={{ display:"flex",alignItems:"center",gap:6,marginBottom:3 }}>
              <span style={{ fontWeight:800,fontSize:15,color:C.text }}>{d.name}</span>
              <VerBadge verified={d.verified}/>
            </div>
            <p style={{ fontSize:12,color:C.textSec }}>{d.vehicle} · {d.plate}</p>
          </div>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:8,padding:"10px 12px",background:C.bg,borderRadius:11,marginBottom:10 }}>
          <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{d.from}</span>
          <div style={{ flex:1,height:1,background:C.border }}/>
          <span style={{ fontSize:11,color:C.textSec,fontWeight:600 }}>{d.dur}</span>
          <div style={{ flex:1,height:1,background:C.border }}/>
          <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{d.to}</span>
        </div>
        <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
          <Chip>{d.dep}</Chip>
          <Chip>{d.pickup?.split(",")[0] || "Point de RDV"}</Chip>
        </div>
      </Card>

      {/* Number of seats */}
      <Card style={{ padding:16,marginBottom:12 }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:12 }}>Nombre de places</p>
        <div style={{ display:"flex",alignItems:"center",gap:14,justifyContent:"center" }}>
          <button onClick={()=>setSeats(s=>Math.max(1,s-1))}
            style={{ width:40,height:40,borderRadius:12,border:`1.5px solid ${seats<=1?C.border:C.dark}`,background:seats<=1?C.bg:C.card,cursor:seats<=1?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:700,color:seats<=1?C.textLight:C.dark,fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
            −
          </button>
          <div style={{ textAlign:"center",minWidth:60 }}>
            <p style={{ fontWeight:800,fontSize:28,color:C.text }}>{seats}</p>
            <p style={{ fontSize:11,color:C.textSec,fontWeight:600 }}>place{seats>1?"s":""}</p>
          </div>
          <button onClick={()=>setSeats(s=>Math.min(maxSeats,s+1))}
            style={{ width:40,height:40,borderRadius:12,border:`1.5px solid ${seats>=maxSeats?C.border:C.dark}`,background:seats>=maxSeats?C.bg:C.card,cursor:seats>=maxSeats?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:700,color:seats>=maxSeats?C.textLight:C.dark,fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
            +
          </button>
        </div>
        <p style={{ fontSize:12,color:C.textSec,textAlign:"center",marginTop:8 }}>{fmt(d.price)} FCFA × {seats} = <strong style={{ color:C.text }}>{fmt(total)} FCFA</strong></p>
      </Card>

      {/* Payment method selection */}
      <Card style={{ padding:16,marginBottom:12 }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:12 }}>Mode de paiement</p>
        <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
          {available.map(m=>(
            <label key={m.id} onClick={()=>setPayMethod(m.id)}
              style={{ display:"flex",alignItems:"center",gap:12,padding:"13px 14px",background:payMethod===m.id?C.greenBg:C.card,borderRadius:12,cursor:"pointer",border:`1.5px solid ${payMethod===m.id?"#A7F3D0":C.border}`,transition:"all .2s" }}>
              <div style={{ width:38,height:38,borderRadius:11,background:payMethod===m.id?`${m.color}18`:C.bg,display:"flex",alignItems:"center",justifyContent:"center",color:m.color,flexShrink:0,border:`1px solid ${payMethod===m.id?m.color+"40":C.border}` }}>
                {m.icon}
              </div>
              <div style={{ flex:1 }}>
                <p style={{ fontWeight:700,fontSize:13,color:C.text }}>{m.label}</p>
                <p style={{ fontSize:11,color:C.textSec,marginTop:1 }}>{m.sub}</p>
              </div>
              <div style={{ width:20,height:20,borderRadius:"50%",border:`2px solid ${payMethod===m.id?C.green:C.border}`,background:payMethod===m.id?C.green:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .2s" }}>
                {payMethod===m.id&&<div style={{ width:7,height:7,borderRadius:"50%",background:"#fff" }}/>}
              </div>
            </label>
          ))}
        </div>
      </Card>

      {/* Price breakdown */}
      <Card style={{ padding:16,marginBottom:14,border:`1.5px solid #A7F3D0` }}>
        <p style={{ fontWeight:800,fontSize:13,color:C.text,marginBottom:12 }}>Récapitulatif</p>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${C.border}` }}>
          <span style={{ fontSize:13,color:C.textSec }}>Trajet ({seats} place{seats>1?"s":""})</span>
          <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{fmt(total)} FCFA</span>
        </div>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${C.border}` }}>
          <span style={{ fontSize:13,color:C.textSec }}>Frais CarExpress</span>
          <span style={{ fontWeight:700,fontSize:13,color:C.green }}>Gratuit</span>
        </div>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0 0" }}>
          <span style={{ fontWeight:800,fontSize:15,color:C.text }}>Total</span>
          <span style={{ fontWeight:800,fontSize:20,color:C.text }}>{fmt(total)} FCFA</span>
        </div>
      </Card>

      {/* Confirm button */}
      <Btn variant="green" full onClick={handleConfirm} disabled={loading} style={{ height:52,fontSize:15,borderRadius:14 }}>
        {loading
          ? <><span style={{ animation:"spin .8s linear infinite",display:"inline-block" }}>◌</span> Traitement...</>
          : <>Confirmer et payer · {fmt(total)} FCFA</>
        }
      </Btn>

      <p style={{ fontSize:11,color:C.textSec,textAlign:"center",marginTop:10,lineHeight:1.5 }}>
        En confirmant, vous acceptez les conditions d'utilisation de CarExpress.
        Annulation gratuite jusqu'à 1h avant le départ.
      </p>
    </div>
  );
}


/* ═══ js/cancellation.js ═══ */
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


/* ═══ js/notifications.js ═══ */
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


/* ═══ js/history.js ═══ */
/* CarExpress — History Screen */

function HistoryScreen({ activeTrip, arrived, onCancelTrip }) {
  const hasActive = activeTrip && !arrived;

  return (
    <div style={{ animation:"fadeUp .3s ease" }}>
      <PageHdr title="Historique" sub={hasActive ? "1 trajet en cours" : `${HISTORY.length} trajets`}/>

      {/* Active / In-progress trip */}
      {activeTrip && (
        <div style={{ marginBottom:16 }}>
          <p style={{ fontSize:11,fontWeight:700,color:C.textSec,textTransform:"uppercase",letterSpacing:.5,marginBottom:8,paddingLeft:2 }}>
            {arrived ? "Trajet terminé (chat actif 24h)" : "En cours"}
          </p>
          <Card style={{ padding:0,border:`1.5px solid ${arrived?"#A7F3D0":C.green}`,overflow:"hidden" }}>
            {/* Status bar */}
            <div style={{ background:arrived?C.greenBg:`${C.green}12`,padding:"10px 16px",display:"flex",alignItems:"center",gap:8 }}>
              {!arrived && <div style={{ width:8,height:8,borderRadius:4,background:C.green,animation:"pulse 1.5s ease-in-out infinite" }}/>}
              <span style={{ fontSize:12,fontWeight:700,color:arrived?C.greenDark:C.green }}>
                {arrived?"Arrivé à destination":"Trajet en cours"}
              </span>
              <span style={{ marginLeft:"auto",fontSize:11,color:C.textSec,fontWeight:600 }}>
                Départ {activeTrip.dep} · Durée {activeTrip.dur}
              </span>
            </div>

            <div style={{ padding:16 }}>
              {/* Driver info */}
              <div style={{ display:"flex",gap:11,alignItems:"center",marginBottom:12 }}>
                <div style={{ width:42,height:42,borderRadius:12,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:13,color:"#fff",flexShrink:0 }}>{activeTrip.ini}</div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:6 }}>
                    <span style={{ fontWeight:800,fontSize:14,color:C.text }}>{activeTrip.name}</span>
                    <VerBadge verified={activeTrip.verified}/>
                  </div>
                  <p style={{ fontSize:12,color:C.textSec,marginTop:2 }}>{activeTrip.vehicle}</p>
                </div>
              </div>

              {/* Route */}
              <div style={{ display:"flex",alignItems:"center",gap:8,padding:"10px 12px",background:C.bg,borderRadius:10,marginBottom:12 }}>
                <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{activeTrip.from}</span>
                <div style={{ flex:1,height:1,background:C.border }}/>
                <span style={{ fontSize:11,color:C.textSec }}>{activeTrip.dur}</span>
                <div style={{ flex:1,height:1,background:C.border }}/>
                <span style={{ fontWeight:700,fontSize:13,color:C.text }}>{activeTrip.to}</span>
              </div>

              {/* Price + role */}
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:hasActive?12:0 }}>
                <span style={{ fontWeight:800,fontSize:15,color:C.text }}>{fmt(activeTrip.price)} FCFA</span>
                <span style={{ padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:700,
                  background:activeTrip.role==="driver"?"#EFF6FF":"#F0FBF4",
                  color:activeTrip.role==="driver"?"#3B82F6":C.greenDark,
                  border:`1px solid ${activeTrip.role==="driver"?"#BFDBFE":"#A7F3D0"}` }}>
                  {activeTrip.role==="driver"?"Chauffeur":"Passager"}
                </span>
              </div>

              {/* Action buttons — only if not arrived */}
              {hasActive && (
                <div style={{ display:"flex",gap:9,marginTop:4 }}>
                  <Btn variant="outline" full onClick={onCancelTrip} style={{ borderRadius:12,flex:1 }}>
                    Voir les détails
                  </Btn>
                </div>
              )}

              {/* Arrived info */}
              {arrived && (
                <div style={{ display:"flex",gap:8,alignItems:"center",padding:"10px 12px",background:C.greenBg,borderRadius:10,marginTop:10,border:"1px solid #A7F3D0" }}>
                  <span style={{ color:C.green,display:"flex" }}>{Ic.chat}</span>
                  <p style={{ fontSize:12,color:C.textSec,lineHeight:1.5 }}>
                    Le chat reste ouvert <strong style={{ color:C.text }}>24h</strong> pour contacter le {activeTrip.role==="driver"?"passager":"chauffeur"} en cas de perte d'objet.
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      )}

      {/* Past trips */}
      <p style={{ fontSize:11,fontWeight:700,color:C.textSec,textTransform:"uppercase",letterSpacing:.5,marginBottom:8,paddingLeft:2 }}>Trajets passés</p>
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


/* ═══ js/favorites.js ═══ */
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


/* ═══ js/profile.js ═══ */
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


/* ═══ js/chat.js ═══ */
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


/* ═══ js/map.js ═══ */
/* CarExpress — Map Overlay & Floating Buttons */

function MapOverlay({ trip, onClose }) {
  const [progress,setProgress]=useState(14),[elapsed,setElapsed]=useState(46);
  useEffect(()=>{
    const t=setInterval(()=>{ setProgress(p=>Math.min(93,p+.25)); setElapsed(e=>e+1); },2000);
    return()=>clearInterval(t);
  },[]);
  const pct=Math.round(progress), remaining=Math.max(0,330-elapsed);
  const h=Math.floor(remaining/60), m=remaining%60;
  const wps=["Yaoundé","Nkolafamba","Ayos","Sakbayemé","Douala"];
  const wi=Math.min(Math.floor((progress/100)*(wps.length-1)),wps.length-2);

  return (
    <div style={{ position:"fixed",inset:0,zIndex:500,display:"flex",flexDirection:"column",background:"#0F1C13",maxWidth:430,left:"50%",transform:"translateX(-50%)",animation:"slideUp .35s ease" }}>
      <div style={{ flex:1,position:"relative",overflow:"hidden" }}>
        <svg width="100%" height="100%" style={{ position:"absolute",inset:0 }}>
          <defs><pattern id="gr2" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M 34 0 L 0 0 0 34" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#gr2)"/>
          <path d="M 55 360 C 130 290 210 210 370 115" stroke="rgba(255,255,255,0.07)" strokeWidth="14" fill="none" strokeLinecap="round"/>
          <path d="M 55 360 C 130 290 210 210 370 115" stroke={C.green} strokeWidth="2.5" fill="none" strokeLinecap="round"
            strokeDasharray="500" strokeDashoffset={500-(progress/100)*430} style={{ transition:"stroke-dashoffset 2s ease" }}/>
          <circle cx="55" cy="360" r="6" fill={C.green} opacity=".9"/>
          <circle cx="55" cy="360" r="13" fill={C.green} opacity=".15"/>
          <circle cx="370" cy="115" r="6" fill="rgba(255,255,255,0.6)"/>
          <circle cx="370" cy="115" r="12" fill="rgba(255,255,255,0.08)"/>
          {[{x:128,y:296,l:"Nkol."},{x:210,y:218,l:"Ayos"},{x:295,y:162,l:"Sakb."}].map((lm,i)=>(
            <g key={i}>
              <circle cx={lm.x} cy={lm.y} r="3.5" fill="rgba(255,255,255,0.18)"/>
              <text x={lm.x+7} y={lm.y+4} fill="rgba(255,255,255,0.25)" fontSize="10" fontFamily="Plus Jakarta Sans">{lm.l}</text>
            </g>
          ))}
        </svg>

        <div style={{ position:"absolute",left:`${8+(progress/100)*69}%`,top:`${76-(progress/100)*47}%`,transform:"translate(-50%,-50%)",transition:"left 2s ease,top 2s ease",zIndex:10 }}>
          <div style={{ position:"absolute",inset:-9,borderRadius:"50%",background:`${C.green}28`,animation:"ping 2s ease-out infinite" }}/>
          <div style={{ width:26,height:26,borderRadius:"50%",background:"#0F1C13",border:`2.5px solid ${C.green}`,display:"flex",alignItems:"center",justifyContent:"center",color:C.green }}>{Ic.car}</div>
        </div>

        <p style={{ position:"absolute",bottom:"31%",left:"7%",color:"rgba(255,255,255,0.5)",fontSize:12,fontWeight:700 }}>{trip.from}</p>
        <p style={{ position:"absolute",top:"18%",right:"7%",color:"rgba(255,255,255,0.5)",fontSize:12,fontWeight:700 }}>{trip.to}</p>

        <div style={{ position:"absolute",top:0,left:0,right:0,padding:"44px 16px 14px",background:"linear-gradient(to bottom,rgba(15,28,19,0.95),transparent)" }}>
          <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:9 }}>
            <div style={{ width:7,height:7,borderRadius:"50%",background:C.green,animation:"pulse 1.5s ease-in-out infinite" }}/>
            <span style={{ fontWeight:700,fontSize:13,color:"#fff" }}>Trajet en cours</span>
            <span style={{ marginLeft:"auto",fontSize:12,color:"rgba(255,255,255,0.4)",fontWeight:600 }}>{pct}%</span>
          </div>
          <div style={{ height:3,background:"rgba(255,255,255,0.08)",borderRadius:3,overflow:"hidden" }}>
            <div style={{ height:"100%",background:C.green,borderRadius:3,width:`${progress}%`,transition:"width 2s ease" }}/>
          </div>
        </div>

        <div style={{ position:"absolute",top:"33%",left:"50%",transform:"translateX(-50%)",background:"rgba(15,28,19,0.82)",backdropFilter:"blur(8px)",borderRadius:18,padding:"7px 16px",border:`1px solid rgba(37,211,102,0.25)`,whiteSpace:"nowrap" }}>
          <p style={{ fontSize:11,color:"rgba(255,255,255,0.4)",textAlign:"center",marginBottom:1 }}>Prochain arrêt</p>
          <p style={{ fontSize:13,fontWeight:800,color:C.green,textAlign:"center" }}>{wps[wi+1]}</p>
        </div>

        <button onClick={onClose} style={{ position:"absolute",top:50,right:14,background:"rgba(15,28,19,0.82)",backdropFilter:"blur(8px)",border:`1px solid rgba(255,255,255,0.1)`,color:"rgba(255,255,255,0.7)",padding:"8px 14px",borderRadius:20,cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"'Plus Jakarta Sans',sans-serif",display:"flex",alignItems:"center",gap:6 }}>
          {Ic.back} Retour
        </button>
      </div>

      <div style={{ background:C.card,borderRadius:"24px 24px 0 0",padding:"16px 16px 32px",boxShadow:"0 -8px 30px rgba(0,0,0,0.3)" }}>
        <div style={{ width:34,height:3,borderRadius:2,background:C.border,margin:"0 auto 14px" }}/>
        <div style={{ display:"flex",alignItems:"center",gap:11,padding:"11px 13px",background:C.bg,borderRadius:13,marginBottom:13 }}>
          <div style={{ width:40,height:40,borderRadius:11,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:13,color:"#fff",flexShrink:0 }}>{trip.ini}</div>
          <div style={{ flex:1,minWidth:0 }}>
            <div style={{ display:"flex",gap:7,alignItems:"center",flexWrap:"wrap" }}>
              <span style={{ fontWeight:800,fontSize:13,color:C.text }}>{trip.name}</span>
              <VerBadge verified={trip.verified}/>
            </div>
            <p style={{ fontSize:11,color:C.textSec,marginTop:2 }}>{trip.vehicle} · {trip.plate}</p>
          </div>
          <a href={`tel:${trip.phone}`} style={{ width:36,height:36,borderRadius:10,background:C.dark,display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",color:"#fff",flexShrink:0 }}>{Ic.phone}</a>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:9,marginBottom:13 }}>
          {[
            { l:"Restant",  v:`${h}h${m.toString().padStart(2,"0")}` },
            { l:"Étape",    v:wps[wi] },
            { l:"Prix",     v:`${fmt(trip.price)} F` },
          ].map(s=>(
            <div key={s.l} style={{ background:C.bg,borderRadius:11,padding:"10px 8px",textAlign:"center" }}>
              <p style={{ fontWeight:800,fontSize:13,color:C.text }}>{s.v}</p>
              <p style={{ fontSize:10,color:C.textSec,fontWeight:600,marginTop:3 }}>{s.l}</p>
            </div>
          ))}
        </div>
        <Btn variant="danger" full style={{ borderRadius:13 }}>{Ic.sos} Urgence — SOS</Btn>
      </div>
    </div>
  );
}

function FloatingStack({ trip, bookedAt, onMapOpen }) {
  return (
    <div style={{ position:"fixed",right:18,bottom:82,zIndex:200,display:"flex",flexDirection:"column",alignItems:"center",gap:10 }}>
      <FloatingMapButton onOpen={onMapOpen} trip={trip}/>
      <FloatingChat trip={trip} bookedAt={bookedAt}/>
    </div>
  );
}

function FloatingMapButton({ onOpen, trip }) {
  const [pulse, setPulse] = useState(true);
  useEffect(()=>{ const t=setTimeout(()=>setPulse(false),4000); return()=>clearTimeout(t); },[]);

  return (
    <div style={{ position:"relative" }}>
      {pulse && <div style={{ position:"absolute",inset:-6,borderRadius:"50%",border:`2px solid ${C.green}`,animation:"ping 1.8s ease-out 3" }}/>}
      <button onClick={onOpen}
        style={{ width:56,height:56,borderRadius:"50%",background:C.green,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:`0 4px 20px ${C.green}55`,transition:"transform .2s,box-shadow .2s",animation:"popIn .35s ease" }}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";e.currentTarget.style.boxShadow=`0 6px 28px ${C.green}77`}}
        onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow=`0 4px 20px ${C.green}55`}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
          <line x1="9" y1="3" x2="9" y2="18"/>
          <line x1="15" y1="6" x2="15" y2="21"/>
        </svg>
      </button>
      <div style={{ position:"absolute",right:64,top:"50%",transform:"translateY(-50%)",background:C.dark,color:"#fff",padding:"5px 10px",borderRadius:10,fontSize:11,fontWeight:700,whiteSpace:"nowrap",pointerEvents:"none",opacity:pulse?1:0,transition:"opacity .5s" }}>
        Voir la carte
        <div style={{ position:"absolute",right:-5,top:"50%",transform:"translateY(-50%)",width:0,height:0,borderLeft:"5px solid #1F2937",borderTop:"5px solid transparent",borderBottom:"5px solid transparent" }}/>
      </div>
    </div>
  );
}


/* ═══ js/onboarding.js ═══ */
/* CarExpress — Onboarding Screens (first launch only) */

const ONBOARDING_SLIDES = [
  {
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" style={{ width:"100%",maxWidth:260 }}>
        {/* Queue of people waiting */}
        <rect x="20" y="140" width="240" height="50" rx="12" fill="#E8EAED"/>
        <text x="140" y="172" textAnchor="middle" fontSize="11" fill="#9CA3AF" fontWeight="600">AGENCE DE VOYAGE</text>
        {/* People in line */}
        {[40,80,120,160,200].map((x,i)=>(
          <g key={i}>
            <circle cx={x} cy={110} r="14" fill={i===0?"#25D366":"#D1D5DB"}/>
            <rect x={x-8} y={124} width="16" height="16" rx="4" fill={i===0?"#25D366":"#D1D5DB"} opacity=".6"/>
            {i>0&&<text x={x} y={115} textAnchor="middle" fontSize="10" fill="#fff">😩</text>}
            {i===0&&<text x={x} y={115} textAnchor="middle" fontSize="10" fill="#fff">😊</text>}
          </g>
        ))}
        {/* Clock showing long wait */}
        <circle cx="230" cy="45" r="28" fill="#FEF2F2" stroke="#FECACA" strokeWidth="2"/>
        <text x="230" y="42" textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="700">ATTENTE</text>
        <text x="230" y="55" textAnchor="middle" fontSize="12" fill="#EF4444" fontWeight="800">3h+</text>
        {/* X mark over queue */}
        <line x1="30" y1="80" x2="210" y2="180" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" opacity=".3"/>
        <line x1="210" y1="80" x2="30" y2="180" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" opacity=".3"/>
        {/* Phone with CarExpress */}
        <rect x="35" y="20" width="50" height="80" rx="10" fill="#1F2937"/>
        <rect x="40" y="28" width="40" height="60" rx="6" fill="#F5F6F8"/>
        <text x="60" y="55" textAnchor="middle" fontSize="8" fill="#25D366" fontWeight="800">CE</text>
        <text x="60" y="68" textAnchor="middle" fontSize="5" fill="#6B7280">Réservé ✓</text>
        <circle cx="60" cy="80" r="4" fill="#25D366"/>
      </svg>
    ),
    title: "Fini les files d'attente",
    desc: "Plus besoin de passer des heures à l'agence de voyage. Réservez votre place en quelques secondes depuis votre téléphone.",
    accent: "#EF4444",
  },
  {
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" style={{ width:"100%",maxWidth:260 }}>
        {/* Comfortable car */}
        <rect x="30" y="80" width="220" height="90" rx="20" fill="#1F2937"/>
        <rect x="50" y="90" width="80" height="50" rx="10" fill="#374151"/>
        <rect x="150" y="90" width="80" height="50" rx="10" fill="#374151"/>
        {/* Windows */}
        <rect x="55" y="95" width="70" height="35" rx="8" fill="#6EE7B7" opacity=".3"/>
        <rect x="155" y="95" width="70" height="35" rx="8" fill="#6EE7B7" opacity=".3"/>
        {/* Wheels */}
        <circle cx="80" cy="170" r="18" fill="#374151"/>
        <circle cx="80" cy="170" r="10" fill="#6B7280"/>
        <circle cx="200" cy="170" r="18" fill="#374151"/>
        <circle cx="200" cy="170" r="10" fill="#6B7280"/>
        {/* Comfort icons */}
        <g transform="translate(60,30)">
          <rect width="45" height="22" rx="11" fill="#F0FBF4" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="22" y="15" textAnchor="middle" fontSize="9" fill="#1AAD54" fontWeight="700">❄️ Clim</text>
        </g>
        <g transform="translate(115,20)">
          <rect width="55" height="22" rx="11" fill="#F0FBF4" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="27" y="15" textAnchor="middle" fontSize="9" fill="#1AAD54" fontWeight="700">🎵 Musique</text>
        </g>
        <g transform="translate(180,30)">
          <rect width="55" height="22" rx="11" fill="#F0FBF4" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="27" y="15" textAnchor="middle" fontSize="9" fill="#1AAD54" fontWeight="700">💺 Confort</text>
        </g>
        {/* Happy passengers */}
        {[75,125,175].map((x,i)=>(
          <text key={i} x={x} y={118} textAnchor="middle" fontSize="16">😊</text>
        ))}
        {/* Stars */}
        {[50,70,90,110,130].map((x,i)=>(
          <text key={i} x={x} y="65" fontSize="12" fill="#F59E0B">★</text>
        ))}
      </svg>
    ),
    title: "Voyagez dans le confort",
    desc: "Choisissez un véhicule adapté à vos besoins. Climatisation, espace pour vos bagages, sièges confortables — vous méritez le meilleur.",
    accent: "#25D366",
  },
  {
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" style={{ width:"100%",maxWidth:260 }}>
        {/* Speech bubble from passenger */}
        <rect x="20" y="15" width="240" height="60" rx="14" fill="#F5F6F8" stroke="#E8EAED" strokeWidth="1.5"/>
        <polygon points="70,75 85,75 75,90" fill="#F5F6F8" stroke="#E8EAED" strokeWidth="1.5"/>
        <rect x="68" y="73" width="20" height="4" fill="#F5F6F8"/>
        {/* Need icons in bubble */}
        <g transform="translate(35,28)">
          <text fontSize="18">🚻</text>
          <text x="0" y="28" fontSize="8" fill="#6B7280" fontWeight="600">Pause</text>
        </g>
        <g transform="translate(85,28)">
          <text fontSize="18">🍽️</text>
          <text x="0" y="28" fontSize="8" fill="#6B7280" fontWeight="600">Repas</text>
        </g>
        <g transform="translate(135,28)">
          <text fontSize="18">🧳</text>
          <text x="0" y="28" fontSize="8" fill="#6B7280" fontWeight="600">Bagages</text>
        </g>
        <g transform="translate(185,28)">
          <text fontSize="18">⏰</text>
          <text x="0" y="28" fontSize="8" fill="#6B7280" fontWeight="600">Horaire</text>
        </g>
        {/* Passenger speaking */}
        <circle cx="60" cy="120" r="22" fill="#1F2937"/>
        <text x="60" y="125" textAnchor="middle" fontSize="16" fill="#fff">🗣️</text>
        {/* Driver listening with checkmarks */}
        <circle cx="200" cy="120" r="22" fill="#25D366"/>
        <text x="200" y="125" textAnchor="middle" fontSize="16">👂</text>
        {/* Arrow between them */}
        <line x1="90" y1="120" x2="170" y2="120" stroke="#25D366" strokeWidth="2" strokeDasharray="6 4"/>
        <polygon points="170,115 180,120 170,125" fill="#25D366"/>
        {/* Check marks below */}
        <g transform="translate(40,155)">
          <rect width="190" height="30" rx="10" fill="#F0FBF4" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="95" y="20" textAnchor="middle" fontSize="10" fill="#1AAD54" fontWeight="700">✓ Vos besoins sont pris en compte</text>
        </g>
      </svg>
    ),
    title: "Vos besoins comptent",
    desc: "Pauses pipi, repas en route, bagages volumineux, horaire flexible... Communiquez directement avec le chauffeur et personnalisez votre trajet.",
    accent: "#F59E0B",
  },
  {
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" style={{ width:"100%",maxWidth:260 }}>
        {/* Shield */}
        <path d="M140 20 L200 45 L200 110 C200 150 140 185 140 185 C140 185 80 150 80 110 L80 45 Z" fill="#F0FBF4" stroke="#25D366" strokeWidth="2.5"/>
        <text x="140" y="95" textAnchor="middle" fontSize="36" fill="#25D366">✓</text>
        {/* GPS tracking line */}
        <path d="M30 170 Q80 140 140 150 Q200 160 250 130" stroke="#25D366" strokeWidth="2" strokeDasharray="6 4" fill="none"/>
        <circle cx="140" cy="150" r="5" fill="#25D366"/>
        <circle cx="140" cy="150" r="10" fill="#25D366" opacity=".2"/>
        {/* Verified badge */}
        <g transform="translate(30,30)">
          <rect width="60" height="24" rx="12" fill="#1F2937"/>
          <text x="30" y="16" textAnchor="middle" fontSize="9" fill="#25D366" fontWeight="700">✓ Vérifié</text>
        </g>
        {/* ID card icon */}
        <g transform="translate(195,25)">
          <rect width="55" height="35" rx="6" fill="#fff" stroke="#E8EAED" strokeWidth="1.5"/>
          <rect x="8" y="8" width="15" height="15" rx="3" fill="#E8EAED"/>
          <rect x="28" y="10" width="20" height="3" rx="1.5" fill="#E8EAED"/>
          <rect x="28" y="17" width="15" height="3" rx="1.5" fill="#E8EAED"/>
          <text x="27" y="50" fontSize="8" fill="#6B7280" fontWeight="600">CNI + Permis</text>
        </g>
        {/* SOS button */}
        <g transform="translate(105,165)">
          <rect width="70" height="24" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
          <text x="35" y="16" textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="700">🆘 SOS</text>
        </g>
      </svg>
    ),
    title: "Sécurité maximale",
    desc: "Chauffeurs vérifiés (CNI, permis, carte grise), suivi GPS en temps réel et bouton d'urgence SOS. Voyagez l'esprit tranquille.",
    accent: "#25D366",
  },
];

function OnboardingScreen({ onDone }) {
  const [idx, setIdx] = useState(0);
  const slide = ONBOARDING_SLIDES[idx];
  const isLast = idx === ONBOARDING_SLIDES.length - 1;

  return (
    <div style={{ position:"fixed",inset:0,zIndex:9000,background:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:430,margin:"0 auto" }}>
      {/* Skip button */}
      {!isLast && (
        <button onClick={onDone} style={{ position:"absolute",top:16,right:16,background:"none",border:"none",fontSize:13,fontWeight:600,color:C.textSec,cursor:"pointer",padding:"8px 12px",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
          Passer
        </button>
      )}

      {/* Illustration */}
      <div style={{ flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 30px 0",animation:"fadeIn .4s ease" }}>
        {slide.illustration}
      </div>

      {/* Text content */}
      <div style={{ padding:"0 32px 20px",textAlign:"center",animation:"fadeUp .4s ease" }}>
        <h2 style={{ fontWeight:800,fontSize:22,color:C.text,marginBottom:10,lineHeight:1.3 }}>{slide.title}</h2>
        <p style={{ fontSize:14,color:C.textSec,lineHeight:1.7,maxWidth:320,margin:"0 auto" }}>{slide.desc}</p>
      </div>

      {/* Dots */}
      <div style={{ display:"flex",gap:8,marginBottom:20 }}>
        {ONBOARDING_SLIDES.map((_,i) => (
          <div key={i} style={{
            width: i===idx ? 24 : 8,
            height: 8,
            borderRadius: 4,
            background: i===idx ? slide.accent : C.border,
            transition: "all .3s ease",
          }}/>
        ))}
      </div>

      {/* Button */}
      <div style={{ padding:"0 32px 40px",width:"100%" }}>
        <button
          onClick={() => isLast ? onDone() : setIdx(i => i + 1)}
          style={{
            width:"100%",padding:"15px",borderRadius:14,border:"none",
            background: isLast ? C.green : C.dark,
            color:"#fff",fontWeight:700,fontSize:15,cursor:"pointer",
            fontFamily:"'Plus Jakarta Sans',sans-serif",
            display:"flex",alignItems:"center",justifyContent:"center",gap:8,
            transition:"opacity .15s",
          }}
          onMouseEnter={e=>e.currentTarget.style.opacity=".9"}
          onMouseLeave={e=>e.currentTarget.style.opacity="1"}
        >
          {isLast ? "Commencer" : "Suivant →"}
        </button>
      </div>
    </div>
  );
}


/* ═══ js/app.js ═══ */
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


/* ═══ js/main.js ═══ */
/* CarExpress — Entry Point */

function CarExpressRoot() {
  const [onboarded, setOnboarded] = useState(() => localStorage.getItem('ce_onboarded') === '1');

  const handleDone = () => {
    localStorage.setItem('ce_onboarded', '1');
    setOnboarded(true);
  };

  if (!onboarded) return <OnboardingScreen onDone={handleDone}/>;
  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CarExpressRoot />);

