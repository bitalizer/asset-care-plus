import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { TableViewButton, CardViewButton } from "components/buttons";
import { BoxHeader } from "components/headers";
import { SearchInputField, ReactTable } from "components/widgets";

import { useLocalStateAlerts } from "hooks";

import { deleteInventory, fetchInventories, removeInventory } from "../../reducers/inventroySlice";

import {
  CREATE_NEW_INVENTORY,
  inventoriesTableColumns,
  InventoryCard,
  PARTS_INVENTORY_DETAILS,
} from ".";

export const PartsInventoryPage = () => {
  const [toggleTableView, setToggleTableView] = useState(true);
  const [toggleCardView, setToggleCardView] = useState(false);
  const [searchPartsByName, setSearchPartsByName] = useState("");
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const inventories = useSelector(state => state.inventory.inventories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInventories());
  }, [dispatch]);
  const setTableView = () => {
    setToggleTableView(!toggleTableView);
    setToggleCardView(!toggleCardView);
  };

  const setCardView = () => {
    setToggleCardView(!toggleCardView);
    setToggleTableView(!toggleTableView);
  };

  const onViewInventoryDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${PARTS_INVENTORY_DETAILS}/${id}`);
  };

  const onDeleteInventory = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete inventory", id);
    setSuccessMessage("Inventory deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteInventory(id));
    dispatch(removeInventory(parseInt(id)));
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Parts & Inventory</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="5">
                    <div className="d-flex justify-content-center">
                      <TableViewButton
                        setTableView={setTableView}
                        toggleTableView={toggleTableView}
                      />
                      <CardViewButton setCardView={setCardView} toggleCardView={toggleCardView} />
                    </div>
                  </Col>
                  <Col md="4">
                    <SearchInputField
                      id="input-search-parts"
                      style={{ height: "36px" }}
                      className="form-control"
                      value={searchPartsByName}
                      placeholder="Search Parts by Name"
                      type="text"
                      onChange={setSearchPartsByName}
                    />
                  </Col>
                  <Col md="3">
                    <div className="d-flex justify-content-end">
                      <Button
                        type="button"
                        className="btn btn-outline-primary rounded-pill"
                        onClick={() => navigate(`/admin${CREATE_NEW_INVENTORY}`)}
                      >
                        + Part
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              {toggleTableView && (
                <ReactTable
                  data={inventories}
                  columns={inventoriesTableColumns({
                    onDetailsButtonClick: onViewInventoryDetails,
                    onRemoveButtonClick: onDeleteInventory,
                  })}
                />
              )}
              {toggleCardView && (
                <Row className="p-4">
                  {inventories.map((inventory, index) => (
                    <Col key={index} sm="4">
                      <InventoryCard data={inventory} onViewDetailsClick={onViewInventoryDetails} />
                    </Col>
                  ))}
                </Row>
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
