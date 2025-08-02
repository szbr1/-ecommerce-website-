import Order from "../models/order.model.js";
import User from "../models/user.model.js";

export const placeOrder = async (req, res) => {
  try {
    const { order, amount, address, paymentMethod } = req.body;
    console.log("YOUR BODY", req.body)

    const newOrder = await Order.create({
      order,
      amount,
      address,
      userId: req.userId,
      paymentMethod,
      payment: paymentMethod === "cod" ? false : true,
    });

    await User.findByIdAndUpdate(req.userId, {cart: []});

    return res.status(200).json({success: true, Message:"Order submit successfully", newOrder})


  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error");
  }
};

export const getPlacedOrders = async(req, res) => {
  try {

   

    const orders = await Order.find({userId: req.userId})

    return res.status(200).json(orders)
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error");
  }
};

export const updateStatus = async(req, res) => {
     
  try {

    const {status, orderId} = req.body;
     await Order.findOneAndUpdate({_id: orderId, userId:req.userId }, {$set: {  status    }});
    res.status(200).json("Successfully status Updated")
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error");
  }
};
