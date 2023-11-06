import { useEffect, useState } from "react";

import { Button, Card, CardBody, Col, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const MeterPanel = ({ meter, onSave, onBackToSearchClick }) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({
      id: meter.id,
      meterName: meter.meterName,
      nextReadingDue: meter.nextReadingDue,
      unitOfMeasurement: meter.unitOfMeasurement,
      lastReading: meter.lastReading,
      frequency: meter.frequency,
      location: meter.location,
      asset: meter.asset,
      automated: meter.automated,
      createdAt: meter.createdAt,
    });
  }, [meter]);
  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardBody>
            <>
              <h4 className="heading-small text-muted mb-4">Meter information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-meter-name"
                      label="Meter Name"
                      defaultValue={meter.meterName}
                      type="text"
                      name="meterName"
                      value={form.meterName}
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-reading-due"
                      label="Next Reading Due"
                      defaultValue={meter.nextReadingDue}
                      type="text"
                      name="nextReadingDue"
                      value={form.nextReadingDue}
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-measurement"
                      label="Unit Of Measurement"
                      defaultValue={meter.unitOfMeasurement}
                      type="text"
                      name="unitOfMeasurement"
                      value={form.unitOfMeasurement}
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-last-reading"
                      label="Last Reading"
                      defaultValue={meter.lastReading}
                      type="text"
                      name="lastReading"
                      value={form.lastReading}
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-frequency"
                      label="Frequency"
                      defaultValue={meter.frequency}
                      type="text"
                      name="frequency"
                      value={form.frequency}
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="location"
                      label="Location"
                      defaultValue={meter.location}
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="asset"
                      label="Asset"
                      defaultValue={meter.asset}
                      type="text"
                      name="asset"
                      value={form.asset}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col lg="12">
                    <InputField
                      id="automated"
                      label="Automated"
                      defaultValue={meter.automated}
                      type="text"
                      name="automated"
                      value={form.automated}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col lg="12">
                    <InputField
                      id="createdAt"
                      label="Created At"
                      defaultValue={meter.createdAt}
                      type="text"
                      name="createdAt"
                      value={form.createdAt}
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
              </div>
              <Row className="align-items-center py-4">
                <Col lg="12" xs="7" className="text-right">
                  <div className="pl-lg-4">
                    <Row>
                      <Button color="primary" onClick={() => onSave(form)}>
                        Save
                      </Button>
                      <Button color="info" onClick={onBackToSearchClick}>
                        Back to Search
                      </Button>
                    </Row>
                  </div>
                </Col>
              </Row>
            </>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
