import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

const store = configureStore({
    reducer: {
        contacts: rootReducer
    },
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV === 'development'
});
export default store;