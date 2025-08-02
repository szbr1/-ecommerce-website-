import express from "express";
import { cashOnDelivery, getPlacedOrders, placeOrder } from "../controllers/ordersProduct.js";
import { middleware } from "../middleware/middleware.js";


const router = express.Router();

  router.get("/orders",middleware, getPlacedOrders)
// router.post("/stripe", stripe)
// router.post("/cod", cashOnDelivery)
  router.post("/place-order", middleware, placeOrder)


export default router;