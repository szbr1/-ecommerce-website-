"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useDebugValue, useEffect, useState } from "react";

import ProductGrid from "@/components/product/ProductGrid";
import useProductStore from "@/store/useProductStore";

function page() {
  const [products, setProducts] = useState([]);
  const [toggleFilter, setToggleFilter] = useState(true);
  const [Category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const { listProduct, ActuallProduct } = useProductStore();


   useEffect(() => {
               listProduct();
              }, []);
  
  
  useEffect(() => {
    setProducts(ActuallProduct);
  }, [ActuallProduct]);

  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory((prev) => Category.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) =>
        subCategory.filter((item) => item !== e.target.value)
      );
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applytoggleCagtegory = () => {
    if (Category.length > 0) {
      const result = ActuallProduct.filter((item) =>
        Category.includes(item.category)
      );
      setProducts(result);
    } else {
      setProducts(ActuallProduct);
    }
  };
  const priceSort = (e) => {
    let sortedProducts = [...products]; // Copy array to avoid mutating original
    if (e.target.value === "high") {
      sortedProducts.sort((a, b) => b.price - a.price); // High to Low
    } else if (e.target.value === "low") {
      sortedProducts.sort((a, b) => a.price - b.price); // Low to High
    } else {
      sortedProducts = ActuallProduct; 
    }
    setProducts(sortedProducts); 
  };
  const applytoggleSubCategory = () => {
    if (subCategory.length > 0) {
      const result = ActuallProduct.filter((item) =>
        subCategory.includes(item.subcategory)
      );
      setProducts(result);
    }
  };
  useEffect(() => {
    applytoggleCagtegory();
    applytoggleSubCategory();
  }, [Category, subCategory]);
  return (
    <div className="flex flex-col md:flex-row py-7 text-gray-700 mt-12">
      <div>
        <span
          onClick={() => setToggleFilter(!toggleFilter)}
          className="text-xl  text-black p-3 uppercase coursor-pointer flex  items-center "
        >
          filter <ChevronRight className="md:hidden text-gray-500" />
        </span>
        <div className={` md:block ${toggleFilter ? "hidden" : "block"}`}>
          <div className="p-4   border border-gray-300 mt-5">
            <span className="font-bold uppercase mb-1">category </span>
            <p className="flex gap-1  text-lg">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3"
                value={"women"}
              />{" "}
              Women
            </p>
            <p className="flex gap-1 text-lg ">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3"
                value={"kid"}
              />{" "}
              Kids
            </p>
            <p className="flex gap-1 text-lg ">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3"
                value={"men"}
              />{" "}
              Men
            </p>
          </div>

          <div className="p-4  border border-gray-300 mt-5">
            <span className="font-bold uppercase mb-1">type </span>
            <p className="flex gap-1 text-lg ">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="w-3"
                value={"topwear"}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-1  text-lg">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="w-3"
                value={"bottomwear"}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-1 text-lg ">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="w-3"
                value={"winterwear"}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>


       {/* main content window  */}
      <div className="flex-1 lg:ml-4 lg:pl-5">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 flex justify-center items-center text-xl sm:text-3xl">
            All &nbsp; <span className="text-black">Collections &nbsp;</span>{" "}
            <Image
              src={"/thin.png"}
              className="h-[4px] mt-1 w-12 md:w-28"
              alt=""
              height={200}
              width={100}
            />
          </p>

        <select onChange={priceSort} className=" border p-3 ">
          <option value="default" className="rounded-md border border-blue-600"> Default</option>
          <option value="low" className="rounded-md border border-blue-600"> Low</option>
          <option value="high" className="rounded-md border border-blue-600">High</option>
        </select>

        </div>

        <div className="grid grid-col-2 lg:grid-cols-4 gap-2 mt-8">
          {products.map((product) => {
            return (
              <ProductGrid
                key={product._id}
                _id={product._id}
                name={product.name}
                price={product.price}
                image={product.images[0]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
