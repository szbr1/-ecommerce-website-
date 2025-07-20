"use client";

import React, { useEffect, useState } from "react";
import { products } from "@/lib/products";
 const category = ["men"];


function page() {

  const [search, setSearch] = useState("");
  const [dummy, setDummy] = useState([]);

    useEffect(() => {
      togglest();
      // console.log("valj", dummy);
    }, [search]);

    // this will create a search query
    const searchProduct = (e) => {
      setSearch(e.target.value);
    };
    const togglest = ()=>{
      if(category.length > 0){
       const result = products.filter(item => category.includes(item.category))
       console.log("result", result);
      }
    }

  

  return (
    <div className="flex justify-center items-center h-screen w-full flex-col gap-12 ">
      <div className="overflow-auto h-44 border border-gray-300 p-1">
        {dummy.map((item) => (
          <div className="px-3 " key={item._id}>
            {item.name}
          </div>
        ))}
      </div>
      <from className="h-auto border border-gray-300 p-1">
        <input
          type="text"
          onChange={searchProduct}
          className="px-4 py-3 w-96 bg-black text-white outline-none cursor-pointer  "
        />
        <button
          type={"submit"}
          className="px-5 py-3 bg-white text-whit border-r border-gray-300 cursor-pointer"
        >
          Submit
        </button>
      </from>
    </div>
  );
}

export default page;
