import jwt from "jsonwebtoken";

export const AdminMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.adminToken;

    if (!token) {
      return res.status(401).json("Access denied. Admin token missing.");
    }

      jwt.verify(token, process.env.ADMIN_EMAIL);

    
   

    next();
  } catch (error) {
    console.error("AdminMiddleware error:", error.message);
    return res.status(403).json("Unauthorized. Invalid or expired admin token.");
  }
};
