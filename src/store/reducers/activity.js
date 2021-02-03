import { createSlice } from '@reduxjs/toolkit';
import MOCK from  '../mock/activities';

import _map from 'lodash/map';

const activitiesReducer = createSlice({
    name: "activity",
    initialState: { all: MOCK, selected: undefined },
    reducers: {
        create: (state) => {console.log("Activities create");},
        update: (state, action) => {
            console.log("Activities update, state", state);
            console.log("Activities update, action", action);
            const acts = _map(state.all, (act) => {
                return act;
            });

            return { all: acts, selected: state.selected };
        },
        delete: (state) => {console.log("Activities delete");},
        resolve: (state) => {console.log("Activities resolve");},
        selectActivity: { 
            reducer: (state, action) => { console.log("Selected activity action: ", action); state.selected = action.payload; return state},
            prepare: (activity) => { console.log("prepare: ", activity); return { payload: (activity || undefined)}}
        },
        clearSelected: (state) => (state.selected = undefined)
    }
});

export default activitiesReducer;