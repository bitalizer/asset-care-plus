import { useEffect, useState } from "react";

import { ErrorAlert, SuccessAlert } from "components/alerts";

export const useLocalStateAlerts = () => {
  const [alert, setAlert] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [saveSent, setSaveSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("Success");
  const [errorMessage, setErrorMessage] = useState("Error");

  useEffect(() => {
    if (isSuccess && saveSent) {
      setAlert(() => (
        <SuccessAlert setAlert={setAlert} setIsSuccess={setIsSuccess} setSaveSent={setSaveSent}>
          {successMessage}
        </SuccessAlert>
      ));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (!isSuccess && saveSent) {
      setAlert(() => <ErrorAlert setAlert={setAlert}>{errorMessage}</ErrorAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return { alert, setSaveSent, setSuccessMessage, setErrorMessage, setIsSuccess };
};
