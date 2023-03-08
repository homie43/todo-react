import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    // toolkit дает возможность не заморачиваться по поводу имутабельности
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      // setTodoList(todoList.filter((item) => item.id !== id));
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },

    toggleTodoCompleted(state, action) {},
  },
});

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;
