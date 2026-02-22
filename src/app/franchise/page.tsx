"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Users, Shield } from "lucide-react";
import styles from "./page.module.css";

export default function Franchise() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image 
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Franchise Opportunity" 
            fill 
            className={styles.heroImg} 
          />
          <div className={styles.overlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Franchise Opportunities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            Partner with a brand that redefines ethnic luxury. Join the Svara family and build a legacy of elegance and profitability.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className={`section container`}>
        <div className="text-center">
          <h2 className={styles.sectionTitle}>Why Franchise With Svara?</h2>
          <p className={styles.sectionDesc}>
            A proven business model designed for sustainable growth and premium market positioning.
          </p>
        </div>
        <div className={styles.benefitsGrid}>
          {[
            { icon: <TrendingUp size={32} />, title: "High Demand Segment", desc: "Premium ethnic wear is a rapidly growing market with consistent year-round demand." },
            { icon: <Shield size={32} />, title: "Brand Equity", desc: "Leverage our established reputation for quality, authenticity, and luxury." },
            { icon: <Users size={32} />, title: "Operational Support", desc: "Comprehensive training and continuous operational guidance." },
            { icon: <CheckCircle size={32} />, title: "Exclusive Merchandise", desc: "Access to curated, limited-edition collections not available elsewhere." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={styles.benefitCard}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.benefitTitle}>{item.title}</h3>
              <p className={styles.benefitDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Investment & Support */}
      <section className={`section ${styles.supportSection}`}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2 className={styles.sectionTitle}>Investment Overview</h2>
              <ul className={styles.list}>
                <li><CheckCircle size={18} className={styles.listIcon}/> Store Setup & Interior Design</li>
                <li><CheckCircle size={18} className={styles.listIcon}/> Initial Inventory Procurement</li>
                <li><CheckCircle size={18} className={styles.listIcon}/> Marketing & Launch Support</li>
                <li><CheckCircle size={18} className={styles.listIcon}/> Technology & POS Systems</li>
              </ul>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Our Support System</h2>
              <ul className={styles.list}>
                <li><CheckCircle size={18} className={styles.listIcon}/> Site Selection Assistance</li>
                <li><CheckCircle size={18} className={styles.listIcon}/> Staff Training Programs</li>
                <li><CheckCircle size={18} className={styles.listIcon}/> Supply Chain Management</li>
                <li><CheckCircle size={18} className={styles.listIcon}/> National Advertising Campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className={`section container`}>
        <div className={styles.formContainer}>
          <div className="text-center">
            <h2 className={styles.sectionTitle}>Submit an Inquiry</h2>
            <p className={styles.formDesc}>Please fill out the form below to receive our detailed franchise prospectus.</p>
          </div>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>First Name</label>
                <input type="text" className={styles.input} required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Last Name</label>
                <input type="text" className={styles.input} required />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input type="email" className={styles.input} required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input type="tel" className={styles.input} required />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Proposed City/Location</label>
              <input type="text" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Additional Comments</label>
              <textarea className={styles.textarea} rows={4}></textarea>
            </div>
            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Request Information</button>
          </form>
        </div>
      </section>
    </div>
  );
}
