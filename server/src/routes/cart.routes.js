import express from "express";
import { addToCart, allProductsInCart, deleteProduct, updateQuantity } from "../controllers/cartProduct.js";
import { middleware } from "../middleware/middleware.js";

const router = express.Router();

router.post("/add", middleware, addToCart);
router.get("/list", middleware,allProductsInCart);
router.delete("/remove",middleware, deleteProduct);
router.put("/update",middleware, updateQuantity );


export default router;