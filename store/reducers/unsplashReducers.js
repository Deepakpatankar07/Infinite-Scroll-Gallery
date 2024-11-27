import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  page: 1,
  hasMore: true,
};

const unsplashReducer = createSlice({
  name: "unsplash",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = [...state.images, ...action.payload];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
});

export const { setImages, setPage, setHasMore } = unsplashReducer.actions;
export default unsplashReducer.reducer;
