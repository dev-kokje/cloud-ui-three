import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        userInfo: null,
        idToken: null,
        accessToken: null,
        refreshToken: null
    },
    reducers: {
        loginUser: (state, data) => {
            state.idToken = data.payload.idToken
            state.accessToken = data.payload.accessToken
            state.refreshToken = data.refreshToken
        } ,
        loadUserData: (state) => {
        }
    }
})

export const { loginUser } = authSlice.actions

export default authSlice.reducer