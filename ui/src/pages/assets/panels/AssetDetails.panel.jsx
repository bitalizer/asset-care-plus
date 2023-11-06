import { useEffect, useState } from "react";

import { Button, Card, CardBody, Col, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const AssetDetailsPanel = ({ asset, onSave, onBackToSearchClick }) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({
      id: asset.id,
      name: asset.name,
      location: asset.location,
      area: asset.area,
      model: asset.model,
      barcode: asset.barcode,
      category: asset.category,
      assetStatus: asset.assetStatus,
      image: asset.image,
    });
  }, [asset]);

  console.log(form);
  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardBody>
            <>
              <h4 className="heading-small text-muted mb-4">Asset information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="10">
                    <InputField
                      id="input-name"
                      label="Name"
                      defaultValue={asset.name}
                      type="text"
                      name="name"
                      onChange={changeHandler}
                      value={form.name}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="10">
                    <InputField
                      id="location"
                      label="Location"
                      defaultValue={asset.location}
                      type="text"
                      name="location"
                      onChange={changeHandler}
                      value={form.location}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="area"
                      label="Area"
                      defaultValue={asset.area}
                      type="text"
                      name="area"
                      onChange={changeHandler}
                      value={form.area}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="model"
                      label="Model"
                      defaultValue={asset.model}
                      type="text"
                      name="model"
                      onChange={changeHandler}
                      value={form.model}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="barcode"
                      label="Barcode"
                      defaultValue={asset.barcode}
                      type="text"
                      name="barcode"
                      onChange={changeHandler}
                      value={form.barcode}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="category"
                      label="Category"
                      defaultValue={asset.category}
                      type="text"
                      name="category"
                      onChange={changeHandler}
                      value={form.category}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="assetStatus"
                      label="Asset Status"
                      defaultValue={asset.assetStatus}
                      type="text"
                      name="assetStatus"
                      onChange={changeHandler}
                      value={form.assetStatus}
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
