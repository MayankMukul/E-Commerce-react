import { configureStore } from '@reduxjs/toolkit';
import homePageSlice from './homePageSlice';
import itemSlice from './itemSlice';

const store = configureStore({
    reducer:{
        itemList : itemSlice,
        cart : homePageSlice,
    }
})

export default store;