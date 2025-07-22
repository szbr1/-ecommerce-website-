import express from "express";
import { githubAuth, githubCallback, googleAuth, googleCallback, signin, signup } from "../controllers/auth.js";


const router = express.Router()


router.post("/signup", signup);
router.post("/signin", signin);
router.get("/google", googleAuth);
router.get("/google/callback", googleCallback);
router.get("/github", githubAuth);
router.get("/github/callback", githubCallback);


export default router;