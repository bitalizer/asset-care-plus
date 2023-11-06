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
} from "reactstrap";

import { BoxHeader } from "components/headers";
import { DateField } from "components/widgets";

import { PEOPLE_TEAMS_PAGE } from "pages/people-teams/peopleTeams.routes.const";

import { useLocalStateAlerts } from "../../../../hooks";
import { createPerson } from "../../../../reducers/peopleSlice";
import { CREATE_ENTITY_ID } from "../../../../variables/app.consts";

export const CreatePersonPage = () => {
  const navigate = useNavigate();
  const [lastVisitDate, setLastVisitDate] = useState(new Date());
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const [person, setPerson] = useState({
    id: CREATE_ENTITY_ID,
    fullName: "",
    email: "",
    phone: "",
    jobTitle: "",
    companyName: "",
    accountType: "",
    lastVisit: "",
  });

  useEffect(() => {
    person.lastVisit = new Date(lastVisitDate).toLocaleDateString("en-GB");
  }, [lastVisitDate, person]);

  const changeHandler = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const onSave = () => {
    setSuccessMessage("Maintenance Added");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(createPerson(person));
  };

  return (
    <div className="create-customer">
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
                      <div
                        onClick={() => navigate(`/admin${PEOPLE_TEAMS_PAGE}`)}
                        aria-hidden="true"
                      >
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
                    <Col lg="6" xs="2" className="text-right pr-5">
                      <Button className="btn btn-primary" color="primary">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <h1 className="mb-0">Add Person</h1>
                </CardHeader>
                <Col className="p-4">
                  <h2 className="pb-2">Details</h2>

                  <FormGroup>
                    <Label for="personName">Person Name *</Label>
                    <Input
                      id="personName"
                      name="fullName"
                      value={person.fullName}
                      onChange={changeHandler}
                      placeholder="Person name"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      onChange={changeHandler}
                      value={person.email}
                      placeholder="Email"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      onChange={changeHandler}
                      value={person.phone}
                      placeholder="+1 332 214 3429"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      onChange={changeHandler}
                      value={person.jobTitle}
                      name="jobTitle"
                      placeholder="Job Title"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Company Name</Label>
                    <Input
                      id="email"
                      name="companyName"
                      onChange={changeHandler}
                      value={person.companyName}
                      placeholder="Company Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="customerType">Account Type</Label>
                    <Input
                      id="customerType"
                      name="accountType"
                      placeholder="Account Type"
                      type="text"
                      onChange={changeHandler}
                      value={person.accountType}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Last Visit</Label>
                    <DateField
                      id="last-visit-date"
                      inputProps={{
                        placeholder: "Select date",
                      }}
                      value={lastVisitDate}
                      setValue={setLastVisitDate}
                    />
                  </FormGroup>

                  <div className="header-buttons text-right mt-5">
                    <Button
                      className="bg-white"
                      color="secondary"
                      onClick={() => navigate(`/admin${PEOPLE_TEAMS_PAGE}`)}
                    >
                      Cancel
                    </Button>
                    <Button color="primary" onClick={() => onSave()}>
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
