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
    <section className="metrics">
  <div className="metrics-container">
    <div className="metrics-grid">
      <div className="metric">
        <div className="metric-number">106</div>
        <div className="metric-label">Projects Completed</div>
      </div>
      <div className="metric">
        <div className="metric-number">08</div>
        <div className="metric-label">Years of Experience</div>
      </div>
      <div className="metric">
        <div className="metric-number">60+</div>
        <div className="metric-label">Clients Worldwide</div>
      </div>
      <div className="metric">
        <div className="metric-number">$4M</div>
        <div className="metric-label">Value Generated</div>
      </div>
    </div>
  </div>
</section>
  )
}

