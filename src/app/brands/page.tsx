"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"; // Import the Link component
import Zara from "@/public/zarabg.jpg"; // ZARA banner
import ZaraLogo from "@/public/zara.png"; // ZARA logo
import Gucci from "@/public/guccibg.jpg"; // GUCCI banner
import GucciLogo from "@/public/gucci.png"; // GUCCI logo
import Prada from "@/public/pradabg.jpg"; // PRADA banner
import PradaLogo from "@/public/prada.png"; // PRADA logo
import Calvin from "@/public/calvinbg.jpg"; // CALVIN KLEIN banner
import CalvinLogo from "@/public/calvinn.png"; // CALVIN KLEIN logo
import Dior from "@/public/diorbg.jpg"; // DIOR banner
import DiorLogo from "@/public/dior.png"; // DIOR logo

// images
import Formal1 from "@/public/formal1.jpg";
import Formal2 from "@/public/formal1.jpg";
import Formal3 from "@/public/formal2.jpg";
import Formal4 from "@/public/formal3.jpg";
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

// Define the product structure
interface Product {
  name: string;
  image: StaticImageData | string;
}

// Define the brand structure
interface Brand {
  banner: StaticImageData | string;
  logo: StaticImageData | string;
  name: string;
  products: Product[];
}

const brands: Brand[] = [
  {
    banner: Zara,
    logo: ZaraLogo,
    name: "ZARA",
    products: [
      { name: "Product 1", image: Formal1 },
      { name: "Product 2", image: Formal2 },
      { name: "Product 3", image: Formal3 },
      { name: "Product 4", image: Formal4 },
    ],
  },
  {
    banner: Gucci,
    logo: GucciLogo,
    name: "GUCCI",
    products: [
      { name: "Product 1", image: Shirt1 },
      { name: "Product 2", image: Shirt2 },
      { name: "Product 3", image: Shirt3 },
      { name: "Product 4", image: Shirt4 },
    ],
  },
  {
    banner: Prada,
    logo: PradaLogo,
    name: "PRADA",
    products: [
      { name: "Product 1", image: Jeans1 },
      { name: "Product 2", image: Jeans2 },
      { name: "Product 3", image: Jeans3 },
      { name: "Product 4", image: Jeans4 },
    ],
  },
  {
    banner: Calvin,
    logo: CalvinLogo,
    name: "CALVIN KLEIN",
    products: [
      { name: "Product 1", image: Polo1 },
      { name: "Product 2", image: Polo2 },
      { name: "Product 3", image: Polo3 },
      { name: "Product 4", image: Polo4 },
    ],
  },
  {
    banner: Dior,
    logo: DiorLogo,
    name: "DIOR",
    products: [
      { name: "Product 1", image: Tshirt1 },
      { name: "Product 2", image: Tshirt2 },
      { name: "Product 3", image: Tshirt3 },
      { name: "Product 4", image: Tshirt4 },
    ],
  },
];

// Slider animation settings
const sliderVariants = {
  animate: { x: [0, -200, 0], transition: { duration: 5, repeat: Infinity } },
};

// Banner animation settings
const bannerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Product animation settings
const productVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Brands: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      {brands.map((brand, idx) => (
        <div key={idx} className="mb-12">
          {/* Brand Banner */}
          <motion.div
            className="relative w-full h-60 md:h-96"
            initial="hidden"
            whileInView="visible"
            variants={bannerVariants}
          >
            <Image
              src={brand.banner}
              alt={`Banner for ${brand.name}`}
              className="object-cover backdrop-blur-md w-full h-full"
              priority
              width={900}
              height={900}
            />
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
              <Image
                src={brand.logo}
                alt={`Logo of ${brand.name}`}
                className="w-32 md:w-48"
              />
            </div>
          </motion.div>

          {/* Slider */}
          <div className="overflow-hidden relative h-12 mt-4 bg-black text-white">
            <motion.div
              className="absolute w-full h-full flex items-center justify-center text-xl font-extrabold"
              variants={sliderVariants}
              animate="animate"
            >
              {brand.name}
            </motion.div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {brand.products.map((product, productIdx) => (
              <Link key={productIdx} href="/product" passHref> {/* Link to product page */}
                <motion.div
                  className="border p-4 flex flex-col items-center justify-center"
                  variants={productVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={productIdx} // Pass the index to control delay
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover mb-2" // Adjusted height
                    height={400}
                    width={400}
                    priority
                  />
                  <p>{product.name}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;
