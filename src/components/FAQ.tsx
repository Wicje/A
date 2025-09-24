"use client";
import React, { useState } from "react";
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
          <div
            key={i}
            className={`faq-item ${open === i ? "open" : ""}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-q">
              <span>{item.q}</span>
              <span>{open === i ? "−" : "+"}</span>
            </div>
            {open === i && <div className="faq-a"><p>{item.a}</p></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

