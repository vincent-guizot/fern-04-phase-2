import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchProductSuccess: (state, action) => {
      state.loading = false;
      state.data = [...action.payload];
    },
  },
});

export const { fetchProductFailure, fetchProductStart, fetchProductSuccess } =
  productSlice.actions;
export default productSlice.reducer;
