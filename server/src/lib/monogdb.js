import mongoose from "mongoose";

const mongoDBconnection =async ()=>{
    try {
        const {connection} =  await mongoose.connect(process.env.MONGO_URI)
        console.log(" ✅ Succesfully conneted ", connection.host);
        
    } catch (error) {
        console.log("❌ Failed to connect with db")
     process.exit()
        
    }
}

export default mongoDBconnection