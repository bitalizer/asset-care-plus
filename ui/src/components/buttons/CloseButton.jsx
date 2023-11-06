import React from "react";

import { Button } from "reactstrap";

export const CloseButton = ({ onClick }) => {
  return (
    <Button className="btn m-2" type="button" onClick={onClick}>
      <i className="fa-solid fa-xmark" style={{ color: "red" }}></i>
    </Button>
  );
};
