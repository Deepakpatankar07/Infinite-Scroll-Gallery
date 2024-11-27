import {configureStore} from '@reduxjs/toolkit'
import unsplashReducer from './reducers/unsplashReducers'
import searchReducer from './reducers/searchReducers'
export const store =  configureStore({
    reducer: { 
        unsplashReducer,
        searchReducer,
     },
})