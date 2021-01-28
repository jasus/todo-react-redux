import React from "react";
import PropTypes from "prop-types";

const Todo = ({ completed, text, id }) => (
  <li
    onClick={(e) => {}}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  //   completed: PropTypes.bool.isRequired,
  //   text: PropTypes.string.isRequired,
  //   id: PropTypes.number.isRequired,
};

export default Todo;
