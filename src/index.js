import React from "react";
import ReactDOM from "react-dom";
//component file
import TodoContainer from "./components/TodoContainer";
import { RoleContextProvider } from "./components/RoleContextProvider";
import "./App.css";

ReactDOM.render(
  <RoleContextProvider>
    <TodoContainer />
  </RoleContextProvider>,
  document.getElementById("root")
);
