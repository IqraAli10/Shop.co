'use client'
import { motion } from "framer-motion";
import Party from "@/public/Party.jpg";
import Gym from "@/public/Gym.jpg";
import Casual from "@/public/casual.png";
import Formal from "@/public/Formal.jpg";

import Image from "next/image";

const Categories = () => {
  // Animation variants for images
  const imageVariantsLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const imageVariantsRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full sm:w-[1250px] mx-auto justify-center items-center py-16 px-8 md:px-16  bg-gray-200 mt-20 rounded-2xl">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
        BROWSE BY DRESS STYLE
      </h2>

      {/* Responsive Flexbox for Mobile & Grid for larger screens */}
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-4">

        {/* First Column */}
        <motion.div
          className="flex flex-col items-center md:items-start gap-2"
          initial="hidden"
          animate="visible"
          variants={imageVariantsLeft}
        >
          {/* Casual Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg 
            w-full h-[200px] sm:h-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]">
            <Image
              src={Casual}
              alt="Casual"
              className="object-cover w-full h-full"
              width={450}
              height={300}
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 text-white">
              Casual
            </div>
          </div>

          {/* Formal Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg 
            w-full h-[150px] sm:h-[250px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
            <Image
              src={Formal}
              alt="Formal"
              className="object-cover w-full h-full"
              width={700}
              height={300}
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 text-white">
              Formal
            </div>
          </div>
        </motion.div>

        {/* Second Column */}
        <motion.div
          className="flex flex-col items-center md:items-end gap-2"
          initial="hidden"
          animate="visible"
          variants={imageVariantsRight}
        >
          {/* Party Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg 
            w-full h-[150px] sm:h-[250px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
            <Image
              src={Party}
              alt="Party"
              className="object-cover w-full h-full"
              width={700}
              height={300}
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 text-white">
              Party
            </div>
          </div>

          {/* Gym Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg 
            w-full h-[200px] sm:h-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]">
            <Image
              src={Gym}
              alt="Gym"
              className="object-cover w-full h-full"
              width={450}
              height={300}
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 text-white">
              Gym
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
