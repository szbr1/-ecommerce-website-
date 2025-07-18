"use client"
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { products as allProducts } from '@/lib/products'
import ProductGrid from '@/components/product/ProductGrid'

function page() {
  const [products, setProducts] = useState([])
  const [toggleFilter, setToggleFilter] = useState(true)
  
  useEffect(()=>{
     setProducts(allProducts)
  },[])
  return (
    <div className='flex flex-col md:flex-row py-7 text-gray-700' >
     <div>

      <span onClick={()=>setToggleFilter(!toggleFilter)} className='text-xl  text-black p-3 uppercase coursor-pointer flex  items-center '>filter < ChevronRight className='md:hidden text-gray-500'/></span>
      <div className={` md:block ${toggleFilter? "hidden": "block"}`}>

         <div className='p-4   border border-gray-300 mt-5'>
          <span className='font-bold uppercase mb-1'>category </span>
          <p className='flex gap-1 text-lg '><input type="checkbox" className='w-3' value={"Men"} /> Men</p>
          <p className='flex gap-1  text-lg'><input type="checkbox" className='w-3' value={"Women"} /> Women</p>
          <p className='flex gap-1 text-lg '><input type="checkbox" className='w-3' value={"Kids"} /> Kids</p>
         </div>

          <div className='p-4  border border-gray-300 mt-5'>
          <span className='font-bold uppercase mb-1'>type </span>
          <p className='flex gap-1 text-lg '><input type="checkbox" className='w-3' value={"Topwear"} /> Topwear</p>
          <p className='flex gap-1  text-lg'><input type="checkbox" className='w-3' value={"Bottomwear"} /> Bottomwear</p>
          <p className='flex gap-1 text-lg '><input type="checkbox" className='w-3' value={"winterwear"} /> Winterwear</p>
         </div>

      </div>
        
     </div>
      
     <div className='flex-1 lg:pl-5'>
      <div className='flex justify-between items-center'>
       <p className='text-gray-600 flex justify-center items-center text-xl sm:text-3xl'>All &nbsp; <span className='text-black'>Collections &nbsp;</span>  <Image src={"/thin.png"}className="h-[4px] mt-1 w-12 md:w-28" alt="" height={200} width={100} /></p>

       <select name='Sort' value="options" className='p-3 border border-gray-300'>
        <option name="all" value="All">All</option>
        <option name="val" value="Expensive">Expensive</option>
        <option value="Cheap">Cheap</option>
       </select>
      </div>

      <div className='grid grid-col-2 lg:grid-cols-4 gap-2 mt-8'>
        {products.map((product)=>{
          return(
            <ProductGrid key={product._id} _id={product._id} name={product.name} price={product.price} image={product.image} />
          )
        })}
      </div>
     </div>
    </div>
  )
}

export default page