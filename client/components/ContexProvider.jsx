"use client";
import useProductStore from "@/store/useProductStore";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Context = createContext();

function ContextProvider({ children }) {
  const [openProductId, setOpenProductId] = useState(false);
  const [searchDetail, setSearchDetail] = useState("");
  const [cartProduct, setCartProduct] = useState({});
  const [totalProductsInCart, setTotalProductsInCart] = useState(0);
  const [deliver_fee,setDelivery_fee] = useState(10)
  const { listProduct, ActuallProduct } = useProductStore();
  const [products, setProducts] = useState([])


  useEffect(() => {
              listProduct();
             }, []);
 useEffect(()=>{
                setProducts(ActuallProduct)
              },[ActuallProduct])
  const addToCart = async (itemId, size) => {
    if (!itemId || !size) {
      toast.error("Please select any size");
      return;
    }

    const clone = structuredClone(cartProduct);

    if (clone[itemId]) {
      if (clone[itemId][size]) {
        clone[itemId][size] += 1;
      } else {
        clone[itemId][size] = 1;
      }
    } else {
      clone[itemId] = { [size]: 1 };
    }

    setCartProduct(clone);
  };

  const getCartItems = () => {
    let total = 0;
    for (const itemId in cartProduct) {
      for (const size in cartProduct[itemId]) {
        total += cartProduct[itemId][size];
      }
    }
    setTotalProductsInCart(total);
  };

  const updateQunatity = (itemId, size, quantity) => {
    const clone = structuredClone(cartProduct);
    clone[itemId][size] = quantity;
    setCartProduct(clone);
    toast.success("Quantity updated");
  };

  const deliveryPayment = ()=>{
    let totalAmout = 0
    for(const items in cartProduct){
      for(const item in cartProduct[items]){
        if(cartProduct[items][item] > 0){

          const ProductInCartPrice = products.find(product => product._id === items)
          totalAmout += ProductInCartPrice.price * cartProduct[items][item];
        }
      }
    }
    return totalAmout;
    
  }

  useEffect(() => {
    getCartItems();
    
  }, [cartProduct]);

  return (
    <Context.Provider
      value={{
        openProductId,
        setOpenProductId,
        cartProduct,
        setCartProduct,
        addToCart,
        updateQunatity,
        totalProductsInCart,
        searchDetail,
        setSearchDetail,
        deliveryPayment,
        deliver_fee
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
