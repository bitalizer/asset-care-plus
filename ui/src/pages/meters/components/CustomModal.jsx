import React from "react";

import { Modal } from "reactstrap";

export const CustomModal = props => {
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggle}
      className="float-right mt-0 w-50"
      fade={false}
    >
      {props.children}
    </Modal>
  );
};
