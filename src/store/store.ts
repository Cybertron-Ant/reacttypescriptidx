import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import themeReducer from '../features/themeSlice';
import languageReducer from '../features/languageSlice';

// Create the Redux store and combine reducers
const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    language: languageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
