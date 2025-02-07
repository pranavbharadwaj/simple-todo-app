import React, { useState } from "react";

const InputTodo = ({ addTodoProps }) => {
  const [input, setInput] = useState({ title: "", priority: "Low" });

  const onChange = (e) => {
    let { name, value } = e.target;
    setInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(input);
    setInput({
      title: "",
      priority: "Low",
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
          required
        />
        <select
          className="priority-dropdown"
          name="priority"
          onChange={onChange}
          defaultValue="Low"
        >
          <option value="High">High</option>
          <option value="Med">Med</option>
          <option value="Low">Low</option>
        </select>

        <input type="submit" className="input-submit" value="Submit" />
      </form>
    </>
  );
};

export default InputTodo;
