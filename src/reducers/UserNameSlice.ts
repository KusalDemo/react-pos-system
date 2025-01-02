import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    username : ''
}

const usernameSlice = createSlice({
    name : "username",
    initialState : initialState,
    reducers : {
        addUsername : (state, action) => {
            state.username = action.payload
        }
    }
})

export const {addUsername} = usernameSlice.actions
export default usernameSlice.reducer