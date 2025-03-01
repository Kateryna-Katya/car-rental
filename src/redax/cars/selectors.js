export const selectAllCars=state=>state.cars.allCars.cars;
export const selectAllBrands=state=>state.cars.brands;
export const selectTotalPages = state => state.cars.carsPage.totalPages;
export const selectPage = state => state.cars.carsPage.page;
export const selectLoading = state => state.cars.loading;
