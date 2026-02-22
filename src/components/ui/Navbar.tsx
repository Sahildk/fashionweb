"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

const collections = [
  { name: "All Collections", href: "/collections" },
  { name: "Sarees", href: "/collections/sarees" },
  { name: "Lehenga", href: "/collections/lehenga" },
  { name: "Kurti", href: "/collections/kurti" },
  { name: "Dupatta", href: "/collections/dupatta" },
  { name: "Blouse", href: "/collections/blouse" },
  { name: "Petticoat", href: "/collections/petticoat" },
  { name: "Kids Wear", href: "/collections/kids-wear" },
  { name: "Women Bottom Wear", href: "/collections/women-bottom-wear" },
  { name: "Towel", href: "/collections/towel" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Svara.
        </Link>

        {/* Desktop Links */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          
          <div 
            className={styles.dropdownContainer}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link href="/collections" className={styles.navLink} onClick={() => setIsDropdownOpen(false)}>
              Collections <ChevronDown size={14} className={styles.icon} />
            </Link>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={styles.dropdownMenu}
                >
                  <div className={styles.dropdownGrid}>
                    {collections.map((item) => (
                      <Link key={item.name} href={item.href} className={styles.dropdownItem}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/franchise" className={styles.navLink}>Franchise</Link>
          <Link href="/partnership" className={styles.navLink}>Partnership</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileNav}
          >
            <div className={`container ${styles.mobileNavContainer}`}>
              <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              
              <div className={styles.mobileAccordion}>
                <button 
                  className={styles.mobileNavLink} 
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                >
                  Collections
                  <motion.div animate={{ rotate: isMobileDropdownOpen ? 180 : 0 }}>
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isMobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={styles.mobileDropdownList}
                    >
                      {collections.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className={styles.mobileDropdownItem}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/franchise" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Franchise</Link>
              <Link href="/partnership" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Partnership</Link>
              <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
