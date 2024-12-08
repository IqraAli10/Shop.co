"use client"
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white p-8 rounded-xl w-full max-w-5xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h3 className="text-3xl lg:text-4xl font-extrabold mb-4 lg:mb-0">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h3>
        <div className="flex flex-col items-center w-full lg:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 mb-4 rounded-full text-black w-full lg:w-72"
          />
          <button className="bg-white text-black hover:tracking-wider transition-all ease-in-out duration-500 text-sm font-bold px-6 py-2 rounded-full w-full lg:w-72">
            SUBSCRIBE TO NEWS LETTER
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
