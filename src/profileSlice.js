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
        setProfileUsername:(state,action) =>{
            state.items.username = action.payload;
        },
        setProfileEmail : (state, action)=>{
            state.items.email=action.payload;
        }
    }
})

export const {setProfileUsername, setProfileEmail}  = profileSlice.actions;

export default profileSlice.reducer;