import { configureStore } from "@reduxjs/toolkit";
import designMetadataSlice from "./designMetadataSlice";

export default configureStore({
    reducer: {
        designMetadata: designMetadataSlice
    }
})