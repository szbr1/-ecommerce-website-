import axios from "axios";

export const authAxiosInstance = axios.create({
    baseURL: "http://localhost:4998/api/auth/",
    withCredentials: true
})


export const productAxiosInstance = axios.create({
    baseURL: "http://localhost:4998/api/product/",
    withCredentials: true
})

