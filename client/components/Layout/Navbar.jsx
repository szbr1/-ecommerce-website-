"use client"
import {  Search, ShoppingBag, UserRound } from 'lucide-react'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import Menu from '../clientcomponents/Menu'
import { Context } from '@/components/ContexProvider'


function Navbar() {
  const {totalProductsInCart: cartCounter} = useContext(Context)

  return (
    <div className='fixed top-0 left-0 z-50 w-full bg-white'>

    <div className='flex justify-between items-center container lg:px-12 p-3 text-gray-500 border-b border-gray-200'>
       {/* logo  */}
       <Link href={"/"} className='text-black text-lg font-semibold lg:text-xl'>
       Creative <span className='text-green-400'>Stor</span>e
       </Link>
        

     {/* //ul link  */}

     <div className='hidden lg:flex justify-center items-center gap-4'>
        <Link className='hover:font-bold hover:border-green-500 hover:border-b-2' href={"/"}>Home</Link>
        <Link className='hover:font-bold  hover:border-green-600 cursor-pointer hover:border-b-2' href={"/collection"}>Collection</Link>
        <Link className='hover:font-bold hover:border-green-500 hover:border-b-2' href={"about"}>About</Link>
        <Link className='hover:font-bold hover:border-green-500 hover:border-b-2' href={"contact"}>Contact</Link>
     </div>

        
       {/* icons links  */}
       <div className='flex gap-2 md:gap-3 '>
        
        <Link href={"/profile"}>
       <UserRound className='hidden md:block size-5 hover:text-green-600 cursor-pointer' />
        </Link>
      
       
       <Search  className='size-5 hover:text-green-600 cursor-pointer'/>
       <Link href={"/cart"} className='relative'>
       <ShoppingBag   className='size-5 hover:text-green-600 cursor-pointer'/>
       <span className='absolute -bottom-1 -right-0 flex justify-center items-center text-[10px] bg-black rounded-full size-[13px] text-white'>{cartCounter}</span>
        </Link>
        {/* // import the client component  */}
       <Menu />
       </div>
    </div>
    </div>
  )
}

export default Navbar