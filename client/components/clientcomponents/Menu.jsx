"use client";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <MenuIcon
        onClick={() => setToggleMenu(!toggleMenu)}
        className="md:hidden size-5 hover:text-green-600 cursor-pointer transition-colors"
      />

      {toggleMenu && (
      <div className={`fixed inset-1 rounded-md z-50 bg-black/90 backdrop-blur-sm transform transition-all ${!toggleMenu ? "-translate-x-full" : "translate-x-0"}`}>

          <div className={ `relative h-full  ${!toggleMenu? "w-0 transform translate-full":"w-full transform translate-0"} `}>
            {/* Close button */}
            <X
              onClick={() => setToggleMenu(false)}
              className="absolute right-4 top-4 size-6 text-white border-2 hover:text-green-400 cursor-pointer transition-colors"
            />
         
            {/* Menu items container */}
            <div className="flex pt-20 flex-col items-center  h-full gap-6">
              <Link
                href="#"
                className= "text-white hover:text-green-400 text-xl w-full  flex justify-center items-center transition-colors py-2 px-4"
                onClick={() => setToggleMenu(false)}
              >
                <span className=" border-b rounded-md px-6 w-32 flex justify-center items-center py-2 hover:bg-black text-slate-200">Home</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-green-400 text-xl w-full border-white  flex justify-center items-center transition-colors py-2 px-4"
                onClick={() => setToggleMenu(false)}
              >
              <span className=" border-b rounded-md px-6 w-32 flex justify-center items-center py-2 hover:bg-black text-slate-200">Collection</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-green-400 text-xl w-full border-white  flex justify-center items-center transition-colors py-2 px-4"
                onClick={() => setToggleMenu(false)}
              >
                <span className=" border-b rounded-md px-6 w-32 flex justify-center items-center py-2 hover:bg-black text-slate-200">About</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-green-400 text-xl w-full border-white  flex justify-center items-center transition-colors py-2 px-4"
                onClick={() => setToggleMenu(false)}
              >
                <span className=" border-b rounded-md px-6 w-32 flex justify-center items-center py-2 hover:bg-black text-slate-200">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
