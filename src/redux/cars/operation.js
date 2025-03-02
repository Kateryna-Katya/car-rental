import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAll",
  async (page=1, thunkApi) => {
    try {
      const response = await axios.get("/cars",{ params: { page } });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchAllBrands = createAsyncThunk(
  "brend/fetchBrands",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/brands");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchFilteredCars = createAsyncThunk(
  "cars/fetchFiltered",
  async (filters, thunkApi) => {
    try {
  
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v !== "" && v !== undefined)
      );
      const response = await axios.get("/cars", { params: cleanFilters });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
