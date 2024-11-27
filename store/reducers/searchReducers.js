import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  hasMore: true,
  page: 1,
  currentQuery: "",
};

const searchReducer = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchImages: (state, action) => {
      const { query, images } = action.payload;

      switch (state.currentQuery) {
        case "":
          // First search, just set the current query and images
          return {
            ...state,
            currentQuery: query,
            images: [...state.images, ...images],
          };
        case query:
          // Same query, append images
          return {
            ...state,
            images: [...state.images, ...images],
          };
        default:
          // Different query, reset and set images
          return {
            ...state,
            currentQuery: query,
            images: images,
          };
      }
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
});

export const { setPage, setHasMore, setSearchImages } = searchReducer.actions;
export default searchReducer.reducer;
