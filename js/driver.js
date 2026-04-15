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
