/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import logo from "assets/img/brand/Logo.png";

import { AdminFooter } from "components/footers";
import { AdminNavbar } from "components/navbars";
import { Sidebar } from "components/sidebar";

import { useScrollToTop } from ".";

export const AdminLayout = () => {
  const location = useLocation();

  const mainContentRef = useRef(document.createElement("div"));

  useScrollToTop(mainContentRef);

  const getNavbarTheme = () => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1 ? "dark" : "light";
  };

  return (
    <>
      <Sidebar
        logo={{
          innerLink: "/",
          imgSrc: logo,
          imgAlt: "...",
        }}
        rtlActive={false}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar theme={getNavbarTheme()} />
        <Outlet />
        <AdminFooter />
      </div>
    </>
  );
};
