import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import uiReducer from './uiSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    ui: uiReducer,
  },
});

export default store;