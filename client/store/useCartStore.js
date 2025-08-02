import { cartAxiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useCartStore = create((set)=>({
    ProductsInCart: {},
    addCartToTheProduct: async(itemId , size , price)=>{
        try {
           const result = await cartAxiosInstance.post("/add",{itemId,size,price} )
           console.log("cart results:", result.data)
           toast.success("Added in Cart")
        } catch (error) {
          console.error(error)
        }
    },

    getCartData : async ()=>{
        try {
            const result = await cartAxiosInstance.get("/list")
            console.log(result.data.cart)
            set({ProductsInCart: result.data.cart})
        } catch (error) {
            console.error("server error try again")
        }
    },

    removeProduct: async (itemId, size)=>{
        try {
            await cartAxiosInstance.delete("/remove",{data:  {itemId, size} })
            toast.success("Deleted successfully")
        } catch (error) {
            console.error(error)
            toast.error("Server error try again")
        }
    },

    updateItemQuantity: async(itemId,size,quantity)=>{
        try {

            const result = await cartAxiosInstance.put("/update", {itemId, size, quantity})
            console.log(result.data)
            
            
        } catch (error) {
            console.error(error)
            toast.error(error)

        }
    }


}))