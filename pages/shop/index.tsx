"use client"
import React, { useState } from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Brands from "../../public/image.png"; 
import Image from 'next/image'; // Import Image component from Next.js
import {useRouter} from 'next/navigation'




// Sample product data
const products = [
  {
    id: 1,
    name: 'Comfy Handy Craft',
    price: 4200,
    description: "Perfect for relaxing with its ergonomic design and padded cushions.",
    imageUrl: "/banner1.png", // Update path to static folder (public)
  },
  {
    id: 2,
    name: 'Modern Wooden Chair',
    price: 7500,
    description: "A sleek and breathable office chair with adjustable features.",
    imageUrl: "/banner2.png", // Update path to static folder (public)
  },
  {
    id: 3,
    name: 'Contemporary Reclining Chair',
    price: 5550,
    description: "Unwind in style with a comfortable, adjustable reclining chair.",
    imageUrl: "/banner3.png", // Update path to static folder (public)
  },
  {
    id: 4,
    name: 'Comfy Handy Craft',
    price: 12050,
    description: "Add charm to your space with this cozy, wooden-legged accent chair.",
    imageUrl: "/chair4.png", // Update path to static folder (public)
  },
  {
    id: 5,
    name: 'Modern Wooden Chair',
    price: 25000,
    description: "Game in comfort with adjustable features and extra lumbar support.",
    imageUrl: "/chair5.png", // Update path to static folder (public)
  },
  {
    id: 6,
    name: 'Elegant Dining Chair Set',
    price: 1200,
    description: "A stylish and durable set of chairs to elevate your dining experience.",
    imageUrl: "/chair6.png", // Update path to static folder (public)
  },
];

const Shop: React.FC = () => {
  



     const [perPage, setPerPage] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>('best-match');
    const [viewMode, setViewMode] = useState("grid"); // State to manage view mode

  
    const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPerPage(Number(event.target.value));
    };
  
    const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortBy(event.target.value);
    };
   const router = useRouter();

  // Handle click event to navigate to the Cart page
  

  return (
    <div className="bg-[#F4F7FE]">
       <Navbar />

       <div className="bg-gray-200 py-8">
            <div className="max-w-[1200px] mx-auto px-4">
              <h1 className="text-3xl font-bold text-[#101750] mb-2">Shop Grid</h1>
              <p className="text-sm text-black">
                Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">Shop Grid</span>
              </p>
            </div>
          </div>
          <section className="p-4 sm:p-6 md:p-8">
      <div className="mb-4 md:ml-[330px]">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Ecommerce Accessories &amp; Fashion item
        </h1>
        <p className="text-sm md:text-base text-gray-500">About 9,620 results (0.02 seconds)</p>
      </div>
      <div className="flex flex-wrap items-center md:justify-evenly gap-4">
        {/* Controls for Per Page and Sort By */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="perPage" className="text-gray-700 text-sm md:text-base">
              Per Page:
            </label>
            <select
              id="perPage"
              value={perPage}
              onChange={handlePerPageChange}
              className="border border-gray-300 rounded-md p-2 text-gray-700 md:text-base "
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="text-gray-700 text-sm md:text-base">
              Sort By:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={handleSortByChange}
              className="border border-gray-300 rounded-md p-2 text-gray-700 md:text-base "
            >
              <option value="best-match">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
        </div>
        {/* View Mode Buttons */}
        <div className="flex items-center gap-4">
          <label htmlFor="view" className="text-gray-700 text-sm md:text-base">
            View:
          </label>
          <button className={`px-4 py-2 border rounded-md ${
            viewMode === "grid" ? "bg-[#FB2E86] text-white" : "bg-white text-[#FB2E86]"
          }`}
          onClick={() => setViewMode("grid")}
        >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M204 240H68a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36zm240 0H308a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36zM204 480H68a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36zm240 0H308a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36z"></path>
            </svg>
          </button>
          <button
            className={`px-4 py-2 border rounded-md ${
              viewMode === "list" ? "bg-[#FB2E86] text-white" : "bg-white text-[#FB2E86]"
            }`}
            onClick={() => setViewMode("list")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
            </svg>
          </button>
          <input
          type="input"
          placeholder=""
          className="border w-[80%] border-gray-300 rounded-md p-2 text-gray-700 md:text-base "
        />
        </div>
      </div>

    

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-[250px] relative">
                {/* Use Image component for optimized image loading */}
                <Image src={product.imageUrl} alt={product.name} layout="fill" objectFit="contain" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl text-[#151875]">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold text-[#151875]">{product.price}</span>
                  <button
                    className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors"
                    // Attach the click handler
                    onClick={()=>router.push("/cart")}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          )
          )
          }
        </div>
      </section>

      {/* Brand Logos Section */}
      <div className="w-full py-12">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <Image
            alt="Logos"
            src={Brands}// Update path to static folder (public)
            width={800}
            height={100}
            objectFit="contain"
          />
        </div>
      </div>
      </section>
      <Footer />
    </div>
  
  );
};

export default Shop;
