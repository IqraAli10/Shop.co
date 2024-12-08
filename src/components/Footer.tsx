import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa'; // Importing social icons
import Master from "@/public/mastercard.png";
import Paypal from "@/public/paypal.png";
import Skrill from "@/public/skrill.png";
import Visa from "@/public/visa.png";
import Discover from "@/public/discover.png";

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 text-sm bg-gray-100 mt-24'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-5'>
          <Link href="/">
            <div className='font-[900] text-4xl tracking-wide'>  
              SHOP.CO    
            </div>
          </Link>
          <p>Prime Vault Store offers carefully selected, high-quality products that blend style and durability.</p>
          <div className="flex gap-4">
            <FaFacebookF className='w-[25px] h-[25px]' />
            <FaInstagram className='w-[25px] h-[25px]' />
            <FaYoutube className='w-[25px] h-[25px]' />
            <FaPinterestP className='w-[25px] h-[25px]' />
          </div>
        </div>

        {/* CENTER */}
        <div className='w-1/2 hidden lg:flex justify-between gap-8'>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg mb-2'>COMPANY</h1> {/* Added margin-bottom */}
            <div className='flex flex-col gap-2'> {/* Adjusted gap */}
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className="font-medium text-lg mb-2">HELP</h1> {/* Added margin-bottom */}
            <div className="flex flex-col gap-2"> {/* Adjusted gap */}
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className="font-medium text-lg mb-2">FAQs</h1> {/* Added margin-bottom */}
            <div className="flex flex-col gap-2"> {/* Adjusted gap */}
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className="font-medium text-lg mb-2">RESOURCES</h1> {/* Added margin-bottom */}
            <div className="flex flex-col gap-2"> {/* Adjusted gap */}
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>

        {/* Mobile View with Grid */}
        <div className='grid grid-cols-2 gap-4 lg:hidden'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-lg mb-2'>COMPANY</h1> {/* Added margin-bottom */}
            <Link href="" className="mb-2">About Us</Link> {/* Added margin-bottom */}
            <Link href="" className="mb-2">Careers</Link> {/* Added margin-bottom */}
            <Link href="" className="mb-2">Affiliates</Link> {/* Added margin-bottom */}
            <Link href="">Contact Us</Link>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-bold text-lg mb-2'>HELP</h1> {/* Added margin-bottom */}
            <Link href="" className="mb-2">My Account</Link> {/* Added margin-bottom */}
            <Link href="" className="mb-2">Find a Store</Link> {/* Added margin-bottom */}
            <Link href="" className="mb-2">Legal & Privacy</Link> {/* Added margin-bottom */}
            <Link href="">Gift Card</Link>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-bold text-lg mb-2'>FAQs</h1> {/* Added margin-bottom */}
            <Link href="" className="mb-2">My Account</Link> {/* Added margin-bottom */}
            <Link href="" className="mb-2">Find a Store</Link> {/* Added margin-bottom */}
            <Link href="" className="mb-2">Legal & Privacy</Link> {/* Added margin-bottom */}
            <Link href="">Gift Card</Link>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-bold text-lg mb-2'>RESOURCES</h1> {/* Added margin-bottom */}
            <Link href="" className="mb-2">My Account</Link> {/* Added margin-bottom */}
            <Link href="" className="mb-2">Find a Store</Link> {/* Added margin-bottom */}
            <Link href="" className="mb-2">Legal & Privacy</Link> {/* Added margin-bottom */}
            <Link href="">Gift Card</Link>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16 border-t-2 border-black border-opacity-10'>
        <div className="mt-2">© 2024 PrimeVault &copy;ALL RIGHTS RESERVED</div>
        <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex justify-between gap-4 mt-2 ">
          <Image src={Visa} alt="" width={40} height={20} />
          <Image src={Discover} alt="" width={40} height={20} />
          <Image src={Master} alt="" width={40} height={20} />
          <Image src={Paypal} alt="" width={40} height={20} />
          <Image src={Skrill} alt="" width={40} height={20} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
