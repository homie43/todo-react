import React from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import { addTodo } from "./redux/todoSlice";
import { useDispatch } from "react-redux";

import "./App.css";

function App() {
  const [text, setText] = React.useState("");

  const dispatch = useDispatch();

  // const addTodo = () => {
  //   if (text.trim().length) {
  //     setTodoList([
  //       ...todoList,
  //       {
  //         id: new Date().toISOString(),
  //         text,
  //         completed: false,
  //       },
  //     ]);
  //     setText("");
  //   }
  // };

  const addTask = () => dispatch(addTodo(text));

  const toggleTodoCompleted = (idx) => {
    // setTodoList(
    //   todoList.map((item) => {
    //     if (item.id !== idx) return item;
    //     return {
    //       ...item,
    //       completed: !item.completed,
    //     };
    //   })
    // );
  };

  const removeTodo = (id) => {
    // setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <InputField text={text} setText={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
