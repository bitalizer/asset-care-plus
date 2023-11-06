import { useEffect, useState } from "react";

import { Button, Col, Form, Row } from "reactstrap";

import { InputField, DateField } from "components/widgets";

export const PurchaseOrdersPanel = ({ purchaseOrders, onSave }) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({
      id: purchaseOrders.id,
      title: purchaseOrders.title,
      poNumber: purchaseOrders.poNumber,
      numberOfItems: purchaseOrders.numberOfItems,
      totalCost: purchaseOrders.totalCost,
      totalQuantity: purchaseOrders.totalQuantity,
      addedBy: purchaseOrders.addedBy,
      vendor: purchaseOrders.vendor,
      dateAdded: purchaseOrders.dateAdded,
      dueDate: purchaseOrders.dueDate,
      onboardingDate: "",
      offboardingDate: "",
    });
  }, [purchaseOrders]);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [onboardingDate, setOnboardingDate] = useState(new Date());

  const [offboardingDate, setOffboardingDate] = useState(new Date());

  useEffect(() => {
    form.onboardingDate = new Date(onboardingDate).toLocaleDateString("en-GB");
    form.offboardingDate = new Date(offboardingDate).toLocaleDateString("en-GB");
  }, [onboardingDate, offboardingDate, form]);

  const [roleId] = useState(purchaseOrders.roleId);
  const [groups] = useState(purchaseOrders.groups || []);

  const onSavePurchaseOrders = () => {
    const purchaseOrdersSaveRequest = {
      id: purchaseOrders.id,
      form,
      roleId,
      groups,
    };

    onSave(purchaseOrdersSaveRequest);
  };
  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">Purchase Orders Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <DateField
              id="date-auto-onboarding-date"
              label="Onboard date"
              value={onboardingDate}
              setValue={setOnboardingDate}
            />
          </Col>
          <Col lg="6">
            <DateField
              id="date-auto-offboarding-date"
              label="Auto Offboard Date"
              value={offboardingDate}
              setValue={setOffboardingDate}
            />
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Purchase Orders Data</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <InputField
              id="input-title"
              label="Title"
              value={form.title}
              type="text"
              name="title"
              onChange={changeHandler}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-poNumber"
              label="PO Number"
              value={form.poNumber}
              type="text"
              name="poNumber"
              onChange={changeHandler}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-vendor"
              label="Vendor"
              value={form.vendor}
              type="text"
              name="vendor"
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-numberOfItems"
              label="Number Of Items"
              value={form.numberOfItems}
              type="text"
              name="numberOfItems"
              onChange={changeHandler}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-totalQuantity"
              label="Total Quantity"
              value={form.totalQuantity}
              type="text"
              name="totalQuantity"
              onChange={changeHandler}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-totalCost"
              label="Total Cost"
              value={form.totalCost}
              type="text"
              name="totalCost"
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-addedBy"
              label="Added By"
              value={form.addedBy}
              type="text"
              name="addedBy"
              onChange={changeHandler}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-dateAdded"
              label="Date Added"
              value={form.dateAdded}
              type="text"
              name="dateAdded"
              onChange={changeHandler}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-dueDate"
              label="Due Date"
              value={form.dueDate}
              type="text"
              name="dueDate"
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="button" onClick={onSavePurchaseOrders}>
            Update Purchase Orders
          </Button>
        </Row>
      </div>
    </Form>
  );
};
