import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
  favourites: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    addToFavorites: (state, action) => {
      if (!state.favourites.find((car) => car.id === action.payload.id)) {
        state.favourites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favourites = state.favourites.filter((car) => car.id !== action.payload);
    },
  },
});

export const { setFilters, resetFilters, addToFavorites, removeFromFavorites } = filtersSlice.actions;
export default filtersSlice.reducer;