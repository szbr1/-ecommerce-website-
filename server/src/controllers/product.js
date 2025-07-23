

export const add  =  async(req , res)=>{
    try {
        const {description, category,name,price,subcategory,sizes, bestseller} = req.body;
         console.log("plot 1")
        //  we get images using multer 
         const image1 = req.files.image1[0]
         const image2 = req.files.image2[0]
         const image3 = req.files.image3[0]
         const image4 = req.files.image4[0]
         console.log("plot 2")
      console.log(image1,image2,image3,image4)
        return res.status(200).json({
           succsse: true
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json("Server error")
    }
}



// export const   =  async(req , res)=>{
//     try {
        
//     } catch (error) {
        
//     }
// }



// export const   =  async(req , res)=>{
//     try {
        
//     } catch (error) {
        
//     }
// }