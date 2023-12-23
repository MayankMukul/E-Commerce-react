import { createSlice } from '@reduxjs/toolkit';
import DATA from '../CONSTANT/CONST_DATA';

const homePageSlice = createSlice({
    name: 'home',
    initialState: {
        items:[]
    },
    reducers:{
            addItem:(state,action)=>{
                state.items.push(action.payload)
            },
            removeItem:(state,action)=>{
                state.items.splice(state.items.indexOf(action.payload),1);
            }
    }

})

export const {addItem, removeItem}  = homePageSlice.actions;

export default homePageSlice.reducer;   