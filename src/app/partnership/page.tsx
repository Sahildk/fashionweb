"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Package, Truck, Handshake } from "lucide-react";
import styles from "./page.module.css";

export default function Partnership() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.header}>
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Partnership & Wholesale
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            Collaborate with Shreeji Sarees to bring exquisite ethnic wear to new markets. We offer tailored B2B solutions for retailers and distributors.
          </motion.p>
        </div>
      </section>

      {/* Models Grid */}
      <section className={`section container`}>
        <div className={styles.modelsGrid}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.modelCard}
          >
            <div className={styles.iconWrapper}><Package size={36} /></div>
            <h2 className={styles.modelTitle}>Wholesale Model</h2>
            <p className={styles.modelDesc}>
              Perfect for independent boutiques and multi-brand retailers. Gain access to our seasonal collections at competitive B2B pricing with flexible MOQ requirements.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.modelCard}
          >
            <div className={styles.iconWrapper}><Truck size={36} /></div>
            <h2 className={styles.modelTitle}>Authorized Distributor</h2>
            <p className={styles.modelDesc}>
              For large-scale operations looking to manage a specific region. Benefit from exclusive territory rights, bulk pricing tiers, and dedicated logistics support.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.modelCard}
          >
            <div className={styles.iconWrapper}><Handshake size={36} /></div>
            <h2 className={styles.modelTitle}>Brand Collaborations</h2>
            <p className={styles.modelDesc}>
              Looking for a co-branded capsule collection? We partner with designers and complementary brands to create unique, limited-edition line extensions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className={`section ${styles.formSection}`}>
        <div className={`container ${styles.formContent}`}>
          <div className={styles.imageColumn}>
            <Image 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Premium fabric rolls" 
              fill 
              className={styles.bgImage} 
            />
          </div>
          <div className={styles.formColumn}>
            <h2 className={styles.formTitle}>Initiate Partnership</h2>
            <p className={styles.formSubtitle}>Our B2B team will review your application and get back to you within 48 hours.</p>
            
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Company/Store Name</label>
                <input type="text" className={styles.input} required />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Contact Person</label>
                  <input type="text" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Business Email</label>
                  <input type="email" className={styles.input} required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Partnership Type</label>
                <select className={styles.input} required>
                  <option value="">Select an option</option>
                  <option value="wholesale">Wholesale Buyer</option>
                  <option value="distributor">Distributor</option>
                  <option value="collaboration">Brand Collaboration</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Tell us about your business</label>
                <textarea className={styles.textarea} rows={4} placeholder="Links to your website or social media..."></textarea>
              </div>
              <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Submit Proposal</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
