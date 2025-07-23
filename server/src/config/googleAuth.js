import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const avatar = profile.photos?.[0]?.value;

        let user = await User.findOne({ email });

        if (user) {
      
          if (!user.googleId) {
            user.googleId = profile.id;
            user.avatar = avatar;
            await user.save();
          }
        } else {
          // 🆕 Create new user
          user = await User.create({
            email,
            username: profile.displayName,
            googleId: profile.id,
            avatar,
          });
        }

        return done(null, user);
      } catch (error) {
        console.error("GoogleAuth Error", error);
        return done(error, null);
      }
    }
  )
);
