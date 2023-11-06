import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardBody, CardHeader, Container } from "reactstrap";

import { useLocalStateAlerts } from "hooks";

import {
  deleteAssetCategory,
  fetchAssetCategory,
  removeAssetCategory,
} from "../../../reducers/assetCategorySlice";

export const AssetCategoryPanel = () => {
  const assetCategories = useSelector(state => state.assetCategory.assetCategory);
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAssetCategory());
  }, [dispatch]);

  const onDeleteAssetCategory = id => {
    console.log("asset category deleted", id);
    setSuccessMessage("Asset category deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteAssetCategory(id));
    dispatch(removeAssetCategory(parseInt(id)));
  };

  return (
    <>
      {alert}
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h2 className="mb-0">Asset Categories</h2>
          </CardHeader>
          {assetCategories?.length ? (
            assetCategories.map(({ name, id }) => (
              <CardBody
                key={id}
                className="border-top border-bottom border-radius d-flex justify-content-between"
              >
                <h3 className="mb-0">{name}</h3>
                <i
                  className="far fa-trash-alt mt-1  pr-2"
                  aria-hidden="true"
                  onClick={() => onDeleteAssetCategory(id)}
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
