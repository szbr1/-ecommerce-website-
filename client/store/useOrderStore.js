import { orderAxiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useOrderCreate = create((set)=>({

    status: "",
    placedOrder: [],

    getPlaceOrders: async(data)=>{

        try {
            const result  = await orderAxiosInstance.post("/place-order", data)
            console.log("placed order", result.data)
        } catch (error) {
             console.error(error)
             toast.error("Unable to place order")
        }
      
    }
    
}))