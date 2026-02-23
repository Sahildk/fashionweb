"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            Preserving heritage algorithms of handloom through modern narratives.
          </motion.p>
        </div>
      </section>

      {/* Founder Vision */}
      <section className={`section container ${styles.visionSection}`}>
        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.textColumn}
          >
            <h2 className={styles.sectionTitle}>The Vision</h2>
            <p className={styles.bodyText}>
              Shreeji Sarees began as a humble attempt to bring the overlooked masterpieces of Indian weavers to the forefront of global fashion. Our founder set out to travel across the artisan villages of India, documenting the intricate weaves that carry centuries of history.
            </p>
            <p className={styles.bodyText}>
              We believe that true luxury lies in the time, skill, and soul poured into a garment. Every saree at Shreeji Sarees represents weeks of meticulous craftsmanship, designed for the woman who appreciates the poetry of fine textiles.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.imageColumn}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src="https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Founder Vision" 
                fill 
                className={styles.image} 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitleCenter}>Our Journey</h2>
          <div className={styles.timeline}>
            {[
              { year: "2015", title: "The Inception", desc: "Started with a single boutique in Mumbai working with 5 master weavers." },
              { year: "2018", title: "Expanding Horizons", desc: "Launched our first bridal couture collection, embracing opulent zardozi." },
              { year: "2021", title: "Going Global", desc: "Shreeji Sarees crosses borders, delivering heritage pieces to 20+ countries." },
              { year: "2023", title: "Sustainable Future", desc: "Committed to 100% sustainable dyes and empowering 500+ artisan families." }
            ].map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={styles.timelineItem}
              >
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
