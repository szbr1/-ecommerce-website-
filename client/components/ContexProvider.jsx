"use client"
import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export const Context = createContext();
function ContexProvider({children}) {

const [openProductId, setOpenProductId] = useState(false);
const [searchDetail, setSearchDetail] = useState("");
const [cartProduct, setCartProduct] = useState({});
const [totalProductsInCart, setTotalProductsInCart] = useState(0)

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

const getCartItems = ()=>{
  let totalCartProducst = 0
  for(const items in cartProduct){
    for(const item in cartProduct[items]){
      if(cartProduct[items][item]){
      totalCartProducst += cartProduct[items][item]
      setTotalProductsInCart(totalCartProducst)
      }else{
        toast.error("Invalid Size Selection")
      }
    }
  }
}


useEffect(()=>{
getCartItems()
},[cartProduct])



  return (
    <Context.Provider value={{setOpenProductId,cartProduct, addToCart, totalProductsInCart, cartProduct, setSearchDetail, openProductId, searchDetail}} >
      {children}
    </Context.Provider>
  )
}

export default ContexProvider