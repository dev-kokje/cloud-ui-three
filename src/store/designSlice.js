import { createSlice } from "@reduxjs/toolkit";

export const designSlice = createSlice({
    name: 'designSlice',
    initialState: {
        name: '',
        providers: [],
        elements: [{
            id: "123",
            name: "aws-ec2",
            position: [0, 0]
        }]
    },
    reducers: {
        setDesign: (state, data) => {
            state.name = data.payload.name
            state.providers = [...data.payload.providers]
        },
        addElement: (state, data) => {
            state.elements = state.elements.push(data.payload)
        }
    }
})

export const { setDesign, addElement } = designSlice.actions

export default designSlice.reducer


// Element can have following properties
// {
//     id: String,
//     name: String,
//     position: []
// }