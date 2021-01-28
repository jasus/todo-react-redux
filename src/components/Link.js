import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

import { setVisibilityFilter } from "../actions";

export const Link = ({ filter, children }) => {
  const active = useSelector((state) => filter === state.visibilityFilter);

  const dispatch = useDispatch();

  return (
    <Button
      color="secondary"
      size="small"
      disabled={active}
      variant="contained"
      onClick={(e) => {
        e.preventDefault();
        dispatch(setVisibilityFilter(filter));
      }}
      style={{
        marginLeft: "4px",
      }}
    >
      {children}
    </Button>
  );
};

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
