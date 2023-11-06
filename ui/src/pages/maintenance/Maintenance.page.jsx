import { useNavigate } from "react-router";

import { Button, Card, CardHeader, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { CREATE_MAINTENANCE_PAGE } from "./maintenance.routes.const";
import { SearchMaintenancePage } from "./search-maintenance";

export const MaintenancePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader className="d-flex justify-content-between">
                <h3 className="mb-0">Maintenance Page</h3>
                <Button
                  color="primary"
                  onClick={() => navigate(`/admin${CREATE_MAINTENANCE_PAGE}`)}
                >
                  Create Trigger
                </Button>
              </CardHeader>

              <SearchMaintenancePage />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
