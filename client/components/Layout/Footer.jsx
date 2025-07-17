import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='md:px-12 p-2'>
       
       <div className='flex justify-center items-center flex-col gap-3 mt-8 pb-20'>
        <h3 className='text-4xl font-semibold'>Subscribe now & get 20% off</h3>
        <span className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis.</span>
        <form className='flex border lg:w-[40%]'>

        <input type="text" className='h-full cursor-pointer w-full outline-none py-3 px-2' placeholder='Enter your email' />
        <button type="submit" className="h-full py-3 w-44 cursor-pointer flex justify-center items-center bg-black text-white uppercase">subscribe</button>
        </form>
       </div>

     {/* // Bottom Actuall Footer  */}
    <div className='grid md:grid-cols-4 grid-cols-1  gap-3'>
        <div className='md:col-span-2 flex flex-col justify-start items-start' >
        <Link href={"/"} className='text-black text-lg mb-3 font-semibold lg:text-xl'>
       Creative <span className='text-green-400'>Stor</span>e
       </Link>

       <span className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, assumenda eum <br /> nostrum dolore perspiciatis, quidem soluta modi explicabo quas id in magni repellendus <br className='hidden lg:block' />quaerat iste necessitatibus sint facilis rerum labore.</span>
        </div>

        <div className='md:col-span-1 flex flex-col justify-start items-start lg:items-center'>
            <h2 className='text-black font-bold mb-3 text-lg uppercase cursor-pointer'>company</h2>
            <Link href={"/"} className='text-gray-500 text-sm cursor-pointer'>Home</Link>
            <Link href={"/about"} className='text-gray-500 text-sm cursor-pointer'>About us</Link>
            <Link href={"/tracking"} className='text-gray-500 text-sm cursor-pointer'>Delivery</Link>
            <Link href={"/terms-policies"} className='text-gray-500 text-sm cursor-pointer'>Privacy policy</Link>
        </div>


        <div className='md:col-span-1 flex flex-col justify-start items-start lg:items-center'>
        <h2 className='text-black mb-3 font-bold text-lg uppercase'>company</h2>
          <span className='text-green-700 text-sm'>+92-317-9393-471</span>
          <span className='text-gray-500 text-sm'>szb8480@gmail.com</span>
        </div>
    </div>

    <div className='py-5 mb-3 mt-4 border-y border-gray-200 flex justify-center items-center w-full'>Copyright 2025@ forever.com - All Right Reserved</div>
    </div>
  )
}

export default Footer