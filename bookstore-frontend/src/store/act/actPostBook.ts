import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TBook } from "../../types/book";

const actPostBook = createAsyncThunk("book/actPostBook", async(data:TBook, thunkAPI)=>{
  const {rejectWithValue, getState} = thunkAPI;
  try {
    data.userName = getState().auth.name;
    const response = await axios.post("http://localhost:3009/books", data);
    return response.data;
    } catch (error) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data.message || error.message);
    }else {
      return rejectWithValue("An unexpected error");
    }
  }
});

export default actPostBook;