import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

    userId:        {type: String, required: true},
    items:         {type: Array, required: true},
    amount:        {type: Number, required: true},
    address:       {type: Object, required: true},
    status:        {type: Boolean, required: true, default: "Order Placed"},
    paymentMethod: {type:String, required: true},
    payment:       {type: String, required: true, default: false},


},{timestamps: true});

const Order = mongoose.model("orders", OrderSchema);

export default Order;