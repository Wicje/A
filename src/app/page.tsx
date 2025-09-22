"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Approach from "../components/Approach";
import Trusted from "../components/Trusted";
import Services from "../components/Services";
import Metrics from "../components/Metrics";
import CaseStudies from "../components/CaseStudies";
import "./globals.css";

export default function Page() {
  const [scrollUp, setScrollUp] = useState(true);
  let lastScroll = 0;

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current < lastScroll) {
        setScrollUp(true); // scrolling up
      } else {
        setScrollUp(false); // scrolling down
      }
      lastScroll = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: scrollUp ? 0 : -100 }}
        transition={{ duration: 0.4 }}
      >
        <Header />
      </motion.div>
      <main>
        <Hero />
        <Approach />
        <Trusted />
<Services />
         <Metrics />


        <CaseStudies />
      </main>
    </>
  );
}

