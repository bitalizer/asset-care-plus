import { Card, Row, Col, CardHeader } from "reactstrap";

import { DetailTab } from ".";

export const MeterDetail = props => {
  return (
    <>
      <Row>
        <Col className="h-100vh">
          <Card className="rounded-0 mb-0 shadow-none">
            <CardHeader className="pb-0">
              <h1 className="font-weight-normal">{props.title}</h1>
              <Row className="ml-1 text-green">
                <i className="fa fa-circle pt-1 pr-1"></i>
                <p>Reading due today</p>
              </Row>
            </CardHeader>
            <DetailTab />
          </Card>
        </Col>
      </Row>
    </>
  );
};
