import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Container,
  Row,
  Button,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
  CardHeader,
  CardBody,
} from "reactstrap";

import { BoxHeader } from "components/headers";
import { SelectField, DragDrop, DateField } from "components/widgets";

import { useLocalStateAlerts } from "../../../hooks";
import { createMaintenance } from "../../../reducers/maintenanceSlice";
import { CREATE_ENTITY_ID } from "../../../variables/app.consts";
import { MAINTENANCE_PAGE } from "../maintenance.routes.const";

export const CreateMaintenancePage = () => {
  const navigate = useNavigate();
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [maintenance, setMaintenance] = useState({
    id: CREATE_ENTITY_ID,
    trigger_name: "",
    order_title: "",
    priority: "",
    category: "",
    starts_on: "",
    ends_on: "",
  });

  useEffect(() => {
    maintenance.starts_on = new Date(startDate).toLocaleDateString("en-GB");
    maintenance.ends_on = new Date(endDate).toLocaleDateString("en-GB");
  }, [startDate, endDate, maintenance]);
  const handleCategory = value => {
    maintenance.category = value.label;
  };
  const handlePriority = value => {
    maintenance.priority = value.label;
  };
  const changeHandler = e => {
    setMaintenance({ ...maintenance, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const onSave = () => {
    setSuccessMessage("Maintenance Added");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(createMaintenance(maintenance));
  };

  return (
    <div className="create-maintenance">
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
                      <div onClick={() => navigate(`/admin${MAINTENANCE_PAGE}`)} aria-hidden="true">
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
                  <h1 className="mb-0">Add Preventive Maintenance</h1>
                </CardHeader>

                <Col>
                  <CardBody className="border-bottom">
                    {" "}
                    <h2 className="pb-2">Trigger Details</h2>
                    <FormGroup>
                      <Label for="triggerName">Name*</Label>
                      <Input
                        id="triggerName"
                        name="trigger_name"
                        placeholder="Trigger Name"
                        onChange={changeHandler}
                        type="text"
                      />
                    </FormGroup>
                  </CardBody>
                  <CardBody className="border-bottom">
                    {" "}
                    <FormGroup>
                      <h2 className="pb-2">Work Orders Details</h2>
                      <Label for="title">Title*</Label>
                      <Input
                        id="title"
                        onChange={changeHandler}
                        value={maintenance.order_title}
                        name="order_title"
                        placeholder="Title"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="description">Description</Label>
                      <Input
                        id="description"
                        name="description"
                        placeholder="Description"
                        type="textarea"
                        onChange={changeHandler}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="priority">Priority</Label>
                      <SelectField
                        id="priority"
                        onChange={handlePriority}
                        options={[
                          { value: "1", label: "Low" },
                          { value: "2", label: "Medium" },
                          { value: "3", label: "Heigh" },
                        ]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="category">Category</Label>
                      <SelectField
                        onChange={handleCategory}
                        options={[
                          { value: "1", label: "Low" },
                          { value: "2", label: "Medium" },
                          { value: "3", label: "Heigh" },
                        ]}
                        id="category"
                      />
                    </FormGroup>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="pb-2">Organization</h2>
                    <Button onClick={e => e.preventDefault()}>
                      <i className="fa fa-plus" /> Assign Asset
                    </Button>
                    <Button onClick={e => e.preventDefault()}>
                      <i className="fa fa-plus" /> Assign Location
                    </Button>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="pb-2">Parts</h2>
                    <Button onClick={e => e.preventDefault()}>
                      <i className="fa fa-plus" /> Add Parts
                    </Button>
                  </CardBody>
                  <CardBody className="border-bottom">
                    {" "}
                    <FormGroup>
                      <h2>Assigned to</h2>
                      <Label for="assignee">Primary assignee</Label>
                      <SelectField id="assignee" options={[]} />
                      <Label for="workers">Additional Workers</Label>
                      <SelectField id="workers" options={[]} />
                      <Label for="team">Team</Label>
                      <SelectField id="team" options={[]} />
                    </FormGroup>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <FormGroup>
                      <h2>Images</h2>
                      <DragDrop placeholder="Upload or drop images" />
                    </FormGroup>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <FormGroup>
                      <h2>Tasks & Checklists</h2>
                      <h4 className="text-muted">
                        Checklists are templates for a collections of tasks, and are the best way to
                        standardize work. After adding a checklist here, you can modify it to fit
                        any specific needs.
                      </h4>
                      <Button onClick={e => e.preventDefault()}>
                        <i className="fa fa-plus" /> Add Checklists
                      </Button>
                      <Button onClick={e => e.preventDefault()}>
                        <i className="fa fa-plus" /> Add Individual Tasks
                      </Button>
                    </FormGroup>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2>Completion</h2>
                    <FormGroup check inline>
                      <Input type="checkbox" />
                      <Label check>Technician signature required</Label>
                    </FormGroup>
                    <FormGroup>
                      <Label className="mt-4" for="estimateHours">
                        Estimate Hours
                      </Label>
                      <Input
                        id="estimateHours"
                        name="estimateHours"
                        placeholder="Estimate hours"
                        type="number"
                      />
                    </FormGroup>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2>Start/End</h2>
                    <FormGroup check inline>
                      <DateField
                        id="start-date"
                        inputProps={{
                          placeholder: "Select date",
                        }}
                        label="Starts on*"
                        value={startDate}
                        setValue={setStartDate}
                      />
                    </FormGroup>
                    <FormGroup check inline>
                      <DateField
                        id="end-date"
                        inputProps={{
                          placeholder: "Select date",
                        }}
                        label="Ends on"
                        value={endDate}
                        setValue={setEndDate}
                      />
                    </FormGroup>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <FormGroup>
                      <h2>Files</h2>
                      <DragDrop placeholder="Upload or drop file" />
                    </FormGroup>
                  </CardBody>

                  <div className="header-buttons text-right m-5">
                    <Button
                      className="bg-white"
                      color="secondary"
                      onClick={() => navigate(`/admin${MAINTENANCE_PAGE}`)}
                    >
                      Cancel
                    </Button>
                    <Button color="primary" onClick={onSave}>
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
