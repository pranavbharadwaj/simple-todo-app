import React from "react";

const TodoItem = ({ handleChangeProps, deleteTodoProps, todo }) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = todo;

  return (
    <>
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button onClick={() => deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    </>
  );
};

export default TodoItem;
