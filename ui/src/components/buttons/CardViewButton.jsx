import React from "react";

import { Button } from "reactstrap";

export const CardViewButton = ({ setCardView, toggleCardView }) => {
  return (
    <Button
      onClick={setCardView}
      style={toggleCardView ? { background: "rgb(0, 51, 105)", color: "white" } : null}
      className="btn-icon m-1 btn  btn-light"
      type="button"
    >
      <i className="fa fa-th" />
      <span className="btn-inner--icon m-1">Card View</span>
    </Button>
  );
};
