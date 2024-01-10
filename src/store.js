import { configureStore } from '@reduxjs/toolkit';
import homePageSlice from './homePageSlice';
import itemSlice from './itemSlice';
import wishlistSlice from './wishlistSlice'

const store = configureStore({
    reducer:{
        itemList : itemSlice,
        cart : homePageSlice,
        wishList : wishlistSlice,
    }
})

export default store;