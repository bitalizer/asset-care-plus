import { Button, Col, Row } from "reactstrap";
export const Toolbar = props => {
  return (
    <>
      <Row className="border-bottom p-4">
        <Col>
          <Button
            onClick={props.onClick}
            className="float-right rounded-pill pr-3 pl-3"
            color="info"
          >
            + Meter
          </Button>
          <Button className="float-right bg-white border-secondary mr-3 pr-3 pl-3">
            <i className="fa fa-ellipsis-v text-black-50" aria-hidden="true"></i>
          </Button>
        </Col>
      </Row>
    </>
  );
};
