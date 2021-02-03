import { createSlice } from '@reduxjs/toolkit';

import MOCK from '../mock/requests';

const requestsReducer = createSlice({
    name: "request",
    initialState: MOCK,
    reducers: {
        create: (state) => {console.log("Request create");},
        update: (state) => {console.log("Request update");},
        delete: (state) => {console.log("Request delete");},
        comment: (state) => {console.log("Request comment");},
    }
});

export default requestsReducer;
