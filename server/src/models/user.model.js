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
        required: function () {
            return !this.googleId && !this.githubId;
          }
    },
    githubId: {
        type: String,

    },
    googleId: {
        type: String,

    },
    avatar: {
        type: String
    },
    gitAvatar: {
        type: String
    },
    cart: {
        type: Object,
        default: {}
    }
}, {minimize: false});


const User = mongoose.model("users", UserSchema)

export default User;