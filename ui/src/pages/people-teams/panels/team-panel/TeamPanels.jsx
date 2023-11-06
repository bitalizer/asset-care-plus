import { useEffect, useState } from "react";

import { Button, Col, Form, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const TeamPanel = ({ team, onSave }) => {
  const { id } = team;
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({
      id: team.id,
      name: team.name,
      description: team.description,
      active: team.active,
    });
  }, [team]);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSaveTeam = () => {
    const peopleSaveRequest = {
      id,
      form,
    };

    onSave(peopleSaveRequest);
  };
  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">Team Data</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <InputField
              id="input-team"
              label="Team Name"
              value={form.name}
              type="text"
              onChange={changeHandler}
              name="name"
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-description"
              label="Description"
              value={form.description}
              type="text"
              onChange={changeHandler}
              name="description"
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-active"
              label="Active"
              value={form.active ? "Yes" : "No"}
              type="text"
              onChange={changeHandler}
              name="active"
            />
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="button" onClick={() => onSaveTeam(form)}>
            Update Team
          </Button>
        </Row>
      </div>
    </Form>
  );
};
