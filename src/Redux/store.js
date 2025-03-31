import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './../Redux/AuthSlice'


const store = configureStore({
    reducer: {
        authSlice: AuthSlice
    }
})

export default store;