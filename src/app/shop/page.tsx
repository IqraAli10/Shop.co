"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward, IoIosClose } from "react-icons/io"; // Importing the arrow and close icons
import Link from "next/link"; // Import Link from Next.js
import Image, { StaticImageData } from "next/image";

// Import your images
import Tshirt from "@/public/tshirt2.jpg";
import Polo from "@/public/poloshirt1.jpg";
import Jeans from "@/public/jeans3.jpg";
import Jeans1 from "@/public/jeans2.jpg";

interface Products {
  id: number; // Unique id field added here
  name: string;
  rating: number;
  sale: boolean;
  price: string;
  oldPrice: string;
  image: string | StaticImageData;
}

// Dummy Data for products
const products: Products[] = [
  {
    id: 1, // Unique ID for T-shirt
    name: "T-Shirt",
    price: "$145",
    image: Tshirt,
    rating: 4.5,
    sale: false,
    oldPrice: "",
  },
  {
    id: 2, // Unique ID for Jeans
    name: "Jeans",
    price: "$180",
    image: Jeans,
    rating: 4.5,
    sale: false,
    oldPrice: "",
  },
  {
    id: 3, // Unique ID for Polo Shirt
    name: "Polo Shirt",
    price: "$120",
    image: Polo,
    rating: 4.0,
    sale: true,
    oldPrice: "$160",
  },
  {
    id: 4, // Unique ID for Skinny Fit Jeans
    name: "Skinny Fit Jeans",
    price: "$240",
    image: Jeans1,
    rating: 3.5,
    sale: true,
    oldPrice: "$260",
  },
  // Add more products with unique ids as needed
];

const FilterSection = ({ onClose }: { onClose: () => void }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number>(145);

  const colors = ["red", "blue", "green", "black", "gray"];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "2X-Large",
    "3X-Large",
    "4X-Large",
  ];

  return (
    <motion.div
      className="w-full p-4 border border-black border-opacity-10 rounded-lg"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onClose}
        className="text-gray-600 lg:hidden absolute top-4 right-4"
      >
        <IoIosClose className="text-2xl" />
      </button>
      <h3 className="text-2xl font-bold mb-4">Filters</h3>

      {/* Product Names */}
      <div className="mb-4 flex flex-col">
        <h4 className="font-semibold mb-2 flex items-center justify-between">
          Products <span className="text-gray-400"></span>
        </h4>
        <div className="flex flex-col">
          {products.map((product) => (
            <div className="flex justify-between items-center py-2" key={product.id}>
              <span className="font-medium">{product.name}</span>
              <IoIosArrowForward className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Price Range with Slider */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Price</h4>
        <input
          type="range"
          min="50"
          max="300"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full"
        />
        <p>Price: ${priceRange}</p>
      </div>

      {/* Colors */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Colors</h4>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border ${
                selectedColor === color
                  ? "border-blue-500 ring-2 ring-blue-500"
                  : "border-gray-400"
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border px-3 py-1 rounded-full ${
                selectedSize === size ? "bg-black text-white" : "bg-gray-400 text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Dress Style</h4>
        <select className="border p-2 w-full">
          <option>Casual</option>
          <option>Party</option>
          <option>Gym</option>
        </select>
      </div>

      {/* Apply Filter Button */}
      <button className="w-full py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border-black border transition-all duration-500 ease-in-out">
        Apply Filter
      </button>
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <motion.div
      className="w-full lg:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 col-span-full">Shop</h2>
      {products.map((product) => (
        <Link
         href={`/product`} // Dynamic route
       
        >
          <motion.div
            className="border p-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <h3 className="mt-2 font-bold">{product.name}</h3>
            <p className="text-yellow-500">{Array(Math.floor(product.rating)).fill('★').join('')}</p>
            <p className="text-gray-600">
              {product.sale ? (
                <span className="text-red-500">
                  {product.price} <del>{product.oldPrice}</del>
                </span>
              ) : (
                product.price
              )}
            </p>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};


const ProductSection: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row p-6 mb-16">
      {/* Filter Sidebar for Large Screens */}
      <div className="hidden lg:block w-1/5">
        <FilterSection onClose={() => setShowFilter(false)} />
      </div>
      {/* Filter Button for Mobile */}
      <div className="block lg:hidden mb-4">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="w-full py-2 rounded-full bg-black text-white"
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filter Sidebar for Mobile */}
      {showFilter && <FilterSection onClose={() => setShowFilter(false)} />}

      {/* Product Grid */}
      <ProductGrid />
    </section>
  );
};

export default ProductSection;
