import { useState } from "react";
import { AiOutlineCopy, AiFillEdit } from "react-icons/ai";
import { BsGlobe, BsEnvelope } from "react-icons/bs";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";

import { BoxHeader } from "components/headers";

export const RequestPortalPage = () => {
  const [permission, setPermission] = useState(false);
  const [permissionPurchaseOrder, setPermissionPurchaseOrder] = useState(false);
  console.log(permission);

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Portal request page</h3>
              </CardHeader>
              <CardBody>
                <Card>
                  <CardHeader>
                    <div className="custom-control custom-switch m-4">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch1"
                        onClick={() => setPermission(!permission)}
                      />
                      <label className="custom-control-label" htmlFor="customSwitch1">
                        <h3 className="mb-0 ">Company Request Portal</h3>
                      </label>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="12" className="mb-4">
                        <div className="text-muted">
                          The Request Portal allows users that are not on your team to add and view
                          their request just by signing in with their email account.
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="text-danger">
                          *By enabling the public request portal, you are allowing anyone with the
                          portal link to submit requests. Once a request is submitted, anyone with
                          an identifying email will be able to view the request. If you are worried
                          about sensitive information or security, we recommend adding users as
                          Requesters and keeping the public request portal disabled.
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                {permission && (
                  <Card>
                    <CardHeader>
                      <h3 className="mb-0 ">Work Order Request</h3>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md="12" className="mb-4">
                          <div className="font-weight-bold">Create work request</div>
                        </Col>
                        <Col md="12">
                          <div>
                            <InputGroup>
                              <InputGroupText className="text-primary">
                                <BsGlobe />
                              </InputGroupText>
                              <Input
                                value="https://app.onupkeep.com/web/#/work-orders!"
                                style={{
                                  height: "48px",
                                }}
                              />
                              <InputGroupText>
                                <button
                                  style={{
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    display: "flex",
                                  }}
                                  className="font-weight-bold"
                                >
                                  <AiOutlineCopy className="mt-1 mr-2" />
                                  Copy URL
                                </button>
                              </InputGroupText>{" "}
                            </InputGroup>
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="text-muted font-italic mt-4">
                            Anyone with the URL above can create work order requests that go
                            directly to their admins for approval. They do not have to log in to
                            their AssetCare account.
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardBody className="border-top border-bottom bg-light">
                      <Col md="12">
                        <div>
                          <Button>
                            <span className="btn-inner--icon">
                              <AiFillEdit className="mb-1 mr-2" />
                            </span>
                            <span className="btn-inner--text">Customize URL</span>
                          </Button>
                          <Button>
                            <span className="btn-inner--text">Edit Public Request Form Items</span>
                          </Button>
                        </div>
                      </Col>
                    </CardBody>
                    <CardBody>
                      <Row>
                        <Col md="12" className="mb-4">
                          <div className="font-weight-bold">Log in to view requests </div>
                        </Col>
                        <Col md="12">
                          <div>
                            <InputGroup>
                              <InputGroupText className="text-primary">
                                <BsGlobe />
                              </InputGroupText>
                              <Input
                                value="https://app.onupkeep.com/web/#/work-orders!"
                                style={{
                                  height: "48px",
                                }}
                              />
                              <InputGroupText>
                                <button
                                  style={{
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    display: "flex",
                                  }}
                                  className="font-weight-bold"
                                >
                                  <AiOutlineCopy className="mt-1 mr-2" />
                                  Copy URL
                                </button>
                              </InputGroupText>{" "}
                            </InputGroup>
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="text-muted font-italic mt-4">
                            Users may view the status of their work request using the URL above.
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardBody className="border-top">
                      <Row>
                        <Col md="12" className="mb-4">
                          <div className="font-weight-bold">Create via Email</div>
                          <div className="text-muted">
                            Submit work requests by sending an email to your companys unique
                            AssetCare email address.
                          </div>
                        </Col>
                        <Col md="12">
                          <div>
                            <InputGroup>
                              <InputGroupText className="text-primary">
                                <BsEnvelope />
                              </InputGroupText>
                              <Input
                                value="notifications+{Custom ID}@onupkeep.com"
                                style={{
                                  height: "48px",
                                }}
                              />
                              <InputGroupText>
                                <button
                                  style={{
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    display: "flex",
                                  }}
                                  className="font-weight-bold"
                                >
                                  <AiOutlineCopy className="mt-1 mr-2" />
                                  Copy URL
                                </button>
                              </InputGroupText>{" "}
                            </InputGroup>
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="text-muted font-italic mt-4">
                            AssetCare will use the subject line as the work order title, and the
                            body of the email as the request description. Requests are updated every
                            15 minutes.
                          </div>
                          <div className="text-muted font-italic mt-4">
                            <span className="font-weight-bold"> Note:</span> The email is CASE
                            SENSITIVE. Only 1 image can be atttached per request via email.
                          </div>
                        </Col>
                      </Row>
                    </CardBody>{" "}
                    <CardBody className="border-top border-bottom bg-light rounded-bottom">
                      <Col md="12">
                        <div>
                          <Button>
                            <span className="btn-inner--icon">
                              <AiFillEdit className="mb-1 mr-2" />
                            </span>
                            <span className="btn-inner--text">Update Email ID</span>
                          </Button>
                        </div>
                      </Col>
                    </CardBody>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <div className="custom-control custom-switch m-4">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch2"
                        onClick={() => setPermissionPurchaseOrder(!permissionPurchaseOrder)}
                      />
                      <label className="custom-control-label" htmlFor="customSwitch2">
                        <h3 className="mb-0 ">Enable Purchase Order Public Request Portal</h3>
                      </label>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="12" className="mb-4">
                        <div className="text-muted">
                          Enable access for non-users to request purchase orders using the public
                          request portal
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                {permissionPurchaseOrder && (
                  <Card>
                    <CardHeader>
                      <h3 className="mb-0 ">Purchase Order Requests</h3>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md="12" className="mb-4">
                          <div className="font-weight-bold">Create via Request Portal</div>
                        </Col>
                        <Col md="12">
                          <div>
                            <InputGroup>
                              <InputGroupText className="text-primary">
                                <BsGlobe />
                              </InputGroupText>
                              <Input
                                value="https://app.onupkeep.com/web/#/work-orders!"
                                style={{
                                  height: "48px",
                                }}
                              />
                              <InputGroupText>
                                <button
                                  style={{
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    display: "flex",
                                  }}
                                  className="font-weight-bold"
                                >
                                  <AiOutlineCopy className="mt-1 mr-2" />
                                  Copy URL
                                </button>
                              </InputGroupText>{" "}
                            </InputGroup>
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="text-muted font-italic mt-4">
                            Anyone with the URL above can create purchase order requests that go
                            directly to their admins for approval. They do not have to log in to
                            their AssetCare account.
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardBody>
                      <Row>
                        <Col md="12" className="mb-4">
                          <div className="font-weight-bold">View Requests</div>
                        </Col>
                        <Col md="12">
                          <div>
                            <InputGroup>
                              <InputGroupText className="text-primary">
                                <BsGlobe />
                              </InputGroupText>
                              <Input
                                value="https://app.onupkeep.com/web/#/work-orders!"
                                style={{
                                  height: "48px",
                                }}
                              />
                              <InputGroupText>
                                <button
                                  style={{
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    display: "flex",
                                  }}
                                  className="font-weight-bold"
                                >
                                  <AiOutlineCopy className="mt-1 mr-2" />
                                  Copy URL
                                </button>
                              </InputGroupText>{" "}
                            </InputGroup>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                )}
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
