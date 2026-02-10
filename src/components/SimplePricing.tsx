// src/components/SimplePricing.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";
import "./SimplePricing.css";

const SimplePricing: React.FC = () => {
  return (
<motion.section
  className="simple-pricing"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
<motion.div
  className="pricing-header"
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
      <h2>Simple Pricing</h2>
      <p className="subtitle">Straightforward plans tailored to your needs.</p>
      <p className= "end">For Teams and Personal</p>
      </motion.div>

<motion.div
  className="pricing-cards"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
        {/* Card 1 */}
<motion.div
  className="pricing-card"
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
          <h3>Custom Project</h3>
          <p className="price">$990.00</p>
          <ul>
            <li>Branding design package</li>
            <li>Web design and strategy</li>
            <li>Up to 5 revisions</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </motion.div>

        {/* Card 2 */}
<motion.div
  className="pricing-card featured"
  variants={{
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }}
  transition={{ duration: 0.55, ease: "easeOut" }}
>
          <h3>Premium Package</h3>
          <p className="price">$1,049</p>
          <ul>
            <li>Everything in Custom Project</li>
            <li>Advanced brand strategy</li>
            <li>Dedicated project manager</li>
          </ul>
          <button className="pricing-btn">Book Now</button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SimplePricing;

