import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  name: string;
  isLoggedIn: boolean;
}
const initialState: IAuthState = {
  name: "Kareem",
  isLoggedIn: false,
};
const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    logInOut: (state)=>{
      state.isLoggedIn = !state.isLoggedIn;
    }
  },
});
export const {logInOut} = authSlice.actions;
export default authSlice.reducer;