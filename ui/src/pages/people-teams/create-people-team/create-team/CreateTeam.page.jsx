import { useState } from "react";
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
import { SelectField } from "components/widgets";

import { PEOPLE_TEAMS_PAGE } from "pages/people-teams/peopleTeams.routes.const";

import { createTeam } from "../../../../reducers/teamsSlice";

export const CreateTeamPage = () => {
  const navigate = useNavigate();

  const [newTeam, setNewTeam] = useState({
    name: "",
    description: "",
    members: [],
    active: null,
  });

  const dispatch = useDispatch();

  const onCreateNewTeam = () => {
    console.log("newTeam", newTeam);
    dispatch(createTeam(newTeam));
  };

  return (
    <div className="create-team">
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
                      <Button color="primary" onClick={onCreateNewTeam}>
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <h1 className="mb-0">Add Team</h1>
                </CardHeader>
                <Col className="p-4">
                  <h2 className="pb-2">Details</h2>
                  <FormGroup>
                    <Label for="teamName">Team Name *</Label>
                    <Input
                      id="teamName"
                      name="teamName"
                      placeholder="Team name"
                      type="text"
                      onChange={e => setNewTeam({ ...newTeam, name: e.target.value })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Status</Label>
                    <SelectField
                      id="select-status"
                      options={[
                        { value: "active", label: "Active" },
                        { value: "inactive", label: "Inactive" },
                      ]}
                      onChange={e => setNewTeam({ ...newTeam, active: e.value })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Members</Label>
                    <SelectField
                      id="select-status"
                      options={[]}
                      onChange={e => setNewTeam({ ...newTeam, members: e.value })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      id="description"
                      name="description"
                      placeholder="Description"
                      type="text"
                      onChange={e => setNewTeam({ ...newTeam, description: e.target.value })}
                    />
                  </FormGroup>
                </Col>
              </Form>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};
