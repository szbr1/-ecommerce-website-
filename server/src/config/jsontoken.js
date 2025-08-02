import jwt from "jsonwebtoken";

export const AssignTokenToUser = (res, userId) => {
  try {
    if (!userId) {
      return res.status(400).json("User Not Found");
    }

    const token = jwt.sign({ userId }, process.env.JWT_ASSIGN, {
      expiresIn: "30d",
    });

    res.cookie("token", token, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
     // i turn off this because i want cookies in the client side in frontend. it is risk of xss attack but
      // i am creating this project for just myself i can get cookies then for that i have to create a diffrent 
      // route and i don't want that for now.i want to keep it simple
      httpOnly: false,
    });

    return token;
  } catch (error) {
    console.error("AssignTokenToUser Error:", error);
  }
};

export const AssignTokenToAdmin = (res, adminId) => {
  try {
    if (!adminId) {
      return res.status(400).json("Admin ID Missing");
    }

    const token = jwt.sign({ adminId, role: "admin" }, process.env.ADMIN_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("adminToken", token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      // i turn off this because i want cookies in the client side in frontend. it is risk of xss attack but
      // i am creating this project for just myself i can get cookies then for that i have to create a diffrent 
      // route and i don't want that for now.i want to keep it simple
      httpOnly: false,
    });

    return token;
  } catch (error) {
    console.error("AssignTokenToAdmin Error:", error);
    return res.status(500).json("Server error in middleware");
  }
};


