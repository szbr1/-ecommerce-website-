import Image from 'next/image'
import React from 'react'

function ProductGrid({name, _id, price, image}) {
  return (
    <div className='w-full flex flex-col gap-1  ' >
      <div className='w-full h-full overflow-hidden '>

    <Image src={image} alt='' height={700} width={450} className='object-cover hover:scale-125 transition-all ease-in-out '  />
      </div>
    <span className='text-gray-500'>{name}</span>
    <span className='text-black '>${price}</span>
       
    </div>
  )
}

export default ProductGrid