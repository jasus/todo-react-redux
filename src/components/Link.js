import React, { PropTypes } from "react";
import { Button } from "@material-ui/core";

const Link = ({ active, children, onClick }) => (
  <Button
    color="secondary"
    size="small"
    disabled={active}
    variant="contained"
    onClick={onClick}
    style={{
      marginLeft: "4px",
    }}
  >
    {children}
  </Button>
);

Link.propTypes = {
  //active: PropTypes.bool.isRequired,
  //   children: PropTypes.node.isRequired,
  //   onClick: PropTypes.func.isRequired,
};

export default Link;
