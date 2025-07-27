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
        const isAdmin = email === process.env.ADMIN_VALUE;

        let user = await User.findOne({ email });

        if (user) {
          if (!user.githubId) {
            user.githubId = profile.id;
            user.gitAvatar = avatar;
            if (isAdmin) user.admin = true;
            await user.save();
          }
        } else {
          user = await User.create({
            email,
            username: profile.displayName || profile.username,
            githubId: profile.id,
            gitAvatar: avatar,
            admin: isAdmin,
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
