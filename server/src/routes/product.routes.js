import express from "express";
import upload from "../config/multer.js";
import { add } from "../controllers/product.js";

const router = express.Router();

router.post(  "/add",
                         upload.fields([
                        { name: "image1" },
                        { name: "image2" },
                        { name: "image3" },
                        { name: "image4" },
                                        ]),
  add
);
// router.post("/", );
// router.post("/", );
// router.post("/", );

export default router;
