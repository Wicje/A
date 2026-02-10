  "use client";
  import React, { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import "./FAQ.css";

  const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide branding, visual identity, and website design tailored for ambitious businesses."
  },
  {
    q: "Do you handle custom projects?",
    a: "Yes. We adapt to your unique needs — from brand refreshes to full-scale digital platforms."
  },
  {
    q: "What’s your typical timeline?",
    a: "Most projects take 4–8 weeks depending on scope and complexity."
  },
  {
    q: "How do I get started?",
    a: "Simply book a call with us — we’ll review your goals and propose the right plan."
  }
  ];

  const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, i) => (
          
  <motion.div
  key={i}
  className={`faq-item ${open === i ? "open" : ""}`}
  onClick={() => setOpen(open === i ? null : i)}
  initial={false}
  >
  <motion.div
  className="faq-q"
  whileTap={{ scale: 0.98 }}
  >
              <span>{item.q}</span>
              <span>{open === i ? "−" : "+"}</span>
           </motion.div>
  <AnimatePresence>
  {open === i && (
    <motion.div
      className="faq-a"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <p>{item.a}</p>
    </motion.div>
  )}
  </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
  };

  export default FAQ;

