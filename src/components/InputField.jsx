import React from "react";

const InputField = ({ text, setText, addTodo }) => {
  return (
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </label>
  );
};

export default InputField;
