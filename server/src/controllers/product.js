import cloudinary from "../config/cloudinary.js";
import Product from "../models/product.model.js";


export const add  =  async(req , res)=>{
    try {

        const {description, category,name,price,subcategory,sizes, bestseller} = req.body;
        if(!description || !name || !price || !category || !subcategory){
            return res.status(400).json({success:false, message: "All fields required before publishing product"})
        }

        //  we get images using req.files bcz of multer middleware.
                                        
         const image1 = req.files?.image1 && req.files?.image1[0]
         const image2 = req.files?.image2 && req.files?.image2[0]
         const image3 = req.files?.image3 && req.files?.image3[0]
         const image4 = req.files?.image4 && req.files?.image4[0]
        //                                ^  we use && this becases if no file exist it should ignore the variable to save in db
        
        const productImages = [image1,image2,image3,image4].filter(item => item !== undefined)
        
        const images =await Promise.all(productImages.map(async(item) => {
            
              let result = await cloudinary.uploader.upload(item.path,{resource_type: "image"})
              return result.secure_url
        }))


      const product =   await Product.create({
            name,
            price,
            description,
            category,
            subcategory,
            sizes,
            bestseller,
            images
        })

        return res.status(200)
        .json({ succsse: true , products: product})
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