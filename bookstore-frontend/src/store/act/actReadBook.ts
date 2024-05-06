// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { TBook } from "../../types/book";

// const actReadBook = createAsyncThunk("book/actReadBook", async(item:TBook, thunkAPI)=>{
//   const {rejectWithValue} = thunkAPI;
//   try {
//     await axios.get(`http://localhost:3009/books/${item.id}`);
//     return item;
//     } catch (error) {
//     if(axios.isAxiosError(error)){
//       return rejectWithValue(error.response?.data.message || error.message);
//     }else {
//       return rejectWithValue("An unexpected error");
//     }
//   }
// });
// export default actReadBook; 