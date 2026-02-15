"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Detecting...");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
      };
      setDate(now.toLocaleDateString("en-GB", options));
    };

    updateDate();
    const interval = setInterval(updateDate, 60000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await res.json();
          setLocation(data.city || data.locality || "Unknown");
        } catch {
          setLocation("Location unavailable");
        }
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src="/logo.svg" alt="Logo" className="logo" />
          <span className="brand-name">ENLIGHTEN</span>
        </div>

        <div className="header-center">
          <span className="header-time">{date}</span>
          <span className="header-location">{location}</span>
        </div>

        <div className="header-right">
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            MENU
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#works">Works</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
