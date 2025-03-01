import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/cars");
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
      const response = await axios.get("/cars", { params: filters });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
