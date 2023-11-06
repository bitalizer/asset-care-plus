import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Spinner } from "reactstrap";

import { ReactTable } from "components/widgets";

import { useLocalStateAlerts } from "hooks";

import { deleteCustomers, fetchCustomers, removeCustomer } from "../../../reducers/customerSlice";
import { deleteVendors, fetchVendors, removeVendors } from "../../../reducers/vendorsSlice";
import { CUSTOMER_DETAILS, VENDOR_DETAILS } from "../vendorsCustomers.routes.const";

import { customersTableColumns } from "./SearchCustomers.table";
import { vendorsTableColumns } from "./SearchVendors.table";

export const SearchVendorsCustomersPage = ({ toggle }) => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const vendors = useSelector(state => state.vendors.vendors);
  const customers = useSelector(state => state.customers.customers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendors());
    dispatch(fetchCustomers());
  }, [dispatch]);

  const onViewCustomerDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${CUSTOMER_DETAILS}/${id}`);
  };

  const onViewVendorDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${VENDOR_DETAILS}/${id}`);
  };

  const onDeleteCustomer = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete customer", id);
    setSuccessMessage("Customer deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteCustomers(id));
    dispatch(removeCustomer(parseInt(id)));
  };

  const onDeleteVendor = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete vendor", id);
    setSuccessMessage("Vendor deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteVendors(id));
    dispatch(removeVendors(parseInt(id)));
  };

  return (
    <>
      {alert}
      {toggle ? (
        <ReactTable
          data={vendors}
          columns={vendorsTableColumns({
            onDetailsButtonClick: onViewVendorDetails,
            onRemoveButtonClick: onDeleteVendor,
          })}
        />
      ) : !toggle ? (
        <ReactTable
          data={customers}
          columns={customersTableColumns({
            onDetailsButtonClick: onViewCustomerDetails,
            onRemoveButtonClick: onDeleteCustomer,
          })}
        />
      ) : (
        <div className="text-center">
          <Spinner />
        </div>
      )}
    </>
  );
};
