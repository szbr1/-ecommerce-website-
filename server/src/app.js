import dotenv from "dotenv";
dotenv.config(); // 👈 MUST be at the top

import express from "express";
import cookieParser from "cookie-parser";
import mongoDBconnection from "./lib/monogdb.js";
import Product from "./models/product.model.js";
import AuthRoutes from "./routes/auth.routes.js";
import "./config/googleAuth.js";
import "./config/githubAuth.js"

const app = express();

const PORT = 4999;

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", AuthRoutes);

mongoDBconnection();

app.listen(PORT, () => {
  console.log(`🫡 Server running at http://localhost:${PORT}/api/auth`);
});
