import User from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import AssignToken from "../config/jwt.js";
import passport from "passport";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let emailCheck = await User.findOne({ email });

     if(emailCheck && (emailCheck.githubId || emailCheck.googleId) && !emailCheck.password){
      if (!validator.isStrongPassword(password, { minLength: 8 })) {
        return res.status(400).json("Please choose strong password");
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

    
  
      emailCheck.password = hashedPassword
      await emailCheck.save()
      const token = AssignToken(res, emailCheck._id)
      return res.status(200).json({success: true, token})

      
     }else{
      if (!validator.isEmail(email)) {
        return res.status(400).json("Please enter valid email");
      }
      if (!validator.isStrongPassword(password, { minLength: 8 })) {
        return res.status(400).json("Please choose strong password");
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const saveUsertoDB = new User({
        username,
        email,
        password: hashedPassword,
      });
  
      await saveUsertoDB.save();
      const token = AssignToken(res, saveUsertoDB._id);
      return res.status(200).json({ success: true, saveUsertoDB, token });
     }
  } catch (error) {
    console.error("signup error", error);
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const IdentiyCheck = await User.findOne({ email });

    if (!IdentiyCheck) {
      return res.status("401").json("Invalid Credentials. Try to signup");
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json("Please enter valid email");
    }
    if (!validator.isStrongPassword(password, { minLength: 8 })) {
      return res.status(400).json("Please choose strong password");
    }

    const PassChecking = await bcrypt.compare(password, IdentiyCheck.password);

    if (!PassChecking) {
      return res.status(401).json("Invalid Credentials. Try to signup");
    }

    const token = AssignToken(res, IdentiyCheck._id);
    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
};

export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleCallback = (req,res,next)=>{
     passport.authenticate("google",{session:false}, (err, user)=>{
        if(!user || err){
            console.log(err)
            return res.status(500).json({success:false, message:"try again later"})
        }

        const token = AssignToken(res, user.id)

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "Lax",
            secure: false,
        } )

        res.redirect("http://localhost:3000")
     })(req,res,next)
}

export const githubAuth = passport.authenticate("github", {scope: ["profile", "email"] })

export const githubCallback = (req,res,next)=>{
    passport.authenticate("github",{session:false}, (err,user)=>{
           if(!user || err ){
            console.error(err, "github auth error")
           }

           const token = AssignToken(res, user.id)

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "Lax",
            secure: false
        })

        res.redirect("http://localhost:3000"); 
    })(req,res,next)
}