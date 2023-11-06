import { TwoMouseEventActionButtons } from "components/widgets";

export const PurchaseOrdersTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "title",
      Header: "Title",
    },
    {
      accessor: "poNumber",
      Header: "PO Number",
    },
    {
      accessor: "numberOfItems",
      Header: "# of Items",
    },
    {
      accessor: "totalCost",
      Header: "Total Cost",
    },
    {
      accessor: "totalQuantity",
      Header: "Total Quantity",
    },
    {
      accessor: "addedBy",
      Header: "Added By",
    },
    {
      accessor: "vendor",
      Header: "Vendor",
    },
    {
      accessor: "dateAdded",
      Header: "Date Added",
    },
    {
      accessor: "dueDate",
      Header: "Due Date",
    },

    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
