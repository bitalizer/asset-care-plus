import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Card, CardBody, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useLocalStateAlerts } from "hooks";

import { findInventoryById, updateInventory } from "../../../reducers/inventroySlice";
import { InventoryPanel } from "../panels";

export const InventoryDetailsPage = () => {
  const { id } = useParams();
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const inventory = useSelector(state => state.inventory.inventory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findInventoryById(id));
  }, [dispatch, id]);
  const onSaveInventory = inventoryRequest => {
    const httpUpdateRequest = {
      id: inventoryRequest.id,
      body: inventoryRequest,
    };
    console.log("httpUpdateRequest", httpUpdateRequest);
    dispatch(updateInventory(httpUpdateRequest));
    setSuccessMessage("Inventory Updated");
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
              <CardBody>
                <InventoryPanel
                  inventoryText="Inventory Details"
                  inventory={inventory}
                  onSave={onSaveInventory}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
