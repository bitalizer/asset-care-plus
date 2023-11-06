import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useAuth } from "context";

export const HomePage = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Home</h3>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
