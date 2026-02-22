"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

// Mock data structured by sub-collections based on the provided screenshot
const collectionDetails: Record<string, any> = {
  "cotton-sarees": {
    title: "Cotton Sarees",
    subtitle: "Everyday Heritage",
    description: "Curated from the best handlooms across India. Our pure cottons are breathable, elegantly understated, and exceptionally durable.",
    subCollections: [
      { name: "Suti Cotton Saree", image: "https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Classic handwoven suti cotton." },
      { name: "Printed Cotton Saree", image: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Vibrant block prints on pure cotton." },
      { name: "Pure Cotton Saree", image: "https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "100% natural, breathable fibers." },
      { name: "Polyester Cotton Sarees", image: "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Durable poly-cotton blend for daily wear." },
      { name: "Chanderi Silk Cotton Saree", image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Elegant mix of silk sheen and cotton comfort." },
      { name: "Suti Chapa Saree", image: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Traditional Suti with Chapa block printing." },
      { name: "Cotton Mulmul Sarees", image: "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Feathery light, cloud-like softness." },
      { name: "Sambhal Saree", image: "https://images.pexels.com/photos/1578875/pexels-photo-1578875.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Exquisite handlooms from Sambhal." },
      { name: "Udupi Cotton Saree", image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Renowned fine cotton from Udupi." },
      { name: "Handloom Cotton Silk Saree", image: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "A masterful fusion handloom weave." }
    ]
  },
  "silk-sarees": {
    title: "Silk Sarees",
    subtitle: "Luxurious & Traditional",
    description: "Experience the sheer elegance of Silk. From Kanchipuram to Banarasi, discover rich textures and timeless craftsmanship.",
    subCollections: [
      { name: "Tussar Silk Sarees", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Rich texture and natural gold sheen." },
      { name: "Crepe Silk Saree", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Elegant, flowing crinkled texture." },
      { name: "Pure Silk Sarees", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Absolute purity and luxurious drape." },
      { name: "Kanchipuram Silk Sarees", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Legendary temple borders and heavy silk." },
      { name: "Fancy Silk Sarees", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Contemporary motifs on silk." },
      { name: "Printed Silk Saree", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Modern prints on traditional fabric." },
      { name: "South Indian Silk Sarees", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Classic lustrous weaves from the South." },
      { name: "Jacquard Silk Saree", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Intricate woven patterns." },
      { name: "Banarasi Sarees", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Heavily brocaded luxury from Varanasi." },
      { name: "Handloom Silk Saree", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Artisanal handwoven excellence." },
      { name: "Soft Silk Saree", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Easy to drape flowing silk." },
      { name: "Chanderi Silk Saree", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Sheer luxurious weave." },
      { name: "Embroidered Silk Sarees", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Detailed thread and zari work." },
      { name: "Turkey Silk Saree", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Exquisite imported style weaves." },
      { name: "Patola Silk Sarees", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Double ikat woven sari, a rare craft." },
      { name: "Linen Silk Saree", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Breathable linen woven with silk." }
    ]
  },
  "printed-sarees": {
    title: "Printed & Designer Sarees",
    subtitle: "Vivid & Fluid",
    description: "An array of weightless fabrics featuring cutting-edge digital prints alongside age-old traditional printing methods. A staple for every wardrobe.",
    subCollections: [
      { name: "Weightless Sarees", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Effortless draping with zero burden." },
      { name: "Printed Chiffon Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Translucent elegance ideal for evening wear." },
      { name: "Georgette Sarees", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Sheer, lightweight, and springy." },
      { name: "Synthetic Printed Saree", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Bold patterns on affordable synthetics." },
      { name: "Digital Printed Sarees", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "High-definition contemporary art prints." },
      { name: "Print Loose Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Casual and comfortable printed styles." },
      { name: "Linen Saree", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Sophisticated corporate and casual wear." },
      { name: "Lehariya Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Traditional Rajasthani wave patterns." },
      { name: "Crepe Sarees", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Distinctive crisp and crimped appearance." },
      { name: "Lycra Printed Saree", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Stretchable and body-hugging prints." },
      { name: "Ikat Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Beautiful resist-dyeing technique patterns." },
      { name: "Pochampally Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Geometric ikat from the town of Bhoodan Pochampally." },
      { name: "Gadwal Saree", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Rich traditional weave with a silk border." },
      { name: "Bomkai Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Handloom saree from Odisha." },
      { name: "Salu Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Classic and rich traditional style." },
      { name: "Molakalmura Saree", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Traditional weave from Karnataka." },
      { name: "Designer Sarees", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Exclusive haute couture boutique designs." },
      { name: "Bandhani Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Intricate tie-dye patterns from Gujarat." },
      { name: "Supernet Saree", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Crisp and transluscent woven fabric." },
      { name: "Jaipuri Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Rich prints reflecting pink city heritage." },
      { name: "Kashmiri Print Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Floral designs inspired by Kashida embroidery." },
      { name: "Zari Border Sarees", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Finished with a metallic gold or silver border." },
      { name: "Velvet Sarees", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Plush and regal statement drapes." },
      { name: "Brasso Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Technique involving burning out fabric for motifs." },
      { name: "Kasavu Saree", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Traditional Kerala saree with gold borders." }
    ]
  },
  "paithani-sarees": {
    title: "Paithani Sarees",
    subtitle: "The Queen of Silks",
    description: "Authentic Paithani artistry featuring traditional Maharashtrian motifs, available in various lengths.",
    subCollections: [
      { name: "6 War Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Standard traditional 6-yard Paithani drape." },
      { name: "9 War Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Traditional Nauvari 9-yard style." },
      { name: "10 War Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Extended length for elaborate traditional draping." },
      { name: "Peshwai Paithani Saree", image: "https://images.pexels.com/photos/2735286/pexels-photo-2735286.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Royal motifs popularized by the Peshwas." }
    ]
  },
  "specialty-matching": {
    title: "Specialty & Matching Categories",
    subtitle: "Modern Silhouettes & Uniforms",
    description: "Our diverse matching collection is tailored for distinct themes, occasions, and professional environments.",
    subCollections: [
      { name: "Rapier Silk Matching Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "High-quality rapier loom silk." },
      { name: "Rapier JEQ Silk Cat Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Specialized precision woven silk." },
      { name: "Dyed Matching Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Perfectly color-matched dyed fabrics." },
      { name: "Nylon Dyes Sarees", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Durably dyed synthetic saree." },
      { name: "All Types Of Uniform Saree", image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Standardized looks for staff and schools." }
    ]
  }
};

const defaultData = {
  title: "Collection Details",
  subtitle: "Explore our Categories",
  description: "Browse our expansive collection ranging from rich silks to comfortable cottons and modern synthetics.",
  subCollections: [
    { name: "Browse Styles", image: "https://images.pexels.com/photos/3313262/pexels-photo-3313262.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Contact us for detailed catalogs." },
  ]
};

export default function CollectionDetail({ params }: { params: Promise<{ id: string, category: string }> }) {
  const resolvedParams = use(params);
  const data = collectionDetails[resolvedParams.id] || defaultData;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topBar}>
        <div className="container">
          <Link href={`/collections/${resolvedParams.category}`} className={styles.backLink}>
            <ArrowLeft size={16} /> Back to {resolvedParams.category}
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
