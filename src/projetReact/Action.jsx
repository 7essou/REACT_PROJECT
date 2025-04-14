import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getusers = createAsyncThunk("getUsers", async () => {
    try{
        const response = await axios.get("http://127.0.0.1:8000/api/user");
        return response.data; 
    }
    catch(error){
        console.error(error.message)
    }
});
export const adduser = createAsyncThunk("add/user", async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/user", user);
        console.log("User Added:", response.data); 
        return response.data;
    } catch (error) {
        console.error( error.message);
       
    }
});
export const getArtists = createAsyncThunk('artists/getArtists', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/artist');
        return response.data; // Return data if the request is successful
    } catch (error) {
        console.error("Error fetching artists:", error.response?.data || error.message);
        return rejectWithValue(error.response?.data || "An error occurred"); // Rejecting with value for proper error handling
    }
});
export const createArtist = createAsyncThunk('create/artists',async (artist,{ rejectWithValue })=>{
  try{
    const response = await axios.post('http://127.0.0.1:8000/api/artist',artist)
    return response.data 
  }
  catch(error){
    console.error("Error fetching artists:", error.response?.data || error.message);
        return rejectWithValue(error.response?.data || "An error occurred");
  }
})
export const updateArtist = createAsyncThunk('update/artist', async (artistdata, { rejectWithValue }) => {
    try {
      const id = JSON.parse(artistdata.get('artist')).id;
  
      const response = await axios.post(
        `http://127.0.0.1:8000/api/artist/${id}?_method=PUT`, // Laravel understands this
        artistdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error("Error updating artist:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  });

  export const addImg =createAsyncThunk('add/image', async (image, { rejectWithValue })=>{
    try{
    const response = await axios.post('http://127.0.0.1:8000/api/image',image,{
     headers : {
      'Content-Type': 'multipart/form-data',
    }})
    return response.data
  }
  catch (error) {
  console.error("Error updating artist:", error.response?.data || error.message);
  return rejectWithValue(error.response?.data || "An error occurred");
  }})

  export const getimages = createAsyncThunk("get/images", async () => {
    try{
        const response = await axios.get("http://127.0.0.1:8000/api/image");
        return response.data; 
    }
    catch(error){
        console.error(error.message)
    }
});

