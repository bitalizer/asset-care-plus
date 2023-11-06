import { Card, CardBody, Row, Col, CardImg, CardTitle, CardText, Button } from "reactstrap";

import noImage from "assets/img/care/no-img.jpg";

export const InventoryCard = ({ data, onViewDetailsClick }) => {
  const { name, description } = data;
  return (
    <Card className=" d-flex justify-content-center">
      <CardImg alt="..." src={noImage} top />
      <CardBody style={{ height: "13em" }}>
        <CardTitle className="mb-3 text-center" tag="h3">
          {name}
        </CardTitle>
        <CardText className="mb-4">
          <Row>
            <Col lg="12" className="d-flex justify-content-center">
              {description}
            </Col>
          </Row>
        </CardText>
        <Row className="d-flex justify-content-center">
          <Button id="2" color="primary" onClick={onViewDetailsClick}>
            Read More
          </Button>
        </Row>
      </CardBody>
    </Card>
  );
};
