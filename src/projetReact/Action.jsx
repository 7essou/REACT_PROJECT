import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getusers = createAsyncThunk("getUsers", async () => {

        const response = await axios.get("http://127.0.0.1:8000/api/user");
        return response.data; // Ensure the data is returned
    
});

