import { combineReducers, configureStore } from '@reduxjs/toolkit';
import studentSlice from './studentSlice';

const rootReducer = combineReducers({
    student: studentSlice,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
