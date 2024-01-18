import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState : {
        items : {
            username:"Guest" ,
            email:"guest@gmail.com",
        }
    },
    reducers : {
        setProfile:(state,action) =>{

        }
    }
})

export const {setProfile}  = profileSlice.actions;

export default profileSlice.reducer;