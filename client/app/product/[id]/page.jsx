"use client"
import React, { use, useContext, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { Star } from 'lucide-react';
import Link from 'next/link';
import ProductGrid from '@/components/product/ProductGrid';
import { Context } from '@/components/ContexProvider';
import useProductStore from '@/store/useProductStore';

function page({params}) {
  const {id} = use(params)
  const [clickImageSwither, setClickImageSwitcher] = useState("")
  const {addtoCart} = useContext(Context);
  const [size , setSize] = useState()
  const { listProduct, ActuallProduct } = useProductStore();
     

  const stars = useMemo(() => {
    return Math.floor(Math.random() * 500);
  }, []);

    useEffect(() => {
        listProduct();
       }, []);
  
  const FetchProduct = useMemo( ()=>{
    return ActuallProduct.filter(item => item._id.includes(id))
  },[ActuallProduct])

  let RealtedProduct  = useMemo(()=>{
    return ActuallProduct.filter(item => item.category === FetchProduct[0].category).slice(0,5)
  },[ActuallProduct])

 
  useEffect(()=>{
    if (FetchProduct[0]) {
      setClickImageSwitcher(FetchProduct[0].images[0]);
    }
     
  }, [FetchProduct])

  
  
 
   
  return (

    <div className='py-8'>

      {FetchProduct.length > 0 && FetchProduct?.map(item=>{

  
        

        
        return (
    <div key={item._id} className='grid md:grid-cols-2 grid-cols-1 mt-12'>
          <div className='flex'>
           {/* Display images  */}
           <div className='flex flex-col gap-2 '>
            {item.images.map((image,index)=>{
              return(
                <div key={index++} className='h-[4rem] mt-[2px] lg:h-[9rem] lg:w-[8rem] w-[4rem] pr-2'>

                {image&& (<Image src={image} alt={""} onClick={()=>setClickImageSwitcher(image)} height={300} width={200} className='h-full cursor-pointer  w-full object-cover' />)}
                </div>
              )
            })}
           </div>
           {/* product details  */}
           
           <div className='h-[24rem]  overflow-hidden lg:w-[35rem] lg:h-[38rem]  w-[22rem] b-gray-700/40 backdrop-blur-lg'>
              {clickImageSwither&&(  <Image src={clickImageSwither} alt={""} height={300} width={200} priority className='h-full w-full object-cover' />)}
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
            {item.sizes.map((s)=>{
              const isSelected = s === size;
              return (
                <button onClick={()=> setSize(s)}className={`h-16 w-16 flex justify-center items-center ml-2 border 
                  ${isSelected ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200'}
                  transition-all duration-200`} key={s}>
           {s}
              </button>
             )
            })}
            </div>
            {/* Cart Button  */}
            <button onClick={()=>addtoCart(item._id, size, item.price)} className='bg-black py-3 flex ml-2 cursor-pointer justify-center items-center my-5 uppercase w-44 text-white'>add to cart</button>
            

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
                    <div key={item._id}>
                      <div>

                  <ProductGrid image={item.images[0]} name={item.name} price={item.price} _id={item._id} />
                      </div>

                    </div>
                  )
                 })
              }

            </div>

    </div>
)
}

export default page