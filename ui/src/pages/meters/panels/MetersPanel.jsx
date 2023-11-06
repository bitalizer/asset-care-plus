import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLocalStateAlerts } from "hooks";

import { createMeter, fetchMeters, removeMeter, deleteMeter } from "../../../reducers/metersSlice";
import { FilterBar, Toolbar, CustomModal } from "../components";

import { AddMeterDetail, EmptyView, TableView } from ".";

export const MetersPanel = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [addModal, setAddModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);

  const meters = useSelector(state => state.meters.meters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeters());
  }, [dispatch]);

  const toggle = () => {
    if (addModal === true) {
      setAddModal(false);
    }
    if (detailModal === true) {
      setDetailModal(false);
    }
  };

  const showForm = () => {
    setAddModal(true);
  };

  const onSaveMeter = newMeter => {
    setAddModal(false);
    setDetailModal(true);
    setSuccessMessage("Meter Added");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(createMeter(newMeter));
    console.log("new meter created:", newMeter);
  };

  const onCloseAddMeterForm = () => {
    setAddModal(false);
  };

  const onDeleteMeter = id => {
    setSuccessMessage("Meter Deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteMeter(id));
    dispatch(removeMeter(parseInt(id)));
    console.log("deleted meter id:", id);
  };

  return (
    <>
      {alert}
      <Toolbar onClick={showForm} />
      <FilterBar />
      <CustomModal isOpen={addModal} toggle={toggle}>
        <AddMeterDetail onClose={onCloseAddMeterForm} onSave={onSaveMeter} />
      </CustomModal>
      {meters.length === 0 ? (
        <EmptyView />
      ) : (
        <TableView meters={meters} deleteMeter={onDeleteMeter} />
      )}
    </>
  );
};
