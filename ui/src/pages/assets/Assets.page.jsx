import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { AssetsPanel } from "./panels";

export const AssetsPage = () => {
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Assets Page</h3>
                <div className="d-inline float-right pt-1 pr-3">
                  <i className="far fa-user-circle float-right pr-2" aria-hidden="true"></i>
                  <i className="far fa-bell float-right pr-2" aria-hidden="true"></i>
                  <i className="far fa-lightbulb float-right pr-2" aria-hidden="true"></i>
                </div>
              </CardHeader>
              <CardBody>
                <AssetsPanel />
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
