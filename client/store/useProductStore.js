import { authAxiosInstance, cartAxiosInstance, productAxiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { create } from "zustand";

const useProductStore = create((set, get) => ({
  addProduct: async (data) => {
    try {
      const result = await productAxiosInstance.post("/add", data);
      if (result.data) {
        toast.success("Product added");
      }
    } catch (error) {
      console.error(error);
      toast.error("Some issues in server");
    }
  },
  ActuallProduct: [],

  listProduct: async () => {
    try {
      const result = await productAxiosInstance.get("/list");
      if (result.data) {
        set({ ActuallProduct: result.data.listOfProducts });
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error ");
    }
  },

  deleteProduct: async (id) => {
    try {
      const result = await productAxiosInstance.delete(`/remove/${id}`);
      if (result.data) {
        toast.success("successfully deleted");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error ");
    }
  },

  
}));

export default useProductStore;
