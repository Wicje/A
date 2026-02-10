// src/components/CustomerReviews.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";
import "./CustomerReviews.css";

const reviews = [
  {
    quote: "Codot helped us rethink our brand from the ground up.",
    name: "Sarah Thompson",
    role: "Founder, GreenStudio",
  },
  {
    quote: "Design and strategy that actually move the needle.",
    name: "James Lee",
    role: "CEO, TechNova",
  },
  {
    quote: "Visionary, calm, and precise execution.",
    name: "Amara Yusuf",
    role: "Marketing Director, BuildX",
  },
  {
    quote: "They turned chaos into clarity.",
    name: "Daniel Ruiz",
    role: "Product Lead, Flux",
  },
  {
    quote: "Our brand finally feels like us.",
    name: "Elena Petrova",
    role: "Creative Director, NovaLab",
  },
  {
    quote: "Exceptional taste and technical depth.",
    name: "Marcus Chen",
    role: "CTO, ByteWorks",
  },
  {
    quote: "The smoothest collaboration we’ve had.",
    name: "Nina Okafor",
    role: "Operations, ScaleUp",
  },
  {
    quote: "They think in systems, not just visuals.",
    name: "Oliver Grant",
    role: "Founder, Loop",
  },
  {
    quote: "Every detail felt intentional.",
    name: "Priya Singh",
    role: "Brand Manager, Zenly",
  },
  {
    quote: "A rare mix of creativity and rigor.",
    name: "Tomás Alvarez",
    role: "CEO, Horizon",
  },

  {
    quote:
      "Codot helped us rethink our brand from the ground up. Their work exceeded expectations.",
    name: "Sarah Thompson",
    role: "Founder, GreenStudio",
  },
  {
    quote:
      "The team’s design and strategy expertise gave us a clear edge in the market.",
    name: "James Lee",
    role: "CEO, TechNova",
  },
  {
    quote:
      "Professional, visionary, and collaborative. Our go-to partner for all branding.",
    name: "Amara Yusuf",
    role: "Marketing Director, BuildX",
  },
];

const scrollingReviews = [...reviews, ...reviews];

const CustomerReviews: React.FC = () => {
  return (
    <section className="customer-reviews">
      <div className="review-header">
      <h2>Customer Reviews</h2>
        <p>Real stories from real customers. See what they are saying</p>
        <h3>01/08 Reviews</h3>
      </div>
      
<div className="reviews-marquee">
  <motion.div
    className="reviews-track"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 45,
      ease: "linear",
    }}
  >
    {scrollingReviews.map((review, index) => (
      <div key={index} className="review-card">
        <p className="quote">“{review.quote}”</p>
        <div className="author">
          <span className="name">{review.name}</span>
          <span className="role">{review.role}</span>
        </div>
      </div>
    ))}
  </motion.div>
</div>
    </section>
  );
};

export default CustomerReviews;

