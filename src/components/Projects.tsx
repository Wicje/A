"use client";
import React, { useState } from "react";
import "./projects.css";
import ProjectModal from "./ProjectModal";

const PROJECTS = [
  { id: "1", title: "Project One", desc: "Branding, web", img: "/images/project-1.jpg", gallery:[ "/images/project-1.jpg","/images/project-2.jpg"] },
  { id: "2", title: "Project Two", desc: "Identity, tokens", img: "/images/project-2.jpg", gallery:[ "/images/project-2.jpg","/images/project-3.jpg"] },
  { id: "3", title: "Project Three", desc: "System design", img: "/images/project-3.jpg", gallery:[ "/images/project-3.jpg","/images/project-4.jpg"] },
  { id: "4", title: "Project Four", desc: "Design ops", img: "/images/project-4.jpg", gallery:[ "/images/project-4.jpg","/images/project-1.jpg"] }
];

export default function Projects(){
  const [active, setActive] = useState<string | null>(null);
  const open = (id:string)=> setActive(id);
  const close = ()=> setActive(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header">
          <h2>Selected Work</h2>
          <a href="#">View all →</a>
        </div>

        <div className="projects-grid">
          {PROJECTS.map(p=>(
            <article key={p.id} className="project-card" onClick={()=>open(p.id)}>
              <img src={p.img} alt={p.title} />
              <h4>{p.title}</h4>
              <p className="muted">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal item={PROJECTS.find(x=>x.id===active) ?? null} onClose={close} />
    </section>
  )
}

