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
