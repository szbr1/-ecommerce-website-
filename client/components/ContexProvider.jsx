"use client"
import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export const Context = createContext();
function ContexProvider({children}) {

const [openProductId, setOpenProductId] = useState(false);
const [searchDetail, setSearchDetail] = useState("");
const [cartProduct, setCartProduct] = useState({});

const addToCart = async (itemId , size)=>{

  if(!itemId || !size){
    toast.error("Please select any size")
    return
  }
  const clone = structuredClone(cartProduct);

  if(clone[itemId]){

     if(clone[itemId][size]){
      clone[itemId][size] += 1
     
     }else{
      clone[itemId][size] = 1
     }

  }else{
    clone[itemId] = {}
    clone[itemId][size] = 1
    setCartProduct(cartProduct+1)
  }

  return setCartProduct(clone)
}

useEffect(()=>{
console.log(cartProduct)
},[cartProduct])




  return (
    <Context.Provider value={{setOpenProductId,cartProduct, addToCart, cartProduct, setCartProduct, setSearchDetail, openProductId, searchDetail}} >
      {children}
    </Context.Provider>
  )
}

export default ContexProvider