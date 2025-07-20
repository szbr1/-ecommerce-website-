"use client"
import React, { createContext, useState } from 'react'

export const Context = createContext();
function ContexProvider({children}) {

const [openProductId, setOpenProductId] = useState(false);
const [searchDetail, setSearchDetail] = useState("");




  return (
    <Context.Provider value={{setOpenProductId, setSearchDetail, openProductId, searchDetail}} >
      {children}
    </Context.Provider>
  )
}

export default ContexProvider