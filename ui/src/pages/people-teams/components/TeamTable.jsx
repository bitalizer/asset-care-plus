import { TwoMouseEventActionButtons } from "components/widgets";

export const TeamsTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "name",
      Header: "Full name",
    },
    {
      accessor: "active",
      Header: "Active",
    },
    {
      accessor: "description",
      Header: "Description",
    },

    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
