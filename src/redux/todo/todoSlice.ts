import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TFilterType, TTodoState } from "types/todo";

import { loadTodos } from "@redux/todo/todoHelpers";

const initialState: TTodoState = {
  todos: loadTodos(),
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.text = action.payload.text.trim();
      }
    },
    setFilter: (state, action: PayloadAction<TFilterType>) => {
      state.filter = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
