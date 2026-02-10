"use client";
import React from "react";
import { motion } from "framer-motion";
import "./BookCall.css";

const BookCall: React.FC = () => {
  return (
<motion.section
  className="book-call"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
>
  BOOK A CALL
</motion.h2>
    </motion.section>
  );
};

export default BookCall;

