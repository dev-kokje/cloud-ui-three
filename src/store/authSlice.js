import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        loading: false,
        userInfo: null,
        userToken: null,
        error: null,
        success: false
    },
    reducers: {
        googleLoginSetToken: (state, data) => {
            state.loading = false
            state.error = null
            state.success = true
            state.userToken = data.payload.access_token
        },
        googleLoginSetUser: (state, data) => {
            state.userInfo = data.payload
        },
        logoutGoogle: (state, data) => {
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
            state.success = false
        } 
    }
})

export const { googleLoginSetToken, googleLoginSetUser, logoutGoogle } = authSlice.actions

export default authSlice.reducer