import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { Card, CardBody, Container, Row, CardHeader, Button } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { useLocalStateAlerts } from "hooks";

import { deleteLocation, fetchLocation, removeLocation } from "../../../reducers/locationSlice";
import { LocationHeader } from "../components/LocationHeader";
import { CREATE_LOCATION, LOCATION_DETAILS } from "../locations.routes.const";

import { locationsTableColumns } from "./Locations.table";

export const LocationsPage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const locations = useSelector(state => state.locations.locations);

  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);

  const onViewLocationsDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${LOCATION_DETAILS}/${id}`);
  };

  const onDeleteLocation = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    setSuccessMessage("Location deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteLocation(id));
    dispatch(removeLocation(parseInt(id)));
    console.log("delete location", id);
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
                <h3 className="mb-0">Location Page</h3>
              </CardHeader>
              <CardBody>
                <BoxHeader />
                <Container className="mt--6" fluid>
                  <Row>
                    <div className="col">
                      <Card>
                        <CardHeader className="d-flex justify-content-between">
                          <div>
                            <h3 className="mb-0">Locations</h3>
                            <p className="text-sm mb-0">Locations list</p>
                          </div>
                          <div>
                            <Button
                              color="primary"
                              onClick={() => navigate(`/admin${CREATE_LOCATION}`)}
                            >
                              <i className="fas fa-plus" aria-hidden="true"></i> Create Location
                            </Button>
                          </div>
                        </CardHeader>
                        <LocationHeader />
                        <ReactTable
                          data={locations}
                          columns={locationsTableColumns({
                            onDetailsButtonClick: onViewLocationsDetails,
                            onRemoveButtonClick: onDeleteLocation,
                          })}
                        />
                      </Card>
                    </div>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
