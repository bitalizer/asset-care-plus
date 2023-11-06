import moment from "moment";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
  Table,
} from "reactstrap";

import { InputField, SelectField, DateField } from "components/widgets";

import { selectVendorByIdAsSelectValue, selectCategoryByIdAsSelectValue } from "pages/utils";

import { purchaseOrdersCategoriesData } from "data/categories";
import { DATE_FILTER_FORMAT, CREATE_ENTITY_ID } from "variables/app.consts";

export const PurchaseOrderPanel = ({
  purchaseOrder,
  setPurchaseOrder,
  onBackToSearchClick,
  onSavePurchaseOrder,
  onDeletePurchaseOrder,
  newPurchaseOrder,
  vendorOptions,
}) => {
  const [dueDate, setDueDate] = useState(moment(purchaseOrder.due_date, DATE_FILTER_FORMAT));
  const [orderDate, setOrderDate] = useState(moment(purchaseOrder.order_date, DATE_FILTER_FORMAT));
  const [parts, setParts] = useState(purchaseOrder.part);
  const [items, setItems] = useState(purchaseOrder.items);
  const [subtotal, setSubtotal] = useState(0);
  const [salesTax, setSalesTax] = useState(purchaseOrder.tax || 0);
  const [shippingCost, setShippingCost] = useState(purchaseOrder.shipping_cost || 0);
  const [otherCost, setOtherCost] = useState(purchaseOrder.other_cost || 0);
  const [totalCost, setTotalCost] = useState(0);
  const partsQuantity = parts.length;
  const categories = selectCategoryByIdAsSelectValue(purchaseOrder.category || []);
  const vendor = selectVendorByIdAsSelectValue(purchaseOrder.company);

  useEffect(() => {
    let subTotal = 0;
    let updatedItems = [];
    parts &&
      parts.map(part => {
        subTotal = subTotal + part.cost * part.quantity;
        updatedItems.push(part.id);
      });
    setItems(updatedItems);
    setSubtotal(subTotal);
    setTotalCost(Number(subTotal) + Number(salesTax) + Number(shippingCost) + Number(otherCost));
    if (parts.length == 0) {
      setSubtotal(0);
      setOtherCost(0);
      setShippingCost(0);
      setSalesTax(0);
      setTotalCost(0);
    }
  }, [parts, otherCost, salesTax, shippingCost]);

  console.log(purchaseOrder);

  const handlePartInput = (index, event) => {
    const values = [...parts];
    values[index][event.target.name] = event.target.value;
    setParts(values);
  };

  const handlePartNumberInput = (index, event) => {
    const values = [...parts];
    values[index][event.target.name] = Number(event.target.value);
    setParts(values);
  };

  const handleAddRow = () => {
    setParts([...parts, { id: CREATE_ENTITY_ID, title: "", cost: 0, quantity: 0, desc: "" }]);
  };

  const handlePartRemove = index => {
    const values = [...parts];
    values.splice(index, 1);
    setParts(values);
  };

  const onSave = () => {
    const newPurchaseOrder = {
      ...purchaseOrder,
      part: parts,
      due_date: moment(dueDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      order_date: moment(orderDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      items: items,
      tax: Number(salesTax),
      shipping_cost: Number(shippingCost),
      other_cost: Number(otherCost),
      total: Number(totalCost),
    };
    onSavePurchaseOrder(newPurchaseOrder);
  };

  const onSaveAndApprove = () => {
    let newStatus = "";
    if (purchaseOrder.status == "Awaiting Approval") {
      newStatus = "Approved";
    } else if (purchaseOrder.status == "Approved") {
      newStatus = "Fulfilled";
    }
    const newPurchaseOrder = {
      ...purchaseOrder,
      part: parts,
      items: items,
      status: newStatus,
      due_date: moment(dueDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      order_date: moment(orderDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      tax: Number(salesTax),
      shipping_cost: Number(shippingCost),
      other_cost: Number(otherCost),
      total: Number(totalCost),
    };
    onSavePurchaseOrder(newPurchaseOrder);
  };

  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardHeader>
            <Row>
              <Col xs="6">
                <h1 className="mb-0">Purchase Orders</h1>
              </Col>
            </Row>
            <hr className="my-3" />
            <Row className="align-items-center py-1">
              <Col md="auto">
                <h2 className="mb-0">Purchase Order</h2>
              </Col>
              <Col md="auto">
                <InputGroup>
                  <InputGroupText>#</InputGroupText>
                  <Input
                    id="input-purchaseOrder-POnumber"
                    defaultValue={purchaseOrder.POnumber}
                    placeholder="PO number"
                    type="text"
                    onChange={e =>
                      setPurchaseOrder({
                        ...purchaseOrder,
                        POnumber: e.target.value,
                      })
                    }
                  />
                </InputGroup>
              </Col>
              <Col className="text-right">
                <Button color="light" onClick={onBackToSearchClick}>
                  Cancel
                </Button>
                <Button color="info" onClick={onSave}>
                  Submit
                </Button>
                {purchaseOrder.status === "Awaiting Approval" ? (
                  <Button color="success" onClick={onSaveAndApprove}>
                    Submit and Approve
                  </Button>
                ) : purchaseOrder.status === "Approved" ? (
                  <Button color="warning" onClick={onSaveAndApprove}>
                    Submit and Fulfill
                  </Button>
                ) : (
                  purchaseOrder.status === "Fulfilled" && <></>
                )}
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Alert className="alert-warning mb-4">
              Please make sure that all parts listed in this Purchase Order can be purchased from
              the same vendor.
            </Alert>
            <h6 className="heading mb-4">Purchase Order Details</h6>
            <div className="card p-4">
              <Row>
                <Col xs="6">
                  <InputField
                    id="input-purchaseOrder-title"
                    label="Name"
                    type="text"
                    placeholder="Name"
                    defaultValue={purchaseOrder.title}
                    onChange={e =>
                      setPurchaseOrder({
                        ...purchaseOrder,
                        title: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col xs="6">
                  <SelectField
                    id="input-purchaseOrder-category"
                    label="Category"
                    defaultValue={categories}
                    type="text"
                    options={purchaseOrdersCategoriesData}
                    onChange={e =>
                      setPurchaseOrder({
                        ...purchaseOrder,
                        category: e.label,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <Row>
                    <Col>
                      <DateField
                        id="date-auto-due-date"
                        label="Due Date"
                        value={dueDate}
                        setValue={setDueDate}
                        onChange={() =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            due_date: dueDate,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <SelectField
                        id="input-purchaseOrder-category"
                        label="Vendors/Third Party"
                        defaultValue={vendor}
                        type="text"
                        options={vendorOptions}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            company: e.label,
                          })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs="6">
                  <FormGroup>
                    <Label className="form-control-label" for="details">
                      Additional Details
                    </Label>
                    <Input
                      type="textarea"
                      name="text"
                      rows={6}
                      placeholder="Additional Details"
                      defaultValue={purchaseOrder.details}
                      onChange={e =>
                        setPurchaseOrder({
                          ...purchaseOrder,
                          details: e.target.value,
                        })
                      }
                      id="details"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <h6 className="heading mb-4">Parts</h6>
            <div className="card">
              <Row className="align-items-center p-4">
                <Col md="auto">
                  <strong>{partsQuantity}</strong> parts added
                </Col>
                <Col className="text-right">
                  <Button outline color="info" onClick={() => handleAddRow()}>
                    + Add Part
                  </Button>
                </Col>
              </Row>
              <Table striped hover responsive>
                <thead>
                  <tr className="strong">
                    <th>#</th>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {parts &&
                    parts.map((part, index) => {
                      return (
                        <tr key={part.id}>
                          <td className="align-middle">{part.id}</td>
                          <td className="align-middle">
                            <Input
                              id="input-purchaseOrder-part-title"
                              type="text"
                              placeholder="Part Name"
                              name="title"
                              defaultValue={part.title}
                              onChange={event => handlePartInput(index, event)}
                            />
                          </td>
                          <td className="align-middle narrow-td py-0">
                            <InputGroup>
                              <InputGroupText>$</InputGroupText>
                              <Input
                                id="input-purchaseOrder-part-cost"
                                defaultValue={part.cost}
                                name="cost"
                                placeholder="Part Cost"
                                type="number"
                                onChange={event => handlePartNumberInput(index, event)}
                              />
                            </InputGroup>
                          </td>
                          <td className="align-middle narrow-td py-2">
                            <Input
                              id="input-purchaseOrder-part-quantity"
                              type="number"
                              placeholder="Part Quantity"
                              name="quantity"
                              defaultValue={part.quantity}
                              onChange={event => handlePartNumberInput(index, event)}
                            />
                          </td>
                          <td className="align-middle py-0">
                            <Input
                              className="align-middle py-0"
                              id="input-purchaseOrder-part-desc"
                              type="text"
                              name="desc"
                              placeholder="Part Description"
                              defaultValue={part.desc}
                              onChange={event => handlePartInput(index, event)}
                            />
                          </td>
                          <td className="align-middle">
                            {part.cost * part.quantity} ${" "}
                            <FaTrashAlt
                              className="float-right ml-4"
                              style={{ transform: "scale(1.5)", cursor: "pointer" }}
                              onClick={() => handlePartRemove(index)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
              <Table hover responsive>
                <thead>
                  <tr className="strong">
                    <th>Subtotal</th>
                    <th>Sales Tax</th>
                    <th>Shipping Cost</th>
                    <th>Other Cost</th>
                    <th>Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle medium-td py-2">{subtotal} $</td>
                    <td className="align-middle medium-td py-2">
                      <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <Input
                          id="input-purchaseOrder-salesTax"
                          value={salesTax}
                          type="number"
                          onChange={e => setSalesTax(e.target.value)}
                        />
                      </InputGroup>
                    </td>
                    <td className="align-middle medium-td py-2">
                      <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <Input
                          id="input-purchaseOrder-shippingCost"
                          value={shippingCost}
                          type="number"
                          onChange={e => setShippingCost(e.target.value)}
                        />
                      </InputGroup>
                    </td>
                    <td className="align-middle medium-td py-2">
                      <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <Input
                          id="input-purchaseOrder-otherCost"
                          value={otherCost}
                          type="number"
                          onChange={e => setOtherCost(e.target.value)}
                        />
                      </InputGroup>
                    </td>
                    <td className="align-middle medium-td py-2">{totalCost} $</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row>
              <Col>
                <h6 className="heading mb-4">Requester Information</h6>
                <div className="card p-4">
                  <Row>
                    <Col>
                      <InputField
                        id="input-purchaseOrder-requester-company-name"
                        label="Company Name"
                        type="text"
                        placeholder="Company Name"
                        defaultValue={purchaseOrder.req_company_name}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            req_company_name: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputField
                        id="input-purchaseOrder-requester-address"
                        label="Address"
                        type="text"
                        placeholder="Address"
                        defaultValue={purchaseOrder.req_address}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            req_address: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <Row className="align-middle mb-4">
                    <Col xs="4">
                      <Input
                        id="input-purchaseOrder-requester-city"
                        type="text"
                        placeholder="City"
                        defaultValue={purchaseOrder.req_city}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            req_city: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col xs="4">
                      <Input
                        id="input-purchaseOrder-requester-state"
                        type="text"
                        placeholder="State"
                        defaultValue={purchaseOrder.req_state}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            req_state: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col xs="4">
                      <Input
                        id="input-purchaseOrder-requester-zip"
                        type="text"
                        placeholder="ZIP"
                        defaultValue={purchaseOrder.req_zip}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            req_zip: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <label className="form-control-label" htmlFor="contactInfo">
                    Contact Information
                  </label>
                  <Row className="align-middle" id="contactInfo">
                    <Col className="align-middle">
                      <Input
                        id="input-purchaseOrder-requester-contact"
                        type="text"
                        placeholder="Phone number"
                        defaultValue={purchaseOrder.req_phone}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            req_phone: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col className="align-middle">
                      <Input
                        id="input-purchaseOrder-requester-fax"
                        placeholder="FAX"
                        type="text"
                        defaultValue={purchaseOrder.req_fax}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            req_fax: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <h6 className="heading mb-4">Shipping Information</h6>
                <div className="card p-4">
                  <Row>
                    <Col>
                      <InputField
                        id="input-purchaseOrder-shipping-name"
                        label="Ship To Name"
                        placeholder="Ship to Name"
                        type="text"
                        defaultValue={purchaseOrder.ship_name}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            ship_name: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputField
                        id="input-purchaseOrder-shipping-company-name"
                        label="Company Name"
                        type="text"
                        placeholder="Company Name"
                        defaultValue={purchaseOrder.ship_company_name}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            ship_company_name: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputField
                        id="input-purchaseOrder-shipping-address"
                        label="Address"
                        placeholder="Address"
                        type="text"
                        defaultValue={purchaseOrder.ship_address}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            ship_address: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <Row className="align-middle mb-4">
                    <Col xs="4">
                      <Input
                        id="input-purchaseOrder-shipping-city"
                        type="text"
                        placeholder="City"
                        defaultValue={purchaseOrder.ship_city}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            ship_city: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col xs="4">
                      <Input
                        id="input-purchaseOrder-shipping-state"
                        type="text"
                        placeholder="State"
                        defaultValue={purchaseOrder.ship_state}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            ship_state: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col xs="4">
                      <Input
                        id="input-purchaseOrder-shipping-zip"
                        type="text"
                        placeholder="ZIP"
                        defaultValue={purchaseOrder.ship_zip}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            ship_zip: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <label className="form-control-label" htmlFor="shippingContactInfo">
                    Contact Information
                  </label>
                  <Row className="align-middle" id="shippingContactInfo">
                    <Col className="align-middle">
                      <Input
                        id="input-purchaseOrder-shipping-contact"
                        type="text"
                        placeholder="Phone number"
                        defaultValue={purchaseOrder.ship_phone}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            ship_phone: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col className="align-middle">
                      <Input
                        id="input-purchaseOrder-shipping-fax"
                        placeholder="FAX"
                        type="text"
                        defaultValue={purchaseOrder.ship_fax}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            ship_fax: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <h6 className="heading mb-4">Additional Information</h6>
            <div className="card p-4">
              <Row>
                <Col xs="6">
                  <Row>
                    <Col>
                      <DateField
                        id="po-date"
                        label="Purchase Order Date"
                        value={orderDate}
                        setValue={setOrderDate}
                        onChange={() =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            order_date: dueDate,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputField
                        id="additional-information-requisitioner"
                        label="Requisitioner"
                        placeholder="Requisitioner"
                        type="text"
                        defaultValue={purchaseOrder.requisitioner}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            requisitioner: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputField
                        id="additional-information-shipping-method"
                        label="Shipping Method"
                        placeholder="Shipping Method"
                        type="text"
                        defaultValue={purchaseOrder.ship_method}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            ship_method: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputField
                        id="additional-information-fob-ship-point"
                        label="F.O.B. Shipping Point"
                        placeholder="Free on Board Shipping Point"
                        type="text"
                        defaultValue={purchaseOrder.ship_point}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            ship_point: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <InputField
                        id="additional-information-terms"
                        label="Terms"
                        placeholder="Terms"
                        type="text"
                        defaultValue={purchaseOrder.terms}
                        onChange={e =>
                          setPurchaseOrder({
                            ...purchaseOrder,
                            terms: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label className="form-control-label" for="notes">
                          Notes
                        </Label>
                        <Input
                          type="textarea"
                          name="text"
                          placeholder="Add Notes"
                          rows={11}
                          defaultValue={purchaseOrder.notes}
                          onChange={e =>
                            setPurchaseOrder({
                              ...purchaseOrder,
                              notes: e.target.value,
                            })
                          }
                          id="notes"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <Row className="align-items-center py-4">
              <Col>
                {newPurchaseOrder ? (
                  <Button color="light" onClick={onBackToSearchClick}>
                    Cancel
                  </Button>
                ) : (
                  <Button color="danger" onClick={onDeletePurchaseOrder}>
                    Delete location
                  </Button>
                )}
              </Col>
              <Col className="text-right">
                <Button color="info" onClick={onSave}>
                  Submit
                </Button>
                {purchaseOrder.status === "Awaiting Approval" ? (
                  <Button color="success" onClick={onSaveAndApprove}>
                    Submit and Approve
                  </Button>
                ) : purchaseOrder.status === "Approved" ? (
                  <Button color="warning" onClick={onSaveAndApprove}>
                    Submit and Fulfill
                  </Button>
                ) : (
                  purchaseOrder.status === "Fulfilled" && <></>
                )}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
