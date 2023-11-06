import { useState } from "react";

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

export const DetailTab = () => {
  const [activeTab, setActiveTab] = useState("1");
  const active =
    "active bg-white text-info font-weight-bold border-top-0 border-right-0 border-left-0 border-info";
  const tabNav = "text-black font-weight-bold border-0";

  return (
    <>
      <Nav tabs className="pr-4 pl-4 pt-4">
        <NavItem className="bg-white">
          <NavLink className={activeTab == "1" ? active : tabNav} onClick={() => setActiveTab("1")}>
            Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == "2" ? active : tabNav} onClick={() => setActiveTab("2")}>
            History
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent className="p-4" activeTab={activeTab}>
        <TabPane tabId="1">
          <h1>js</h1>
        </TabPane>
        <TabPane tabId="2">
          <h1>sd</h1>
        </TabPane>
      </TabContent>
    </>
  );
};
