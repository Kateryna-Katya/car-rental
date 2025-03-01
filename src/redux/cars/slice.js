import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchAllBrands, fetchFilteredCars } from "./operation";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    allCars: {
      cars: [],
      totalCars: null,
      page: null,
      totalPages: 1,
    },
    brands: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const existingIds = new Set(state.allCars.cars.map((car) => car.id));
        const newCars = action.payload.cars.filter(
          (car) => !existingIds.has(car.id)
        );

        state.allCars.cars = state.allCars.page
          ? [...state.allCars.cars, ...newCars]
          : action.payload.cars;

        state.allCars.totalCars = action.payload.totalCars;
        state.allCars.page = action.payload.page;
        state.allCars.totalPages = action.payload.totalPages;
      })

      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(fetchAllBrands.pending, handlePending)
      .addCase(fetchAllBrands.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = null),
          (state.brands = action.payload);
      })
      .addCase(fetchAllBrands.rejected, handleRejected)
      .addCase(fetchFilteredCars.pending, handlePending)
      .addCase(fetchFilteredCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.allCars.cars = action.payload.cars;
        state.allCars.totalCars = action.payload.totalCars;
        state.allCars.page = action.payload.page;
        state.allCars.totalPages = action.payload.totalPages;
      })
      .addCase(fetchFilteredCars.rejected, handleRejected);
  },
});
export default carsSlice.reducer;
