import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { Button, Card, CardBody, Col, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { SEARCH_LOCATIONS } from "../locations.routes.const";
export const LocationMap = () => {
  const locationsData = useSelector(state => state.locations.locations);
  const navigate = useNavigate();
  return (
    <>
      <BoxHeader />
      <Card className="mb-2">
        <Row className="align-items-center py-4">
          <Col lg="12" xs="7" className="text-right">
            <Button
              className="btn btn-primary"
              color="primary"
              onClick={() => navigate(`/admin${SEARCH_LOCATIONS}`)}
            >
              Back to Search
            </Button>
          </Col>
        </Row>
        <CardBody>
          <MapContainer center={[59.422784, 24.801685]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locationsData.map(item => {
              if (!item.position) {
                return null;
              }
              return (
                <Marker position={item.position.split(",")}>
                  <Popup>
                    {item.locationName}
                    <br /> {item.address}
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </CardBody>
      </Card>
    </>
  );
};
