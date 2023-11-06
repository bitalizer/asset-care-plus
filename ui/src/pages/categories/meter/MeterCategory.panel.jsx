import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardBody, CardHeader, Container } from "reactstrap";

import { useLocalStateAlerts } from "hooks";

import { fetchMeterCategory, removeMeterCategory } from "../../../reducers/meterCategorySlice";

export const MeterCategoryPanel = () => {
  const meterCategories = useSelector(state => state.metersCategory.metersCategory);
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeterCategory());
  }, [dispatch]);

  const onDeleteMeterCategory = id => {
    console.log("Meter category deleted", id);
    setSuccessMessage("Meter category deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(fetchMeterCategory());
    dispatch(removeMeterCategory());
  };

  return (
    <>
      {alert}
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h2 className="mb-0">Meters Categories</h2>
          </CardHeader>
          {meterCategories?.length ? (
            meterCategories.map(({ name, id }) => (
              <CardBody className="border-top border-bottom border-radius d-flex justify-content-between">
                <h3 className="mb-0">{name}</h3>
                <i
                  className="far fa-trash-alt mt-1  pr-2"
                  aria-hidden="true"
                  onClick={() => onDeleteMeterCategory(id)}
                ></i>
              </CardBody>
            ))
          ) : (
            <CardBody className="border-top border-bottom border-radius">
              <h3 className="mb-0">
                Looks like you don&apos;t have any purchase order categories yet.
              </h3>
              <h4 className="mb-0 text-muted">Press the `+` button to add your first category.</h4>
            </CardBody>
          )}
        </Card>
      </Container>
    </>
  );
};
