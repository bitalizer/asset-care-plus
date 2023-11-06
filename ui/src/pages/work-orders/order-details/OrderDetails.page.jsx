import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useLocalStateAlerts } from "hooks";

import { findWorkOrderById, updateWorkOrder } from "../../../reducers/workOrderSlice";
import { OrderPanel } from "../panels";
import { WORK_ORDERS_PAGE } from "../workOrders.routes.const";

export const OrderDetailsPage = () => {
  const { id } = useParams();
  // const orderId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const dispatch = useDispatch();

  const order = useSelector(state => state.workOrders.workOrder);

  useEffect(() => {
    dispatch(findWorkOrderById(id));
  }, [dispatch, id]);

  const onSaveRequest = order => {
    const httpUpdateRequest = {
      id: order.id,
      body: order,
    };
    console.log("Order update", httpUpdateRequest);
    setSuccessMessage("Order Updated");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(updateWorkOrder(httpUpdateRequest));
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
                    <h3 className="mb-0">Order Details</h3>
                  </Col>{" "}
                  <Col lg="4" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${WORK_ORDERS_PAGE}`)}
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <OrderPanel order={order} onSave={onSaveRequest} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
