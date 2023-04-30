import { createSlice } from "@reduxjs/toolkit";

export const designSlice = createSlice({
    name: 'designSlice',
    initialState: {
        name: '',
        providers: []
    },
    reducers: {
        createNewDesign: (state, data) => {
            state.name = data.payload.name
            state.providers = [...data.payload.providers]
        }
    }
})

export const { createNewDesign } = designSlice.actions

export default designSlice.reducer