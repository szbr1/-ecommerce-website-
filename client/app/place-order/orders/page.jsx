import { Button } from "@/components/ui/button";
import Title from "@/components/ui/Title";
import { products } from "@/lib/products";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="mt-16 py-12">
      <Title title1={"My"} title2={"orders"} />

      <div className="mt-3">
        {products.slice(0, 4)?.map((product) => {
          return (
            <div key={product._id}>
              <hr className="py-2 mt-2" />
              <div className="flex w-full  justify-between items-center">
                <div className="flex gap-4 ">
                  <div className="h-26 w-22">
                    <Image
                      src={product.images[0]}
                      height={100}
                      width={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-2">
                        <span>${product.price}</span> 
                        <div className="flex justify-center items-center gap-3"> <span>Quantity: 1</span> <span>Size: L</span></div>
                    
                      </div>
                    </div>
                    <div>
                      <p>
                        Date:{" "}
                        <span className="text-sm text-gray-400">
                          {product.date.split("T")[0]}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* // status  */}

                <div className="flex gap-2 justify-center items-center">
                  <p className="size-3 bg-green-400 rounded-full"></p> Ready to
                  ship
                </div>

                <Button variant={"outline"}> Track Order</Button>
              </div>
              {/* <hr className="py-2 mt-4" /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
