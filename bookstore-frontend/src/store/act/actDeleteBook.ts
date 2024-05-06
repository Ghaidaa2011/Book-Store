import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actDeleteBook = createAsyncThunk("book/actDeleteBook", async(id:number, thunkAPI)=>{
  const {rejectWithValue} = thunkAPI;
  try {
    await axios.delete(`http://localhost:3009/books/${id}`);
    return id;
    } catch (error) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data.message || error.message);
    }else {
      return rejectWithValue("An unexpected error");
    }
  }
});
export default actDeleteBook; 