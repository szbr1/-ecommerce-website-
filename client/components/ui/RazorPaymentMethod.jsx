'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function RazorPaymentMethod({src,method,setPaymentMethod}) {
    // const [highlight, setHighlight] = useState()
  return (
    <button onClick={()=> setPaymentMethod("razorpay")} className={`h-12 w-44  flex justify-center items-center gap-2 p-2 border-gray-200 border rounded-md ${method === "razorpay" ? "bg-black cursor-pointer border-2 border-gray" : ""}`}>  {src&&( <Image src={src} alt='' height={100} width={100} className='h-[80%] w-full object-contain' />)}</button>
  )
}

export default RazorPaymentMethod