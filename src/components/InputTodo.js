import React, { useState } from "react";

const InputTodo = ({ addTodoProps }) => {
  const [input, setInput] = useState({ title: "" });

  const onChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(input.title);
    setInput({
      title: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={input.title}
          name="title"
          onChange={onChange}
        />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    </>
  );
};

export default InputTodo;
