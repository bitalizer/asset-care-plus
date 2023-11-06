import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useLocalStateAlerts } from "hooks";

import { findMaintenanceById, updateMaintenance } from "../../../reducers/maintenanceSlice";
import { MAINTENANCE_PAGE } from "../maintenance.routes.const";
import { MaintenancePanel } from "../panels";

export const MaintenanceDetailsPage = () => {
  const { id } = useParams();
  // const maintenanceId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const dispatch = useDispatch();

  const preventiveMaintenance = useSelector(state => state.maintenance.oneMaintenance);

  useEffect(() => {
    dispatch(findMaintenanceById(id));
  }, [dispatch, id]);

  const onSavePreventiveMaintenance = maintenanceRequest => {
    const httpUpdateRequest = {
      id: maintenanceRequest.id,
      body: maintenanceRequest,
    };
    console.log("Maintenance update", httpUpdateRequest);
    setSuccessMessage("Maintenance Updated");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(updateMaintenance(httpUpdateRequest));
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
                    <h3 className="mb-0">Maintenance Details</h3>
                  </Col>{" "}
                  <Col lg="4" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${MAINTENANCE_PAGE}`)}
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <MaintenancePanel
                  preventiveMaintenance={preventiveMaintenance}
                  onSave={onSavePreventiveMaintenance}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
