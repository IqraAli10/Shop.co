"use client";
import Star from "@/public/star.png"
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";


const testimonials = [
  {
    text: "Outstanding service! I received my order within two days, and the quality is top-notch. Definitely my go-to online store!",
    name: "Ayesha Malik.",
    
  },
  {
    text: "I was skeptical at first, but this site exceeded my expectations. The product was exactly as described, and customer support was very helpful!",
    name: "Ali Khan."
   
   },
    {
    
    text: "Super impressed with the packaging and fast delivery. The items were in perfect condition, and I can’t wait to shop here again!",
    name: " Fatima Noor.",
   
  },
  {
    text: "Best shopping experience ever! The site is easy to navigate, and the product range is huge. Five stars for sure!",
    name: "Sara Ahmed.",
   
  },
  {
    text: "Shopping here is always a breeze. The product descriptions are accurate, and what you see is exactly what you get. Loving it!",
    name: "Rida Kamal.",
   
  },
  {
    text: "I ordered a gift for my friend, and it was delivered in perfect condition and on time. She loved it! You guys have earned a loyal customer.",
    name: "Nida Javed.",
   
  },
];

export const Testimonials = () => {
  return <section className=" px-8 py-20 md:py-24 mt-20 ">
    <div className=" container">
        <div className="flex justify-between">
      <h2 className=" text-5xl md:text-6xl tracking-tighter font-extrabold mb-10 ">OUR HAPPY CUSTOMERS</h2>
      <div className="flex items-center gap-4 ">
      <FaArrowLeft />
      <FaArrowRight />
      </div>
     </div>
      
      
      <motion.div 
      initial={{
        translateX:"-50%",
      }}
      animate={{
        translateX:"0",
      }}
      transition={{
        duration:10,
        ease:"linear",
        repeat:Infinity
      }}

      className="flex gap-5 pr-5 flex-none -translate-x-1/2">        
      {[...testimonials, ...testimonials].map(testimonials=>(
        <div key={testimonials.name} className=" border border-white/15 p-6 md:p-10 rounded-xl 
         max-w-xs md:max-w-md flex-none">
         <div className="flex items-start gap-2 mb-2">
         <Image src={Star} alt="Star" width={30} height={30} />
         <Image src={Star} alt="Star" width={30} height={30} />
         <Image src={Star} alt="Star" width={30} height={30} />
         <Image src={Star} alt="Star" width={30} height={30} />
         <Image src={Star} alt="Star" width={30} height={30} />
            </div>
        <div className="text-2xl font-extrabold mb-4 flex items-center gap-2">{testimonials.name}
            <div className="bg-green-500 rounded-full w-[20px] h-[20px]"></div>
        </div>
          <div className="tracking-tight text-lg md:text-2xl">{testimonials.text}</div>
          <div className=" flex items-center gap-3 mt-5">
            <div className=" relative 
            inset-0  rounded-lg">
          </div>
          <div>

          </div>
          </div>
        </div>
      ))}
      </motion.div>
     
     
      </div>
  </section>;
};
