import express from "express";
import { cashOnDelivery, razorpay, stripe } from "../controllers/ordersProduct.js";


const router = express.Router();

router.post("/razorpay", razorpay)
router.post("/stripe", stripe)
router.post("/cod", cashOnDelivery)


export default router;