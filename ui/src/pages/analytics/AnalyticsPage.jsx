import React, { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { RadialChart } from "react-vis";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  Col,
  Collapse,
  Container,
  Input,
  Popover,
  PopoverBody,
  Row,
  Tooltip,
} from "reactstrap";

import { BoxHeader } from "components/headers";

import { fetchAnalytics } from "../../reducers/analyticsSlice";

import { BarChartComponent } from "./components/BarChartComponent.jsx";
import { CardDetails } from "./components/CardDetails.jsx";

export const AnalyticsPage = () => {
  const dueDateData = useSelector(state => state.analytics.dueDateData);
  const measurementOfTimeData = useSelector(state => state.analytics.measurementOfTimeData);

  const [isOpen, setIsOpen] = useState(false);
  const [dueDateSelect, setDueDateSelect] = useState("");
  const [quantity, setQuantity] = useState(30);
  const [measurementOfTimeSelect, setMeasurementOfTimeSelect] = useState("");

  const loading = useSelector(state => state.analytics.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  useEffect(() => {
    setDueDateSelect(dueDateData[0]?.label);
  }, [dueDateData]);
  useEffect(() => {
    setMeasurementOfTimeSelect(measurementOfTimeData[0]?.label);
  }, [measurementOfTimeData]);

  const [tooltipByTheNumbersOpen, setTooltipByTheNumbersOpen] = useState(false);
  const toggleTooltipByTheNumbers = () => setTooltipByTheNumbersOpen(!tooltipByTheNumbersOpen);

  const [tooltipHoursWorkedOpen, setTooltipHoursWorkedOpen] = useState(false);
  const toggleTooltipHoursWorked = () => setTooltipHoursWorkedOpen(!tooltipHoursWorkedOpen);

  const [tooltipWorkRemainingOpen, setTooltipWorkRemainingOpen] = useState(false);
  const toggleTooltipWorkRemaining = () => setTooltipWorkRemainingOpen(!tooltipWorkRemainingOpen);

  const [showDetailsByNumbers, setShowDetailsByNumbers] = useState(false);
  const [showDetailsWorkRemaining, setShowDetailsWorkRemaining] = useState(false);
  const [showDetailsWorkOrderStatus, setShowDetailsWorkOrderStatus] = useState(false);
  const [showDetailsHoursWorked, setShowDetailsHoursWorked] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const customStyles = props => {
    const { height } = props;
    return {
      control: (base, state) => ({
        ...base,
        height,

        background: "white",
        border: state.isFocused ? "1px solid #003369" : "1px solid #e9ecef",

        boxShadow: state.isFocused ? null : null,
        "&:hover": {
          borderColor: "#003369",
        },
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "white" : "black",
        backgroundColor: state.isSelected ? "#003369" : "white",
      }),
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
      },
    };
  };

  return (
    <>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <>
          <BoxHeader />
          <Container className="mt--6" fluid>
            <Row>
              <div className="col">
                <Card>
                  <CardHeader>
                    <h1 className="mb-0">Analytics Page</h1>{" "}
                  </CardHeader>
                  <Row>
                    <CardSubtitle className="mt-4 ml-5" tag="h2">
                      Status Report
                    </CardSubtitle>
                  </Row>
                  <Row className="m-4">
                    <div>
                      <>Due Date</>
                      <Button
                        className="d-block"
                        color="primary"
                        onClick={toggle}
                        style={{ marginBottom: "0.5rem" }}
                      >
                        {dueDateSelect} {quantity} {measurementOfTimeSelect}
                      </Button>
                      <Collapse isOpen={isOpen}>
                        <Card>
                          <CardBody className="d-flex">
                            <Select
                              defaultValue={dueDateData[0]}
                              options={dueDateData}
                              styles={customStyles}
                              onChange={e => {
                                setDueDateSelect(e.value);
                              }}
                            />
                            <Input
                              bsSize="mb"
                              defaultValue={quantity}
                              type="number"
                              style={{ width: "60px", height: "38px" }}
                              onChange={e => {
                                setQuantity(e.target.value);
                              }}
                            />
                            <Select
                              defaultValue={measurementOfTimeData[3]}
                              options={measurementOfTimeData}
                              styles={customStyles}
                              onChange={e => {
                                setMeasurementOfTimeSelect(e.value);
                              }}
                            />
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                    <div>
                      <>DateCreated</>
                      <Button
                        className="d-block"
                        color="primary"
                        onClick={toggle}
                        style={{ marginBottom: "0.5rem" }}
                      >
                        {dueDateSelect} {quantity} {measurementOfTimeSelect}
                      </Button>
                      <Collapse isOpen={isOpen}>
                        <Card>
                          <CardBody className="d-flex">
                            <Select
                              defaultValue={dueDateData[0]}
                              options={dueDateData}
                              styles={customStyles}
                              onChange={e => {
                                setDueDateSelect(e.value);
                              }}
                            />
                            <Input
                              bsSize="mb"
                              defaultValue={quantity}
                              type="number"
                              style={{ width: "50px", height: "38px" }}
                              onChange={e => {
                                setQuantity(e.target.value);
                              }}
                            />
                            <Select
                              defaultValue={measurementOfTimeData[3]}
                              options={measurementOfTimeData}
                              styles={customStyles}
                              onChange={e => {
                                setMeasurementOfTimeSelect(e.value);
                              }}
                            />
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                    <div className="mr-2">
                      <>Type</>
                      <Select
                        defaultValue={{ label: "any value", value: "any value" }}
                        options={[
                          { value: "recurring", label: "recurring" },
                          { value: "reactive", label: "reactive" },
                        ]}
                        styles={customStyles({
                          height: "44px",
                        })}
                      />
                    </div>
                    <div className="mr-2">
                      <>Worker Assigned</>
                      <Select
                        defaultValue={{ label: "is any value", value: "any value" }}
                        options={[
                          { value: "Person 1", label: "Person 1" },
                          { value: "Person 2", label: "Person 2" },
                        ]}
                        styles={customStyles({
                          height: "44px",
                        })}
                      />
                    </div>
                    <div className="mr-2">
                      <>Work order category</>
                      <Select
                        defaultValue={{ label: "is any value", value: "any value" }}
                        options={[
                          { value: "Person 1", label: "Person 1" },
                          { value: "Person 2", label: "Person 2" },
                        ]}
                        styles={customStyles({
                          height: "44px",
                        })}
                      />
                    </div>
                  </Row>
                  <CardBody>
                    <Row>
                      <div className="col-sm-6">
                        <Card>
                          <CardHeader className="d-flex justify-content-lg-between">
                            <div className="d-flex">
                              <h3 className="mb-0">By the numbers</h3>
                              <AiOutlineInfoCircle
                                id="TooltipByTheNumbers"
                                size={20}
                                className="ml-2 mt-1"
                              />
                              <Tooltip
                                isOpen={tooltipByTheNumbersOpen}
                                target="TooltipByTheNumbers"
                                toggle={toggleTooltipByTheNumbers}
                                autohide={false}
                              >
                                Compliant work orders are defined as work orders that were completed
                                before the due date. Cycle time refers to the number of days until a
                                work order was completed.
                              </Tooltip>
                            </div>
                            <BiDotsVerticalRounded
                              id="Popover1"
                              type="button"
                              role="button"
                              size={17}
                              className="mr-2 "
                              onClick={() => setShowDetailsByNumbers(!showDetailsByNumbers)}
                            />
                            <Popover
                              isOpen={showDetailsByNumbers}
                              flip
                              target="Popover1"
                              toggle={() => setShowDetailsByNumbers(!showDetailsByNumbers)}
                            >
                              <PopoverBody>
                                <CardDetails />
                              </PopoverBody>
                            </Popover>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col lg="12">
                                <div className="d-flex">
                                  <div className="d-flex flex-column">
                                    <h1 className="mb-0 text-center">2</h1>
                                    <p className="text-sm text-muted mb-0 ">Count</p>
                                  </div>
                                  <div className="d-flex flex-column ml-4">
                                    <h1 className="mb-0  text-center">0</h1>
                                    <p className="text-sm text-muted mb-0">Complete Count</p>
                                  </div>
                                  <div className="d-flex flex-column ml-4">
                                    <h1 className="mb-0  text-center">0</h1>
                                    <p className="text-sm text-muted mb-0">Compliant Count</p>
                                  </div>
                                  <div className="d-flex flex-column ml-4">
                                    <h1 className="mb-0  text-center">0</h1>
                                    <p className="text-sm text-muted mb-0">
                                      Average Cycle Time (days)
                                    </p>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <Card>
                          <CardHeader className="d-flex justify-content-lg-between">
                            <div className="d-flex">
                              <h3 className="mb-0">Work Order Status</h3>
                            </div>
                            <BiDotsVerticalRounded
                              role="button"
                              size={17}
                              className="mr-2 "
                              id="Popover3"
                              onClick={() =>
                                setShowDetailsWorkOrderStatus(!showDetailsWorkOrderStatus)
                              }
                            />

                            <Popover
                              isOpen={showDetailsWorkOrderStatus}
                              flip
                              target="Popover3"
                              toggle={() =>
                                setShowDetailsWorkOrderStatus(!showDetailsWorkOrderStatus)
                              }
                            >
                              <PopoverBody>
                                <CardDetails />
                              </PopoverBody>
                            </Popover>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col lg="12">
                                <div className="d-flex justify-content-center">
                                  <RadialChart
                                    data={[
                                      { angle: 1, label: "Open 20%" },
                                      { angle: 4, label: "Close 80%" },
                                    ]}
                                    width={400}
                                    height={400}
                                    radius={150}
                                    innerRadius={120}
                                    padAngle={0.04}
                                    labelsRadiusMultiplier={1.4}
                                    labelsStyle={{
                                      fontSize: 14,
                                      fill: "#121212",
                                      fontWeight: 600,
                                    }}
                                    showLabels
                                  />
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </div>
                      <div className="col-sm-6">
                        <Card>
                          <CardHeader className="d-flex justify-content-lg-between">
                            <div className="d-flex">
                              <h3 className="mb-0">Work Remaining</h3>
                              <AiOutlineInfoCircle
                                size={20}
                                className="ml-2 mt-1"
                                id="TooltipWorkRemaining"
                              />
                              <Tooltip
                                isOpen={tooltipWorkRemainingOpen}
                                target="TooltipWorkRemaining"
                                toggle={toggleTooltipWorkRemaining}
                                autohide={false}
                              >
                                This graph shows the number of incomplete work orders that are due
                                in the date range specified in the filters. The estimated hours
                                correspond to those individual work orders.
                              </Tooltip>
                            </div>
                            <BiDotsVerticalRounded
                              role="button"
                              size={17}
                              className="mr-2 "
                              id="Popover2"
                              onClick={() => setShowDetailsWorkRemaining(!showDetailsWorkRemaining)}
                            />

                            <Popover
                              isOpen={showDetailsWorkRemaining}
                              flip
                              target="Popover2"
                              toggle={() => setShowDetailsWorkRemaining(!showDetailsWorkRemaining)}
                            >
                              <PopoverBody>
                                <CardDetails />
                              </PopoverBody>
                            </Popover>
                          </CardHeader>

                          <CardBody>
                            <Row>
                              <Col lg="12">
                                <BarChartComponent />
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </div>
                      <div className="col-sm-12">
                        <Card>
                          <CardHeader className="d-flex justify-content-lg-between">
                            <div className="d-flex">
                              <h3 className="mb-0">Hours worked</h3>
                              <AiOutlineInfoCircle
                                size={20}
                                className="ml-2 mt-1"
                                id="TooltipHoursWorked"
                              />
                              <Tooltip
                                isOpen={tooltipHoursWorkedOpen}
                                target="TooltipHoursWorked"
                                toggle={toggleTooltipHoursWorked}
                                autohide={false}
                              >
                                These hours correspond to work orders that have a due date within
                                the range specified in the filters.
                              </Tooltip>
                            </div>
                            <BiDotsVerticalRounded
                              role="button"
                              size={17}
                              className="mr-2 "
                              id="Popover4"
                              onClick={() => setShowDetailsHoursWorked(!showDetailsHoursWorked)}
                            />

                            <Popover
                              isOpen={showDetailsHoursWorked}
                              flip
                              target="Popover4"
                              toggle={() => setShowDetailsHoursWorked(!showDetailsHoursWorked)}
                            >
                              <PopoverBody>
                                <CardDetails />
                              </PopoverBody>
                            </Popover>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col lg="12">
                                <div className="d-flex justify-content-around">
                                  <div className="d-flex flex-column">
                                    <h1 className="mb-0  text-center">10.0</h1>
                                    <p className="text-sm text-muted mb-0">Estimated Hours</p>
                                  </div>
                                  <div className="d-flex flex-column ml-4">
                                    <h1 className="mb-0  text-center">0.0</h1>
                                    <p className="text-sm text-muted mb-0">
                                      Total Time Spent (hours)
                                    </p>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Row>
            <Container className="mt--6" fluid></Container>
          </Container>
        </>
      )}
    </>
  );
};
