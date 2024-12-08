"use client";
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Tshirt from "@/public/tshirt2.jpg";
import Polo from "@/public/poloshirt1.jpg";
import Jeans from "@/public/jeans3.jpg";
import Star from "@/public/star.png";
import Shirt from "@/public/shirt3.jpg";
import Check from "@/public/check.jpg";
import Stripped from "@/public/tshirt2.jpg";
import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    price: string;
    image: StaticImageData | string;
}

const ProductDetail: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(Tshirt);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [
    { src: Tshirt, alt: 'Thumbnail 1' },
    { src: Polo, alt: 'Thumbnail 2' },
    { src: Jeans, alt: 'Thumbnail 3' },
  ];

  const newArrivals: Product[] = [
    { id: "1", name: "T-shirt with Tape Details", price: "$120", image: Shirt },
    { id: "2", name: "Skinny Fit Jeans", price: "$240", image: Jeans },
    { id: "3", name: "Checkered Shirt", price: "$180", image: Check },
    { id: "4", name: "Sleeve Striped T-shirt", price: "$130", image: Stripped }
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const colors = [
    { name: 'black', hex: '#000000' },
    { name: 'white', hex: '#FFFFFF' },
    { name: 'blue', hex: '#0000FF' },
    { name: 'red', hex: '#FF0000' }
  ];

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="flex flex-col p-8 sm:px-14 sm:py-10 bg-gray-100 space-y-12">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
        {/* Main Product Image and Thumbnails */}
        <div className="flex flex-col lg:flex-row items-start">
          {/* Main Product Image */}
          <div className="lg:w-[400px] w-full">
            <Image src={selectedImage} alt="Product Image" width={400} height={400} className="rounded-md" />
          </div>

          {/* Thumbnails: Right of main image on desktop, below on mobile */}
          <div className="flex flex-col lg:ml-4 lg:flex-col lg:mt-0 mt-4">
            <div className="flex justify-center space-x-4 lg:space-x-0 lg:flex-col">
              {thumbnails.map((thumbnail, index) => (
                <Image
                  key={index}
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  width={80}
                  height={80}
                  className={`rounded-md cursor-pointer border-2 ${selectedImage === thumbnail.src ? 'border-gray-500' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(thumbnail.src)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Text */}
        <div className="flex flex-col lg:w-1/2 mt-8 lg:mt-0 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-2">One Life Graphic T-Shirt</h1>
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <Image src={Star} alt="Star" width={20} height={20} />
            <Image src={Star} alt="Star" width={20} height={20} />
            <Image src={Star} alt="Star" width={20} height={20} />
            <Image src={Star} alt="Star" width={20} height={20} />
            <Image src={Star} alt="Star" width={20} height={20} />
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
            <span className="text-2xl font-semibold">$260</span>
            <span className="line-through text-gray-500">$300</span>
            <span className="text-red-500 bg-red-200 font-semibold rounded-full px-2 py-1">-40%</span>
          </div>
          <p className="text-gray-700 mb-4">This graphic t-shirt is perfect for any occasion. Crafted from soft and breathable fabric, it offers superior comfort and style.</p>

          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Size:</h3>
            <div className="flex space-x-4 justify-center lg:justify-start">
              {sizes.map((size) => (
                <motion.button
                  key={size}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 border ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300'} rounded-full cursor-pointer`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Color:</h3>
            <div className="flex space-x-4 justify-center lg:justify-start">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  whileHover={{ scale: 1.05 }}
                  className={`w-8 h-8 rounded-full border ${selectedColor === color.name ? 'border-black' : 'border-gray-300'} cursor-pointer`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4 mb-4 justify-center lg:justify-start">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handleDecrement}
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                -
              </motion.button>
              <span className="text-lg">{quantity}</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handleIncrement}
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                +
              </motion.button>
            </div>
            <Link href="/cart">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
              transition={{ duration: 0.5 }}
              className="bg-black text-white px-8 py-2 rounded-full transition-all ease-in-out duration-500 hover:bg-white hover:text-black border border-black"
            >
              Add to Cart
            </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className='flex flex-col'>
        <motion.h2 className="text-3xl xl:text-4xl font-extrabold mb-8 text-center">
          NEW ARRIVALS
        </motion.h2>

        <motion.div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {newArrivals.map((product) => (
            <div key={product.id} className="text-center">
              <div className="w-[200px] h-[300px] mb-2">
                <Image src={product.image} alt={product.name} width={200} height={300} className="object-cover rounded-md" />
              </div>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-lg font-semibold">{product.price}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;