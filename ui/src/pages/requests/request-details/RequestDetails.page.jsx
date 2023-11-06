import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useLocalStateAlerts } from "hooks";

import { findRequestById, updateRequest } from "../../../reducers/requestSlice";
import { RequestPanel } from "../panels";
import { REQUESTS_PAGE } from "../requests.routes.const";

export const RequestDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const dispatch = useDispatch();

  const requests = useSelector(state => state.request.oneRequest);

  useEffect(() => {
    dispatch(findRequestById(id));
  }, [dispatch, id]);

  const onSaveRequest = request => {
    const httpUpdateRequest = {
      id: request.id,
      body: request,
    };
    console.log("Request update", httpUpdateRequest);
    setSuccessMessage("Request Updated");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(updateRequest(httpUpdateRequest));
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Request Details</h3>
                  </Col>{" "}
                  <Col lg="4" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${REQUESTS_PAGE}`)}
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <RequestPanel request={requests} onSave={onSaveRequest} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
