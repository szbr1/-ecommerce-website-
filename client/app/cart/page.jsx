"use client";
import { Context } from "@/components/ContexProvider";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Title from "@/components/ui/Title";
import useProductStore from "@/store/useProductStore";
import CartCheckoutArea from "@/components/Layout/CartCheckoutArea";
import { useCartStore } from "@/store/useCartStore";

function Page() {
  const { removeFromCart, updateQuantity, cartItems, loggedIn } = useContext(Context);
  const { listProduct, ActuallProduct: products } = useProductStore();
  const {getCartData,ProductsInCart,removeProduct, updateItemQuantity} = useCartStore();
  const [fetchCart,setFetchCart] = useState([])


  useEffect(() => {
    listProduct();
    getCartData()
  }, [removeProduct, updateItemQuantity, getCartData]);

  useEffect(() => {
    if (loggedIn === "user") {
      setFetchCart(ProductsInCart);
    } else {
      setFetchCart(cartItems);
    }
  }, [loggedIn, ProductsInCart, cartItems]);
  


  return (
    <>
      {fetchCart.length > 0 ? (
        <div className="mt-12 py-8 px-4 md:px-10">
          <Title title1="your" title2="cart" />

          {fetchCart.map((item) => {
            const matchedProduct = products.find(
              (product) => product._id === item.itemId
            );
            if (!matchedProduct) return null;

            return (
              <div
                className="mt-6 flex flex-wrap md:flex-nowrap items-start justify-between gap-4 border-b pb-6"
                key={`${item.itemId}-${item.size}`}
              >
                {/* Left: Image & Info */}
                <div className="flex gap-4 w-full md:w-2/4">
                  <div className="h-24 w-20 flex-shrink-0">
                    <Image
                      src={matchedProduct.images[0]}
                      alt={matchedProduct.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover rounded-md"
                    />
                  </div>

                  <div>
                    <p className="text-gray-800 font-medium">
                      {matchedProduct.name}
                    </p>
                    <div className="flex gap-4 mt-2 text-sm text-gray-600">
                      <span>${matchedProduct.price}</span>
                      <span className="px-2 py-1 border text-gray-500">
                        {item.size}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle: Quantity */}
                <div className="flex items-center">
                  <input
                    type="number"
                    min={1}
                    className="w-20 border border-gray-300 px-3 py-2 rounded"
                    value={item.quantity}
                    onChange={(e) =>{
                      if(loggedIn === "user"){
                        getCartData()
                        updateItemQuantity(
                          item.itemId,
                          item.size,
                          Number(e.target.value)
                        )
                      }else{
                        updateQuantity(
                          item.itemId,
                          item.size,
                          Number(e.target.value)
                        )
                      }
                    }
                     
                    }
                  />
                </div>

                {/* Right: Remove */}
                <button
                  onClick={() =>{
                    if(loggedIn === "user"){
                      removeProduct(item.itemId, item.size)
                    }else{
                    } removeFromCart(item.itemId, item.size)}

                    }
                  className="flex items-center gap-1 border px-3 py-2 rounded hover:bg-gray-100 transition"
                >
                  <Trash2 className="size-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Remove</span>
                </button>
              </div>
            );
          })}

          <CartCheckoutArea />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty cart"
            width={180}
            height={180}
          />
          <h2 className="text-xl md:text-2xl font-semibold mt-6 text-gray-700">
            {}
          </h2>
          <p className="text-gray-500 mt-2 max-w-md">
            Looks like you haven’t added anything yet. Start exploring and add something amazing to your cart!
          </p>
        </div>
      )}
    </>
  );
}

export default Page;
