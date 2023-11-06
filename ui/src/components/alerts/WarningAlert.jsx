import SweetAlert from "react-bootstrap-sweetalert";

export const WarningAlert = ({ children, setAlert }) => {
  return (
    <SweetAlert warning title="Attention" onConfirm={() => setAlert(null)}>
      {children}
    </SweetAlert>
  );
};
