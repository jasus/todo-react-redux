import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
