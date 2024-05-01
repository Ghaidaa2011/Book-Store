import { createSlice } from "@reduxjs/toolkit";
import actGetBook from "./act/actGetBook";
import { TBook } from "../types/book";
import { TLoading } from "../types/shared";


interface IBooksState {
  books: TBook[];
  loading: TLoading;
  error: string | null;
}

const initialState: IBooksState = {
  books: [],
  loading: "idle",
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(actGetBook.pending,(state)=>{
      state.loading= "pending";
      state.error = null;
    });
    builder.addCase(actGetBook.fulfilled,(state, action)=>{
      state.loading= "succeeded";
      state.books= action.payload;
    });
    builder.addCase(actGetBook.rejected,(state,action)=>{
      state.loading= "failed";
      if(action.payload && typeof action.payload === "string"){
        state.error = action.payload
      }
    });
  }
})
export {actGetBook}
export default bookSlice.reducer;