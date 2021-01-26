import React from "react";
import AddTodo from "./containers/AddTodo";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

const onTodoClick = () => {};

const App = () => (
  <div>
    <AddTodo />
    <Filters />
    <TodoList todos={[]} onTodoClick={onTodoClick()} />
  </div>
);

export default App;
