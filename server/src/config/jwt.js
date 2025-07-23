import jwt from "jsonwebtoken"

const AssignToken = (res,userId,next)=>{
    try {
        if(!userId){
            return res.status(400).json("User Not Found")
        }
         const token = jwt.sign(
            {userId},process.env.JWT_ASSIGN, 
            {expiresIn: "30d"})

            res.cookie("token", token, {
                maxAge: "30d",
                sameSite: "strict",
                secure: true,
                httpOnly: true
            })
    } catch (error) {
        console.error(error, "AssignTokenIssue")
    }
   
}

export default AssignToken