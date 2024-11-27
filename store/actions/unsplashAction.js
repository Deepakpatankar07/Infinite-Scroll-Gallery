import axios from "axios";
import { setImages,setPage,setHasMore} from "../reducers/unsplashReducers";

export const asyncSetImages = () => async (dispatch, getState) => {
    try {
        const { page } = getState().unsplashReducer;
        const { data } = await axios(
            `${process.env.NEXT_PUBLIC_UNSPLASH_BASE_URL}photos?${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}${page}&per_page=12`
          );
        page >= 5 && dispatch(setHasMore(false));
        dispatch(setImages(data));
        dispatch(setPage(page + 1));
    } catch (error) {
        console.log(error)
    }
}
