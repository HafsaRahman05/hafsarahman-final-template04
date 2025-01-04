"use client";
import React from "react";
import {useRouter} from 'next/navigation'

import Image from 'next/image'; // Import Next.js Image component
import banner1 from "../../public/banner1.png"; // Import image files
import banner2 from "../../public/banner2.png";
import banner3 from "../../public/banner3.png";
import chair4 from "../../public/chair4.png";

function FeaturedProduct() {
   const router = useRouter();
  return (
    <div className="w-full md:w-[80%] lg:w-auto mx-auto bg-white py-20">
      <h2 className="text-[#1a0b5b] text-[32px] md:text-[42px] leading-[49.22px] text-center mb-12 font-bold">
        Featured Products
      </h2>
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        
        {/* Product Card 1 */}
        <div className="relative group">
          <div className="w-[270px] h-[361px] hover:bg-[#2f1ac4] hover:text-white shadow-custom bg-[#ffffff] flex flex-col justify-center items-center overflow-hidden">
            <div className="w-[270px] flex flex-col items-center justify-between h-[236px] bg-[#f6f7fb]">
              <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
               <button className="my-4 mx-2" onClick={() => console.log("View Details clicked")} title="Add to Favorites">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="w-[17px] h-[17px] hover:w-[30px] hover:h-[30px] text-[#1389ff] hover:text-[#2f1ac4] hover:bg-[#eeeffb]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
                  </svg>
                </button>
              </div>
               <Image
                alt="Cantilever Chair"
                loading="lazy"
                width="150"
                height="150"
                decoding="async"
                className="object-cover transition-all duration-300 group-hover:scale-105"
                
                src={banner2}
                style={{ color: "transparent" }}
              />
              <div className="bottom-0 w-full text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-[94px] h-6 rounded-[2px] mb-2 text-sm bg-[#08D15F] hover:bg-green-700 transition-colors" onClick={()=>router.push("/productdetail")}>
                  View Details
                </button>
              </div>
            </div>
            <div className="text-center text-[14px] leading-4 my-4">
              <h3 className="text-[18px] leading-5 font-semibold text-red-500 hover:text-white">
                Cantilever Chair
              </h3>
              <div className="flex justify-center items-center">
                <span className="text-[#05E6B7] text-4xl">-</span>
                <span className="text-[#F701A8] text-4xl">-</span>
                <span className="text-[#00009D] text-4xl">-</span>
              </div>
              <p className="text-sm hover:text-white">Code - Y523201</p>
              <p className="">$42.00</p>
            </div>
          </div>
        </div>

        {/* Duplicate Product Card for More Products */}
        <div className="relative group">
          <div className="w-[270px] h-[361px] hover:bg-[#2f1ac4] hover:text-white shadow-custom bg-[#ffffff] flex flex-col justify-center items-center overflow-hidden">
            <div className="w-[270px] flex flex-col items-center justify-between h-[236px] bg-[#f6f7fb]">
              <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
               <button className="my-4 mx-2" onClick={() => console.log("View Details clicked")} title="Add to Favorites">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="w-[17px] h-[17px] hover:w-[30px] hover:h-[30px] text-[#1389ff] hover:text-[#2f1ac4] hover:bg-[#eeeffb]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
                  </svg>
                </button>
              </div>
               <Image
                alt="Cantilever Chair"
                loading="lazy"
                width="150"
                height="150"
                decoding="async"
                className="object-cover transition-all duration-300 group-hover:scale-105"
             
                src={banner3}
                style={{ color: "transparent" }}
              />
              <div className="bottom-0 w-full text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-[94px] h-6 rounded-[2px] mb-2 text-sm bg-[#08D15F] hover:bg-green-700 transition-colors" onClick={()=>router.push("/productdetail")}>
                  View Details
                </button>
              </div>
            </div>
            <div className="text-center text-[14px] leading-4 my-4">
              <h3 className="text-[18px] leading-5 font-semibold text-red-500 hover:text-white">
                Cantilever Chair
              </h3>
              <div className="flex justify-center items-center">
                <span className="text-[#05E6B7] text-4xl">-</span>
                <span className="text-[#F701A8] text-4xl">-</span>
                <span className="text-[#00009D] text-4xl">-</span>
              </div>
              <p className="text-sm hover:text-white">Code - Y523201</p>
              <p className="">$42.00</p>
            </div>
          </div>
        </div>


 {/* Duplicate Product Card for More Products */}
 <div className="relative group">
          <div className="w-[270px] h-[361px] hover:bg-[#2f1ac4] hover:text-white shadow-custom bg-[#ffffff] flex flex-col justify-center items-center overflow-hidden">
            <div className="w-[270px] flex flex-col items-center justify-between h-[236px] bg-[#f6f7fb]">
              <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
               <button className="my-4 mx-2" onClick={() => console.log("View Details clicked")} title="Add to Favorites">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="w-[17px] h-[17px] hover:w-[30px] hover:h-[30px] text-[#1389ff] hover:text-[#2f1ac4] hover:bg-[#eeeffb]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
                  </svg>
                </button>
              </div>
               <Image
                alt="Cantilever Chair"
                loading="lazy"
                width="150"
                height="150"
                decoding="async"
                className="object-cover transition-all duration-300 group-hover:scale-105"
               
                src={banner1}
                style={{ color: "transparent" }}
              />
              <div className="bottom-0 w-full text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-[94px] h-6 rounded-[2px] mb-2 text-sm bg-[#08D15F] hover:bg-green-700 transition-colors" onClick={()=>router.push("/productdetail")}>
                  View Details
                </button>
              </div>
            </div>
            <div className="text-center text-[14px] leading-4 my-4">
              <h3 className="text-[18px] leading-5 font-semibold text-red-500 hover:text-white">
                Cantilever Chair
              </h3>
              <div className="flex justify-center items-center">
                <span className="text-[#05E6B7] text-4xl">-</span>
                <span className="text-[#F701A8] text-4xl">-</span>
                <span className="text-[#00009D] text-4xl">-</span>
              </div>
              <p className="text-sm hover:text-white">Code - Y523201</p>
              <p className="">$42.00</p>
            </div>
          </div>
        </div>


         {/* Duplicate Product Card for More Products */}
         <div className="relative group">
          <div className="w-[270px] h-[361px] hover:bg-[#2f1ac4] hover:text-white shadow-custom bg-[#ffffff] flex flex-col justify-center items-center overflow-hidden">
            <div className="w-[270px] flex flex-col items-center justify-between h-[236px] bg-[#f6f7fb]">
              <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
               <button className="my-4 mx-2" onClick={() => console.log("View Details clicked")} title="Add to Favorites">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="w-[17px] h-[17px] hover:w-[30px] hover:h-[30px] text-[#1389ff] hover:text-[#2f1ac4] hover:bg-[#eeeffb]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
                  </svg>
                </button>
              </div>
               <Image
                alt="Cantilever Chair"
                loading="lazy"
                width="150"
                height="150"
                decoding="async"
                className="object-cover transition-all duration-300 group-hover:scale-105"
             
                src={chair4}
                style={{ color: "transparent" }}
              />
              <div className="bottom-0 w-full text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-[94px] h-6 rounded-[2px] mb-2 text-sm bg-[#08D15F] hover:bg-green-700 transition-colors" onClick={()=>router.push("/productdetail")}>
                  View Details
                </button>
              </div>
            </div>
            <div className="text-center text-[14px] leading-4 my-4">
              <h3 className="text-[18px] leading-5 font-semibold text-red-500 hover:text-white">
                Cantilever Chair
              </h3>
              <div className="flex justify-center items-center">
                <span className="text-[#05E6B7] text-4xl">-</span>
                <span className="text-[#F701A8] text-4xl">-</span>
                <span className="text-[#00009D] text-4xl">-</span>
              </div>
              <p className="text-sm hover:text-white">Code - Y523201</p>
              <p className="">$42.00</p>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
}

export default FeaturedProduct;
