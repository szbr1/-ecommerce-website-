"use client";
import { Context } from '@/components/ContexProvider';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
// import CartCheckoutArea from '@/components/Layout/CartCheckoutArea';
import Title from '@/components/ui/Title';
import useProductStore from '@/store/useProductStore';
import CartCheckoutArea from '@/components/Layout/CartCheckoutArea';


function Page() {
  const { removeFromCart, updateQuantity, cartItems } = useContext(Context);
  const[ quantity, setQuantity] = useState(0)

  const { listProduct, ActuallProduct: products } = useProductStore();
  cartItems.unshift()
  useEffect(() => {
    listProduct();

  }, []);


  
  

  return (
    <>
      <div className="mt-12 py-8">
        <Title title1={"your"} title2={"cart"} />

        {cartItems.map((item) => {
          const matchedProduct = products.filter(
            (product) => product._id === item.itemId
          );

          return matchedProduct.map((prod, index) => (
            <div className="mt-2" key={index + 1}>
              <hr className="py-2" />
              <div className="flex justify-between items-start">
                {/* Left: Product Image and Details */}
                <div className="flex gap-3  w-3/7">
                  <div className="h-20 w-16">
                    {prod.images[0] && (
                      <Image
                        src={prod.images[0]}
                        alt=""
                        height={200}
                        width={200}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-gray-500 w-[8rem] lg:w-auto truncate">
                      {prod.name}
                    </p>

                    <div className="flex gap-4">
                      <span>${prod.price}</span>
                      <span className="size-8 border border-gray-300 flex justify-center items-center p-1 text-gray-400">
                        {item.size}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle: Quantity Input */}
                <input
                  type="number"
                  min={1}
                  className="py-2 px-3 w-20 border border-gray-600"
                  onChange={(e)=> {
                    const newItemQuantity = Number(e.target.value)
                    updateQuantity(item.itemId, item.size, newItemQuantity)
                  }}
                  value={item.quantity}
                />

                {/* Right: Remove Button */}
                <div
                  onClick={() => removeFromCart(item.itemId, item.size)}
                  className="mx-4 border border-gray-100 flex gap-1 justify-center items-center p-2 backdrop-blur-3xl bg-black/5 rounded-sm cursor-pointer"
                >
                  <Trash2 className='size-3 text-gray-400' />
                  <span className='text-sm text-gray-400'>Remove</span>
                </div>
              </div>
            </div>
          ));
        })}
      </div>

      <CartCheckoutArea />
    </>
  );
}

export default Page;
