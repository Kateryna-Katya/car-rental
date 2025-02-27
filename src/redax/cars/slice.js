import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchAllBrands } from "./operation";

const handlePending = (state) => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const carsSlice=createSlice({
    name:"cars",
    initialState:{
        allCars:{
            cars:null,
            totalCars:null,
            page:null,
            totalPages:null,
        },
        brands:null,
        loading:false,
        error:null,        
    },
    extraReducers: builder=>{
        builder
        .addCase(fetchAllCars.pending, handlePending)
        .addCase(fetchAllCars.fulfilled,(state, action)=>{
            state.loading=false,
            state.error=null,
            state.allCars=action.payload;
        })
        .addCase(fetchAllCars.rejected,handleRejected)
        .addCase(fetchAllBrands.pending, handlePending)
        .addCase(fetchAllBrands.fulfilled, (state, action)=>{
            state.loading=false,
            state.error=null,
            state.brands=action.payload;
        })
        .addCase(fetchAllBrands.rejected, handleRejected)

    }
})
export default carsSlice.reducer;