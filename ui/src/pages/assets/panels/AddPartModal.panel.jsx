import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container } from "reactstrap";

import { AddPartModalDetails } from "./AddPartModal.details";

export const AddPartModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <a href="#" onClick={toggle}>
        <i className="fa fa-plus-circle text-info mr-1" aria-hidden="true"></i>
        <a href="#" className="text-info">
          Add Part
        </a>
      </a>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader className="pl-4 pt-5 border-bottom" toggle={toggle}>
            Selected parts associated to this asset{" "}
          </ModalHeader>
          <ModalBody className="p-0">
            <AddPartModalDetails />
          </ModalBody>
          <ModalFooter className="border-top">
            <Container>
              <Row>
                <Col>
                  <p className="font-weight-bold m-0">Part1</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Quantity:10</p>
                </Col>
              </Row>
            </Container>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};
