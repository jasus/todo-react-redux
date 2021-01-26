import React from "react";
import { TextField, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./AddTodo.css";
//import { connect } from "react-redux";
//import { addTodo } from "../actions";

let AddTodo = () => {
  let input;

  return (
    <div>
      <form class="add-container-form" onSubmit={(e) => {}}>
        <TextField
          id="standard-basic"
          label="Añadir tarea"
          ref={(node) => {
            input = node;
          }}
        />
        <Fab
          style={{ marginLeft: "20px" }}
          aria-label="add"
          color="primary"
          size="small"
          type="submit"
        >
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

//AddTodo = connect()(AddTodo);

export default AddTodo;
