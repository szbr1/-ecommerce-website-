"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/ui/Title";
import PaymentMethods from "@/components/ui/PaymentMethods";
import CartCheckoutArea from "@/components/Layout/CartCheckoutArea";
import { BusFront, BusIcon } from "lucide-react";
import { Context } from "@/components/ContexProvider";
import useProductStore from "@/store/useProductStore";
import StripePaymentMethod from "@/components/ui/PaymentMethods";
import RazorPaymentMethod from "@/components/ui/RazorPaymentMethod";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useOrderCreate } from "@/store/useOrderStore";

function Page() {
  const { cartItems, totalPayment, deliver_fee, loggedIn } =
    useContext(Context);
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const { getCartData, ProductsInCart } = useCartStore();
  const {getPlaceOrders} = useOrderCreate()
  const router = useRouter();

  useEffect(() => {
    getCartData();
  }, []);

  const [formData, setFormData] = useState({
    address: {
      firstName: "",
      lastName: "",
      country: "",
      zip: "",
      phone: "",
      state: "",
      street: "",
      email: "",
    },
    paymentMethod: "",
    payment: "",
    amount: "",
    city: "",
    order: [],
  });

  const addressChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      amount: totalPayment + deliver_fee,
      paymentMethod: "",
      order: loggedIn === "user" ? ProductsInCart : cartItems,
      paymentMethod: paymentMethod,
      address: {
        ...prev.address,
        [e.target.name]: e.target.value,
      },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  if (loggedIn === "user") {
    if (ProductsInCart.length < 0) {
      router.push("/cart");
      return;
    } else if (cartItems.length < 0) {
      router.push("/cart");
      return;
    }
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 mt-8 h-screen px-4 md:px-12 mb-44">
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
              <StripePaymentMethod
                setPaymentMethod={setPaymentMethod}
                method={paymentMethod}
                src="/stripe.png"
              />
              <RazorPaymentMethod
                setPaymentMethod={setPaymentMethod}
                method={paymentMethod}
                src="/razorpay.png"
              />
              <button
                onClick={() => setPaymentMethod("cod")}
                className={`cursor-pointer h-12 w-44 flex justify-center items-center gap-2 p-2 border-gray-200 border rounded-md ${
                  paymentMethod === "cod"
                    ? "bg-black border-2 text-white border-gray3"
                    : ""
                }`}
              >
                <BusIcon />
                COD
              </button>
            </div>
          </div>

          {/* Proceed Button */}
          <Link
            onClick={()=>{
              getPlaceOrders(formData)
            }}
            href="/place-order/orders"
            className=" md:hidden w-full h-12 mt-6 flex justify-center items-center bg-black text-white uppercase font-medium text-xl rounded-md"
          >
            Procccccc
          </Link>
        </div>
      </div>

      {/* Right: Order Summary */}
      <div className=" mb-30 flex flex-col gap-7">
        {/* Cart total component */}
        <CartCheckoutArea cls="hidden" />
        <div className="  justify-end hidden md:flex">
          
            <div
            
              // href="/place-order/orders"
              onClick={()=>{
                getPlaceOrders(formData)
              }}
              className="w-3/6 cursor-pointer h-12 flex justify-center items-center bg-black text-white uppercase font-medium text-xl "
            >
              Proceed
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Page;
