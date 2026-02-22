"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);

  const sareeCollections = [
    {
      id: "cotton-sarees",
      title: "Cotton Sarees",
      subtitle: "Everyday Heritage & Comfort",
      image: "https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Curated from the best handlooms across India. Our pure cottons are breathable, elegantly understated, and exceptionally durable."
    },
    {
      id: "silk-sarees",
      title: "Silk Sarees",
      subtitle: "Luxurious & Traditional",
      image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Experience the sheer elegance of Silk. From Kanchipuram to Banarasi, discover rich textures and timeless craftsmanship."
    },
    {
      id: "printed-sarees",
      title: "Printed & Designer Sarees",
      subtitle: "Vivid, Fluid & Trendy",
      image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "An array of weightless fabrics featuring cutting-edge digital prints alongside age-old traditional printing methods."
    },
    {
      id: "paithani-sarees",
      title: "Paithani Sarees",
      subtitle: "The Queen of Silks",
      image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Authentic Paithani artistry featuring traditional Maharashtrian motifs, available in various war lengths."
    },
    {
      id: "specialty-matching",
      title: "Specialty & Matching Categories",
      subtitle: "Contemporary & Custom",
      image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1000",
      description: "Dyed matching concepts, rapier silk matching and uniform sarees tailored for distinct occasions."
    }
  ];

  const collectionsData = category === "sarees" ? sareeCollections : [];
  
  const titleMap: Record<string, string> = {
    "sarees": "Saree Collections",
    "lehenga": "Lehenga Collections",
    "kurti": "Kurti Collections",
    "dupatta": "Dupatta Collections",
    "blouse": "Blouse Collections",
    "petticoat": "Petticoat Collections",
    "kids-wear": "Kids Wear",
    "women-bottom-wear": "Women Bottom Wear",
    "towel": "Towel Collections"
  };

  const pageTitle = titleMap[category] || "Our Collections";

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
            {pageTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            {category === "sarees" 
              ? "Discover our vast taxonomy of heritage and modern ethnic wear."
              : "We are currently curating this collection. Check back soon!"}
          </motion.p>
        </div>
      </header>

      {collectionsData.length > 0 && (
        <section className={`section container`}>
          <div className={styles.collectionGrid}>
            {collectionsData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={styles.card}
              >
                <Link href={`/collections/${category}/${item.id}`} className={styles.imageLink}>
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
                  <Link href={`/collections/${category}/${item.id}`}>
                    <h2 className={styles.cardTitle}>{item.title}</h2>
                  </Link>
                  <p className={styles.description}>{item.description}</p>
                  <Link href={`/collections/${category}/${item.id}`} className={styles.readMore}>
                    Browse Sub-collections <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
