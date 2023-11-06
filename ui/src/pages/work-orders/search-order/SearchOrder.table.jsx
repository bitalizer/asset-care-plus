import { TwoMouseEventActionButtons } from "components/widgets";

export const requestsTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "due",
      Header: "Due",
    },
    {
      accessor: "status",
      Header: "Status",
    },
    {
      accessor: "workOrderTitle",
      Header: "Work Order Title",
    },
    {
      accessor: "asset",
      Header: "Asset",
    },
    {
      accessor: "priority",
      Header: "Priority",
    },

    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
