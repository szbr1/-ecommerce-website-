"use client";
import Sidebar from "@/components/Layout/admin-layouts/Sidebar";
import useProductStore from "@/store/useProductStore";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Page() {
  const [change, setChange] = useState("add");
  const [formData, setFormData] = useState({});
  const { addProduct, listProduct, deleteProduct, ActuallProduct } = useProductStore();

  const fileref1 = useRef(null);
  const fileref2 = useRef(null);
  const fileref3 = useRef(null);
  const fileref4 = useRef(null);

  const [image1, setImage1] = useState(undefined);
  const [image2, setImage2] = useState(undefined);
  const [image3, setImage3] = useState(undefined);
  const [image4, setImage4] = useState(undefined);
  const [sizes, setSizes] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("subcategory", formData.subcategory);
    data.append("price", formData.price);
    data.append("bestseller", formData.bestseller === true ? "true" : "false");
    sizes.forEach(size => data.append("sizes", size));

    if (fileref1.current?.files[0]) data.append("image1", fileref1.current.files[0]);
    if (fileref2.current?.files[0]) data.append("image2", fileref2.current.files[0]);
    if (fileref3.current?.files[0]) data.append("image3", fileref3.current.files[0]);
    if (fileref4.current?.files[0]) data.append("image4", fileref4.current.files[0]);

    addProduct(data);
   
    
  };

  useEffect(() => {
    listProduct();
  }, []);

  return (
    <div className="flex gap-1 min-h-screen mt-12 h-[calc(100vh-180px)]">
      <div>
        <Sidebar change={change} setChange={setChange} />
      </div>
      <div className="flex-1 h-full w-full p-8">
        {change === "add" ? (
          <div>
            <div className="border border-gray-500 p-4">
              {Array.isArray(ActuallProduct) ? (
                ActuallProduct.map((item) => (
                  <div key={item._id} className="w-full mb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-20 w-20">
                          <img
                            src={item.images[0]}
                            height={100}
                            width={100}
                            alt="product"
                            className="w-full object-contain h-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="truncate w-30">{item.name}</span>
                          <div className="flex items-center gap-2">
                            {item.sizes.map((size) => (
                              <div
                                key={size}
                                className="border border-black/40 flex justify-center items-center size-8 text-xs truncate"
                              >
                                {size}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => deleteProduct(item._id)}
                        className="p-2 border border-gray-400 rounded-md size-12 flex justify-center items-center cursor-pointer"
                      >
                        X
                      </div>
                    </div>
                    <hr className="mt-1" />
                  </div>
                ))
              ) : (
                <div>Loading</div>
              )}
            </div>
          </div>
        ) : (
          <div className="border border-gray-400 p-3">
            <div className="flex justify-center items-center gap-3">
              {[1, 2, 3, 4].map((num) => {
                const img = eval(`image${num}`);
                return (
                  <div
                    key={num}
                    onClick={() => eval(`fileref${num}`).current.click()}
                    className="size-20 bg-white shadow-black shadow-sm rounded-lg overflow-hidden"
                  >
                    <img
                      src={
                        img
                          ? img
                          : "https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg"
                      }
                      height={100}
                      width={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              })}

              {[fileref1, fileref2, fileref3, fileref4].map((ref, i) => (
                <input
                  key={i}
                  type="file"
                  accept="image/*"
                  ref={ref}
                  hidden
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      eval(`setImage${i + 1}`)(URL.createObjectURL(file));
                    }
                  }}
                />
              ))}
            </div>

            {/* Inputs */}
            <div className="w-full px-60 py-8 flex gap-3 flex-col">
              <input
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Product Name"
                className="py-2 w-full px-2 outline-slate-600 border border-black"
              />
              <textarea
                name="description"
                onChange={handleChange}
                placeholder="write down product description."
                className="w-full h-32 border border-black p-3 text-sm"
              />
              <div className="flex gap-1">
                <select name="category" onChange={handleChange} className="p-2 border w-1/2">
                  <option value="men" hidden>Category</option>
                  <option value="men">men</option>
                  <option value="women">women</option>
                  <option value="kid">kid</option>
                </select>
                <select name="subcategory" onChange={handleChange} className="p-2 border w-1/2">
                  <option value="topwear" hidden>Sub Category</option>
                  <option value="topwear">topwear</option>
                  <option value="bottomwear">bottomwear</option>
                  <option value="winterwear">winterwear</option>
                </select>
              </div>
              <input
                name="price"
                type="number"
                onChange={handleChange}
                placeholder="Price"
                className="py-2 w-full px-2 border border-black"
              />

              {/* Sizes */}
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    onClick={() =>
                      sizes.includes(size)
                        ? setSizes(sizes.filter((s) => s !== size))
                        : setSizes([...sizes, size])
                    }
                    className={`${
                      sizes.includes(size) ? "bg-green-300" : "bg-white"
                    } size-12 border border-gray-500 flex justify-center items-center cursor-pointer`}
                  >
                    {size}
                  </div>
                ))}
              </div>

              {/* best Seller */}
              <div className="flex gap-1 items-center">
                <input
                  name="bestseller"
                  type="checkbox"
                  onChange={(e) => setFormData({ ...formData, bestseller: e.target.checked })}
                  className="size-3 cursor-pointer"
                />
                <span className="text-amber-600 uppercase text-sm">top seller</span>
              </div>

              {/* Submit */}
              <div
                onClick={handleSubmit}
                className="flex justify-center cursor-pointer items-center py-2 w-30 bg-black text-white"
              >
                Submit
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
