import axios from "axios";

export const authAxiosInstance = axios.create({
    baseURL: "http://localhost:4998/api/auth/",
    withCredentials: true
})


export const productAxiosInstance = axios.create({
    baseURL: "http://localhost:4998/api/product/",
    withCredentials: true
})

export const cartAxiosInstance = axios.create({
    baseURL: "http://localhost:4998/api/cart/",
    withCredentials: true
})

export const orderAxiosInstance = axios.create({
    baseURL: "http://localhost:4998/api/order/",
    withCredentials: true
})

