import React from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import Filters from "./components/Filters";

const App = () => (
  <div>
    <AddTodo />
    <Filters />
    <TodoList />
  </div>
);

export default App;
