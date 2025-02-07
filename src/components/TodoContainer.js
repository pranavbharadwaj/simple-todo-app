import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [todoItems, setTodoItems] = useState({
    todos: [
      {
        // id: uuid.v4(),
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        // id: uuid.v4(),
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        // id: uuid.v4(),
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  });

  const handleChange = (id) => {
    setTodoItems({
      todos: todoItems.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  const delTodo = (id) => {
    setTodoItems({
      todos: [
        ...todoItems.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  const addTodoItem = (data) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: data,
      completed: false,
    };
    setTodoItems({
      todos: [...todoItems.todos, newTodo],
    });
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todoItems.todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  );
};

export default TodoContainer;
