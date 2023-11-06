import React, { useState } from "react";

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from "reactstrap";

import { InputField } from "components/widgets";
export const AddPartModalDetails = () => {
  const [activeTab, setActiveTab] = useState("1");
  const active =
    "active text-info font-weight-bold border-top-0 border-right-0 border-left-0 border-info";
  const tabNav = "text-black font-weight-bold border-0";

  return (
    <div>
      <Nav tabs className="justify-content-center">
        <NavItem>
          <NavLink className={activeTab == "1" ? active : tabNav} onClick={() => setActiveTab("1")}>
            Parts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == "2" ? active : tabNav} onClick={() => setActiveTab("2")}>
            Set of Parts
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Container>
            <Row>
              <Col>
                <InputField type="search" className="rounded-pill" />
              </Col>
            </Row>
          </Container>
        </TabPane>
        <TabPane tabId="2">
          <Container>
            <Row>
              <Col>
                <InputField type="search" className="rounded-pill" />
                <InputField type="search" className="rounded-pill" />
              </Col>
            </Row>
          </Container>
        </TabPane>
      </TabContent>
    </div>
  );
};
