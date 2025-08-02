import jwt from "jsonwebtoken";

export const AdminMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.adminToken;

    if (!token) {
      return res.status(401).json("Access denied. Admin token missing.");
    }

    const decode =  jwt.verify(token, process.env.JWT_ASSIGN);

     req.adminId = decode.adminId._id
   

    next();
  } catch (error) {
    console.error("AdminMiddleware error:", error.message);
    return res.status(403).json("Unauthorized. Invalid or expired admin token.");
  }
};
