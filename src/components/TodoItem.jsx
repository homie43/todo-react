import React from "react";
import { removeTodo, toggleTodoCompleted } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
      />
      <span>{text}</span>
      <span
        onClick={() => dispatch(removeTodo({ id }))}
        style={{ color: "red", cursor: "pointer" }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
