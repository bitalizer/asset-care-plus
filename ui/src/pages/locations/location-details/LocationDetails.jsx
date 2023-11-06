import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { findLocationById } from "../../../reducers/locationSlice";
import { LocationForm } from "../location-form";
import { SEARCH_LOCATIONS } from "../locations.routes.const";

export const LocationDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const locationItem = useSelector(state => state.locations.location);

  useEffect(() => {
    dispatch(findLocationById(id));
  }, [id, dispatch]);

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Location Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${SEARCH_LOCATIONS}`)}
                    >
                      Back to Search
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <LocationForm locationItem={locationItem} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
