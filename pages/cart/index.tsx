"use client"; // Marks this as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import Footer from "../Footer";
import Navbar from "../navbar";
import Image from "next/image";
import banner1 from "../../public/banner1.png";
import banner2 from "../../public/banner2.png";
import brands from "../../public/image.png";



interface ShippingCharges {
  [key: string]: { [key: string]: number };
}

const CartPage = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Comfy Handy Craft",
      price: 4200,
      description: "Perfect for relaxing with its ergonomic design and padded cushions.",
      quantity: 1,
      imageUrl: banner1,
    },
    {
      id: 2,
      name: "Modern Wooden Chair",
      price: 7500,
      description: "A sleek and breathable office chair with adjustable features.",
      quantity: 1,
      imageUrl: banner2,
    },
  ]);

  const shippingCharges: ShippingCharges = {
    Karachi: {
      "74400": 100,
      "74401": 120,
      "74402": 140,
      "74403": 150,
    },
    Lahore: {
      "54000": 200,
      "54010": 220,
      "54020": 250,
      "54030": 300,
    },
    Islamabad: {
      "44000": 180,
      "44010": 200,
      "44020": 220,
      "44030": 250,
    },
    Faisalabad: {
      "38000": 150,
      "38010": 170,
      "38020": 190,
      "38030": 210,
    },
    Quetta: {
      "87300": 300,
      "87310": 320,
      "87320": 350,
      "87330": 400,
    },
    Peshawar: {
      "25000": 250,
      "25010": 270,
      "25020": 290,
      "25030": 310,
    },
    Multan: {
      "60000": 220,
      "60010": 240,
      "60020": 260,
      "60030": 280,
    },
    Hyderabad: {
      "71000": 180,
      "71010": 200,
      "71020": 220,
      "71030": 240,
    },
  };
  

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPostalCode, setSelectedPostalCode] = useState("");
  const [shippingCharge, setShippingCharge] = useState<number>(0);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id: number, value: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    router.push("/confirmation");
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleShipping = () => {
    if (selectedCity && selectedPostalCode) {
      const cityCharges = shippingCharges[selectedCity];
      if (cityCharges) {
        const charge = cityCharges[selectedPostalCode];
        if (charge) {
          setShippingCharge(charge);
          alert(`Shipping charge for ${selectedCity}, Postal Code: ${selectedPostalCode} is $${charge}`);
        } else {
          alert("No shipping charge available for this postal code.");
        }
      } else {
        alert("City not found in the shipping charges.");
      }
    } else {
      alert("Please select both city and postal code to calculate shipping.");
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-white lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 overflow-x-scroll">
          <table className="w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Product</th>
      <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Product Name</th>
      <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Price</th>
      <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Quantity</th>
      <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Total</th>
      <th className="p-4 border"></th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((item) => (
      <tr key={item.id} className="text-center">
        <td className="p-4 border flex items-center space-x-4">
          <Image
            alt={item.name}
            className="w-16 h-auto rounded-lg object-cover"
            src={item.imageUrl}
            layout="intrinsic"
          />
        </td>
        <td className="p-4 border text-[#1D3178] text-xs sm:text-base">
          <p className="font-semibold">{item.name}</p>
        </td>
        <td className="p-4 border text-[#1D3178] text-xs sm:text-base">
          ${item.price.toFixed(2)}
        </td>
        <td className="p-4 border">
          <input
            className="w-16 px-2 py-1 border rounded-md text-black text-xs sm:text-sm"
            min="1"
            type="number"
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(item.id, parseInt(e.target.value) || 1)
            }
          />
        </td>
        <td className="p-4 border text-[#1D3178] text-xs sm:text-base">
          ${(item.price * item.quantity).toFixed(2)}
        </td>
        <td className="p-4 border">
          <button
            className="text-red-500 text-xs sm:text-sm"
            onClick={() => handleRemoveItem(item.id)}
          >
            Remove
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-xs sm:text-sm">
              Update Cart
            </button>
            <button
              className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-xs sm:text-sm"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-md shadow-md flex flex-col justify-between">
          <div>
            <h2 className="lg:text-xl font-bold mb-4 text-[#1D3178] text-xs sm:text-xl">Cart Totals</h2>
            <p className="flex justify-between mb-2 text-[#1D3178] text-xs sm:text-sm">
              <span>Subtotal:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-4 text-[#1D3178] text-xs sm:text-sm">
              <span>Shipping:</span>
              <span>${shippingCharge.toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-4 text-[#1D3178] text-xs sm:text-sm">
              <span>Totals:</span>
              <span>${(calculateTotal() + shippingCharge).toFixed(2)}</span>
            </p>
            <button
              className="w-full py-2 bg-[#19D16F] text-white rounded-md text-xs sm:text-sm"
              onClick={handleCheckout}
            >
              Proceed To Checkout
            </button>
          </div>
          <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h2 className="lg:text-xl font-bold mb-4 text-[#1D3178] text-xs sm:text-xl">Calculate Shipping</h2>
            <input
              value="Pakistan"
              className="w-full mb-3 px-3 py-2 border rounded-md text-black text-xs sm:text-sm"
              type="text"
              disabled
            />
            <select
              className="w-full mb-3 px-3 py-2 border rounded-md text-black text-xs sm:text-sm"
              onChange={(e) => setSelectedCity(e.target.value)}
              value={selectedCity}
            >
              <option value="">Select City</option>
              {Object.keys(shippingCharges).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <select
              className="w-full mb-4 px-3 py-2 border text-black rounded-md text-xs sm:text-sm"
              onChange={(e) => setSelectedPostalCode(e.target.value)}
              value={selectedPostalCode}
              disabled={!selectedCity}
            >
              <option value="">Select Postal Code</option>
              {selectedCity &&
                Object.keys(shippingCharges[selectedCity]).map((postalCode) => (
                  <option key={postalCode} value={postalCode}>
                    {postalCode}
                  </option>
                ))}
            </select>
            <button
              className="w-full py-2 bg-[#FB2E86] text-white rounded-md text-xs sm:text-sm"
              onClick={handleShipping}
            >
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
      <div className="w-full py-12 bg-white">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <Image
            alt="Brands"
            src={brands}
            width={800}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
