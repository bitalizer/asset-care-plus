import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Col, Form, Row } from "reactstrap";

import { InputField } from "components/widgets";

import { updatePerson } from "../../../../reducers/peopleSlice";

export const PeoplePanel = ({ people, onSave }) => {
  const [roleId] = useState(people.roleId);
  const [groups] = useState(people.groups || []);

  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({
      id: people.id,
      fullName: people.fullName,
      email: people.email,
      phone: people.phone,
      jobTitle: people.jobTitle,
      companyName: people.companyName,
      accountType: people.accountType,
      lastVisit: people.lastVisit,
    });
  }, [people]);

  const dispatch = useDispatch();
  const onSavePeople = form => {
    const peopleSaveRequest = {
      id: people.id,
      body: form,
      roleId,
      groups,
    };
    dispatch(updatePerson(peopleSaveRequest));
    onSave(peopleSaveRequest);
  };

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">People Data</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <InputField
              id="input-fullName"
              label="Full Name"
              value={form.fullName}
              type="text"
              name="fullName"
              onChange={changeHandler}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-email"
              label="E-mail address"
              value={form.email}
              type="text"
              name="email"
              onChange={changeHandler}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-phone"
              label="Phone number"
              value={form.phone}
              type="text"
              name="phone"
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-jobTitle"
              label="Job Title"
              value={form.jobTitle}
              type="text"
              name="jobTitle"
              onChange={changeHandler}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-companyName"
              label="Company Name"
              value={form.companyName}
              type="text"
              name="companyName"
              onChange={changeHandler}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-accountType"
              label="Account Type"
              value={form.accountType}
              type="text"
              name="accountType"
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-lastVisit"
              label="Last Visit"
              value={form.lastVisit}
              type="text"
              name="lastVisit"
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="button" onClick={() => onSavePeople(form)}>
            Update People
          </Button>
        </Row>
      </div>
    </Form>
  );
};
