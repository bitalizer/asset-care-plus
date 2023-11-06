import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, CardBody, Container, Row, Col, Input, Label, Button } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { useLocalStateAlerts } from "hooks";

import { fetchPurchaseOrders } from "../../reducers/purchaseOrderSlice";

import { PURCHASE_ORDERS_DETAILS, PurchaseOrdersTableColumns, PURCHASE_ORDERS_CREATE } from ".";

export const PurchaseOrdersPage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const purchaseOrders = useSelector(state => state.purchaseOrder.purchaseOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPurchaseOrders());
  }, [dispatch]);
  const onViewPurchaseOrdersDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${PURCHASE_ORDERS_DETAILS}/${id}`);
  };

  const onDeletePurchaseOrders = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete purchase orders", id);
    setSuccessMessage("Inventory deleted");
    setIsSuccess(true);
    setSaveSent(true);
    // setPurchaseOrders(purchaseOrders.filter(e => e.id !== parseInt(id)));
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row className="align-items-center justify-content-between">
                  <Col lg="auto">
                    <Row className="align-items-center gx-5">
                      <Col lg="auto">
                        <h3 className="mb-0">Purchase Orders |</h3>
                      </Col>
                      <Col lg="auto">
                        <Input type="checkbox" />
                        <Label check>Select Purchase Orders</Label>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="auto">
                    <Button>Show/Hide</Button>
                    <Button>Export</Button>
                    <Button
                      color="primary"
                      onClick={() => navigate(`/admin${PURCHASE_ORDERS_CREATE}`)}
                    >
                      + Purchase Order
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <ReactTable
                data={purchaseOrders}
                columns={PurchaseOrdersTableColumns({
                  onDetailsButtonClick: onViewPurchaseOrdersDetails,
                  onRemoveButtonClick: onDeletePurchaseOrders,
                })}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
