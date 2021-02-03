import { configureStore } from '@reduxjs/toolkit';

import {
    activitiesReducer,
    requestsReducer,
    userReducer,
} from './reducers';

export default configureStore({
    reducer: { 
        activities: activitiesReducer.reducer,
        requests: requestsReducer.reducer,
        user: userReducer.reducer
    }
});
