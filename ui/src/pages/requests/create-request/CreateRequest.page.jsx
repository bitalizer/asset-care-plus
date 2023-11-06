import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import {
  Button,
  ButtonGroup,
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
import { DragDrop } from "components/widgets";

import { useLocalStateAlerts } from "../../../hooks";
import { createRequest } from "../../../reducers/requestSlice";
import { CREATE_ENTITY_ID } from "../../../variables/app.consts";
import { REQUESTS_PAGE } from "../requests.routes.const";

export const CreateRequestPage = () => {
  const navigate = useNavigate();
  const [radioButtonSelected, setRadioButtonSelected] = useState(1);
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [request, setRequest] = useState({
    id: CREATE_ENTITY_ID,
    description: "",
    title: "",
    priority: "",
  });

  useEffect(() => {
    if (radioButtonSelected === 1) request.priority = "None";
    if (radioButtonSelected === 2) request.priority = "Low";
    if (radioButtonSelected === 3) request.priority = "Medium";
    if (radioButtonSelected === 4) request.priority = "High";
  }, [radioButtonSelected, request]);

  const changeHandler = e => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const onSubmit = () => {
    setSuccessMessage("Request Added");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(createRequest(request));
  };

  return (
    <div className="create-request">
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
                      <div onClick={() => navigate(`/admin${REQUESTS_PAGE}`)} aria-hidden="true">
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
                  <h1 className="mb-0">Add Request</h1>
                </CardHeader>

                <Col>
                  <CardBody className="border-bottom">
                    <FormGroup>
                      <Label for="titleName">Title*</Label>
                      <Input
                        id="titleName"
                        name="title"
                        placeholder="Request Title"
                        type="text"
                        onChange={changeHandler}
                        value={request.title}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="description">Description</Label>
                      <Input
                        id="description"
                        name="description"
                        placeholder="A detailed description about the work order..."
                        onChange={changeHandler}
                        value={request.description}
                      />
                    </FormGroup>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <FormGroup>
                      <Label for="title">Priority</Label>
                      <ButtonGroup className="d-block">
                        <Button
                          color="primary"
                          outline
                          onClick={() => setRadioButtonSelected(1)}
                          active={radioButtonSelected === 1}
                        >
                          None
                        </Button>
                        <Button
                          color="primary"
                          outline
                          onClick={() => setRadioButtonSelected(2)}
                          active={radioButtonSelected === 2}
                        >
                          Low
                        </Button>
                        <Button
                          color="primary"
                          outline
                          onClick={() => setRadioButtonSelected(3)}
                          active={radioButtonSelected === 3}
                        >
                          Medium
                        </Button>
                        <Button
                          color="primary"
                          outline
                          onClick={() => setRadioButtonSelected(4)}
                          active={radioButtonSelected === 4}
                        >
                          High
                        </Button>
                      </ButtonGroup>
                    </FormGroup>
                    <FormGroup>
                      <Label>Image</Label>
                      <DragDrop placeholder="Drag an image here" />
                    </FormGroup>

                    <FormGroup>
                      <Label>Files</Label>
                      <DragDrop placeholder="Drag an image here" />
                    </FormGroup>
                  </CardBody>

                  <div className="header-buttons text-right m-5">
                    <Button
                      className="bg-white"
                      color="secondary"
                      onClick={() => navigate(`/admin${REQUESTS_PAGE}`)}
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
