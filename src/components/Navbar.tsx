"use client"
// components/Navbar.jsx

import { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center">
                {/* Mobile Menu Icon */}
                <div className="md:hidden mr-4 cursor-pointer" onClick={toggleMenu}>
                    <FaBars className="text-black text-2xl" />
                </div>
                <Link href="/">
                <div className="text-3xl font-[900] text-black">SHOP.CO</div> 
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-4">
                <Link href="/shop" className="text-black hover:text-black transition duration-300 ease-in-out transform hover:scale-110">Shop</Link>
                <Link href="/onSale" className="text-black hover:text-black transition duration-300 ease-in-out transform hover:scale-110">On Sale</Link>
                <Link href="/newArrivals" className="text-black hover:text-black transition duration-300 ease-in-out transform hover:scale-110">New Arrivals</Link>
                <Link href="/brands" className="text-black hover:text-black transition duration-300 ease-in-out transform hover:scale-110">Brands</Link>
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center space-x-2 md:hidden">
                <FaSearch className="text-black text-2xl cursor-pointer" />
                <FaShoppingCart className="text-black text-2xl cursor-pointer" />
                <FaUserCircle className="text-black text-2xl cursor-pointer" />
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex items-center space-x-2">
                <div className="flex items-center border rounded-full overflow-hidden w-96">
                    <FaSearch className="text-black mx-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="py-1 px-2 w-full rounded-full focus:outline-none"
                    />
                </div>
                <FaShoppingCart className="text-black cursor-pointer text-xl" />
                <FaUserCircle className="text-black cursor-pointer text-xl" />
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full backdrop-blur-md z-50 flex flex-col items-center justify-center"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                >
                    {/* Close Icon */}
                    <div className="absolute top-5 right-5 cursor-pointer" onClick={toggleMenu}>
                        <FaTimes className="text-black text-2xl" />
                    </div>

                    {/* Navigation Links in Column */}
                    <div className="flex flex-col items-center space-y-6">
                        <Link href="/" onClick={toggleMenu} className="text-black text-2xl hover:text-black transition duration-300 ease-in-out transform hover:scale-110">Home</Link>
                        <Link href="/shop" onClick={toggleMenu} className="text-black text-2xl hover:text-black transition duration-300 ease-in-out transform hover:scale-110">Shop</Link>
                        <Link href="/onSale" onClick={toggleMenu} className="text-black text-2xl hover:text-black transition duration-300 ease-in-out transform hover:scale-110">On Sale</Link>
                        <Link href="/newArrivals" onClick={toggleMenu} className="text-black text-2xl hover:text-black transition duration-300 ease-in-out transform hover:scale-110">New Arrivals</Link>
                        <Link href="/brands" onClick={toggleMenu} className="text-black text-2xl hover:text-black transition duration-300 ease-in-out transform hover:scale-110">Brands</Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
