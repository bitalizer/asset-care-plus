import { Col, Row } from "reactstrap";

export const DragDrop = props => {
  return (
    <>
      <Row>
        <Col>
          <p className="mb-1">{props.label}</p>
          <div className="border border-gray bg-lighter p-5 mb-4 text-center">
            <p className="text-gray">{props.placeholder}</p>
          </div>
        </Col>
      </Row>
    </>
  );
};
