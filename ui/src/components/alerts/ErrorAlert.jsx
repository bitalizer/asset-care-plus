import SweetAlert from "react-bootstrap-sweetalert";

export const ErrorAlert = ({ children, setAlert }) => {
  return (
    <SweetAlert error title="Error" onConfirm={() => setAlert(null)}>
      {children}
    </SweetAlert>
  );
};
