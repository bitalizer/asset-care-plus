import { useNavigate } from "react-router";

import { Button, Card, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { CREATE_FILE_PAGE } from "./files.routes.const";
import { FilesSearchPage } from "./search-files";

export const FilesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Files page</h3>
                <div>
                  <Col className="d-flex flex-row-reverse ">
                    <Button
                      id="addBtn"
                      color="primary"
                      type="button"
                      onClick={() => navigate(`/admin${CREATE_FILE_PAGE}`)}
                    >
                      + File
                    </Button>
                  </Col>
                </div>
              </CardHeader>

              <FilesSearchPage />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
