import { createSlice } from "@reduxjs/toolkit";

const activeElementSlice = createSlice({
    name: "activeElementSlice",
    initialState: {
        elementId: 1
    },
    reducers: {
        changeActiveElement: (state, data) => {
            state.elementId = data.payload.uuid
        }
    }
})

export const { changeActiveElement } = activeElementSlice.actions

export default activeElementSlice.reducer