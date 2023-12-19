import { configureStore } from '@reduxjs/toolkit';
import homepage from './homePage';

const store = configureStore({
    reducer:{
        cart:homepage,
    }
})

export default store