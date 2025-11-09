import { createSlice } from "@reduxjs/toolkit";

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
                existingItem.quantity += newItem.quantity || 1; // Increment by new quantity or 1
            } else {
                state.cart.push({ ...newItem, quantity: newItem.quantity || 1 });
            }
            },

        removefromCart : (state, action) => {
            state.cart = state.cart.filter(x => x.id !== action.payload.id)
        }
    }

})
export default cartSlice.reducer;
export const {addtoCart, removefromCart} = cartSlice.actions;

