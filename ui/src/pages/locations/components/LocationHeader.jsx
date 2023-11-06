import { useState } from "react";
import { useNavigate } from "react-router";

import { Nav, NavItem, NavLink } from "reactstrap";

import { LOCATION_MAP } from "../locations.routes.const";

export const LocationHeader = () => {
  const [tabId, setTabId] = useState("list");
  const navigate = useNavigate();

  const onViewLocationMap = () => {
    navigate(`/admin${LOCATION_MAP}/`);
  };

  return (
    <>
      <div className="header pb-4 ">
        <Nav pills className="d-flex justify-content-around">
          <div className="d-flex ">
            <NavItem>
              <NavLink
                active={tabId == "list"}
                href="#"
                onClick={() => {
                  setTabId("list");
                }}
              >
                List View
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                active={tabId == "map"}
                onClick={() => {
                  setTabId("map");
                  onViewLocationMap();
                }}
              >
                Map View
              </NavLink>
            </NavItem>
          </div>
          <div className="d-flex">
            <NavItem>
              <NavLink href="#">Import</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Export</NavLink>
            </NavItem>
          </div>
        </Nav>
      </div>
    </>
  );
};
