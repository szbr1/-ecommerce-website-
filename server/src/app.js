import express from "express";
import dotenv from "dotenv"
import mongoDBconnection from "./lib/monogdb.js";
import Product from "./models/product.model.js";
import AuthRoutes from "./routes/auth.routes.js"


const app = express();
dotenv.config()
const PORT = 4999;

app.use("/api/auth", AuthRoutes )

mongoDBconnection()
app.listen(PORT, () => {
  console.log(`🫡 Server running at http://localhost:${PORT}`);
});
