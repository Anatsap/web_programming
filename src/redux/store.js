import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'; 
import { loadState, saveState } from './localStorage';
import counterReducer from './counterSlice'
import formReducer from './formSlice'

const persistedStore = loadState();
const store = configureStore({
    reducer: {
      // counter: counterReducer,
      cart: cartSlice,
      form: formReducer,
    },
    preloadedState: persistedStore, 
    
})
store.subscribe(() => {
    saveState(store.getState());
  });
  
export default store;


// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     quantity: 0,
//   },
//   reducers: {
//     addProduct: (state, { payload }) => {
//       const product = state.products.find(
//         (product) => product.id === payload.id
//       );
//        if (product) {
//         state = state.products.map((product) =>
//           product.id === payload.id
//             ? {
//                 ...product,
//                 quantity: (product.quantity += payload.quantity),
//               }
//             : product
//         );
//       } else {
//         state.products.push(payload);
//         state.quantity += 1;
//       }
//     },
//     incQuantity: (state, { payload }) => {
//       const product = state.products.find((product) => product.id === payload);
//       product.quantity++;
//     },
//     decQuantity: (state, { payload }) => {
//       const product = state.products.find((product) => product.id === payload);
//       if (product.quantity === 1) {
//         const index = state.products.findIndex(
//           (product) => product.id === payload
//         );
//         state.products.splice(index, 1);
//       } else {
//         product.quantity--;
//       }
//     },
//     removeProduct: (state, { payload }) => {
//       const index = state.products.findIndex(
//         (product) => product.id === payload
//       );
//       state.products.splice(index, 1);
//     },
//   },
// });

// export const { addProduct, incQuantity, decQuantity, removeProduct } =
//   cartSlice.actions;

// export default cartSlice.reducer;
