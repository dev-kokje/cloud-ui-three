import { createSlice } from "@reduxjs/toolkit";

export const designSlice = createSlice({
    name: 'designSlice',
    initialState: {
        name: '',
        providers: []
    },
    reducers: {
        setDesign: (state, data) => {
            state.name = data.payload.name
            state.providers = [...data.payload.providers]
        }
    }
})

export const { setDesign } = designSlice.actions

export default designSlice.reducer