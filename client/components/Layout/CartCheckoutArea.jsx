import Link from 'next/link'
import React from 'react'

function CartCheckoutArea() {
  return (
    <div className='lg:flex justify-end '>
        <div className='lg:w-[30rem]'>

        <hr  className='mt-8'/>
        
        <p className='font-semibold uppercase text-2xl  py-4 text-gray-400'>cart &nbsp; <span className='text-black'>Totals</span></p>

          <div className=' py-4  px-2 flex justify-between items-center'>
            <div className='text-gray-600'>Subtotal</div>
            <div>$ .00</div>
          </div> 
          <hr />
          <div className=' py-4  px-2 flex justify-between items-center'>
            <div  className='text-gray-600'>Shipping Fee</div>
            <div>$ .00</div>
          </div>
          <hr />
          <div className=' py-4  px-2 flex justify-between items-center'>
            <div className='font-bold'>Total</div>
            <div>$ .00</div>
          </div>

          <div className='flex justify-end items-center'>
          <Link href="/checkout" className="font-semibold uppercase py-3 my-8 px-3 bg-black text-white" >Proceed to checkout</Link>
          </div>
          <div className='h-44'></div>
    </div>
        </div>
  )
}

export default CartCheckoutArea