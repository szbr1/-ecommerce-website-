

import FeaturedProduct from "@/components/Layout/FeaturedProduct";
import Hero from "@/components/Layout/Hero";
import PoliciesHighlight from "@/components/Layout/PoliciesHighlight";
import TopPicks from "@/components/Layout/TopPicks";
import { Prata } from "next/font/google";
import Image from "next/image";
import React from "react";



export default function Home() {

  
  
  return (
    <div className="">
    <Hero />
    
    <FeaturedProduct />

    {/* seller area  */}
   < TopPicks />

   {/* policies  */}
   <PoliciesHighlight />

    
    </div>
  );
}
