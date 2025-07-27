"use client"
import { Book, Plus } from 'lucide-react'
import React from 'react'

function Sidebar({change, setChange}) {
  return (
    <div className='w-38 h-screen pr-9 mt-12'>
        <div className='flex flex-col   gap-3 '>

      <div onClick={()=> change === "add" ? setChange("list") : ""} className='w-full cursor-pointer  py-3 border flex  font-semibold   justify-center items-center gap-1 border-gray-800  px-2'> Add<Plus className='size-5 border-black rounded-full p-1 border-1 ' /> </div>
      <div  onClick={()=> change === "list" ? setChange("add") : ""}  className='w-full cursor-pointer py-3 border flex font-semibold  justify-center items-center gap-1 border-gray-800   px-2'> List<Book className='size-5 border-black rounded-full p-1 border-1 ' /> </div>
    </div>
        </div>
  )
}

export default Sidebar