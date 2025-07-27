'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function PaymentMethods({src}) {
    // const [highlight, setHighlight] = useState()
  return (
    <div className=' h-12 w-44 focus:bg-green-50 flex justify-center items-center gap-2 p-2 border-gray-200 border rounded-md'>  {src&&( <Image src={src} alt='' height={100} width={100} className='h-full w-full object-contain' />)}</div>
  )
}

export default PaymentMethods