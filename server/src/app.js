import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

// Load environment variables first
dotenv.config();

// DB & OAuth config
import mongoDBconnection from "./lib/monogdb.js";
import "./config/googleAuth.js";
import "./config/githubAuth.js";

// Route Imports
import ProductRoutes from "./routes/product.routes.js";
import AuthRoutes from "./routes/auth.routes.js";
import OrderRoutes from "./routes/order.routes.js";
import CartProductRoutes from "./routes/cart.routes.js";

// App setup
const app = express();
const PORT = 4998;

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    callback(null, origin); // Reflect the request origin
  },
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/product", ProductRoutes);
app.use("/api/order", OrderRoutes);
app.use("/api/cart", CartProductRoutes)

// Connect to MongoDB
mongoDBconnection();

// Start server
app.listen(PORT, () => {
  console.log(`🫡 Server running at http://localhost:${PORT}/api/auth`);
});
