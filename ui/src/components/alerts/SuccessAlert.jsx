import SweetAlert from "react-bootstrap-sweetalert";

export const SuccessAlert = ({ children, setAlert, setIsSuccess, setSaveSent }) => {
  return (
    <SweetAlert
      success
      title="Success"
      onConfirm={() => {
        setAlert(null);
        setIsSuccess(null);
        setSaveSent(null);
      }}
    >
      {children}
    </SweetAlert>
  );
};
