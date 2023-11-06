import { TwoMouseEventActionButtons } from "components/widgets";

export const locationsTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "locationName",
      Header: "Location Name",
    },
    {
      accessor: "address",
      Header: "Address",
    },
    {
      accessor: "createdAt",
      Header: "Created At",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
