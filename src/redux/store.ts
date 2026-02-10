import { configureStore } from "@reduxjs/toolkit";

import { saveTodosMiddleware } from "@redux/todo/todoMiddleware";
import todoReducer from "@redux/todo/todoSlice";

const store = configureStore({
  devTools: true,
  reducer: { todo: todoReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveTodosMiddleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
