import CartCheckoutArea from '@/components/Layout/CartCheckoutArea'
import PaymentMethods from '@/components/ui/PaymentMethods'
import Title from '@/components/ui/Title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 py-12 gap-8 mt-8 h-screen'>
       <div >
       <Title title1={"Delivery"} title2={"information"} size={"text-xl md:text-3xl px-3"} />

        <div className=' lg:w-[600px] flex px-6 gap-4  flex-col justify-center  items-start'>
        {/* <p className='w-full flex justify-start'> */}

        {/* </p> */}

        <div className='flex justify-center gap-3  w-full mt-8 '>
          <input required type="text" className='p-2 outline-none border-gray-200 border rounded-md w-full' placeholder='First name' />
          <input required type="text" className='p-2 outline-none border-gray-200 border rounded-md w-full' placeholder='Lastname' />
        </div>
        
        <input type="email" required className='w-full p-2 outline-none border border-gray-200 rounded-md' placeholder='Email address' />
        <input type="text" required className='w-full p-2 outline-none border border-gray-200 rounded-md' placeholder='Street' />

        <div className='flex justify-center gap-3 w-full '>
          <input required type="text" className='p-2 outline-none border-gray-200 border rounded-md w-full' placeholder='City' />
          <input required type="text" className='p-2 outline-none border-gray-200 border rounded-md w-full' placeholder='State' />
        </div>

        <div className='flex justify-center gap-3 w-full '>
          <input required type="text" className='p-2 outline-none border-gray-200 border rounded-md w-full' placeholder='Zip code' />
          <input required type="text" className='p-2 outline-none border-gray-200 border rounded-md w-full' placeholder='Country' />
        </div>

        <input type="number"  required className='w-full p-2 outline-none border border-gray-200 rounded-md' placeholder='Phone' />
     
        <div className='w-full'>
          <div className='flex justify-center items-center gap-3'>

        <PaymentMethods src={"/razorpay.png"} />
        <PaymentMethods src={"/stripe.png"} />
        {/* <PaymentMethods  /> */}
          </div>
        </div>
        <Link href={"/place-order/orders"} className='w-full h-12 flex justify-center items-center bg-black text-white uppercase font-mediums text-xl '>procced</Link>

     
       </div>
        </div>

 {/* / / this is the total amount to paid  */}
        <div className='mt-52' >
          <CartCheckoutArea cls={"hidden"} />
        </div>
        
    </div>
  )
}

export default page