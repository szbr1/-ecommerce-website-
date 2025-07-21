import mongoose from  "mongoose"

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Object,
        default: {}
    }
}, {minimize: false});


const User = mongoose.model("users", UserSchema)

export default User;