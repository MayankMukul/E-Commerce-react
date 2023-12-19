import { createSlice } from '@reduxjs/toolkit';

const homePage = createSlice({
    name: 'home',
    initialState: {
        items:[] 
    },
    reducers:{
            addItem:(state,action)=>{
                state.items.push(action.payload)
            }
    }

})

export const {addItem}  = homePage.actions;

export default homePage.reducer;   