import { configureStore } from "@reduxjs/toolkit";
import designSlice from "./designSlice";
import activeElementSlice from "./activeElementSlice";
import authSlice from "./authSlice";

export default configureStore({
    reducer: {
        designSlice: designSlice,
        activeElementSlice: activeElementSlice,
        authSlice: authSlice
    }
})