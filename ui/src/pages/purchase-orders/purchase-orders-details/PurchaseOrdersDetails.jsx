import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { PURCHASE_ORDERS_PAGE } from "pages/purchase-orders";
import { selectAllGroupsDataAsSelectOptions, selectAllRolesDataAsSelectOptions } from "pages/utils";

import { useLocalStateAlerts } from "hooks";

import { findPurchaseOrderById, updatePurchaseOrder } from "../../../reducers/purchaseOrderSlice";
import { PurchaseOrdersPanel } from "../panels";

export const PurchaseOrdersDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const purchaseOrders = useSelector(state => state.purchaseOrder.onePurchaseOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPurchaseOrderById(id));
  }, [dispatch, id]);

  console.log("selectAllGroupsDataAsSelectOptions", selectAllGroupsDataAsSelectOptions);
  console.log("selectAllRolesDataAsSelectOptions", selectAllRolesDataAsSelectOptions);

  const onSavePurchaseOrders = purchaseOrdersRequest => {
    const httpUpdateRequest = {
      id: purchaseOrdersRequest.id,
      body: purchaseOrdersRequest.form,
    };
    console.log("httpUpdateRequest", httpUpdateRequest);
    dispatch(updatePurchaseOrder(httpUpdateRequest));
    setSuccessMessage("Purchase Orders Updated");
    setIsSuccess(true);
    setSaveSent(true);
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
                    <h3 className="mb-0">Purchase Orders Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${PURCHASE_ORDERS_PAGE}`)}
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <PurchaseOrdersPanel
                  purchaseOrders={purchaseOrders}
                  onSave={onSavePurchaseOrders}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
