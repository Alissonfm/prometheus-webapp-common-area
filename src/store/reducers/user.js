import { createSlice } from '@reduxjs/toolkit';

import MOCK from '../mock/user';

const userReducer = createSlice({
    name: "user",
    initialState: MOCK,
    reducers: {
        update: (state, newData) => {console.log("Request update: ", newData); return { ...state, ...newData }},
        logout: (state) => {console.log("User logout");}
    }
});

export default userReducer;