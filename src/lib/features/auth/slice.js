import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    value:{
        accessToken:0,

    }
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      logOut:()=>{
        return initialState;
      },
      logIn: (state, action) => {
        return{
            value:{
                accessToken:action.payload,
            }
        }
      }

    },
  });

  export const { logOut, logIn } = authSlice.actions;
export default authSlice.reducer;