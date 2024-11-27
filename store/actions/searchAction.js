import axios from "axios";
import {
  setSearchImages,
  setHasMore,
  setPage,
} from "../reducers/searchReducers";

export const asyncSetImages = (a) => async (dispatch, getState) => {
  try {
    const query = a;
    const { page } = getState().searchReducer;
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_UNSPLASH_BASE_URL}search/photos?${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}${page}&query=${query}&per_page=12`
    );

    page >= 5 || data.results.length === 0 ? dispatch(setHasMore(false)) : dispatch(setHasMore(true));

    dispatch(setSearchImages({ query, images: data.results }));
    dispatch(setPage(page + 1));
  } catch (error) {
    console.log(error);
  }
};
