import React from "react";

import "./App.css";

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
        if (item.id !== idx) return todoList;
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
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </label>

      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTodoCompleted(item.id)}
            />
            <span>{item.text}</span>
            <span
              onClick={() => removeTodo(item.id)}
              style={{ color: "red", cursor: "pointer" }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
