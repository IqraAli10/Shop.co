"use client";
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Import images
import Shirt from "@/public/shirt3.jpg";
import Jeans from "@/public/jeans1.jpg";
import Check from "@/public/check.jpg";
import Stripped from "@/public/tshirt2.jpg";
import Vertical from "@/public/vertical.jpg";
import Skinny from "@/public/jeans3.jpg";
import Graphic from "@/public/graphic.jpg";
import Chadda from "@/public/Chadda.jpg";

// Define the types for props (if needed) or product data
interface Product {
  name: string;
  price: string;
  image: StaticImageData | string; // Keep as is
}

const ProductSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('product-section');
    if (section) {
      const rect = section.getBoundingClientRect();
      setIsInView(rect.top < window.innerHeight && rect.bottom > 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  // Dummy product data
  const newArrivals: Product[] = [
    { name: "T-shirt with Tape Details", price: "$120", image: Shirt },
    { name: "Skinny Fit Jeans", price: "$240", image: Jeans },
    { name: "Checkered Shirt", price: "$180", image: Check },
    { name: "Sleeve Striped T-shirt", price: "$130", image: Stripped },
  ];

  const topSelling: Product[] = [
    { name: "Vertical Striped Shirt", price: "$212", image: Vertical },
    { name: "Courage Graphic T-shirt", price: "$145", image: Graphic },
    { name: "Loose Fit Bermuda Shorts", price: "$80", image: Chadda },
    { name: "Faded Skinny Jeans", price: "$210", image: Skinny },
  ];

  return (
    <section id="product-section" className="flex flex-col items-center p-10">
      <motion.h2
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headingVariants}
        className="text-3xl xl:text-4xl 2xl:text-6xl font-extrabold mb-8 text-center mt-14"
      >
        NEW ARRIVALS
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {newArrivals.map((product, index) => (
          <Link
            href="/product"
            key={product.name + index}
            className="text-center cursor-pointer"
          >
            <div className="w-[200px] h-[300px] overflow-hidden mx-auto">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
          </Link>
        ))}
      </motion.div>

      <Link href="/newArrivals">
        <button className="w-24 items-center justify-center mt-3 bg-black rounded-2xl text-white px-4 py-3 hover:bg-white border border-black transition-all ease-in-out duration-700 hover:text-black">
          View All
        </button>
      </Link>

      <motion.h2
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headingVariants}
        className="text-3xl font-extrabold mt-28 mb-8 text-center xl:text-4xl 2xl:text-5xl"
      >
        TOP SELLING
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {topSelling.map((product, index) => (
          <Link
            href="/product"
            key={product.name + index}
            className="text-center cursor-pointer"
          >
            <div className="w-[200px] h-[300px] overflow-hidden mx-auto">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
          </Link>
        ))}
      </motion.div>

      <Link href="/onSale">
        <button className="w-24 items-center justify-center mt-3 bg-black rounded-2xl text-white px-4 py-3 hover:bg-white border border-black transition-all ease-in-out duration-700 hover:text-black">
          View All
        </button>
      </Link>
    </section>
  );
};

export default ProductSection;
