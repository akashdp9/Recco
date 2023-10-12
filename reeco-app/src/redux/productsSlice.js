import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload
    },
    approveProduct: (state, action) => {
      const productId = action.payload;
      const product = state.find((p) => p.id === productId);
      if(product) {
        product.status = 'Approved';
      }
    },
    markUrgent: (state, action) => {
      const productId = action.payload;
      const product = state.find((p) => p.id === productId);
      if(product){
        product.status = 'Missing/Urgent';
      }
    },
    openUrgentPrompt: (state, action) => {
      state.isUrgentPromptOpen = true;
      state.productIdToMarkUrgent = action.payload;
    },
    closeUrgentPrompt: (state) => {
      state.isUrgentPromptOpen = false;
      state.productIdToMarkUrgent = null;
    },
  },
});

export const { setProducts, approveProduct, markUrgent, openUrgentPrompt, closeUrgentPrompt} = productsSlice.actions;
export default productsSlice.reducer;