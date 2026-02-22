"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

// Mock data structured by sub-collections based on the provided screenshot
const collectionDetails: Record<string, any> = {
  "dyed-matching": {
    title: "Dyed Fancy Matching Sarees",
    subtitle: "Modern Silhouettes",
    description: "Our Dyed Fancy Matching collection is tailored for women who seek contemporary style without losing the ethnic touch. It features ready-to-wear options and complex net embroideries.",
    subCollections: [
      { name: "One Minute Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Pre-stitched and ready to drape in 60 seconds." },
      { name: "Ready To Wear Saree", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "For the fast-paced modern lifestyle." },
      { name: "Jimmy Choo Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Shimmering luxury fabrics." },
      { name: "Net Lehenga Saree", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "A masterful fusion of lehenga volume and saree grace." }
    ]
  },
  "cotton-sarees": {
    title: "Cotton Sarees",
    subtitle: "Everyday Heritage",
    description: "Curated from the best handlooms across India. Our pure cottons are breathable, elegantly understated, and exceptionally durable.",
    subCollections: [
      { name: "Suti Cotton Saree", image: "https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Soft, everyday comfort woven naturally." },
      { name: "Printed Cotton Saree", image: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Vibrant block prints and floral motifs." },
      { name: "Chanderi Silk Cotton Saree", image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "The perfect blend of silk sheen and cotton structure." },
      { name: "Cotton Mulmul Sarees", image: "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Feathery light, cloud-like softness." }
    ]
  },
  "printed-sarees": {
    title: "Printed Sarees",
    subtitle: "Vivid & Fluid",
    description: "An array of weightless fabrics featuring cutting-edge digital prints alongside age-old traditional printing methods. A staple for every wardrobe.",
    subCollections: [
      { name: "Weightless Sarees", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Effortless draping with zero burden." },
      { name: "Printed Chiffon Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Translucent elegance ideal for evening wear." },
      { name: "Linen Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Sophisticated corporate and casual wear." },
      { name: "Lehariya Saree", image: "https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Traditional Rajasthani wave patterns." }
    ]
  }
};

const defaultData = {
  title: "Evening Elegance",
  subtitle: "Contemporary Ethnic",
  description: "A fusion of global silhouettes with indigenous textiles. Perfect for evening soirées.",
  subCollections: [
    { name: "Signature Piece", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Elegant drape." },
  ]
};

export default function CollectionDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const data = collectionDetails[resolvedParams.id] || defaultData;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topBar}>
        <div className="container">
          <Link href="/collections" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to All Collections
          </Link>
        </div>
      </div>

      <div className={`container ${styles.splitLayout}`}>
        {/* Left: Sticky Information about the Main Category */}
        <div className={styles.infoColumn}>
          <div className={styles.stickyContent}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.subtitle}>{data.subtitle}</span>
              <h1 className={styles.title}>{data.title}</h1>
              
              <div className={styles.descriptionBlock}>
                <p className={styles.description}>{data.description}</p>
              </div>

              <div className={styles.actionBlock}>
                <Link href="/contact" className={`btn-secondary ${styles.boutiqueBtn}`}>
                  Contact Us for Wholesale Inquiries
                </Link>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Right: Scrollable Grid of Sub-Collections */}
        <div className={styles.galleryColumn}>
          <h3 className={styles.subCatHeader}>Sub-Collections in {data.title}</h3>
          <div className={styles.subGrid}>
            {data.subCollections.map((sub: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.subCard}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src={sub.image} 
                    alt={sub.name} 
                    width={800} 
                    height={1000} 
                    className={styles.galleryImage} 
                  />
                </div>
                <div className={styles.subContent}>
                  <h4 className={styles.subTitle}>{sub.name}</h4>
                  <p className={styles.subDesc}>{sub.desc}</p>
                  <Link href="/contact" className={styles.enquireLink}>
                    Enquire <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
