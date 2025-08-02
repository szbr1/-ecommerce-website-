"use client";
import { Search, ShoppingBag, UserRound, X } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Menu from "../clientcomponents/Menu";
import { Context } from "@/components/ContexProvider";
import useProductStore from "@/store/useProductStore";
import ProductGrid from "../product/ProductGrid";
import useAuthStore from "@/store/authStore";
import { useCartStore } from "@/store/useCartStore";

function Navbar() {
  const { cartItems,loggedIn } = useContext(Context);
  const { signout } = useAuthStore();
  const [searchToggle, setSearchToggle] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [displaySearchProducts, setDisplaySearchProducts] = useState([]);
  const [totalProductsInCart, setTotalProductsInCart] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false);
  const { listProduct, ActuallProduct } = useProductStore();
  const {getCartData, ProductsInCart} = useCartStore();
  
  useEffect(() => {
    listProduct();
    getCartData();
  }, []);
  
  useEffect(() => {
    if (loggedIn === "user") {
      const length = ProductsInCart.length>0 ?ProductsInCart.reduce((acc, item) => acc + item.quantity, 0): null;
      setTotalProductsInCart(length);
    }
  }, [ProductsInCart, loggedIn]);
  
  useEffect(() => {
    if (loggedIn !== "user") {
      const length = cartItems.reduce((acc, item) => acc + item.quantity, 0);
      setTotalProductsInCart(length);
    }
  }, [cartItems, loggedIn]);
  






  const handleSearch = (e) => {
    e.preventDefault();
    const result = ActuallProduct.filter((item) =>
      item.name.toLowerCase().includes(textInput.toLowerCase())
    );
    setDisplaySearchProducts(result);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm lg:px-24">
      {/* Top Nav */}
      <div className="container flex justify-between items-center p-4 border-b">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Creative <span className="text-green-500">Store</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex gap-6 text-gray-600">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/collection" className="hover:text-green-600">Collection</Link>
          <Link href="/about" className="hover:text-green-600">About</Link>
          <Link href="/contact" className="hover:text-green-600">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
         {loggedIn === "admin" ?  <Link href={"/admin/dashboard"} className="h-7 text-white flex justify-center items-center w-22 bg-black "> Admin</Link> : null}
          {/* Profile */}
          <div className="relative">
            <UserRound
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer hover:text-green-600 hidden md:block"
            />
            {menuOpen && (
              <div className="absolute right-0 top-8 w-28 bg-white shadow-md p-2 text-sm z-50 rounded">
                {loggedIn && <Link href="/profile" onClick={() => setMenuOpen(false)} className="block hover:underline">Profile</Link>}
                {loggedIn === "admin" && <Link href="/admin/dashboard" onClick={() => setMenuOpen(false)} className="block hover:underline">Dashboard</Link>}
                {!loggedIn && <Link href="/signin" onClick={() => setMenuOpen(false)} className="block hover:underline">Login</Link>}
                {loggedIn && (
                  <Link
                  href={"/signin"}
                    onClick={async () => {
                      await signout();
                      setMenuOpen(false);
                    }}
                    className="mt-1 cursor-pointer hover:underline"
                  >
                    Logout
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Search */}
          <Search
            onClick={() => setSearchToggle(true)}
            className="cursor-pointer hover:text-green-600"
          />

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingBag className="cursor-pointer hover:text-green-600" />
            {totalProductsInCart > 0 && (
              <span className="absolute -top-1 -right-2 text-[10px] bg-black text-white rounded-full px-1.5 py-0.5">
                {totalProductsInCart}
              </span>
            )}
          </Link>

          <Menu />
        </div>
      </div>

      {/* Search Overlay */}
      {searchToggle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-start justify-center pt-24 px-4">
          <div className="bg-white w-full max-w-5xl p-6 rounded relative">
            <X
              onClick={() => {
                setSearchToggle(false);
                setTextInput("");
                setDisplaySearchProducts([]);
              }}
              className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-black"
            />

            <form onSubmit={handleSearch} className="flex gap-4 mb-6">
              <input
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm outline-none"
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
                    key={item._id}
                    _id={item._id}
                    image={item.images[0]}
                    price={item.price}
                    name={item.name}
                    setSearchToggle={setSearchToggle}
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
