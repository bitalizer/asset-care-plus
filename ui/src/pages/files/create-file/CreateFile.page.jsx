import { useNavigate } from "react-router-dom";

import { Card, Container, Row, Button, Col, Form, FormGroup, CardHeader } from "reactstrap";

import { BoxHeader } from "components/headers";
import { DragDrop } from "components/widgets";

import { FILES_PAGE } from "../files.routes.const";

export const CreateFilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="create-file">
      <BoxHeader />
      <Container className="mt--6">
        <Row>
          <div className="col">
            <Card>
              <Form>
                <CardHeader>
                  <Row className="py-2">
                    <Col lg="12" xs="2">
                      <div
                        onClick={() => navigate(`/admin${FILES_PAGE}`)}
                        aria-hidden="true"
                        className="d-flex justify-content-end"
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
                  </Row>
                  <h1 className="mb-0">Add File</h1>
                </CardHeader>
                <Col className="p-4">
                  <h2 className="pb-2 text-muted">Add a file</h2>
                  <FormGroup>
                    <DragDrop placeholder="File Drop Box" />
                  </FormGroup>

                  <div className="header-buttons text-right mt-5">
                    <Button
                      className="bg-white"
                      color="secondary"
                      onClick={() => navigate(`/admin${FILES_PAGE}`)}
                    >
                      Cancel
                    </Button>
                    <Button color="primary">Submit</Button>
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
