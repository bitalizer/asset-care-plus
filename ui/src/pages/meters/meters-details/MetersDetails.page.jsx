import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useLocalStateAlerts } from "hooks";

import { findMeterById, updateMeter } from "../../../reducers/metersSlice";
import { METERS_PAGE } from "../meters.routes.const";
import { MeterPanel } from "../panels/MeterDetails.panel";

export const MeterDetailsPage = () => {
  const { id } = useParams();
  const meterId = parseInt(id);
  const navigate = useNavigate();

  const meterItem = useSelector(state => state.meters.oneMeter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findMeterById(id));
  }, [dispatch, id]);

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const onSaveMeter = form => {
    console.log("update meter", meterId, meterItem);
    const meter = {
      id: meterId,
      body: form,
    };
    dispatch(updateMeter(meter));
    setSuccessMessage("Meter Updated");
    setIsSuccess(true);
    setSaveSent(true);
  };

  const onBackToSearchClick = () => {
    navigate(`/admin${METERS_PAGE}`);
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
                    <h3 className="mb-0">Meter Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={onBackToSearchClick}
                    >
                      Back to Search
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <MeterPanel
                  meter={meterItem}
                  onSave={onSaveMeter}
                  onBackToSearchClick={onBackToSearchClick}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
