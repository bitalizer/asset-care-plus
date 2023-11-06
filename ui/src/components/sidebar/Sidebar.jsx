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
import classNames from "classnames";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

import { Navbar } from "reactstrap";

import { onMouseEnterSidebar, onMouseLeaveSidebar, ScrollBarContent } from ".";

export const Sidebar = ({ logo, rtlActive = false }) => {
  const [collapseState, setCollapseState] = useState({});

  return (
    <Navbar
      className={classNames(
        "sidenav navbar-vertical navbar-expand-xs navbar-light bg-white",
        rtlActive ? "" : "fixed-left"
      )}
      onMouseEnter={onMouseEnterSidebar}
      onMouseLeave={onMouseLeaveSidebar}
    >
      <PerfectScrollbar>
        <ScrollBarContent
          logo={logo}
          collapseState={collapseState}
          setCollapseState={setCollapseState}
        />
      </PerfectScrollbar>
    </Navbar>
  );
};
