// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         cart: []
//     },
//     reducers: {
//         addtoCart : (state, action) => {
//             const newItem = action.payload
//             // const existingItem = state.cart.find(item => item.id === newItem.id);
//             // if (existingItem) {
//             //     existingItem.quantity += newItem.quantity || 1; 
//             // } else {
//                 state.cart.push({ ...newItem, quantity: newItem.quantity || 1 });
//             },
//             // },

//         removefromCart : (state, action) => {
//             state.cart = state.cart.filter(x => x.id !== action.payload.id)
//         }
//     }

// })
// export default cartSlice.reducer;
// export const {addtoCart, removefromCart} = cartSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
function Counter (){
  const count = useSelector(state => state.cart)
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart : (state, action) => {
          const newItem = action.payload
          state.cart.push({ ...newItem, quantity: newItem.quantity || 1 });
    // existingItem
    //     ? (existingItem.quantity += quantity)
    //     : (state.items[item.id] = { item, quantity });
    },

        removeFromCart: (state, action) => {
          // const itemIdToRemove = action.payload;
          state.cart = state.cart.filter(x => x.id !== action.payload.id)
          // delete state.items[itemIdToRemove];
        },

updateItemQuantity: (state, action) => {
  const { id, quantity } = action.payload;
  if (state.items[id]) {
    state.items[id].quantity = Math.max(quantity, 0);
  }
  if (state.items[id].quantity === 0) {
    delete state.items[id];
  }
},

updateCartPrices: (state, action) => {
  const exchangeRate = action.payload; 
  state.defaultItems = { ...state.items };

  Object.keys(state.items).forEach((itemId) => {
    const item = { ...state.items[itemId].item };
    item.price *= 2; 
    state.items[itemId].item = item;
  });
  console.log("in updatecartprices");
},
}, });
export const { addtoCart, removefromCart, updateItemQuantity, updateCartPrices} = cartSlice.actions;
export default cartSlice.reducer;
