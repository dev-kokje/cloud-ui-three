import { createSlice } from "@reduxjs/toolkit";

export const designMetadataSlice = createSlice({
    name: 'designMetadata',
    initialState: {
        name: "",
        providers: []
    },
    reducers: {
        createNewDesign: (state, data) => {
            state = {...data}
        }
    }
})

export const { createNewDesign } = designMetadataSlice.actions

export default designMetadataSlice.reducer