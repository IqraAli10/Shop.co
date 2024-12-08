"use client";
import { useState } from "react";
import Image from "next/image";

// Import images from public folder
import ShirtImage from "@/public/Shirt.jpg";
import CheckeredShirtImage from "@/public/Shirt1.jpg";
import JeansImage from "@/public/Jeans.jpg";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      image: ShirtImage, // Imported Image
      quantity: 1,
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      image: CheckeredShirtImage, // Imported Image
      quantity: 1,
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      image: JeansImage, // Imported Image
      quantity: 1,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const handleQuantityChange = (id: number, action: "increase" | "decrease") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left: Cart Items */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b py-4">
            <Image
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover"
              width={64}
              height={64}
            />
            <div className="flex-1">
              <h2 className="font-medium">{item.name}</h2>
              <p className="text-sm text-gray-500">
                Size: {item.size}, Color: {item.color}
              </p>
              <p className="font-bold">${item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange(item.id, "decrease")}
                className="p-1 border rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, "increase")}
                className="p-1 border rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Checkout Section */}
      <div className="w-full md:w-1/3 bg-gray-50 p-6 border rounded-lg">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount (-20%)</span>
          <span className="text-red-500">-${discount}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery Fee</span>
          <span>${deliveryFee}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Add promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-2/3 p-2 border rounded"
          />
          <button className="w-1/3 p-2 bg-black text-white rounded ml-2">Apply</button>
        </div>
        <button className="w-full mt-4 p-3 bg-black text-white rounded flex items-center justify-center gap-2">
          Go to Checkout <span>➔</span>
        </button>
      </div>
    </div>
  );
};

export default CartPage;
