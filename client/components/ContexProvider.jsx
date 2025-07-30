"use client"
import { createContext, useEffect, useReducer, useState } from "react";
  

// Cart actions
const CART_ACTIONS = {

  ADDTOCART: "addintoCart",
  REMOVEFROMCART: "removeItemFromCart",
  UPADATEQUANTITY: "updateItemQuantity",
  CLEARCART: "clearCart"
}



export const Context = createContext();

function ContextProvider({children}){
    const initialState = {
                           items: [],
                        
                         } 
              
    const reducer = (state, action)=>{
          switch (action.type) {

            case CART_ACTIONS.ADDTOCART:{
                const {itemId, size, price} = action.payload;
                const existProduct = state.items.findIndex(item => item.itemId === itemId && item.size === size);
                if(existProduct !== -1){
                  const upadatedProduct =  state.items.map((item , index)=> {
                   return   index === existProduct ? 
                      {...item, quantity: item.quantity+1}
                       : item
                    })

                    return { ...state, items: upadatedProduct}
                
                }


              return {
                ...state,
                items:[ {itemId:itemId, price: price,  size: size, quantity: 1}, ...state.items ]
              }
              
            }
            case CART_ACTIONS.REMOVEFROMCART : {
               const {itemId, size} = action.payload;
            
               
              const jhon = state.items.filter(item => !(item.itemId === itemId && item.size === size))
              console.log("josh",jhon)
               return {
                ...state,
                items: jhon
               }

                 
               
            }

            case CART_ACTIONS.UPADATEQUANTITY: {
              const {itemId, size, quantity} = action.payload;
              const clone = structuredClone(state.items)

              const product =  clone.find(item => item.itemId === itemId && item.size === size);
              const filteredProduct = clone.filter(item=> !(item.itemId === itemId && item.size === size))
            

              return {
                ...state,
                items: [{...product, quantity: quantity},...filteredProduct ]
              }
            }
              
            default: return state;
          }
    }
    // state mangement
    const [state, dispatch] = useReducer(reducer , initialState)
    const [deliver_fee, setDeliveryFee] = useState(10)
    const [totalPayment, setTotalPayment] = useState(0)

    // function providers
    function addtoCart(itemId,size,price){
        dispatch({
          type: CART_ACTIONS.ADDTOCART,
          payload: {itemId, size,price}
        })
    }
    function removeFromCart(itemId, size){
        dispatch({
          type: CART_ACTIONS.REMOVEFROMCART,
          payload: {itemId, size}
        })
    }
    function clearCart(){
       type: CART_ACTIONS.CLEARCART
    }

    function updateQuantity(itemId, size, quantity){
      dispatch({
        type:  CART_ACTIONS.UPADATEQUANTITY,
        payload: {itemId, size , quantity}
      })
    }
    
    useEffect(()=>{
      
     setTotalPayment(()=> state.items.reduce((acc, item)=> acc+ item.price *item.quantity, 0))
       console.log(totalPayment)
    },[state, totalPayment])


return (
  <Context.Provider value={{addtoCart,deliver_fee,totalPayment, cartItems: state.items, updateQuantity, removeFromCart}}>
    {children}
  </Context.Provider>
)
}

export default ContextProvider;