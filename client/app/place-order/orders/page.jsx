import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/Title";
import { products } from "@/lib/products";

function Page() {
  return (
    <div className="mt-16 py-12 px-4 md:px-12">
      <Title title1="My" title2="orders" />

      <div className="mt-8 space-y-6">
        {products.slice(0, 4).map((product) => (
          <div
            key={product._id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* Image */}
              <div className="md:col-span-1 w-full h-24">
                <Image
                  src={product.images[0]}
                  alt="Product"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>

              {/* Details */}
              <div className="md:col-span-2 flex flex-col gap-2 text-sm text-gray-700">
                <span className="text-lg font-semibold">${product.price}</span>
                <div className="flex gap-6">
                  <span>Quantity: 1</span>
                  <span>Size: L</span>
                </div>
                <p className="text-gray-500">
                  Date:{" "}
                  <span className="text-gray-400">
                    {product.date.split("T")[0]}
                  </span>
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <span className="w-3 h-3 bg-green-400 rounded-full" />
                Ready to ship
              </div>

              {/* Button */}
              <div className="flex justify-end">
                <Button variant="outline">Track Order</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
