"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./projectModal.css";

type Item = { id:string; title:string; desc:string; img:string; gallery?:string[] } | null;

export default function ProjectModal({ item, onClose }:{ item:Item, onClose:()=>void }){
  return (
    <AnimatePresence>
      {item && (
        <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
          <motion.div className="modal-card" initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} exit={{y:20,opacity:0}} onClick={(e)=>e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>✕</button>
            <h3>{item.title}</h3>
            <p className="muted">{item.desc}</p>
            <div className="modal-gallery">
              {(item.gallery ?? [item.img]).map((g, i)=> <img key={i} src={g} alt={item.title + i} />)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

