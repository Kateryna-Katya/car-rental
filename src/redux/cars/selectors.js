import { createSelector } from "@reduxjs/toolkit";

export const selectAllCars = createSelector(
  (state) => state.cars.allCars.cars,
  (cars) => {
    return cars
      ? Array.from(new Map(cars.map((car) => [car.id, car])).values())
      : [];
  }
);
export const selectAllBrands = (state) => state.cars.brands;
export const selectTotalPages = (state) => state.cars.allCars?.totalPages ?? 1;
export const selectPage = (state) => state.cars.carsPage.page;
export const selectLoading = (state) => state.cars.loading;
