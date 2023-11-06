import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Button, Col, Form, Row } from "reactstrap";

import { CloseButton } from "components/buttons";
import { InputField } from "components/widgets";

import { PARTS_INVENTORY_PAGE } from "../partsInventory.routes.const";

export const InventoryPanel = ({ inventoryText, inventory, onSave }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(inventory.name);
  const [quantity, setQuantity] = useState(inventory.quantity);
  const [cost, setCost] = useState(inventory.cost);
  const [barcode, setBarcode] = useState(inventory.barcode);
  const [area, setArea] = useState(inventory.area);
  const [description, setDescription] = useState(inventory.description);
  const [location, setLocation] = useState(inventory.location);

  useEffect(() => {
    setName(inventory.name);
    setQuantity(inventory.quantity);
    setCost(inventory.cost);
    setBarcode(inventory.barcode);
    setArea(inventory.area);
    setDescription(inventory.description);
    setLocation(inventory.location);
  }, [inventory]);
  const onSaveInventory = () => {
    const inventorySaveRequest = {
      id: inventory.id,
      name,
      quantity,
      cost,
      barcode,
      area,
      description,
      location,
    };
    console.log(inventorySaveRequest);
    onSave(inventorySaveRequest);
  };

  return (
    <Form>
      <Row className="d-flex justify-content-end">
        <CloseButton onClick={() => navigate(`/admin${PARTS_INVENTORY_PAGE}`)} />
      </Row>
      <h1 className="mb-4">{inventoryText}</h1>
      <div className="pl-lg-4">
        <Row>
          <Col lg="12">
            <InputField
              id="input-inventory-name"
              label="Name"
              value={name}
              type="text"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <InputField
              id="input-inventory-quantity"
              label="Quantity"
              value={quantity}
              type="text"
              onChange={e => {
                setQuantity(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <InputField
              id="input-inventory-cost"
              label="Cost"
              value={cost}
              type="text"
              onChange={e => {
                setCost(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <InputField
              id="input-inventory-barcode"
              label="Barcode"
              value={barcode}
              type="text"
              onChange={e => {
                setBarcode(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <InputField
              id="input-inventory-area"
              label="Area"
              value={area}
              type="text"
              onChange={e => {
                setArea(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <InputField
              id="input-inventory-description"
              label="Description"
              value={description}
              type="text"
              onChange={e => {
                setDescription(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <InputField
              id="input-inventory-location"
              label="Location"
              value={location}
              type="text"
              onChange={e => {
                setLocation(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="d-flex flex-row-reverse">
          <Button color="primary" type="button" onClick={onSaveInventory}>
            Submit
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={() => navigate(`/admin${PARTS_INVENTORY_PAGE}`)}
            className="mr-2"
          >
            Cancel
          </Button>
        </Row>
      </div>
    </Form>
  );
};
