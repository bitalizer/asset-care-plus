import React, { useState } from "react";

import { Row, Col, Button, Card, Form } from "reactstrap";

import { InputField, SelectField, DragDrop } from "components/widgets";

import { selectAllBusinessUnitsDataAsSelectOptions } from "pages/utils";

export const AddMeterDetail = ({ onClose, onSave }) => {
  const [newMeter, setNewMeter] = useState({
    meterName: "",
    unitOfMeasurement: "",
    frequency: "",
    category: "",
    worker: "",
    location: "",
    asset: "",
  });
  const [category] = useState(selectAllBusinessUnitsDataAsSelectOptions);

  const onSaveMeter = () => {
    onSave(newMeter);
  };

  return (
    <>
      <Row>
        <Col className="h-100vh">
          <Card className="p-4 pt-4 rounded-0 mb-0 shadow-none">
            <Form>
              <div className="d-flex justify-content-sm-between mb-4">
                <Button close onClick={onClose} id="closebtn" />
                <Button id="submitbtn" color="info" type="button" onClick={onSave}>
                  Submit
                </Button>
              </div>
              <div>
                <h2 className="mb-3">Add Meter</h2>
              </div>
              <Row className="justify-content-center">
                <Col>
                  <InputField
                    id="input-title"
                    label="Title"
                    type="text"
                    placeholder="Name for this meter"
                    value={newMeter.meterName}
                    onChange={e => setNewMeter({ ...newMeter, meterName: e.target.value })}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <InputField
                    id="input-unit"
                    label="Unit of measurement"
                    type="text"
                    value={newMeter.unitOfMeasurement}
                    onChange={e => setNewMeter({ ...newMeter, unitOfMeasurement: e.target.value })}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <InputField
                    id="input-update"
                    label="Update frequency"
                    type="text"
                    value={newMeter.frequency}
                    onChange={e => setNewMeter({ ...newMeter, frequency: e.target.value })}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SelectField
                    id="select-category"
                    label="Category"
                    options={category}
                    onChange={e => {
                      setNewMeter({ ...newMeter, category: e.label });
                    }}
                  />
                </Col>
              </Row>
              <DragDrop label="Image" placeholder="Drag an image here" />
              <Row>
                <Col>
                  <SelectField
                    id="select-worker"
                    label="Worker"
                    options={category}
                    onChange={e => setNewMeter({ ...newMeter, worker: e.label })}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SelectField
                    id="select-location"
                    label="Location"
                    options={category}
                    onChange={e => setNewMeter({ ...newMeter, location: e.label })}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SelectField
                    id="select-asset"
                    label="Asset"
                    options={category}
                    onChange={e => setNewMeter({ ...newMeter, asset: e.label })}
                  />
                </Col>
              </Row>

              <div className="d-flex justify-content-sm-between pr-4 mb-4 mt-6 float-right">
                <Button onClick={onClose}>Cancel</Button>
                <Button id="submitbtn" color="info" type="button" onClick={onSaveMeter}>
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};
