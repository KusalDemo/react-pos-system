
import {configureStore} from "@reduxjs/toolkit";
import CounterSlice from "../reducers/CounterSlice.ts";



export const store = configureStore({
    reducer : {
        counter : CounterSlice
    }
})