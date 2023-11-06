import { TwoMouseEventActionButtons } from "components/widgets";

export const maintenanceTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "trigger_name",
      Header: "Trigger Name",
    },
    {
      accessor: "order_title",
      Header: "Order Title",
    },
    {
      accessor: "priority",
      Header: "Priority",
    },
    {
      accessor: "category",
      Header: "Category",
    },
    {
      accessor: "starts_on",
      Header: "Starts on",
    },
    {
      accessor: "ends_on",
      Header: "Ends on",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
