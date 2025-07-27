"use client";

import useAuthStore from "@/store/authStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";



function Page() {
  const [formData , setFormData] = useState({username: "", password: ""})
  const {signinbtn} = useAuthStore();
  const router = useRouter()

  const handleChange = (e)=>{
     setFormData({...formData, [e.target.name]: e.target.value})

  }
  const handleSubmit = ()=>{
    e.preventDefault();
    signinbtn(formData, router );
  }
    return (
    <div className="mt-12 flex justify-center items-center">
      <div className="flex justify-start gap-4 items-center h-screen w-full lg:w-4/8 flex-col px-4  md:px-32 ">
        <h2 className="text-3xl py-8 font-semibold uppercase">
          Welcome to Login
        </h2>

        <input
          type="email"
          required
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="p-3 text-lg px-4 border border-slate-950 rounded-full w-full"
        />
        <input
          type="password"
          required
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="p-3 text-lg px-4 border border-slate-950 rounded-full w-full"
        />
        <div className=' text-gray-500 flex justify-between items-center w-full mr-8'>
          <Link className="underline ml-8 hover:text-blue-900" href={"/signup"}>Create Account</Link>
           <div>Forget password</div>
           </div>

        <div className="w-full bg-black text-white font-semibold text-xl py-3 my-3 shadow-md backdrop:blur-3xl shadow-black flex justify-center items-center rounded-md">
          {" "}
          SignIn
        </div>

        <div className=" flex w-full gap-3 justify-between">
          <div onClick={()=>window.location.href="http://localhost:4998/api/auth/google"} className=" cursor-pointer flex gap-3 justify-center  border rounded-md border-slate-900 p-2 w-full items-center font-semibold text-xl">
            <Image src={"/google.png"} height={20} width={30} />
            &nbsp; Google
          </div>
          <div onClick={()=> window.location.href="http://localhost:4998/api/auth/github"} className=" cursor-pointer flex gap-3 justify-center border rounded-md border-slate-900 p-2 w-full items-center font-semibold text-xl">
            <Image src={"/github.png"} height={20} width={30} />
            &nbsp; Github
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
