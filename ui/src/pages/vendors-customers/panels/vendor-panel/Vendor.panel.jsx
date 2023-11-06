import { useEffect, useState } from "react";

import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const VendorPanel = ({ vendor, onSave, onBackToSearchClick }) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({
      id: vendor.id,
      address: vendor.address,
      company_name: vendor.company_name,
      description: vendor.description,
      email: vendor.email,
      name: vendor.name,
      phone: vendor.phone,
      rate: vendor.rate,
      vendor_type: vendor.vendor_type,
      website: vendor.website,
    });
  }, [vendor]);
  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);

  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardHeader>
            <Row className="align-items-center">
              <Col xs="6">
                <h2 className="mb-0">Vendor Details</h2>
              </Col>
              <Col xs="6" className="text-right">
                <Button color="info" onClick={onBackToSearchClick}>
                  Back to Search
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <>
              <h4 className="heading-small text-muted mb-4">Vendor information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="10">
                    <InputField
                      id="input-group-name"
                      label="Company Name"
                      defaultValue={vendor.company_name}
                      value={form.company_name}
                      type="text"
                      name="company_name"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="10">
                    <InputField
                      id="address"
                      label="Address"
                      defaultValue={vendor.address}
                      type="text"
                      value={form.address}
                      name="address"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField id="phone" label="Phone" defaultValue={vendor.phone} type="text" />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="website"
                      label="Website"
                      defaultValue={vendor.website}
                      type="text"
                      value={form.website}
                      name="website"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField id="email" label="Email" defaultValue={vendor.email} type="text" />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="customerType"
                      label="Customer Type"
                      defaultValue={vendor.vendor_type}
                      type="text"
                      value={form.vendor_type}
                      name="vendor_type"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="rate"
                      label="Hourly Rate"
                      defaultValue={vendor.rate}
                      type="text"
                      value={form.rate}
                      name="rate"
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="description"
                      label="Description"
                      defaultValue={vendor.description}
                      type="text"
                      value={form.description}
                      name="description"
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
