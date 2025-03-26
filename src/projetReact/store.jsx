import { configureStore } from "@reduxjs/toolkit";
import slice from "./silce";
 const store=configureStore({
    reducer:slice.reducer
 })
 export default store ;