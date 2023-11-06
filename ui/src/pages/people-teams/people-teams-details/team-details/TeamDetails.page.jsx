import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { TeamPanel } from "pages/people-teams/panels";
import { PEOPLE_TEAMS_PAGE } from "pages/people-teams/peopleTeams.routes.const";

import { useLocalStateAlerts } from "hooks";

import { findTeamById, updateTeam } from "../../../../reducers/teamsSlice";

export const TeamDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const team = useSelector(state => state.teams.oneTeam);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findTeamById(id));
  }, [dispatch, id]);

  const onSaveTeam = peopleRequest => {
    const httpUpdateRequest = {
      id: peopleRequest.id,
      body: peopleRequest.form,
    };
    console.log("httpUpdateRequest", httpUpdateRequest);
    setSuccessMessage("Person Updated");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(updateTeam(httpUpdateRequest));
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Team Details</h3>
                  </Col>
                  <Col xs="4" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${PEOPLE_TEAMS_PAGE}`)}
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <TeamPanel team={team} onSave={onSaveTeam} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
