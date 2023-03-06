import React from "react";
import TodoList from "./components/TodoList";

import "./App.css";
import InputField from "./components/InputField";

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [text, setText] = React.useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodoList([
        ...todoList,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const toggleTodoCompleted = (idx) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id !== idx) return item;
        return {
          ...item,
          completed: !item.completed,
        };
      })
    );
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <InputField text={text} setText={setText} addTodo={addTodo} />

      <TodoList
        todoList={todoList}
        toggleTodoCompleted={toggleTodoCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
