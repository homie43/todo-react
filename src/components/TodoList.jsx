import React from "react";
import TodoItem from "./TodoItem";

import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
