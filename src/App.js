import React from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import { addTodo } from "./redux/todoSlice";
import { useDispatch } from "react-redux";

import "./App.css";

function App() {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} setText={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
