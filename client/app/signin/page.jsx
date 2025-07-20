import React from 'react'
import "./index.css"

function page() {
  return (
    <div className='h-screen w-full bg-zinc-800 flex justify-center items-center'>
      <div className='rounded-lg bg-white p-5 border-2 shadow-purple-800/50 shadow-md s border-purple-800'>
        <h1 className='text-3xl font-bold '>Price Counter </h1>
        <p className='text-black font-sm '>Write Down your values</p>
          
          <div className='flex gap-3 py-3 justify-center items-center'>
            <span>MIN</span>
            <input className="py-2 px-2 w-32 border-purple-400 rounded-md outline-none border " type="number"  />
            <span>-</span>
            <span>MAX</span>
            <input className="py-2 px-2 w-32 outline-none border border-purple-400 rounded-md " type="number"  />
          </div>

          <div className='   px-4  py-5'>
            <div className='w-full relative bg-slate-200 h-2 rounded-lg '>
               
              <div className=' absolute  left-[25%] right-[25%] z-20 top-0 h-2 rounded-lg bg-purple-500'></div>


              <input type="range" className='absolute pi appearance-none -top-1 w-full bg-none range-min left-0' min={0} max={100} />
              <input type="range" className='absolute appearance-none -top-1 w-full bg-none range-max right-0' min={0} max={100} />
            </div>
          </div>
      </div>
      

    </div>
  )
}

export default page