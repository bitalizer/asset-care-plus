import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { ReactTable } from "components/widgets";

import { useLocalStateAlerts } from "hooks";

import { deleteRequest, fetchRequests, removeRequest } from "../../../reducers/requestSlice";
import { REQUEST_DETAILS } from "../requests.routes.const";

import { requestsTableColumns } from "./SearchRequests.table";

export const SearchRequestsPage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const requests = useSelector(state => state.request.request);

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  const onViewRequestDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${REQUEST_DETAILS}/${id}`);
  };

  const onDeleteRequest = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete request", id);
    setSuccessMessage("Request deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteRequest(id));
    dispatch(removeRequest(parseInt(id)));
  };

  return (
    <>
      {alert}
      <ReactTable
        data={requests}
        columns={requestsTableColumns({
          onDetailsButtonClick: onViewRequestDetails,
          onRemoveButtonClick: onDeleteRequest,
        })}
      />
    </>
  );
};
