import React from "react";
import { useSelector } from "react-redux";

import { VisibilityFilters } from "../actions";

import { Todo } from "./Todo";

export const TodoList = () => {
  const getVisibleTodos = (todoList, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todoList;
      case VisibilityFilters.SHOW_COMPLETED:
        return todoList.filter((t) => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todoList.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  };

  const todos = useSelector((state) =>
    getVisibleTodos(state.todos, state.visibilityFilter)
  );

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
