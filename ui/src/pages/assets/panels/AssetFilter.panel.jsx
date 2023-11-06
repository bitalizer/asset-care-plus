import React from "react";

import { Row, Col, Button, Card } from "reactstrap";
export const AssetsFilter = () => {
  return (
    <>
      <Card className="p-4">
        <Row>
          <Col className="col-1 pr-0">
            <Button className="border-light shadow-none text-black-50" color="white">
              <i className="fa fa-filter pr-2"></i>
              Filter
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};
