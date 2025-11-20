import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      const t = state.todos.find((x) => x.id === action.payload);
      if (t) t.completed = !t.completed;
    },

    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const t = state.todos.find((x) => x.id === id);
      if (t) t.text = newText;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
