import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardBody, CardHeader, Container } from "reactstrap";

import { useLocalStateAlerts } from "hooks";

import {
  deletePurchaseOrdersCategory,
  fetchPurchaseOrdersCategory,
  removePurchaseOrdersCategory,
} from "../../../reducers/purchaseOrdersCategorySlice";

export const PurchaseOrderCategoryPanel = () => {
  const purchaseOrdersCategories = useSelector(
    state => state.purchaseOrdersCategory.purchaseOrdersCategory
  );
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPurchaseOrdersCategory());
  }, [dispatch]);

  const onDeletePurchaseOrderCategory = id => {
    console.log("Purchase order category deleted", id);
    setSuccessMessage("Purchase order category deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deletePurchaseOrdersCategory(id));
    dispatch(removePurchaseOrdersCategory(parseInt(id)));
  };

  return (
    <>
      {alert}
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h2 className="mb-0">Purchase Orders Categories</h2>
          </CardHeader>
          {purchaseOrdersCategories.length ? (
            purchaseOrdersCategories.map(({ name, id }) => (
              <CardBody className="border-top border-bottom border-radius d-flex justify-content-between">
                <h3 className="mb-0">{name}</h3>
                <i
                  className="far fa-trash-alt mt-1  pr-2"
                  aria-hidden="true"
                  onClick={() => onDeletePurchaseOrderCategory(id)}
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
