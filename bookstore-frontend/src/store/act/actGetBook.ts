import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TBook } from "../../types/book";

type TResponse = TBook[];
                                                        // "  _  " arg is the data that i send to the dispatch action
const actGetBook = createAsyncThunk("book/actGetBook", async(_,thunkAPI)=>{
  const {rejectWithValue} = thunkAPI;
  try {
    const response = await axios.get<TResponse>("http://localhost:3009/books");
    return response.data;
  } catch (error) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data.message || error.message);
    }else {
      return rejectWithValue("An unexpected error");
    }
  }
})
export default actGetBook;