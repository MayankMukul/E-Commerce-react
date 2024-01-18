import { configureStore } from '@reduxjs/toolkit';
import homePageSlice from './homePageSlice';
import itemSlice from './itemSlice';
import wishlistSlice from './wishlistSlice'
import profileSlice from './profileSlice.js';

const store = configureStore({
    reducer:{
        itemList : itemSlice,
        cart : homePageSlice,
        wishList : wishlistSlice,
        profile : profileSlice,
    }
})

export default store;