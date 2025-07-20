
import Image from 'next/image'
import React, { useContext } from 'react'
import { Context } from '../ContexProvider'
import Link from 'next/link'

function ProductGrid({name, _id, price, image}) {
  
      
  return (
    <Link href={`/product/${_id}`}  className='w-full flex flex-col gap-1  ' >
      <div className='w-full h-full overflow-hidden rounded-xl '>

    <Image src={image} alt='' height={700} width={500} className='h-full rounded-xl object-cover hover:scale-125 transition-all ease-in-out '  />
      </div>
    <span className='text-gray-500'>{name}</span>
    <span className='text-black '>${price}</span>
       
    </Link>
  )
}

export default ProductGrid