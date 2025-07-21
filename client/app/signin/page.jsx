import Image from 'next/image'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

function Page() {
  return (
    <div className='mt-12 py-8 grid grid-cols-1 md:grid-cols-2'>
       
       <div className='flex justify-start gap-4 items-center h-screen w-full flex-col px-4  md:px-32 '>

        <h2 className='text-3xl py-8 font-semibold uppercase'>Welcome to Login</h2>
        
        
        <input type="email" required placeholder='Email'  className='p-3 text-lg px-4 border border-slate-950 rounded-full w-full'/>
        <input type="password" required placeholder='Password'  className='p-3 text-lg px-4 border border-slate-950 rounded-full w-full'/>
        {/* <div className=' text-gray-500 flex justify-end items-center w-full mr-8'>
           <div>Forget password</div>
        </div> */}

        <div className='w-full bg-black text-white font-semibold text-xl py-3 my-3 shadow-md backdrop:blur-3xl shadow-black flex justify-center items-center rounded-md'> SignIn</div>
           
           <div className=' flex w-full gap-3 justify-between'>
             <div className='flex gap-3 justify-center  border rounded-md border-slate-900 p-2 w-full items-center font-semibold text-xl'>
             <Image src={"/google.png"} height={20} width={30}  />
               &nbsp; Google
              </div>
              <div className='flex gap-3 justify-center border rounded-md border-slate-900 p-2 w-full items-center font-semibold text-xl'>
             <Image src={"/github.png"} height={20} width={30}  />
               &nbsp; Github
              </div>
           </div>
       </div>

       {/* poster area  */}
       <div>
        
       </div>
    </div>
  )
}

export default Page