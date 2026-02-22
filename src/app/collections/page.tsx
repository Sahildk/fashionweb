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
      id: "sarees",
      title: "Sarees",
      subtitle: "Elegance & Tradition",
      image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Our diverse gamut of sarees ranging from comfortable handloom cotton to majestic silk and trendy prints."
    },
    {
      id: "lehenga",
      title: "Lehenga",
      subtitle: "Festive & Bridal",
      image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Explore exquisite lehengas crafted meticulously for your special occasions."
    },
    {
      id: "kurti",
      title: "Kurti",
      subtitle: "Casual & Workwear",
      image: "https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Stylish everyday staples and intricately detailed kurtis tailored for all occasions."
    },
    {
      id: "dupatta",
      title: "Dupatta",
      subtitle: "Fluid Grace",
      image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "A wide array of dupattas to add finishing grace to any ethnic outfit."
    },
    {
      id: "blouse",
      title: "Blouse",
      subtitle: "Readymade & Designer",
      image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Statement blouses and classic readymades featuring modern silhouettes."
    },
    {
      id: "petticoat",
      title: "Petticoat",
      subtitle: "Essential Layers",
      image: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Comfort-first seamless inner garments prioritizing ease and style."
    },
    {
      id: "kids-wear",
      title: "Kids Wear",
      subtitle: "Festive Joy",
      image: "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Adorable and comfortable ethnic ensembles specially tailored for children."
    },
    {
      id: "women-bottom-wear",
      title: "Women Bottom Wear",
      subtitle: "Versatile Formals & Casuals",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "A comprehensive range of leggings, palazzos, skirts, and trousers."
    },
    {
      id: "towel",
      title: "Towel",
      subtitle: "Home & Essentials",
      image: "https://images.pexels.com/photos/4207908/pexels-photo-4207908.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Premium, absorbent, and ultra-soft woven towels for everyday use."
    },
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
