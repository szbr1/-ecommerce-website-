import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required:true
    },
    sizes: {
        type: Array,
        require: true
    },
    bestseller: {
        type: Boolean,
        default: false
    },

},{timestamps: true})


const Product = mongoose.model("product", ProductSchema)

export default Product;