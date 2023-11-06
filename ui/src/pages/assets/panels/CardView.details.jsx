import { useNavigate } from "react-router";

import { CardImg, CardBody, CardTitle, CardText, Row, Col, Card, Button } from "reactstrap";

import { ASSET_DETAILS } from "../assets.routes.const";
export const CardViewDetails = props => {
  const navigate = useNavigate();
  const { image, model, name } = props;

  const onViewAssetDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${ASSET_DETAILS}/${id}`);
  };
  return (
    <>
      <Card className=" d-flex justify-content-center">
        <CardImg alt="..." src={image} top />
        <CardBody style={{ height: "13em" }}>
          <CardTitle className="mb-3 text-center" tag="h3">
            {name}
          </CardTitle>
          <CardText className="mb-4">
            <Row>
              <Col lg="12" className="d-flex justify-content-center">
                {model}
              </Col>
            </Row>
          </CardText>
          <Row className="d-flex justify-content-center">
            <Button id="2" color="primary" onClick={onViewAssetDetails}>
              Read More
            </Button>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};
