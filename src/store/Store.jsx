import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/TodoSlice";
import crudReducer from "../features/crud/CrudSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    crud: crudReducer,
  },
});
