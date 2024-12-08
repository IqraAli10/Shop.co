'use client';
import { motion } from "framer-motion";
import BgPic from "@/public/Bgpic.png";
import Image from "next/image";
import Prada from "@/public/prada.png";
import Gucci from "@/public/gucci.png";
import Dior from "@/public/dior.png";
import Calvin from "@/public/calvinn.png";

const Hero = () => {
  // Number animation variants
  const numberAnimation = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  return (
    <section className="relative h-full md:mt-0 flex flex-col md:flex-row items-center justify-center bg-[#F3F0F1]">
      {/* Left Side - Text Content */}
      <div className="relative z-10 max-w-lg gap-32 px-6 lg:px-12 md:text-left">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-[1000] mt-8 mb-4">
            FIND CLOTHES THAT <span>MATCHES YOUR STYLE</span>
          </h1>
          <p className="text-base md:text-lg mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-full sm:w-[150px] rounded-full px-6 py-3 bg-black text-white hover:bg-transparent border border-black hover:text-black transition-all ease-in-out duration-700">
            Shop Now
          </button>
        </motion.div>

        {/* Animated Numbers */}
        <div className="flex space-x-8 justify-center md:justify-start mt-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={numberAnimation}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">200+</h2>
            <p className="text-sm md:text-base">International Brands</p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={numberAnimation}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">2,000+</h2>
            <p className="text-sm md:text-base">High-Quality Products</p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={numberAnimation}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">30,000+</h2>
            <p className="text-sm md:text-base">Happy Customers</p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Image */}
      <motion.div
        className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center mt-8 md:mt-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={BgPic}
          alt="Background"
          className="object-cover h-full w-full"
          priority
          width={1200}
          height={600}
        />
      </motion.div>
    </section>
  );
};

// Brand Slider Component
const BrandSlider = () => {
  return (
    <section className="relative bg-black h-14 sm:h-28 ">
      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex space-x-8 md:space-x-24"
          initial={{ x: "100%" }} // Start from the right
          animate={{ x: "-100%" }} // Move to the left
          transition={{
            repeat: Infinity,
            repeatType: "loop", // Infinite looping
            duration: 20, // Speed of the sliding effect (you can adjust this)
            ease: "linear", // Smooth, continuous scrolling
          }}
        >
          {/* Brand Logos */}
          {[Dior, Prada, Gucci, Calvin, Dior, Prada, Gucci, Calvin, Dior, Prada, Gucci, Calvin].map(
            (brand, index) => (
              <Image
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-16 w-16 sm:w-14 sm:h-14 md:h-28 md:w-28"
                width={900}
                height={900}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <Hero />
      {/* Brand Slider Below the Hero Section */}
      <BrandSlider />
    </main>
  );
}
