import { createSlice } from "@reduxjs/toolkit";

// export const getTotal = (state) => {
//   return state.cart.reduce(
//         (amount, item) => parseInt(item.price * item.quantity) + amount, 0)
// }

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart : (state, action) => {
            const newItem = action.payload
            const existingItem = state.cart.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity || 1; 
            } else {
                state.cart.push({ ...newItem, quantity: newItem.quantity || 1 });
            }
            },
        increment : (state, action) => {
            const newItem = state.cart.find(item => item.id === action.payload)
            if(newItem){
                newItem.quantity++;
            }
        },
        decrement : (state, action) => {
            const newItem = state.cart.find(item => item.id === action.payload)
            if (newItem.quantity > 1) {
                newItem.quantity--;
            }else{
                state.cart = state.cart.filter(item => item.id !== action.payload)
            }

        },
        removefromCart : (state, action) => {
            state.cart = state.cart.filter(x => x.id !== action.payload.id)
        },
        getTotal: (state) => {
            return state.cart.reduce(
              (amount, item) => amount + parseInt(item.price * item.quantity),
              0
            );
          }
    }

})
export default cartSlice.reducer;
export const {addtoCart, removefromCart, increment, decrement, getTotal} = cartSlice.actions;

