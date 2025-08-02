import Image from "next/image";
import React from "react";

function Title({ title1, title2, size }) {
  return (
    <>
      <div className={`uppercase flex justify-start items-center gap-[5px] text-lg py-4 text-gray-500 ${size ? size : "md:text-3xl"}`}>
       <span>{title1} </span> <span className="font-semibold text-black">{title2}</span>{" "}
        <Image src={"/thin.png"} alt="" height={30} className="h-[3px] rounded-full ml-3" width={60} />
      </div>
    </>
  );
}

export default Title;
