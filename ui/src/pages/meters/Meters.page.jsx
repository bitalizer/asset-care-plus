import { Card, CardHeader, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { MetersPanel } from "./panels";

export const MetersPage = () => {
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Meters Page</h3>
                <div className="d-inline float-right pt-1 pr-3">
                  <i className="far fa-user-circle float-right pr-2" aria-hidden="true"></i>
                  <i className="far fa-bell float-right pr-2" aria-hidden="true"></i>
                  <i className="far fa-lightbulb float-right pr-2" aria-hidden="true"></i>
                </div>
              </CardHeader>
              <MetersPanel />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
