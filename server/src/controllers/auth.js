import User from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import passport from "passport";
import { AssignTokenToAdmin, AssignTokenToUser } from "../config/jsontoken.js";

const isStrong = (password) => validator.isStrongPassword(password, { minLength: 8 });
const isAdminEmail = (email) => email === process.env.ADMIN_VALUE;
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // Handle social auth user without password
      if ((existingUser.googleId || existingUser.githubId) && !existingUser.password) {
        if (!isStrong(password)) {
          return res.status(400).json("Please choose a strong password");
        }

        existingUser.password = await bcrypt.hash(password, 10);
        await existingUser.save();

        const token = isAdminEmail(email)
          ? AssignTokenToAdmin(res, email)
          : AssignTokenToUser(res, existingUser._id);

        return res.status(200).json({ success: true, user: existingUser, token });
      }

      // Otherwise: block duplicate signup
      return res.status(400).json("User with this email already exists");
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json("Invalid email");
    }

    if (!isStrong(password)) {
      return res.status(400).json("Please choose a strong password");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });

    const token = isAdminEmail(email)
      ? AssignTokenToAdmin(res, email)
      : AssignTokenToUser(res, newUser);

    return res.status(200).json({ success: true, user: newUser, token });
  } catch (error) {
    // Handle MongoDB duplicate key error just in case
    if (error.code === 11000) {
      return res.status(400).json("Email already exists");
    }
    console.error("Signup error:", error);
    return res.status(500).json("Server error");
  }
};


export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json("Invalid email");
    }

    if (!isStrong(password)) {
      return res.status(400).json("Weak password");
    }

    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(401).json("Invalid credentials. Try signing up.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json("Invalid credentials. Try signing up.");
    }

    const token = isAdminEmail(email)
      ? AssignTokenToAdmin(res, user)
      : AssignTokenToUser(res, user);

    return res.status(200).json({ success: true, user, token });
  } catch (error) {
    console.error("Signin error:", error);
    return res.status(500).json("Server error");
  }
};

// ---------- OAuth -------------
const handleOAuthCallback = (strategyName) => (req, res, next) => {
  passport.authenticate(strategyName, { session: false }, (err, user) => {
    if (err || !user) {
      console.error(`${strategyName} auth error:`, err);
      return res.status(500).json({ success: false, message: "Try again later" });
    }

    isAdminEmail(user.email)
      ? AssignTokenToAdmin(res, user)
      : AssignTokenToUser(res, user);

    res.redirect("http://localhost:3000");
  })(req, res, next);
};

export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const githubAuth = passport.authenticate("github", {
  scope: ["profile", "email"],
});

export const googleCallback = handleOAuthCallback("google");
export const githubCallback = handleOAuthCallback("github");

export const signout = (req, res) => {
  try {
    res.clearCookie("token");
    res.clearCookie(process.env.VALUE); // Assuming this is your admin cookie name

    return res.status(200).json("Logged out");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error");
  }
};
