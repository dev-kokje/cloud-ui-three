import { configureStore } from "@reduxjs/toolkit";
import designSlice from "./designSlice";

export default configureStore({
    reducer: {
        designSlice: designSlice
    }
})