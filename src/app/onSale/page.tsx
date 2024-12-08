"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from next/link
import Tshirt1 from "@/public/tshirt2.jpg";
import Tshirt2 from "@/public/tshirt1.jpg";
import Tshirt3 from "@/public/tshirt3.jpg";
import Tshirt4 from "@/public/tshirt4.jpg";
import Polo1 from "@/public/poloshirt1.jpg";
import Polo2 from "@/public/poloshirt2.jpg";
import Polo3 from "@/public/poloshirt3.jpg";
import Polo4 from "@/public/poloshirt2.jpg";
import Jeans1 from "@/public/jeans1.jpg";
import Jeans2 from "@/public/jeans2.jpg";
import Jeans3 from "@/public/jeans3.jpg";
import Jeans4 from "@/public/Jeans.jpg";
import Shirt1 from "@/public/full.jpg";
import Shirt2 from "@/public/full1.jpg";
import Shirt3 from "@/public/full2.jpg";
import Shirt4 from "@/public/full3.jpg";
import Image, { StaticImageData } from "next/image";

// Define the type for products
interface Product {
  id:string;
  name: string;
  image: string | StaticImageData;
}

// Define the type for categories
interface Products {
  [category: string]: Product[];
}

const OnSale: React.FC = () => {
  const products: Products = {
    shirts: [
      {id:"1", name: "Shirt 1", image: Shirt1 },
      {id:"1", name: "Shirt 2", image: Shirt2 },
      {id:"1", name: "Shirt 3", image: Shirt3 },
      {id:"1", name: "Shirt 4", image: Shirt4 },
    ],
    jeans: [
      {id:"1", name: "Jeans 1", image: Jeans1 },
      {id:"1", name: "Jeans 2", image: Jeans2 },
      {id:"1", name: "Jeans 3", image: Jeans3 },
      {id:"1", name: "Jeans 4", image: Jeans4 },
    ],
    polos: [
      {id:"1", name: "Polo 1", image: Polo1 },
      {id:"1", name: "Polo 2", image: Polo2 },
      {id:"1", name: "Polo 3", image: Polo3 },
      {id:"1", name: "Polo 4", image: Polo4 },
    ],
    tshirts: [
      {id:"1", name: "T-shirt 1", image: Tshirt1 },
      {id:"1", name: "T-shirt 2", image: Tshirt2 },
      {id:"1", name: "T-shirt 3", image: Tshirt3 },
      {id:"1", name: "T-shirt 4", image: Tshirt4 },
    ],
  };

  // Animation variants
  const saleVariants = {
    animate: { x: [0, -100, 0], transition: { duration: 5, repeat: Infinity } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const productVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1 },
    }),
  };

  return (
    <div className="p-4 md:p-8">
      {/* Heading */}
      <h1 className="text-left text-4xl font-bold mb-8">On Sale</h1>

      {/* Product Sections */}
      {Object.keys(products).map((category) => (
        <div key={category} className="mb-12">
          {/* Category Heading with Animation */}
          <motion.h2
            className="text-2xl font-semibold mb-4 capitalize"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
          >
            {category}
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {products[category].map((product, idx) => (
              <Link href={`/product`} key={product.name}>
                {/* Unique ID for each product */}
                <motion.div
                  className="border p-4 h-90 flex flex-col items-center justify-center text-lg cursor-pointer"
                  variants={productVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={idx} // Pass the index to control delay
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="h-70 w-full object-cover mb-2"
                    priority
                    height={700}
                    width={700}
                  />
                  <p>{product.name}</p>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Slider under each category */}
          <div className="overflow-hidden relative h-16 mt-8 bg-black text-white">
            <motion.div
              className="absolute w-full h-full flex items-center justify-center text-xl font-bold"
              variants={saleVariants}
              animate="animate"
            >
              UPTO 50% SALE!
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnSale;
