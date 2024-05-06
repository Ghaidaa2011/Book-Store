import { createSlice } from "@reduxjs/toolkit";

type TLogs = {
  name: string,
  status: string
}
interface IInitialState {
  logs:TLogs[]
}
const initialState:IInitialState = {
  logs: []
}
const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers:{
    logInsert:(state, action)=>{
      state.logs.push(action.payload);
    }
  }
})
export const {logInsert} = reportSlice.actions;
export default reportSlice.reducer;