import {createSlice} from "@reduxjs/toolkit";

const initilaState = {
    count: 0
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState: initilaState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const {increment, decrement} = CounterSlice.actions
export default CounterSlice.reducer