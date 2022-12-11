import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { username: 'Shahbaz', email: 'sh@gmail.com', age: 23 },
    { username: 'Osama', email: 'os@gmail.com', age: 24 },
]


const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        emailAdded(state, action) {
            state.push(action.payload);
        }
    }
})

export const { emailAdded } = emailSlice.actions;
export default emailSlice.reducer;