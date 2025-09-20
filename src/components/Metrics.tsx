"use client";
import React, { useEffect, useState } from "react";
import "./metrics.css";

function useCounter(to:number, duration=1200){
  const [val, setVal] = useState(0);
  useEffect(()=>{
    let start=0;
    const step = Math.max(1, Math.round((to) / (duration/16)));
    const t = setInterval(()=>{ start+=step; if(start>=to){ setVal(to); clearInterval(t)} else setVal(start)},16);
    return ()=>clearInterval(t);
  },[to,duration]);
  return val;
}

export default function Metrics(){
  const a = useCounter(60);
  const b = useCounter(4);
  const c = useCounter(106);
  return (
    <section className="section metrics-section">
      <div className="container metrics-inner center">
        <div className="metric">
          <div className="metric-val">{a}+</div>
          <div className="muted">Projects</div>
        </div>
        <div className="metric">
          <div className="metric-val">${b}M</div>
          <div className="muted">Revenue</div>
        </div>
        <div className="metric">
          <div className="metric-val">{c}</div>
          <div className="muted">Clients</div>
        </div>
      </div>
    </section>
  )
}

