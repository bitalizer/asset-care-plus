import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Col, Row } from "reactstrap";

import { SelectField, InputField } from "components/widgets";

import { selectAllCountriesDataAsSelectOptions } from "pages/utils";

import { useLocalStateAlerts } from "hooks";

import { fetchCustomers } from "../../../reducers/customerSlice";
import { createLocation } from "../../../reducers/locationSlice";
import { fetchPeople } from "../../../reducers/peopleSlice";
import { fetchTeams } from "../../../reducers/teamsSlice";
import { fetchVendors } from "../../../reducers/vendorsSlice";

const initialLocations = {
  title: "",
  address: "",
  parentLocation: [],
  workers: [],
  team: [],
  vendors: [],
  customers: [],
};

export const LocationForm = ({ locationItem }) => {
  useEffect(() => {
    setLocations(
      locationItem && {
        ...locationItem,
        title: locationItem.locationName,
      }
    );
  }, [locationItem]);

  const [locations, setLocations] = useState(initialLocations);
  const [countries] = useState(selectAllCountriesDataAsSelectOptions);
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const vendorsData = useSelector(state => state.vendors.vendors);
  const customersData = useSelector(state => state.customers.customers);
  const teamsData = useSelector(state => state.teams.teams);
  const workersData = useSelector(state => state.people.people);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendors());
    dispatch(fetchCustomers());
    dispatch(fetchTeams());
    dispatch(fetchPeople());
  }, [dispatch]);

  const [vendors] = useState([]);
  const [customers] = useState([]);
  const [workers] = useState([]);
  const [teams] = useState([]);

  useEffect(() => {
    vendorsData.map(vendor => {
      vendors.push({
        value: vendor.company_name,
        label: vendor.company_name,
      });
    });
  }, [vendorsData, vendors]);

  useEffect(() => {
    customersData.map(customer => {
      customers.push({
        value: customer.company_name,
        label: customer.company_name,
      });
    });
  }, [customersData, customers]);

  useEffect(() => {
    teamsData.map(team => {
      teams.push({
        value: team.name,
        label: team.name,
      });
    });
  }, [teamsData, teams]);

  useEffect(() => {
    workersData.map(worker => {
      workers.push({
        value: worker.fullName,
        label: worker.fullName,
      });
    });
  }, [workersData, workers]);

  const onSaveGroup = location => {
    setSuccessMessage("Location added");
    setIsSuccess(true);
    setSaveSent(true);
    const locationBody = {
      ...location,
      createdAt: new Date().toLocaleDateString("en-GB"),
      id: Date.now(),
    };
    dispatch(createLocation(locationBody));
  };

  return (
    <>
      {alert}
      <h6 className="heading-small text-muted mb-4">Location information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="10">
            <InputField
              invalid={!locations.title}
              value={locations.title}
              label="Title *"
              placeholder="Enter Location Name"
              type="text"
              onChange={e =>
                setLocations({
                  ...locations,
                  title: e.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <InputField
              value={locations.address}
              label="Address"
              placeholder="Enter Location Address"
              type="text"
              onChange={e =>
                setLocations({
                  ...locations,
                  address: e.target.value,
                })
              }
            />
          </Col>
        </Row>

        <Row>
          <Col lg="10">
            <SelectField
              label="Parent Location"
              placeholder="Choose from existing Location"
              isMulti
              value={locations.parentLocation}
              options={countries}
              onChange={item => {
                return setLocations({
                  ...locations,
                  parentLocation: item,
                });
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg="10">
            <SelectField
              label="Worker"
              placeholder="Select Users"
              isMulti
              value={locations.workers}
              options={workers}
              onChange={item => {
                return setLocations({
                  ...locations,
                  workers: item,
                });
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <SelectField
              label="Team"
              placeholder="Select Teams"
              isMulti
              value={locations.team}
              options={teams}
              onChange={item => {
                return setLocations({
                  ...locations,
                  team: item,
                });
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <SelectField
              label="Vendor"
              placeholder="Select Vendors"
              isMulti
              value={locations.vendors}
              options={vendors}
              onChange={item => {
                return setLocations({
                  ...locations,
                  vendors: item,
                });
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <SelectField
              label="Customer"
              placeholder="Select Customers"
              isMulti
              value={locations.customers}
              options={customers}
              onChange={item => {
                return setLocations({
                  ...locations,
                  customers: item,
                });
              }}
            />
          </Col>
        </Row>
      </div>

      <Row className="align-items-center py-10">
        <Col md="9" xs="7" className="text-right">
          <Button
            className="btn btn-secondary"
            color="secondary"
            onClick={() => {
              setLocations(initialLocations);
            }}
          >
            Cancel
          </Button>
        </Col>
        <Col md="1" xs="7" className="text-right">
          <Button
            disabled={!locations.title}
            color="success"
            onClick={() => onSaveGroup(locations)}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};
