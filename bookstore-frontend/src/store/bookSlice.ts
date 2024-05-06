import { createSlice } from "@reduxjs/toolkit";
import actGetBook from "./act/actGetBook";
import actPostBook from "./act/actPostBook";
import actDeleteBook from "./act/actDeleteBook";
// import actReadBook from "./act/actReadBook";

import { TBook } from "../types/book";
import { TLoading } from "../types/shared";


interface IBooksState {
  books: TBook[];
  loading: TLoading;
  error: string | null;
  // bookInfo: TBook | null;
}

const initialState: IBooksState = {
  books: [],
  loading: "idle",
  error: null,
  // bookInfo: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    //get books
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
    //post a book
    builder.addCase(actPostBook.pending,(state)=>{
      state.loading= "pending";
      state.error = null;
    });
    builder.addCase(actPostBook.fulfilled,(state, action)=>{
      state.loading= "succeeded";
      state.books.push(action.payload);
    });
    builder.addCase(actPostBook.rejected,(state,action)=>{
      state.loading= "failed";
      if(action.payload && typeof action.payload === "string"){
        state.error = action.payload
      }
    });
    //delete a book
    builder.addCase(actDeleteBook.pending,(state)=>{
      state.loading= "pending";
      state.error = null;
    });
    builder.addCase(actDeleteBook.fulfilled,(state, action)=>{
      state.loading= "succeeded";
      state.books = state.books.filter((el)=> el.id != action.payload);
      // If the deleted book is currently being viewed, remove it from bookInfo
      // if (state.bookInfo && state.bookInfo.id === action.payload) {
      //   state.bookInfo = null;
      // }
    });
    builder.addCase(actDeleteBook.rejected,(state,action)=>{
      state.loading= "failed";
      if(action.payload && typeof action.payload === "string"){
        state.error = action.payload
      }
    });
        //Read a book
        // builder.addCase(actReadBook.fulfilled,(state, action)=>{
        //   state.loading= "succeeded";
        //   state.bookInfo = action.payload;
        // });
  }
})
export {actGetBook, actPostBook, actDeleteBook, 
  // actReadBook
};
export default bookSlice.reducer;