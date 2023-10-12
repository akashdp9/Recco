// uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isUrgentPromptOpen: false,
    productIdToMarkUrgent: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
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

export const {  openUrgentPrompt, closeUrgentPrompt,  } = uiSlice.actions;
export default uiSlice.reducer;
