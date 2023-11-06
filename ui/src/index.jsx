import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "context";

import { Router } from "./Router";
import { store } from "./store/store";

import "./assets/css/argon-dashboard-pro-react.css";
import "./assets/css/site.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "components/widgets/react-table/styles/reactTable.css";

ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
