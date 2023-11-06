import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Button, Card, CardBody, Col, Row } from "reactstrap";

import { InputField } from "components/widgets";

import { WORK_ORDERS_PAGE } from "../workOrders.routes.const";

export const OrderPanel = ({ order, onSave }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({
      id: order.id,
      due: order.due,
      status: order.status,
      workOrderTitle: order.workOrderTitle,
      asset: order.asset,
      priority: order.priority,
    });
  }, [order]);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardBody>
            <>
              <h4 className="heading-small text-muted mb-4">Order information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-due"
                      label="Due date"
                      defaultValue={order.due}
                      type="text"
                      value={form.due}
                      onChange={changeHandler}
                      name="due"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="status"
                      label="Status"
                      defaultValue={order.status}
                      type="text"
                      value={form.status}
                      onChange={changeHandler}
                      name="status"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="workOrderTitle"
                      label="Work Order Title"
                      defaultValue={order.workOrderTitle}
                      type="text"
                      value={form.workOrderTitle}
                      onChange={changeHandler}
                      name="workOrderTitle"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="asset"
                      label="Asset"
                      defaultValue={order.asset}
                      type="text"
                      value={form.asset}
                      onChange={changeHandler}
                      name="asset"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="priority"
                      label="Priority"
                      defaultValue={order.priority}
                      type="text"
                      value={form.priority}
                      onChange={changeHandler}
                      name="priority"
                    />
                  </Col>
                </Row>
              </div>
              <Row className="align-items-center py-4">
                <Col lg="12" xs="7" className="text-right">
                  <div className="pl-lg-4">
                    <Row>
                      <Button color="primary" onClick={() => onSave(form)}>
                        Save
                      </Button>
                      <Button color="info" onClick={() => navigate(`${WORK_ORDERS_PAGE}`)}>
                        Back to Search
                      </Button>
                    </Row>
                  </div>
                </Col>
              </Row>
            </>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
