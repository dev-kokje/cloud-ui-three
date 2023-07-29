import { createSlice } from "@reduxjs/toolkit";

export const designSlice = createSlice({
    name: 'designSlice',
    initialState: {
        name: '',
        providers: [],
        elements: {}
    },
    reducers: {
        setDesign: (state, data) => {
            state.name = data.payload.name
            state.providers = [...data.payload.providers]
        },
        addDesignElement: (state, data) => {
            Object.keys(data.payload).map((key) => {
                state.elements[key] = data.payload[key]
                return ''
            })
        }
    }
})

export const { setDesign, addDesignElement } = designSlice.actions

export default designSlice.reducer