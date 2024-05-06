import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TBook } from "../../types/book";
import { logInsert } from "../reportSlice";
// import actDeleteBook from "./actDeleteBook";

interface State {
  auth: {
    name: string;
  };
}
const actPostBook = createAsyncThunk<TBook, TBook, { state: State }>("book/actPostBook", async(data, thunkAPI)=>{
  const {rejectWithValue, getState, dispatch} = thunkAPI;
  try {
    data.userName = getState().auth.name;
    //also can dispatch and async thunk 
    // dispatch(actDeleteBook({id:3}))
    const response = await axios.post("http://localhost:3009/books", data);
    dispatch(logInsert({name:"insert a book", status:"success"}));
    return response.data;
    } catch (error) {
    if(axios.isAxiosError(error)){
      dispatch(logInsert({name:"did not insert a book", status:"failed"}))

      return rejectWithValue(error.response?.data.message || error.message);
    }else {
      return rejectWithValue("An unexpected error");
    }
  }
});

export default actPostBook; 