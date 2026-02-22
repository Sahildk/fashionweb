import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.logo}>Svara.</Link>
            <p className={styles.brandDesc}>
              Elegant, modern, and culturally rooted. We bring you the finest ethnic wear, woven with tradition and styled for the contemporary world.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Explore</h4>
            <Link href="/collections/sarees" className={styles.footerLink}>Sarees</Link>
            <Link href="/collections/bridal" className={styles.footerLink}>Bridal Collection</Link>
            <Link href="/collections/lehengas" className={styles.footerLink}>Lehengas</Link>
            <Link href="/about" className={styles.footerLink}>Our Story</Link>
          </div>

          {/* Business & Support */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Business</h4>
            <Link href="/franchise" className={styles.footerLink}>Franchise</Link>
            <Link href="/partnership" className={styles.footerLink}>Partnership</Link>
            <Link href="/contact" className={styles.footerLink}>Contact Us</Link>
            <Link href="/terms" className={styles.footerLink}>Terms & Conditions</Link>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Get in Touch</h4>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>123 Heritage Lane, Mumbai, India</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} />
              <span>hello@svarabrand.com</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Svara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
