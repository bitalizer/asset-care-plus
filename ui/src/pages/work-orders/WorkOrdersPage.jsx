import { useNavigate } from "react-router";

import { Button, Card, CardHeader, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { SearchOrdersPage } from "./search-order";
import { CREATE_WORK_ORDER_PAGE } from "./workOrders.routes.const";

export const WorkOrdersPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader className="d-flex justify-content-between">
                <h3 className="mb-0">Work Orders</h3>
                <Button color="primary" onClick={() => navigate(`/admin${CREATE_WORK_ORDER_PAGE}`)}>
                  Create Order
                </Button>
              </CardHeader>
              <SearchOrdersPage />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
