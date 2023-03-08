import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    // toolkit дает возможность не заморачиваться по поводу имутабельности
    addTodo(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {},
    toggleTodoCompleted(state, action) {},
  },
});

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;
