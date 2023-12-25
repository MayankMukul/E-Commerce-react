import { configureStore } from '@reduxjs/toolkit';
import homePageSlice from './homePageSlice';

const store = configureStore({
    reducer:{
        cart:homePageSlice,
    }
})

export default store;