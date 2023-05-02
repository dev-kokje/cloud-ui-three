import { configureStore } from "@reduxjs/toolkit";
import designSlice from "./designSlice";
import activeElementSlice from "./activeElementSlice";

export default configureStore({
    reducer: {
        designSlice: designSlice,
        activeElementSlice: activeElementSlice
    }
})