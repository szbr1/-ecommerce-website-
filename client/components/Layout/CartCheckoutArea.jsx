"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { Context } from '../ContexProvider'
import Title from '@/components/ui/Title'

function CartCheckoutArea({cls}) {
  const {totalPayment,deliver_fee } = useContext(Context)
  return (
    <div className='lg:flex justify-end '>
        <div className='lg:w-[30rem]'>

        <hr  className='mt-8'/>
        
       <Title title1={"cart"} title2={"total"} />

          <div className=' py-4  px-2 flex justify-between items-center'>
            <div className='text-gray-600'>Subtotal</div>
            <div>$ {totalPayment}.00</div>
          </div> 
          <hr />
          <div className=' py-4  px-2 flex justify-between items-center'>
            <div  className='text-gray-600'>Shipping Fee</div>
            <div>${deliver_fee} .00</div>
          </div>
          <hr />
          <div className=' py-4  px-2 flex justify-between items-center'>
            <div className='font-bold'>Total</div>
            <div>${
              totalPayment === 0 ? "": totalPayment+ deliver_fee
              } .00</div>
          </div>

          <div className='flex justify-end items-center'>
          <Link href="/place-order" className={`font-semibold uppercase py-3 my-8 px-3 bg-black text-white ${cls ? cls : ""}`} >Proceed to checkout</Link>
          </div>
          <div className='h-44'></div>
    </div>
        </div>
  )
}

export default CartCheckoutArea