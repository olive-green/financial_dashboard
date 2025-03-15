import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import financeReducer from './reducers/financeReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        finance: financeReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
