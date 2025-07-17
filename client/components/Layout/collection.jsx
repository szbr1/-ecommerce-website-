"use client";

import React, { useEffect, useState } from "react";
import { products as AllProducts } from "@/lib/products";
import Image from "next/image";
import ProductGrid from "@/components/product/ProductGrid";
import { Coins, HeadphonesIcon, Headset, MapPinCheck } from "lucide-react";

function Collection() {
    // created hook to get specific amount of products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // using slice we get only the top 10 products
    setProducts(AllProducts.slice(0, 10));
    
  }, []);
  return (
    
    <div className="h-full w-full p-2 lg:px-12">
      <div className="flex justify-center gap-1 w-full  items-center text-4xl font-semibold text-gray-600">
        <Image
          src={"/thin.png"}
          alt=""
          className="h-1 text-gray-600/70  w-20"
          height={200}
          width={70}
        />
        <span className="font-normal text-gray-600/70">
        Latest
        </span>
            
        Collection
      </div>
      <span  className="w-full flex text-gray-600 justify-center items-center py-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe recusandae quia eum architecto.
      </span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-3 gap-1">

      {products.map((product) => {
          return (
              <ProductGrid
              key={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
              _id={product._id}
              />
            );
        })}
        </div>


     
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-16 gap-6 ">

        <div className="flex justify-center flex-col items-center">
            <Coins className="size-10 lg:size-14" />
            <h3 className="text-black">Easy Exhchange Policy</h3>
            <span className="text-gray-500">We offer hassle free exchange policy</span>
        </div>

        <div className="flex justify-center flex-col items-center">
            <MapPinCheck className="size-10 lg:size-14" />
            <h3 className="text-black">7 Day Return Policy </h3>
            <span className="text-gray-500">We provide 7 days free return policy</span>
        </div>

        <div className="flex justify-center flex-col items-center">
            <Headset className="size-10 lg:size-14" />
            <h3 className="text-black">Best customer support</h3>
            <span className="text-gray-500">we provide 24/7 customer support</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Collection
