import { Prata } from 'next/font/google';
import Image from 'next/image'
import React from 'react'


const Parata = Prata({
    subsets: ["latin"],
    weight: ["400"], // Add weights you need
    display: "swap",
    variable: "--font-prata"
  });


function Hero() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full md:px-12 ">
         <div className="flex justify-center items-center h-full flex-col text-xl ">
           <span className="flex gap-1 justify-center items-center">
             <Image src={"/thin.png"}className="h-[3px] w-44" alt="" height={200} width={100} /> Our Best
             Seller <br />
           </span>
           <span className={`text-8xl ${Parata.className} `}>Latest Arrivals</span> <br />
           <span className="flex justify-center gap-1 items-center">
             Our Best Seller
             <Image src={"/thin.png"} alt="" className="h-1  w-44" height={200} width={100}/>
           </span>
         </div>
   
         <Image src={"/header_img.png"} alt="" height={500} width={500} className="lg:w-full h-full object-contain " />
       </div>
  )
}

export default Hero