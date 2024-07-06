import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    store_all_todos: (state, action) => {
      state.todo = action.payload;
    },
    add_todo: (state, action) => {
      state.todo.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const todo_action = todoSlice.actions;

export default todoSlice.reducer;
