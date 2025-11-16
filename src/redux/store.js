import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'; 
import { loadState, saveState } from './localStorage';

const persistedStore = loadState();
const store = configureStore({
    reducer: {
    cart: cartSlice,
    },
    preloadedState: persistedStore, 
    
})
store.subscribe(() => {
    saveState(store.getState());
  });
  
export default store;
