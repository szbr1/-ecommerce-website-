"use client";
import { products } from '@/lib/products';
import { Context } from '@/components/ContexProvider';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import CartCheckoutArea from '@/components/Layout/CartCheckoutArea';

function Page() {
  const { cartProduct } = useContext(Context);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const newCartData = [];

    for (const objectId in cartProduct) {
      for (const item in cartProduct[objectId]) {
        newCartData.push({
          _id: objectId,
          size: item,
          quantity: cartProduct[objectId][item],
        });
      }
    }

    setCartData(newCartData);
    console.log(newCartData);
  }, [cartProduct]);

  if (Object.keys(cartProduct).length === 0) {
    return (
      <div className='h-screen w-full bg-white flex justify-center items-center flex-col'>
        <p className='text-4xl font-semibold'>Empty Cart</p>
        <p className='text-gray-300'>Please add products</p>
      </div>
    );
  }

  return (
    <>
  <div className='mt-12 py-8' >
      <p className='text-3xl font-semibold text-gray-300 py-3'> YOUR <span className='text-black font-bold'>CART</span></p>
    {cartData.map(item => {
      const matchedProduct = products.filter(product => product._id === item._id)
      console.log("matchedProduct:" , matchedProduct)
      
      return matchedProduct.map((prod, index) => (
        
        <div className=' mt-2 ' key={index+1}>
       <hr className='py-2'/>
         <div className='flex justify-between  items-start'>
 {/* flex 1  */}
          <div className='flex gap-3'>
            <div className='h-20 w-16'>
            <Image src={prod.images[0]} height={200} width={200} className='h-full w-full object-cover' />
            </div>

            <div className='flex flex-col gap-3'>
              <p className='text-sm text-gray-500 w-[8rem] lg:w-auto truncate '>{prod.name}</p>

              <div className='flex gap-4'>
                <span>${prod.price}</span> <span className='size-8 border border-gray-300 flex justify-center items-center p-1 text-gray-400'>{item.size}</span>
              </div>

            </div>
            
             </div>
  {/* flex 2 */}
          <input type="number" className='py-2 px-3 w-20 border border-gray-600' defaultValue={item.quantity}  />

  {/* flex 3  */}
          <div className='mx-4 border border-gray-400 p-2 backdrop-blur-3xl bg-black/20 rounded-sm'>
            <Trash2 />
             </div>

         </div>
        </div>
       ))
    })}
  </div>
  <CartCheckoutArea />
          </>
  );
}

export default Page;
