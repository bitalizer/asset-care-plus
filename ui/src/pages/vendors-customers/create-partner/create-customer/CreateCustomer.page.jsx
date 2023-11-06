import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Container,
  Row,
  Button,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
  CardHeader,
} from "reactstrap";

import { BoxHeader } from "components/headers";
import { SelectField } from "components/widgets";

import { VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers/vendorsCustomers.routes.const";

import { useLocalStateAlerts } from "../../../../hooks";
import { createCustomer } from "../../../../reducers/customerSlice";
import { CREATE_ENTITY_ID } from "../../../../variables/app.consts";

const currency = [
  { value: "eur", label: "Euro" },
  { value: "usd", label: "US Dollar" },
  { value: "rub", label: "Ruble" },
];

export const CreateCustomerPage = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    id: CREATE_ENTITY_ID,
    address: "",
    company_name: "",
    description: "",
    email: "",
    phone: "",
    rate: "",
    customer_type: "",
    website: "",
    currency: "",
    billing_name: "",
    billing_address: "",
    billing_address2: "",
    billing_address3: "",
  });

  const changeHandler = e => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  console.log(customer);

  const dispatch = useDispatch();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const onSubmit = async e => {
    e.preventDefault();
    setSuccessMessage("Customer Added");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(createCustomer(customer));
  };

  const handleSelect = value => {
    customer.currency = value.label;
  };

  return (
    <div className="create-customer">
      {alert}
      <BoxHeader />
      <Container className="mt--6">
        <Row>
          <div className="col">
            <Card>
              <Form>
                <CardHeader>
                  <Row className="py-4">
                    <Col lg="6" xs="2" className="text-left pl-5">
                      <div
                        onClick={() => navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`)}
                        aria-hidden="true"
                      >
                        <i
                          className="fa fa-times"
                          style={{
                            color: "red",
                            transform: "scale(2)",
                            cursor: "pointer",
                            alignSelf: "center",
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg="6" xs="2" className="text-right pr-5">
                      <Button className="btn btn-primary" color="danger">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <h1 className="mb-0">Add Customer</h1>
                </CardHeader>
                <Col className="p-4">
                  <h2 className="pb-2">Details</h2>
                  <FormGroup>
                    <Label for="customerName">Customer Name *</Label>
                    <Input
                      id="customerName"
                      name="company_name"
                      onChange={changeHandler}
                      placeholder="NY times"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      onChange={changeHandler}
                      placeholder="108 Parkway Drive"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      onChange={changeHandler}
                      placeholder="+1 332 214 3429"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="webpage">Webpage</Label>
                    <Input
                      id="webpage"
                      name="website"
                      onChange={changeHandler}
                      placeholder="https://website.com"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      id="email"
                      onChange={changeHandler}
                      name="email"
                      placeholder="john.due@gmail.com"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="customerType">Customer Type</Label>
                    <Input
                      id="customerType"
                      name="customer_type"
                      onChange={changeHandler}
                      placeholder="ex. Plumbing, Electrical"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      id="description"
                      name="description"
                      onChange={changeHandler}
                      placeholder="Describe the purpose of this customer in a few lines..."
                      type="textarea"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="rate">Rate</Label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <Input
                        id="rate"
                        onChange={changeHandler}
                        name="rate"
                        placeholder="Rate"
                        type="text"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">per hour</span>
                      </div>
                    </div>
                    <p className="small">
                      Changes will only apply to Work Orders created in the future
                    </p>
                  </FormGroup>

                  <h2 className="pb-2">Billing Information</h2>
                  <FormGroup>
                    <Label for="billingName">Name</Label>
                    <Input
                      onChange={changeHandler}
                      id="billingName"
                      name="billing_name"
                      placeholder="John Doe"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="billingAddress">Address</Label>
                    <Input
                      id="billingAddress"
                      onChange={changeHandler}
                      name="billing_address"
                      placeholder="First Avenue, New York, NY"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="billingAddress2">Address Line 2</Label>
                    <Input
                      id="billingAddress2"
                      onChange={changeHandler}
                      name="billing_address2"
                      placeholder="First Avenue, New York, NY"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="billingAddress3">Address Line 3</Label>
                    <Input
                      id="billingAddress3"
                      onChange={changeHandler}
                      name="billing_address3"
                      placeholder="First Avenue, New York, NY"
                      type="text"
                    />
                  </FormGroup>
                  <SelectField
                    id="input-currency"
                    label="Currency"
                    onChange={handleSelect}
                    name="currency"
                    options={currency}
                    type="text"
                  />
                  <div className="header-buttons text-right mt-5">
                    <Button
                      className="bg-white"
                      color="secondary"
                      onClick={() => navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`)}
                    >
                      Cancel
                    </Button>
                    <Button color="danger" onClick={onSubmit}>
                      Submit
                    </Button>
                  </div>
                </Col>
              </Form>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};
