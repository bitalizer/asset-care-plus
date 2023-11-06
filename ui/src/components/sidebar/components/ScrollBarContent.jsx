import { Link } from "react-router-dom";

import { Collapse, Nav } from "reactstrap";

import { routes } from "routes";

import { CreateSidebarLinks } from ".";

export const ScrollBarContent = ({ logo, collapseState, setCollapseState }) => {
  return (
    <div className="scrollbar-inner">
      <div className="mb-2" style={{ height: "10rem" }}>
        {logo && (
          <Link to="/">
            <img alt={logo.imgAlt} className="w-100 h-100" src={logo.imgSrc} />
          </Link>
        )}
      </div>
      {/* <SidebarToggler /> */}

      <div className="navbar-inner">
        <Collapse navbar isOpen={true}>
          <Nav navbar>
            <CreateSidebarLinks
              routes={routes}
              collapseState={collapseState}
              setCollapseState={setCollapseState}
            />
          </Nav>
        </Collapse>
      </div>
    </div>
  );
};
