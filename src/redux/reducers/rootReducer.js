import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import financeReducer from './financeReducer';

export default combineReducers({
    auth: authReducer,
    finance: financeReducer,
});
