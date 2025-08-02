'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function StripePaymentMethod({src,method,setPaymentMethod}) {
    // const [highlight, setHighlight] = useState()
  return (
    <button onClick={()=> setPaymentMethod("stripe")} className={`cursor-pointer h-12 w-44 flex justify-center items-center gap-2 p-2 border-gray-200 border rounded-md ${method === "stripe" ? "bg-black border-2 border-gray3" : ""}`}>  {src&&( <Image src={src} alt='' height={100} width={100} className='h-[80%] w-full object-contain' />)}</button>
  )
}

export default StripePaymentMethod