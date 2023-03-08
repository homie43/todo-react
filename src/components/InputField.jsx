import React from "react";

const InputField = ({ text, setText, handleSubmit }) => {
  return (
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};

export default InputField;
