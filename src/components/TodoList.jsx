import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, toggleTodoCompleted, removeTodo }) => {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          toggleTodoCompleted={toggleTodoCompleted}
          removeTodo={removeTodo}
          {...item}
        />
      ))}
    </ul>
  );
};

export default TodoList;
