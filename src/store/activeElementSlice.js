import { createSlice } from "@reduxjs/toolkit";

const activeElementSlice = createSlice({
    name: "activeElementSlice",
    initialState: {
        element: null
    },
    reducers: {
        changeActiveElement: (state, data) => {
            state.element = data.payload
        }
    }
})

export const { changeActiveElement } = activeElementSlice.actions

export default activeElementSlice.reducer