import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1213, text: "hello I am working fine" }],
  },
  reducers: {
    todo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    updatedTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingItem = state.todos.find((item) => item.id === id);
      if (existingItem) {
        existingItem.text = text;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
