"use client"
import Image from 'next/image';
import { products as AllProducts } from "@/lib/products";
import React, { useEffect, useState } from 'react'
import ProductGrid from '../product/ProductGrid';
import useProductStore from '@/store/useProductStore';

function TopPicks() {
      const [bestseller, setBestSeller] = useState([]);
      const { listProduct, ActuallProduct } = useProductStore();
    
      useEffect(() => {
          setBestSeller(ActuallProduct.filter(item => item.bestseller));
      }, [ActuallProduct]);

      useEffect(() => {
             listProduct();
      }, []);
  return (
    <div >
        <div className="py-8 flex justify-center items-center flex-col">
            <div className="flex uppercase justify-center gap-1 w-full  items-center text-4xl font-semibold text-gray-600">
            <Image
               src={"/thin.png"}
               alt=""
               className="h-1 text-gray-600/70  w-20"
               height={200}
               width={70}
            />
            <span className="font-normal uppercase text-gray-600/70">
                 Best
            </span>
                
             Seller
           </div>
           <span 
             className="w-full flex text-gray-600 justify-center items-center py-3 pb-6">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe recusandae quia eum architecto.
           </span>
        </div>
        
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-3 gap-1">
         
                  {bestseller.map((product) => {
                      return (
                          <ProductGrid
                            key={product._id}
                            name={product.name}
                            image={product.images[0]}
                            price={product.price}
                            _id={product._id}
                          />
                        );
                    })}
           </div>
    </div>
  )
}

export default TopPicks