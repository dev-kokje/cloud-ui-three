import { createSlice } from "@reduxjs/toolkit";

export const designSlice = createSlice({
    name: 'designSlice',
    initialState: {
        name: '',
        providers: [],
        elements: {
            '1': {
                resource: {
                    name: 'ec2',
                    type: ''
                },
                position: {
                    top: 220,
                    left: 300
                }
            }
        }
    },
    reducers: {
        setDesign: (state, data) => {
            state.name = data.payload.name
            state.providers = [...data.payload.providers]
        },
        addDesignElement: (state, data) => {
            console.log(data.payload)
            Object.keys(data.payload).map((key) => {
                state.elements[key] = data.payload[key]
                return ''
            })
        }
    }
})

export const { setDesign, addDesignElement } = designSlice.actions

export default designSlice.reducer


// Element can have following properties
// {
//     id: String,
//     name: String,
//     position: []
// }