import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Button, Card, CardBody, Col, Row } from "reactstrap";

import { InputField } from "components/widgets";

import { REQUESTS_PAGE } from "../requests.routes.const";

export const RequestPanel = ({ request, onSave }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({
      id: request.id,
      description: request.description,
      title: request.title,
      priority: request.priority,
    });
  }, [request]);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardBody>
            <>
              <h4 className="heading-small text-muted mb-4">Request information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-title"
                      label="Title"
                      defaultValue={request.title}
                      type="text"
                      onChange={changeHandler}
                      name="title"
                      value={form.title}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="12">
                    <InputField
                      id="description"
                      label="Description"
                      defaultValue={request.description}
                      type="text"
                      onChange={changeHandler}
                      name="description"
                      value={form.description}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="priority"
                      label="Priority"
                      defaultValue={request.priority}
                      type="text"
                      onChange={changeHandler}
                      name="priority"
                      value={form.priority}
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
                      <Button color="info" onClick={() => navigate(`${REQUESTS_PAGE}`)}>
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
