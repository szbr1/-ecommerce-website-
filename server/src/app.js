import dotenv from "dotenv";
dotenv.config(); // 👈 MUST be at the top

import express from "express";
import cookieParser from "cookie-parser";
import mongoDBconnection from "./lib/monogdb.js";
import ProductRoutes from "./routes/product.routes.js"
import AuthRoutes from "./routes/auth.routes.js";
import "./config/googleAuth.js";
import "./config/githubAuth.js"

const app = express();

const PORT = 4998;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/api/auth", AuthRoutes);
app.use("/api/product", ProductRoutes)

mongoDBconnection();

app.listen(PORT, () => {
  console.log(`🫡 Server running at http://localhost:${PORT}/api/auth`);
});
