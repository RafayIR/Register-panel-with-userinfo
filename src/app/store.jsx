import { configureStore } from "@reduxjs/toolkit";
import emailSlice from "../features/addemail/emailSlice";


export default configureStore({
    reducer: {
        emails: emailSlice,
    }
})