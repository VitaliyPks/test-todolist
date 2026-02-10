import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@redux/todo/todoSlice";

const store = configureStore({
  devTools: true,
  reducer: { todo: todoReducer },
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
