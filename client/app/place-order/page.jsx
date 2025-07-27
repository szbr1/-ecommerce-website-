"use client"

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/ui/Title";
import PaymentMethods from "@/components/ui/PaymentMethods";
import CartCheckoutArea from "@/components/Layout/CartCheckoutArea";
import { BusFront, BusIcon } from "lucide-react";
import { Context } from "@/components/ContexProvider";
import useProductStore from "@/store/useProductStore";

function Page() {
    const {cartProduct} = useContext(Context);
    const {listProduct, ActuallProduct} = useProductStore()

    useEffect(()=>{
      listProduct()
    },[])

    useEffect(()=>{
      for(const items in cartProduct){
        console.log("items",items)
        for(const item in cartProduct[items] ){
          console.log("item", item)
          const sturcutredClone =  ActuallProduct.length > 0 ? ActuallProduct.find(product => product._id === items): undefined
          if(structuredClone.length > 0){
            setFormData(prev => ({...prev, pr: sturcutredClone}))
          }
        }
      }
  
    },[])
    for(const items in cartProduct){
      console.log("items",items)
      for(const item in cartProduct[items] ){
        console.log("item", item)
        const sturcutredClone =  ActuallProduct.length > 0 ? ActuallProduct.find(product => product._id === items): undefined
        if(structuredClone.length > 0){
          setFormData(prev => ({...prev, pr: sturcutredClone}))
        }
      }
    }

    const [formData, setFormData] = useState({
     
      address:{
        firstName:     "",
        lastName:      "",
        country:       "",
        zip:           "",
        phone:         "",
        state:         "",
        street:        "",
        email:         ""
        
      },
      paymentMethod: "",
      payment:       "",
      amount:        "",
      pr:             {},
   
    })
    
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
      }
      const addressChange = (e)=>{
      setFormData(
        (prev)=>({
          ...prev,
          address: {
          ...prev.address,
          [e.target.name]: e.target.value
          }
        })
      )

    }
    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(formData)
    }
    
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 mt-8 h-screen px-4 md:px-12">
      {/* Left: Delivery Form Section */}
      <div>
        <Title
          title1="Delivery"
          title2="information"
          size="text-xl md:text-3xl px-3"
        />

        <div className="lg:w-[600px] flex flex-col gap-4 px-6 mt-8">
          {/* Name Fields */}
          <div className="flex gap-3 w-full">
            <input
              required
              type="text"
              name="firstName"
              onChange={addressChange}
              placeholder="First name"
              className="w-full p-2 border border-gray-200 rounded-md outline-none"
            />
            <input
              required
              type="text"
              onChange={addressChange}
              name="lastName"
              placeholder="Last name"
              className="w-full p-2 border border-gray-200 rounded-md outline-none"
            />
          </div>

          {/* Email and Street */}
          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
            onChange={addressChange}
            className="w-full p-2 border border-gray-200 rounded-md outline-none"
          />
          <input
            required
            type="text"
            onChange={addressChange}
            name="street"
            placeholder="Street"
            className="w-full p-2 border border-gray-200 rounded-md outline-none"
          />

          {/* City and State */}
          <div className="flex gap-3 w-full">
            <input
              required
              type="text"
              onChange={addressChange}
              name="city"
              placeholder="City"
              className="w-full p-2 border border-gray-200 rounded-md outline-none"
            />
            <input
              required
              onChange={addressChange}
              type="text"
              name="state"
              placeholder="State"
              className="w-full p-2 border border-gray-200 rounded-md outline-none"
            />
          </div>

          {/* Zip Code and Country */}
          <div className="flex gap-3 w-full">
            <input
              required
              onChange={addressChange}
              type="text"
              name="zip"
              placeholder="Zip code"
              className="w-full p-2 border border-gray-200 rounded-md outline-none"
            />
            <input
              required
              onChange={addressChange}
              type="text"
              name="country"
              placeholder="Country"
              className="w-full p-2 border border-gray-200 rounded-md outline-none"
            />
          </div>

          {/* Phone */}
          <input
            required
              onChange={addressChange}
            type="number"
            name="phone"
            placeholder="Phone"
            className="w-full p-2 border border-gray-200 rounded-md outline-none"
          />

          {/* Payment Methods */}
          <div className="w-full">
            <div className="flex items-center justify-center gap-3 mt-4">
              <PaymentMethods src="/razorpay.png" />
              <PaymentMethods src="/stripe.png" />
              <div className=' h-12 w-44 focus:bg-green-50 flex justify-center items-center gap-2 p-2 cursor-pointer border-gray-200 border rounded-md text-xl font-bold text-gray-600 '> 
                <BusIcon />
                COD

                </div>

            </div>
          </div>

          {/* Proceed Button */}
          <div
           onClick={handleSubmit}
            // href="/place-order/orders"
            className="w-full h-12 mt-6 flex justify-center items-center bg-black text-white uppercase font-medium text-xl rounded-md"
          >
            Proceed
          </div>
        </div>
      </div>

      {/* Right: Order Summary */}
      <div className="mt-52">
        {/* Cart total component */}
        <CartCheckoutArea cls="hidden" />
      </div>
    </div>
  );
}

export default Page;
