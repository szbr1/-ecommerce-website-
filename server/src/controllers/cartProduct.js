import User from "../models/user.model.js";



export const addToCart = async (req, res) => {
  try {
    const { itemId, size, price } = req.body;

    console.log(itemId, size, price)
    console.log("userId:", req.userId)

    if (!itemId || !size || !price) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const user = await User.findById(req.userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if the item with same itemId and size already exists
    const existingItemIndex = user.cart.findIndex(
      (item) =>
        item.itemId.toString() === itemId && item.size === size
    );

    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      user.cart[existingItemIndex].quantity += 1;
    } else {
      // New item, push to cart
      user.cart.push({
        itemId,
        size,
        price,
        quantity: 1,
      });
    }

    await user.save();

    res.status(200).json({ message: "Item added to cart", cart: user.cart });

  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const allProductsInCart = async(req,res)=>{
  try {
    const products = await User.findById(req.userId, {cart: 1, _id: 0})
    console.log("UserId:", req.userId)
    console.log("ProductsFromBackend:",products)
    return res.status(200).json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json("Server Error Try again later")
  }
}

export const deleteProduct = async (req,res)=>{
  try {
    const {itemId, size} = req.body;

    if(!itemId || !size){
        return res.status(401).json("Failed to Delete")
    }
    await User.findByIdAndUpdate(req.userId,{
      $pull: {
        cart: {itemId, size}

      }
    },{new: true})
    res.status(200).json("Successfully removed from cart")
  } catch (error) {
    console.error(error)
    return res.status(500).json("Please select the product to delete")
  }
  
}

export const updateQuantity = async (req,res)=> {
  try {
    const {itemId,size, quantity} = req.body;
    if(!itemId || !quantity || !size){
     return res.status(400).json("Please provide the actual data")
    }
    const result = await User.updateOne(
      {
        _id: req.userId,
        "cart.itemId": itemId,
        "cart.size": size
      },
       {$set: {"cart.$.quantity": quantity}}
    )

    res.status(200).json({ message: "Quantity updated successfully", result });
  } catch (error) {
    console.error(error) 
    return res.status(500).json("Server error can't update the quantity now")
  }
}