import { useState } from "react";

import { WarningAlert } from "components/alerts";

export const useFeatureDisabledWarning = () => {
  const [alert, setAlert] = useState();

  const fireAlert = (message = "Feature under development") => {
    setAlert(() => <WarningAlert setAlert={setAlert}>{message}</WarningAlert>);
  };

  return { alert, fireAlert };
};
