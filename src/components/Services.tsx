"use client";
import { motion } from "framer-motion";
import "./services.css";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Responsive, modern websites that drive results.",
      image: "/thumb1.png",
    },
    {
      title: "Brand Identity",
      description: "Logos, colors, and strategy that make you memorable.",
      image: "/thumb2.png",
    },
    {
      title: "UI/UX Design",
      description: "Seamless experiences that delight your users.",
      image: "/thumb3.png",
    },
    {
      title: "SEO & Marketing",
      description: "Boost visibility and attract the right audience.",
      image: "/thumb4.png",
    },
  ];

  return (
    <motion.section 
    className="services"
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  >
      <div className="services-container">
        <motion.div 
        className="services-header"
        initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >
          {/* Left Top Title */}
          <h2 className="services-title">Our Services</h2>

          {/* Intro in middle */}
          <p className="services-intro">
            We deliver tailored digital solutions that help businesses grow,
            innovate, and succeed in a fast-moving market.
          </p>

          {/* Right Top Button */}
          <button className="services-btn">View All</button>
        </motion.div>

        {/* Service Rows */}
        <motion.div 
        className="services-rows"
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
          {services.map((service, i) => (
            <motion.div 
            className="service-row" 
            key={i}
  variants={{
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  >
              <div className="service-title">{service.title}</div>
              <div className="service-description">{service.description}</div>
              <motion.div 
              className="service-image"
              initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: 0.1 }}
  >
                <img src={service.image} alt={service.title} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

