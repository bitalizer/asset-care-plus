import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { Button, Card, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { useLocalStateAlerts } from "hooks";

import { deletePerson, fetchPeople, removePerson } from "../../../reducers/peopleSlice";
import { deleteTeam, fetchTeams, removeTeam } from "../../../reducers/teamsSlice";
import { PeopleTeamSwitchButton, TeamsTableColumns } from "../components";
import {
  CREATE_PERSON_PAGE,
  CREATE_TEAM_PAGE,
  PEOPLE_DETAILS,
  TEAM_DETAILS,
} from "../peopleTeams.routes.const";

import { PeopleTableColumns } from "./People.table";

export const PeopleAndTeamsPage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const people = useSelector(state => state.people.people);
  const teams = useSelector(state => state.teams.teams);
  const [category, setCategory] = useState("People");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
    dispatch(fetchPeople());
  }, [dispatch]);

  const onViewPeopleDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${PEOPLE_DETAILS}/${id}`);
  };

  const onDeletePerson = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete person", id);
    setSuccessMessage("Person deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deletePerson(id));
    dispatch(removePerson(parseInt(id)));
  };

  const onViewTeamsDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log(id);
    navigate(`/admin${TEAM_DETAILS}/${id}`);
  };

  const onDeleteTeam = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete team", id);
    setSuccessMessage("Team deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteTeam(id));
    dispatch(removeTeam(parseInt(id)));
  };
  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row className="justify-content-between">
                  <Col>
                    <Row className="align-items-center">
                      <Col xl="auto">
                        <h3 className="mb-0">People and Teams</h3>
                      </Col>
                      <Col xl="auto">
                        <PeopleTeamSwitchButton category={category} handleCategory={setCategory} />
                      </Col>
                    </Row>
                  </Col>
                  <Col xl="auto">
                    <Button
                      color="primary"
                      onClick={
                        category == "People"
                          ? () => navigate(`/admin${CREATE_PERSON_PAGE}`)
                          : () => navigate(`/admin${CREATE_TEAM_PAGE}`)
                      }
                    >
                      + {category}
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              {category === "People" ? (
                <ReactTable
                  data={people}
                  columns={PeopleTableColumns({
                    onDetailsButtonClick: onViewPeopleDetails,
                    onRemoveButtonClick: onDeletePerson,
                  })}
                />
              ) : (
                <ReactTable
                  data={teams}
                  columns={TeamsTableColumns({
                    onDetailsButtonClick: onViewTeamsDetails,
                    onRemoveButtonClick: onDeleteTeam,
                  })}
                />
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
