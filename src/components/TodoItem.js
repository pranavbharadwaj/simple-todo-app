import React from "react";
import { useRole } from "./RoleContextProvider";

const TodoItem = ({ handleChangeProps, deleteTodoProps, todo }) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { roles, role } = useRole();
  const { completed, id, title, priority } = todo;
  console.log(roles[role].write);
  return (
    <>
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
          style={{ visibility: roles[role].write ? "visible" : "hidden" }}
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
        <button
          onClick={() => deleteTodoProps(id)}
          style={{ visibility: roles[role].delete ? "visible" : "hidden" }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
