import { authAxiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  loggedIn: false,
  signedUp: false,

  signupbtn: async (data, router) => {
    try {
      const result = await authAxiosInstance.post("/signup", data);
      if (result.data) {
        set({ signedUp: true, loggedIn: true });
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      set({ signedUp: false, loggedIn: false });
    }
  },

  signinbtn: async (data, router) => {
    try {
      const result = await authAxiosInstance.post("/signin", data);
      if (result.data) {
        set({ signedUp: true, loggedIn: true });
        router.push("/admin/dashboard");
      }
    } catch (error) {
      console.error(error);
      set({ signedUp: false, loggedIn: false });
    }
  },

  googleAuth: async (router) => {
    try {
      await authAxiosInstance.get("/google");
      set({ loggedIn: true });
      router.push("/admin/dashboard");
    } catch (error) {
      toast.error("Server error");
      set({ loggedIn: false });
      console.error(error);
    }
  },

  signout: async () => {
    try {
      const result = await authAxiosInstance.get("/signout");
      if (result.data) {
        toast.success(result.data);
        set({ loggedIn: false, signedUp: false });
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    }
  },
}));

export default useAuthStore;
