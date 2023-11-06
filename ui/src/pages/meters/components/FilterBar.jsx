import { Button, Col, Row } from "reactstrap";

export const FilterBar = () => {
  return (
    <>
      <Row className="border-bottom pt-3 pb-3 pl-4">
        <Col className="col-1">
          <Button className="border-light shadow-none text-black-50" color="white">
            <i className="fa fa-filter pr-2"></i>
            Filter
          </Button>
        </Col>
      </Row>
    </>
  );
};
