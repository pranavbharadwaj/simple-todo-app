import React from "react";

const TodoItem = ({ handleChangeProps, deleteTodoProps, todo }) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title, priority } = todo;

  return (
    <>
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <span className="todo-title" style={completed ? completedStyle : null}>
          {title}
        </span>
        <span
          className="todo-priority"
          style={completed ? completedStyle : null}
        >
          Priority - {priority}
        </span>
        <button onClick={() => deleteTodoProps(id)}>Delete</button>
      </li>
    </>
  );
};

export default TodoItem;
