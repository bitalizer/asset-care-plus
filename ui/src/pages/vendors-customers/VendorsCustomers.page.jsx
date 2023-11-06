import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardBody, CardHeader, Container, Row, Button, Col } from "reactstrap";

import { BoxHeader } from "components/headers";

import { SearchVendorsCustomersPage } from "./search-vendors-customers";
import { CREATE_CUSTOMER_PAGE, CREATE_VENDOR_PAGE } from "./vendorsCustomers.routes.const";

export const VendorsCustomersPage = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(null);
  const [btn, setBtn] = useState("");
  const [vendorClassName, setVendorClassName] = useState("btn btn-primary active");
  const [customerClassName, setCustomerClassName] = useState(
    "btn btn-secondary bg-white text-gray"
  );

  useEffect(() => {
    setToggle(true);
  }, []);

  function handleVendors() {
    setToggle(true);
    setBtn("primary");
    setVendorClassName("btn btn-primary active");
    setCustomerClassName("btn btn-secondary bg-white text-gray");
  }

  function handleCustomers() {
    setToggle(false);
    setCustomerClassName("btn btn-primary active");
    setVendorClassName("btn btn-secondary bg-white text-gray");
  }

  return (
    <>
      <div className="vendors-customers">
        <BoxHeader />
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Vendors & customers</h3>
                </CardHeader>
                <Row className="m-3 justify-content-between">
                  <Col>
                    <div className="btn-group d-inline-flex" role="group">
                      <Button
                        className={vendorClassName}
                        id="vendor"
                        color={btn}
                        type="button"
                        onClick={handleVendors}
                      >
                        Vendors
                      </Button>
                      <Button
                        className={customerClassName}
                        id="customer"
                        color={btn}
                        type="button"
                        onClick={handleCustomers}
                      >
                        Customers
                      </Button>
                    </div>
                  </Col>
                  <div className="d-inline-flex">
                    <Col>
                      <Button
                        id="addBtn"
                        color="primary"
                        type="button"
                        onClick={
                          toggle == true
                            ? () => navigate(`/admin${CREATE_VENDOR_PAGE}`)
                            : () => navigate(`/admin${CREATE_CUSTOMER_PAGE}`)
                        }
                      >
                        {toggle == true ? "+ Vendor" : "+ Customer"}
                      </Button>
                    </Col>
                  </div>
                </Row>
                <SearchVendorsCustomersPage toggle={toggle} />
                <CardBody />
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
