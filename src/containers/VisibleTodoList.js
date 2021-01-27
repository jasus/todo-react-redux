import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter = "SHOW_ALL") => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const VisibleTodoList = connect(mapStateToProps)(TodoList);

export default VisibleTodoList;
