"use client";
import { Search, ShoppingBag, UserRound, X } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Menu from "../clientcomponents/Menu";
import { Context } from "@/components/ContexProvider";
import useProductStore from "@/store/useProductStore";
import ProductGrid from "../product/ProductGrid";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

function Navbar() {
  const { cartItems } = useContext(Context);
  const [searchToggle, setSearchToggle] = useState(false);
  const [textInput, setTextInput] = useState("");
  const { listProduct, ActuallProduct } = useProductStore();
  const {signout, loggedIn} = useAuthStore()
  const [displaySearchProducts, setDisplaySearchProducts] = useState([]);
  const [toggler , settoggler] = useState(false)

   const totalItemsInCart = cartItems.reduce((acc , item)=> acc + item.quantity,0)

  useEffect(() => {
    listProduct();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const result = ActuallProduct.filter((item) =>
      item.name.toLowerCase().includes(textInput.toLowerCase())
    );
    setDisplaySearchProducts(result);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex flex-col bg-white shadow-sm">
      {/* Top Navbar */}
      <div className="flex justify-between items-center container lg:px-12 p-3 text-gray-500 border-b border-gray-200">
        {/* Logo */}
        <Link href="/" className="text-black text-lg font-semibold lg:text-xl">
          Creative <span className="text-green-400">Stor</span>e
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex justify-center items-center gap-4">
          <Link href="/" className="hover:font-bold hover:border-b-2 border-green-500">
            Home
          </Link>
          <Link href="/collection" className="hover:font-bold hover:border-b-2 border-green-500">
            Collection
          </Link>
          <Link href="/about" className="hover:font-bold hover:border-b-2 border-green-500">
            About
          </Link>
          <Link href="/contact" className="hover:font-bold hover:border-b-2 border-green-500">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex gap-2 md:gap-3 items-center">
          <div className="relative  ">
            <UserRound onClick={()=> settoggler(!toggler)} className="hidden md:block size-5 hover:text-green-600 cursor-pointer" />

            {toggler===true&&<div className="absolute text-sm -bottom-13 rounded-b-sm  h-auto  w-24 flex flex-col gap-1 bg-gray-300/40 backdrop:blur-md text-black p-2">
             { loggedIn&&( <Link onClick={()=> settoggler(!toggler)} href={"/profile"} className="hover:underline cursor-pointer  ">Profile</Link>)}
               {loggedIn&&(<div
                onClick={async ()=> {
                  settoggler(!toggler)
                  await signout()
                              } 
                        }
                className="hover:underline cursor-pointer ">
                  LogOut
                </div>)}
              {loggedIn ? ( <Link onClick={()=> settoggler(!toggler)} href={"/admin/dashboard"} className="hover:underline cursor-pointer  ">Dashboard</Link>) : ( <Link onClick={()=> settoggler(!toggler)} href={"/signin"} className="hover:underline cursor-pointer  ">login</Link>)}
            </div>}
          </div>

          <Search
            onClick={() => {
              setSearchToggle(true);
            }}
            className="size-5 hover:text-green-600 cursor-pointer"
          />

          <Link href="/cart" className="relative">
            <ShoppingBag className="size-5 hover:text-green-600 cursor-pointer" />
            <span className="absolute -bottom-1 -right-0 flex justify-center items-center text-[10px] bg-black rounded-full size-[13px] text-white">
              {totalItemsInCart}
            </span>
          </Link>

          <Menu />
        </div>
      </div>

      {/* Search Overlay */}
      {searchToggle && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-black/40 backdrop-blur-sm flex flex-col items-center overflow-auto pt-28 px-4">
          <div className="bg-white w-full max-w-6xl rounded-md shadow-lg p-6 relative">
            <button
              onClick={() => {
                setSearchToggle(false);
                setTextInput("");
                setDisplaySearchProducts([]);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="size-6" />
            </button>

            <form onSubmit={handleSearch} className="flex justify-center gap-4 items-center mb-6">
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Search products..."
                className="py-2 px-4 shadow-sm outline-none rounded-md w-full border border-gray-300 text-gray-700"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Search
              </button>
            </form>

            {displaySearchProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {displaySearchProducts.map((item) => (
                  <ProductGrid
                    setSearchToggle={setSearchToggle}
                    key={item._id}
                    _id={item._id}
                    image={item.images[0]}
                    price={item.price}
                    name={item.name}
                    // onClick={() => setSearchToggle(false)} // optional: close on product click
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center">No matching products found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
