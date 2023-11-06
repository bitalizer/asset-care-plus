import React from "react";

import { Button } from "reactstrap";

export const TableViewButton = ({ toggleTableView, setTableView }) => {
  return (
    <Button
      onClick={setTableView}
      style={toggleTableView ? { background: "rgb(0, 51, 105)", color: "white" } : null}
      className="btn-icon m-1 btn  btn-light"
      type="button"
    >
      <i className="fa fa-table" />
      <span className="btn-inner--icon m-1">Table View</span>
    </Button>
  );
};
