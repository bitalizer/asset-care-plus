import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { ReactTable } from "components/widgets";

import { useLocalStateAlerts } from "hooks";

import {
  deleteWorkOrder,
  fetchWorkOrder,
  removeWorkOrders,
} from "../../../reducers/workOrderSlice";
import { ORDER_DETAILS } from "../workOrders.routes.const";

import { requestsTableColumns } from "./SearchOrder.table";

export const SearchOrdersPage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const orders = useSelector(state => state.workOrders.workOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkOrder());
  }, [dispatch]);

  const onViewOrderDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${ORDER_DETAILS}/${id}`);
  };

  const onDeleteOrder = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete order", id);
    setSuccessMessage("Order deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteWorkOrder(id));
    dispatch(removeWorkOrders(parseInt(id)));
  };

  return (
    <>
      {alert}
      <ReactTable
        data={orders}
        columns={requestsTableColumns({
          onDetailsButtonClick: onViewOrderDetails,
          onRemoveButtonClick: onDeleteOrder,
        })}
      />
    </>
  );
};
