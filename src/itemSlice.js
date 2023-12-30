import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name : 'itemlist',
    initialState: {
        items : [],
    },
    reducers : {
            addList : (state, action)=>{
                state.items = action.payload
            }
    }
})

export const { addList } = itemSlice.actions;

export default itemSlice.reducer;
