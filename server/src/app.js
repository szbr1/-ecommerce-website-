import dotenv from "dotenv";
import cors from "cors"
dotenv.config(); // 👈 MUST be at the top


import express from "express";
import cookieParser from "cookie-parser";
import mongoDBconnection from "./lib/monogdb.js";
import ProductRoutes from "./routes/product.routes.js"
import AuthRoutes from "./routes/auth.routes.js";
import OrderRoutes from "./routes/order.routes.js"
import "./config/googleAuth.js";
import "./config/githubAuth.js"

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

const PORT = 4998;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/api/auth", AuthRoutes);
app.use("/api/product", ProductRoutes)
app.use("/api/order", OrderRoutes)


mongoDBconnection();

app.listen(PORT, () => {
  console.log(`🫡 Server running at http://localhost:${PORT}/api/auth`);
});
