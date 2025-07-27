

export const razorpay = (req,res)=>{
    try {
        const {userId, 
               items, 
               amount, 
               address, 
               paymentMethod, 
               payment} = req.body;

               
    } catch (error) {
        console.error(error)
        return res.status(500).json("Server Error")
    }
}


export const stripe = (req,res)=>{
    try {
        
    } catch (error) {
        console.error(error)
        return res.status(500).json("Server Error")
    }
}


export const cashOnDelivery = (req,res)=>{
    try {
        
    } catch (error) {
        console.error(error)
        return res.status(500).json("Server Error")
    }
}