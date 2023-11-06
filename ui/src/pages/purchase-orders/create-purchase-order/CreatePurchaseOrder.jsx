import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container } from "reactstrap";

import { BoxHeader } from "components/headers";

import { selectAllVendorsDataAsSelectOptions } from "pages/utils";

import { useLocalStateAlerts } from "hooks";
import { CREATE_ENTITY_ID } from "variables/app.consts";

import { createPurchaseOrder } from "../../../reducers/purchaseOrderSlice";
import { PurchaseOrderPanel } from "../purchase-orders-panels";
import { PURCHASE_ORDERS_PAGE } from "../purchaseOrders.routes.const";

export const CreatePurchaseOrderPage = () => {
  const date = new Date().toLocaleDateString();

  const initialState = {
    id: CREATE_ENTITY_ID,
    POnumber: "",
    company: "",
    title: "",
    status: "Awaiting Approval",
    approvedBy: "N/A",
    category: "",
    due_date: date,
    details: "",
    part: [],
    req_company_name: "",
    req_address: "",
    req_city: "",
    req_zip: "",
    req_phone: "",
    req_fax: "",
    ship_name: "",
    ship_company_name: "",
    ship_address: "",
    ship_city: "",
    ship_phone: "",
    ship_fax: "",
    order_date: date,
    requisitioner: "",
    ship_method: "",
    ship_point: "",
    terms: "",
    notes: "",
  };

  const navigate = useNavigate();

  const onBackToSearchClick = () => {
    navigate(`/admin${PURCHASE_ORDERS_PAGE}`);
  };

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const dispatch = useDispatch();
  const onSavePurchaseOrder = newPurchaseOrder => {
    dispatch(createPurchaseOrder(newPurchaseOrder));
    setSuccessMessage("Purchase Order Created", newPurchaseOrder);
    setIsSuccess(true);
    setSaveSent(true);
  };

  const [vendorOptions] = useState(selectAllVendorsDataAsSelectOptions());

  const [purchaseOrder, setPurchaseOrder] = useState(initialState);
  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <PurchaseOrderPanel
          purchaseOrder={purchaseOrder}
          onSavePurchaseOrder={onSavePurchaseOrder}
          onBackToSearchClick={onBackToSearchClick}
          setPurchaseOrder={setPurchaseOrder}
          vendorOptions={vendorOptions}
        />
      </Container>
    </>
  );
};
