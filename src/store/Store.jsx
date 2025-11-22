import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/TodoSlice';
import productReducer from '../features/crud/ProductSlice';
import authReducer from '../features/auth/AuthSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    products: productReducer,
    auth: authReducer,
  },
});
