import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

    order:         {type: Array,  required: true},
    amount:        {type: Number, required: true},
    address:       {type: Object, required: true},
    status:        {type: String,required: true, default: "Order Placed"},
    paymentMethod: {type:String,  required: true},
    payment:       {type: String, required: true, default: false},
    userId:       {type: String, required: true, unique: true},


},{timestamps: true});

const Order = mongoose.model("orders", OrderSchema);

export default Order;