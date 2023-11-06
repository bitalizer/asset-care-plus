import React, { useState } from "react";

import { Button, ButtonGroup, Nav, TabContent, TabPane } from "reactstrap";

import { AssetsFilter } from "./panels/AssetFilter.panel";
import { CardViewPanel } from "./panels/CardView.panel";
import { TableViewPanel } from "./panels/TableView.panel";

export const AssetsTabs = props => {
  const [activeTab, setActiveTab] = useState("TableView");

  return (
    <>
      <Nav tabs className="d-flex border-0 justify-content-sm-between pb-4">
        <div>
          <ButtonGroup className="border border-light rounded" size="sm">
            <Button
              className={
                activeTab == "TableView"
                  ? "border-0 bg-info-50 active text-info"
                  : "border-0 bg-secondary text-black-50"
              }
              onClick={() => setActiveTab("TableView")}
            >
              <i className="fa fa-table pr-2"></i>
              Table View
            </Button>

            <Button
              className={
                activeTab == "CardView"
                  ? "border-0 bg-info-50 active text-info"
                  : "border-0 bg-secondary text-gray"
              }
              onClick={() => setActiveTab("CardView")}
            >
              <i className="far fa-square pr-2"></i>
              Card View
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <Button
            onClick={props.onClick}
            className="float-right rounded-pill pr-3 pl-3"
            color="info"
            size="sm"
          >
            + Asset
          </Button>
          <Button className="float-right bg-white border-secondary mr-3 pr-3 pl-3" size="sm">
            <i className="fa fa-ellipsis-v text-black-50" aria-hidden="true"></i>
          </Button>
        </div>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="TableView">
          <AssetsFilter view="table" />
          <TableViewPanel />
        </TabPane>
        <TabPane tabId="CardView">
          <AssetsFilter view="card" />
          <CardViewPanel />
        </TabPane>
      </TabContent>
    </>
  );
};
