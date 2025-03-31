import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    open: false,
    loginDetails: {

    }

}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        openModel(state, action) {

        },
        closeModal(state) {

        },
        login(state, action) {
            state.loginDetails = action.payload
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        logout(state, action) {
            state.isAuthenticated = action.payload.isAuthenticated;
        }
    }
})

export const { openModel, closeModal, login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
