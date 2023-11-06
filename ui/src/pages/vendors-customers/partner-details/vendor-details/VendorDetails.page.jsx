import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "reactstrap";

import { BoxHeader } from "components/headers";

import { VendorPanel } from "pages/vendors-customers/panels";
import { VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers/vendorsCustomers.routes.const";

import { useLocalStateAlerts } from "hooks";

import { clearVendor, findVendorById, updateVendor } from "../../../../reducers/vendorsSlice";

export const VendorDetailsPage = () => {
  const { id } = useParams();
  const vendorId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const dispatch = useDispatch();

  const vendor = useSelector(state => state.vendors.vendor);

  useEffect(() => {
    dispatch(findVendorById(vendorId));
  }, [dispatch, vendorId]);

  const onSaveVendor = form => {
    console.log("update vendor", vendorId, form);
    const updatedVendor = { id: vendorId, body: form };
    dispatch(updateVendor(updatedVendor));
    setSuccessMessage("Vendor Updated");
    setIsSuccess(true);
    setSaveSent(true);
  };

  const onBackToSearchClick = () => {
    navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`);
    dispatch(clearVendor());
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <VendorPanel
          vendor={vendor}
          onSave={onSaveVendor}
          onBackToSearchClick={onBackToSearchClick}
        />
      </Container>
    </>
  );
};
