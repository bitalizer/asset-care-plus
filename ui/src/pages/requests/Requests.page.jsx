import { useNavigate } from "react-router";

import { Button, Card, CardHeader, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { CREATE_REQUEST_PAGE } from "./requests.routes.const";
import { SearchRequestsPage } from "./search-request";

export const RequestsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader className="d-flex justify-content-between">
                <h3 className="mb-0">Request Page</h3>
                <Button color="primary" onClick={() => navigate(`/admin${CREATE_REQUEST_PAGE}`)}>
                  Create Request
                </Button>
              </CardHeader>
              <SearchRequestsPage />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
