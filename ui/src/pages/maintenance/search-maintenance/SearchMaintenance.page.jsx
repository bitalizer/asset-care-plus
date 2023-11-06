import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { ReactTable } from "components/widgets";

import { useLocalStateAlerts } from "hooks";

import {
  deleteMaintenance,
  fetchMaintenance,
  removeMaintenance,
} from "../../../reducers/maintenanceSlice";
import { MAINTENANCE_DETAILS } from "../maintenance.routes.const";

import { maintenanceTableColumns } from "./SearchMaintenance.table";

export const SearchMaintenancePage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const preventiveMaintenance = useSelector(state => state.maintenance.maintenance);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMaintenance());
  }, [dispatch]);
  const onViewMaintenanceDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${MAINTENANCE_DETAILS}/${id}`);
  };

  const onDeleteMaintenance = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete preventive maintenance", id);
    setSuccessMessage("Preventive Maintenance deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteMaintenance(id));
    dispatch(removeMaintenance(parseInt(id)));
  };

  return (
    <>
      {alert}
      <ReactTable
        data={preventiveMaintenance}
        columns={maintenanceTableColumns({
          onDetailsButtonClick: onViewMaintenanceDetails,
          onRemoveButtonClick: onDeleteMaintenance,
        })}
      />
    </>
  );
};
