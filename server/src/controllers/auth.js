import User from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import AssignTokenToUser from "../config/userJwt.js";
import AssignTokenToAdmin from "../config/adminJwt.js";
import passport from "passport";

export const admin = async (req, res) => {
  // You can implement admin-only logic here later
};

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const emailCheck = await User.findOne({ email });

    // Case: OAuth user wants to set password now
    if (emailCheck && (emailCheck.githubId || emailCheck.googleId) && !emailCheck.password) {
      if (!validator.isStrongPassword(password, { minLength: 8 })) {
        return res.status(400).json("Please choose strong password");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      emailCheck.password = hashedPassword;
      await emailCheck.save();

      const token = emailCheck.admin
        ? AssignTokenToAdmin(res, emailCheck._id)
        : AssignTokenToUser(res, emailCheck._id);

      return res.status(200).json({ success: true, user: emailCheck, token });
    }

    // New user registration
    if (!validator.isEmail(email)) {
      return res.status(400).json("Please enter valid email");
    }

    if (!validator.isStrongPassword(password, { minLength: 8 })) {
      return res.status(400).json("Please choose strong password");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = newUser.admin
      ? AssignTokenToAdmin(res, newUser._id)
      : AssignTokenToUser(res, newUser._id);

    return res.status(200).json({ success: true, user: newUser, token });
  } catch (error) {
    console.error("signup error", error);
    return res.status(500).json("Server error");
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json("Invalid credentials. Try signing up.");
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json("Please enter valid email");
    }

    if (!validator.isStrongPassword(password, { minLength: 8 })) {
      return res.status(400).json("Please choose strong password");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json("Invalid credentials. Try signing up.");
    }

    const token = user.admin
      ? AssignTokenToAdmin(res, user._id)
      : AssignTokenToUser(res, user._id);

    return res.status(200).json({ success: true, user, token });
  } catch (error) {
    console.error("signin error", error);
    return res.status(500).json("Server error");
  }
};

export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleCallback = (req, res, next) => {
  passport.authenticate("google", { session: false }, (err, user) => {
    if (!user || err) {
      console.error("Google auth error:", err);
      return res.status(500).json({ success: false, message: "Try again later" });
    }

    user.admin
      ? AssignTokenToAdmin(res, user._id)
      : AssignTokenToUser(res, user._id);

    res.redirect("http://localhost:3000");
  })(req, res, next);
};

export const githubAuth = passport.authenticate("github", {
  scope: ["profile", "email"],
});

export const githubCallback = (req, res, next) => {
  passport.authenticate("github", { session: false }, (err, user) => {
    if (!user || err) {
      console.error("GitHub auth error:", err);
      return res.status(500).json({ success: false, message: "Try again later" });
    }

    user.admin
      ? AssignTokenToAdmin(res, user._id)
      : AssignTokenToUser(res, user._id);

    res.redirect("http://localhost:3000");
  })(req, res, next);
};
