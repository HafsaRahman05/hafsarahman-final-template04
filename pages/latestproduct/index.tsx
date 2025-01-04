// components/LatestProducts.js
import Image from 'next/image'; // Import next/image for optimized image handling
import {useRouter} from 'next/navigation'
const products = [
  {
    id: 1,
    name: 'Comfy Handy Craft',
    price: 42.0,
    originalPrice: 65.0,
    imageUrl: '/banner1.png', // Use the /public folder path
  },
  {
    id: 2,
    name: 'Modern Wooden Chair',
    price: 75.0,
    originalPrice: 99.0,
    imageUrl: '/banner2.png',
  },
  {
    id: 3,
    name: 'Elegant Table Lamp',
    price: 55.0,
    originalPrice: 80.0,
    imageUrl: '/banner3.png',
  },
  {
    id: 4,
    name: 'Comfy Handy Craft',
    price: 42.0,
    originalPrice: 65.0,
    imageUrl: '/chair4.png',
  },
  {
    id: 5,
    name: 'Modern Wooden Chair',
    price: 75.0,
    originalPrice: 99.0,
    imageUrl: '/chair5.png',
  },
  {
    id: 6,
    name: 'Elegant Table Lamp',
    price: 55.0,
    originalPrice: 80.0,
    imageUrl: '/chair6.png',
  },
];

const LatestProducts = () => {
  const router = useRouter(); // Initialize useRouter for navigation
  return (
    <div className="w-full bg-white py-20">
      <div className="w-full">
        <h2 className="text-[#3F509E] text-4xl text-center font-bold mb-8">
          Latest Products
        </h2>

        <div className="flex justify-center space-x-2 md:space-x-8 mb-16">
          {['New Arrival', 'Best Seller', 'Featured', 'Special Offers'].map(
            (category) => (
              <button
                key={category}
                className="text-[#3F509E] text-sm md:text-lg font-medium relative group hover:text-red-600"
              >
                {category}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            )
          )}
        </div>

        <div className="w-full md:w-[80%] lg:w-[1177px] max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {products.map((product) => (
            <div key={product.id} className="w-[360px] h-[306px] bg-white relative group">
              <div className="w-[360px] h-[270px] bg-[#f7f7f7] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-300 group-hover:bg-white">
                <span className="opacity-0 group-hover:opacity-100 absolute top-4 left-4 bg-[#3F509E] text-white text-sm px-3 py-1 -rotate-[30deg] rounded">
                  Sale
                </span>

                <div className="absolute bottom-6 left-4 flex items-center justify-center flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow group-hover:bg-[#eeeffb]" onClick={()=>router.push("/cart")} title="Add to Favorites">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-[#3F509E]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8" cy="21" r="1"></circle>
                      <circle cx="19" cy="21" r="1"></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                  </button>
                  <button className="bg-white p-2" onClick={() => console.log("View Details clicked")} title="Add to Favorites">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-[#3F509E]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144 39.4-7.1 79.7 1.9 111.8 24.5 9 6.4 17.4 13.8 25 22.3 4.2-4.8 8.7-9.2 13.5-13.3 3.7-3.2 7.5-6.2 11.5-9 39.4-7.1 79.7 1.9 111.8 24.5 69.2 13.2 119.2 73.7 119.2 144v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9z"></path>
                    </svg>
                  </button>
                </div>

                <Image
                  alt={product.name}
                  loading="lazy"
                  width={235}
                  height={235}
                  className="object-contain"
                  src={product.imageUrl}
                />
              </div>

              <div className="mt-2">
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#3F509E]">
                    {product.name}
                  </h3>
                  <div>
                    <span className="text-gray-800 mx-4">${product.price.toFixed(2)}</span>
                    <span className="text-red-600 font-medium line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
