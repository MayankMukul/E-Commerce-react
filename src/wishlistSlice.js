import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items : []
    },
    reducers: {
        addToWishList:(state, action)=>{  
            state.items.push(action.payload)
        },
        removeFromWishList:(state, action)=> {
            state.items.splice(state.items.indexOf(action.payload),1);  
        },  
        clearWishList:(state)=>{
            state.items=[];
        }
    }
})

export const{addToWishList, removeFromWishList, clearWishList}  = wishlistSlice.actions;

export default wishlistSlice.reducer;