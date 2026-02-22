"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";

export default function Collections() {
  const collections = [
    {
      id: "dyed-matching",
      title: "Dyed Fancy Matching Sarees",
      subtitle: "Contemporary & Ready-to-Wear",
      image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "A beautiful amalgamation of modern silhouettes and traditional dyeing techniques. Includes one-minute sarees and intricate net embroidery."
    },
    {
      id: "cotton-sarees",
      title: "Cotton Sarees",
      subtitle: "Breathable Everyday Elegance",
      image: "https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Comfort meets heritage. Our cotton collection ranges from pure Suti Cotton to Chanderi blends, perfect for the modern working woman."
    },
    {
      id: "printed-sarees",
      title: "Printed Sarees",
      subtitle: "Vibrant & Weightless",
      image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "From digital prints to traditional Lehariya and Ikat. Fluid fabrics like chiffon, georgette, and linen that drape effortlessly."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Our Main Collections
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            Discover our vast taxonomy of heritage and modern ethnic wear.
          </motion.p>
        </div>
      </header>

      <section className={`section container`}>
        <div className={styles.collectionGrid}>
          {collections.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={styles.card}
            >
              <Link href={`/collections/${item.id}`} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className={styles.image} 
                  />
                  <div className={styles.imageOverlay} />
                  <span className={styles.exploreText}>View Sub-collections</span>
                </div>
              </Link>
              
              <div className={styles.content}>
                <span className={styles.category}>{item.subtitle}</span>
                <Link href={`/collections/${item.id}`}>
                  <h2 className={styles.cardTitle}>{item.title}</h2>
                </Link>
                <p className={styles.description}>{item.description}</p>
                <Link href={`/collections/${item.id}`} className={styles.readMore}>
                  Browse Sub-collections <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
