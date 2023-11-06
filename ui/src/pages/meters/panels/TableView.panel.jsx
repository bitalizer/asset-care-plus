import { useState } from "react";
import { useNavigate } from "react-router";

import { ReactTable } from "components/widgets";

import { metersTableColumns, METER_DETAILS } from "..";

export const TableView = ({ deleteMeter, meters }) => {
  const [data, setData] = useState(meters);
  const navigate = useNavigate();

  const onDeleteMeter = e => {
    const { id } = e.target;
    deleteMeter(id);

    setData(
      data.filter(meter => {
        return meter.id !== Number(id);
      })
    );
  };

  const onViewMeterDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${METER_DETAILS}/${id}`);
  };

  return (
    <>
      {alert}
      <ReactTable
        data={data}
        columns={metersTableColumns({
          onRemoveButtonClick: onDeleteMeter,
          onDetailsButtonClick: onViewMeterDetails,
        })}
      />
    </>
  );
};
