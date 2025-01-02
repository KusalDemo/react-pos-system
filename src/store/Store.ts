
import {configureStore} from "@reduxjs/toolkit";
import UserNameSlice from "../reducers/UserNameSlice.ts";



export const store = configureStore({
    reducer : {
        username : UserNameSlice
    }
})