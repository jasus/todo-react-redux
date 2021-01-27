import React from "react";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Filters from "./components/Filters";

const App = () => (
  <div>
    <AddTodo />
    <Filters />
    <VisibleTodoList />
  </div>
);

export default App;
