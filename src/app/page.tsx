"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className={styles.homeContainer}>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <motion.div className={styles.heroImageWrapper} style={{ y }}>
          <Image
            src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=2574"
            alt="Elegant Saree"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay} />
        </motion.div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className={styles.heroTitle}>Elegance in Every <br/><span className={styles.italicSerif}>Weave.</span></h1>
            <p className={styles.heroSubtext}>
              Discover our curated collection of premium sarees and ethnic wear. 
              Modern sensibilities rooted in rich cultural heritage.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/collections" className={`btn-primary ${styles.heroBtn}`}>Explore Collection</Link>
              <Link href="/lookbook" className={`btn-secondary ${styles.heroBtnSecondary}`}>View Lookbook</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Story Section */}
      <section className={`section container ${styles.storySection}`}>
        <div className={styles.storyGrid}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={styles.storyImageContainer}
          >
            <Image
              src="https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Artisan weaving"
              fill
              className={styles.storyImage}
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.storyTextContainer}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.kicker}>Our Heritage</span>
              <h2 className={styles.sectionTitle}>The Art of Timeless Grace</h2>
            </div>
            <p className={styles.storyBody}>
              Every thread tells a story. Svara was born from a passion to preserve the intricate artistry of Indian handlooms while embracing the clean, elegant lines of modern design.
            </p>
            <p className={styles.storyBody}>
              Our collections are a tribute to the skilled artisans who bring these masterpieces to life. We believe in slow fashion—pieces that are cherished and passed down through generations.
            </p>
            <Link href="/about" className={styles.textLink}>
              Discover Our Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. Featured Collections Grid */}
      <section className={`section ${styles.collectionSection}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center`}>
            <span className={styles.kicker}>Curated</span>
            <h2 className={styles.sectionTitle}>Featured Collections</h2>
          </div>
          
          <div className={styles.collectionGrid}>
            {[
              { title: "Bridal Couture", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1000" },
              { title: "Pure Banarasi", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=1000" },
              { title: "Party Ready Lehengas", image: "https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=1000" }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={styles.collectionCard}
              >
                <div className={styles.cardImageWrapper}>
                  <Image src={item.image} alt={item.title} fill className={styles.cardImage} />
                  <div className={styles.cardOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={styles.cardLink}>Explore <ArrowRight size={14} /></span>
                </div>
                <Link href="/collections" className={styles.fullLink} aria-label={`Explore ${item.title}`}></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Craftsmanship Section */}
      <section className={`section ${styles.craftSection}`}>
        <div className={`container ${styles.craftContainer}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.craftContent}
          >
            <div className={styles.minimalSeparator} />
            <h2 className={styles.craftTitle}>Woven with Integrity</h2>
            <p className={styles.craftBody}>
              Our commitment to quality goes beyond the fabric. It is in the 
              intricate zardozi details, the pure silk threads, and the hundreds 
              of hours our artisans patiently dedicate to perfecting a single piece. 
              We craft heirlooms, not just garments.
            </p>
            <div className={styles.minimalSeparator} />
          </motion.div>
        </div>
      </section>

      {/* 5. Call To Action Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <Image 
            src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Premium fabric background"
            fill
            className={styles.ctaImage}
          />
          <div className={styles.ctaOverlay} />
        </div>
        <div className={`container ${styles.ctaContentContainer}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.ctaContent}
          >
            <h2 className={styles.ctaTitle}>Grow with Svara</h2>
            <p className={styles.ctaBody}>
              Join hands with a brand that represents elegance and luxury. 
              We are expanding our presence through exclusive franchise and partnership opportunities.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/franchise" className={`btn-primary ${styles.premiumBtn}`}>Become a Franchise Partner</Link>
              <Link href="/partnership" className={`btn-secondary ${styles.premiumBtnSecondary}`}>Partner With Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
