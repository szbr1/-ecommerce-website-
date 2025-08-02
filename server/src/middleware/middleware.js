import jwt from "jsonwebtoken";

export const middleware = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json("Unauthorized: No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_ASSIGN);

    req.userId = decoded.userId._id; // now available in your protected routes
    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    return res.status(403).json("Access denied: Invalid token");
  }
};
