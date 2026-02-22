"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            Whether you have a question about our collections, sizing, or styling advice, our team is here to assist you.
          </motion.p>
        </div>
      </section>

      <section className={`section container`}>
        <div className={styles.contactGrid}>
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.infoColumn}
          >
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <p className={styles.infoText}>We typically respond within 24 hours on business days.</p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                <div>
                  <h3 className={styles.infoLabel}>Our Flagship Store</h3>
                  <p className={styles.infoValue}>123 Heritage Lane, Colaba<br/>Mumbai, Maharashtra 400001, India</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Phone size={24} /></div>
                <div>
                  <h3 className={styles.infoLabel}>Phone Support</h3>
                  <p className={styles.infoValue}>+91 98765 43210<br/>Mon-Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Mail size={24} /></div>
                <div>
                  <h3 className={styles.infoLabel}>Email Us</h3>
                  <p className={styles.infoValue}>hello@svarabrand.com<br/>support@svarabrand.com</p>
                </div>
              </div>
            </div>

            <div className={styles.whatsappCard}>
              <h3 className={styles.whatsappTitle}>Immediate Assistance?</h3>
              <p className={styles.whatsappDesc}>Reach out to our styling consultants via WhatsApp.</p>
              <a href="https://wa.me/message/placeholder" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.formColumn}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <h2 className={styles.formTitle}>Send a Message</h2>
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
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input type="email" className={styles.input} required />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Subject</label>
                <select className={styles.input} required>
                  <option value="">Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="styling">Styling Advice</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} rows={5} required></textarea>
              </div>
              
              <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Send Message</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Decorative Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapPin}>
            <MapPin size={40} className={styles.pinIcon} />
            <div className={styles.pulse} />
          </div>
          <p className={styles.mapText}>Visit us in the heart of Mumbai.</p>
        </div>
      </section>
    </div>
  );
}
