import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import { BoxHeader } from "components/headers";
import { SelectField, DateField } from "components/widgets";

import { useLocalStateAlerts } from "../../../hooks";
import { createWorkOrders } from "../../../reducers/workOrderSlice";
import { WORK_ORDERS_PAGE } from "../workOrders.routes.const";

export const CreateOrderPage = () => {
  const navigate = useNavigate();

  const [dueDate, setDueDate] = useState(new Date());

  const [workOrder, setWorkOrder] = useState({
    id: Date.now(),
    due: "",
    status: "",
    workOrderTitle: "",
    asset: "",
    priority: "",
  });
  useEffect(() => {
    workOrder.due = new Date(dueDate).toLocaleDateString("en-GB");
  }, [dueDate, workOrder]);
  const changeHandler = e => {
    setWorkOrder({ ...workOrder, [e.target.name]: e.target.value });
  };

  const handleStatus = value => {
    workOrder.status = value.label;
  };
  const handlePriority = value => {
    workOrder.priority = value.label;
  };

  const dispatch = useDispatch();
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const onSubmit = () => {
    setSuccessMessage("Work Order Added");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(createWorkOrders(workOrder));
  };

  return (
    <div className="create-order">
      {alert}
      <BoxHeader />
      <Container className="mt--6">
        <Row>
          <div className="col">
            <Card>
              <Form>
                <CardHeader>
                  <Row className="py-4">
                    <Col lg="6" xs="2" className="text-left pl-5">
                      <Button color="primary">Submit</Button>
                    </Col>
                    <Col lg="6" xs="2" className="text-right pr-5">
                      <div onClick={() => navigate(`/admin${WORK_ORDERS_PAGE}`)} aria-hidden="true">
                        <i
                          className="fa fa-times"
                          style={{
                            color: "red",
                            transform: "scale(2)",
                            cursor: "pointer",
                            alignSelf: "center",
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <h1 className="mb-0">Add Order</h1>
                </CardHeader>
                <Col>
                  <CardBody className="border-bottom">
                    <FormGroup>
                      <Label for="workOrderTitle">Work Order Title*</Label>
                      <Input
                        id="workOrderTitle"
                        name="workOrderTitle"
                        placeholder="Work Order Title"
                        type="text"
                        onChange={changeHandler}
                        value={workOrder.workOrderTitle}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="asset">Asset</Label>
                      <Input
                        id="asset"
                        name="asset"
                        onChange={changeHandler}
                        value={workOrder.asset}
                        placeholder="Asset"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="workOrderStatus">Status</Label>
                      <SelectField
                        id="workOrderStatus"
                        name="workOrderStatus"
                        onChange={handleStatus}
                        options={[
                          { value: "open", label: "Open" },
                          { value: "close", label: "Close" },
                        ]}
                      ></SelectField>
                    </FormGroup>
                    <FormGroup>
                      <Label for="priority">Priority</Label>
                      <SelectField
                        id="priority"
                        name="priority"
                        onChange={handlePriority}
                        options={[
                          { value: "low", label: "Low" },
                          { value: "medium", label: "Medium" },
                          { value: "high", label: "High" },
                        ]}
                      ></SelectField>
                    </FormGroup>
                    <FormGroup>
                      <Label for="due">Due Date</Label>
                      <DateField
                        id="due-date"
                        inputProps={{
                          placeholder: "Select date",
                        }}
                        value={dueDate}
                        setValue={setDueDate}
                      />
                    </FormGroup>
                  </CardBody>
                  <div className="header-buttons text-right m-5">
                    <Button
                      className="bg-white"
                      color="secondary"
                      onClick={() => navigate(`/admin${WORK_ORDERS_PAGE}`)}
                    >
                      Cancel
                    </Button>
                    <Button color="primary" onClick={onSubmit}>
                      Submit
                    </Button>
                  </div>
                </Col>
              </Form>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};
