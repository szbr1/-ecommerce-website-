import jwt from "jsonwebtoken"

const AssignToken = (res,userId,next)=>{
    try {
        if(!userId){
            return res.status(400).json("User Not Found")
        }
         const token = jwt.sign({userId},process.env.JWT_ASSIGN, {
            expiresIn: "30d"
        })
    } catch (error) {
        console.error(error, "AssignTokenIssue")
    }
   
}

export default AssignToken