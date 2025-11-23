import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'; 
import { loadState, saveState } from './localStorage';
import counterReducer from './counterSlice'
import formReducer from './formSlice'

const persistedStore = loadState();
const store = configureStore({
    reducer: {
      cart: cartSlice,
      form: formReducer,
    },
    preloadedState: persistedStore, 
    
})
store.subscribe(() => {
    saveState(store.getState());
  });
  
export default store;
