"use client"
import React, { use, useEffect, useMemo, useState } from 'react'
import { products } from '@/lib/products'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { Star } from 'lucide-react';
import Link from 'next/link';
import ProductGrid from '@/components/product/ProductGrid';

function page({params}) {
  const {id} = use(params)
  const [clickImageSwither, setClickImageSwitcher] = useState()

  
  
  const FetchProduct = useMemo( ()=>{
    return products.filter(item => item._id.includes(id))
  },[id, products])

  let RealtedProduct  = useMemo(()=>{
    return products.filter(item => item.category === FetchProduct[0].category).slice(0,5)
  },[id,products])
 

  useEffect(()=>{
     setClickImageSwitcher( FetchProduct[0].images[0])
     console.log(clickImageSwither)
  }, [FetchProduct])

  
  
  
 
   
  return (

    <div className='py-8'>

      {FetchProduct?.map(item=>{

        const stars = Math.random()*500
        

        
        return (
    <div key={item._id} className='grid md:grid-cols-2 grid-cols-1'>
          <div className='flex'>
           {/* Display images  */}
           <div className='flex flex-col gap-2 '>
            {item.images.map((image,index)=>{
              return(
                <div key={index++} className='h-[4rem] lg:h-[9rem] lg:w-[8rem] w-[4rem] pr-2'>

                <Image src={image} onClick={()=>setClickImageSwitcher(image)} height={300} width={200} className='h-full cursor-pointer  w-full object-cover' />
                </div>
              )
            })}
           </div>
           {/* product details  */}
           
           <div className='h-[24rem]  overflow-hidden lg:w-[38rem] lg:h-[38rem]  w-[22rem] b-gray-700/40 backdrop-blur-lg'>
                <Image src={clickImageSwither} height={300} width={200} className='h-full w-full object-cover' />
           </div>
          </div>

          <div className='px-2 py-4'>
            <h1 className=' py-3 text-4xl font-medium text-gray-700'>{item.name}</h1>
            <div className='flex gap-1' >
              
              <FaStar className='size-5 text-yellow-500' />
              <FaStar className='size-5 text-yellow-500' />
              <FaStar className='size-5 text-yellow-500' />
              <FaStar className='size-5 text-yellow-500' />
              <Star className='size-5' />
              <span className='text-sm'>+ {stars.toString().split(".")[0]}</span>

            </div>
            <p className='font-semibold text-2xl pt-4'>${item.price}</p>

            {/* // Description  */}

           <p className='pt-3'> {item.description}</p>

            <p className='text-2xl font-semibold py-3'>Select Size</p>

            <div className='flex'>
            {item.sizes.map((size)=>{
              return (
                <button className='h-16 w-16 flex justify-center items-center  ml-2 border border-gray-200 ' key={size}>
           {size}
              </button>
             )
            })}
            </div>

            {/* Cart Button  */}
            <div className='bg-black py-3 flex ml-2 cursor-pointer justify-center items-center my-5 uppercase w-44 text-white'>add to cart</div>

            <hr className='bg-gray-300 h-[2px]'/>

            <div className='flex flex-col text-sm  py-4 text-gray-500'>
             <p>100% Orignal product.</p>
             <p>Cash on delivery is available on theis product.</p>
             <p>Easy return and exchange policy within 7 days.</p>

            </div>

            {/* // This area is remaning for reviews and Description  */}


            {/* ----------------------------- */}


           

          </div>
    </div>
        )
      })}
            <p className='text-3xl uppercase mt-22  mb-8 flex justify-center items-center lg:font-bold lg:py-5'><span className='text-gray-300'>realted &nbsp;</span> products</p>

<div className='grid grid-cols-2 gap-2 lg:grid-cols-5 w-full'>
              {
                 RealtedProduct?.map((item)=>{
                  return (
                    <Link href={`/product/${item._id}`} key={item._id}>
                  <ProductGrid image={item.images[0]} name={item.name} price={item.price} _id={item._id} />

                    </Link>
                  )
                 })
              }

            </div>

    </div>
)
}

export default page