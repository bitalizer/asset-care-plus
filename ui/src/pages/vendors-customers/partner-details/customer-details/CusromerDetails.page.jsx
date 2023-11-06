import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "reactstrap";

import { BoxHeader } from "components/headers";

import { CustomerPanel } from "pages/vendors-customers/panels";
import { VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers/vendorsCustomers.routes.const";

import { useLocalStateAlerts } from "hooks";

import { findCustomersById, updateCustomers } from "../../../../reducers/customerSlice";

export const CustomerDetailsPage = () => {
  const { id } = useParams();
  const customerId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const dispatch = useDispatch();

  const customer = useSelector(state => state.customers.customer);

  useEffect(() => {
    dispatch(findCustomersById(customerId));
  }, [dispatch, customerId]);

  const onSaveCustomer = form => {
    console.log("update customer", customerId, customer);
    const updatedCustomer = { id: customerId, body: form };
    dispatch(updateCustomers(updatedCustomer));
    setSuccessMessage("Customer Updated");
    setIsSuccess(true);
    setSaveSent(true);
  };

  const onBackToSearchClick = () => {
    navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <CustomerPanel
          customer={customer}
          onSave={onSaveCustomer}
          onBackToSearchClick={onBackToSearchClick}
        />
      </Container>
    </>
  );
};
