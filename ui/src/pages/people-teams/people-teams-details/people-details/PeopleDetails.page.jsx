import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { PeoplePanel } from "pages/people-teams/panels";
import { PEOPLE_TEAMS_PAGE } from "pages/people-teams/peopleTeams.routes.const";

import { useLocalStateAlerts } from "hooks";

import { findPersonById } from "../../../../reducers/peopleSlice";

export const PeopleDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const people = useSelector(state => state.people.person);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPersonById(id));
  }, [dispatch, id]);

  const onSavePeople = peopleRequest => {
    const httpUpdateRequest = {
      id: peopleRequest.id,
      body: peopleRequest,
    };
    console.log("httpUpdateRequest", httpUpdateRequest);
    setSuccessMessage("Person Updated");
    setIsSuccess(true);
    setSaveSent(true);
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
                    <h3 className="mb-0">Person Details</h3>
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
                <PeoplePanel people={people} onSave={onSavePeople} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
