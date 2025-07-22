import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";
import User from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback",
    },
    async (_, __, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const avatar = profile.photos?.[0]?.value;

        let user = await User.findOne({ email });

        if (user) {
          // Link GitHub account if not linked already
          if (!user.githubId) {
            user.githubId = profile.id;
            user.gitAvatar = avatar;
            await user.save();
          }
        } else {
          // Create new user
          user = await User.create({
            email,
            username: profile.displayName || profile.username,
            githubId: profile.id,
            gitAvatar: avatar,
          });
        }

        return done(null, user);
      } catch (error) {
        console.error("Github Error Server", error);
        return done(error, null);
      }
    }
  )
);
