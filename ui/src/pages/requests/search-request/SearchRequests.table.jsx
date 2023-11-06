import { TwoMouseEventActionButtons } from "components/widgets";

export const requestsTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
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
      accessor: "priority",
      Header: "Priority",
    },
    {
      accessor: "description",
      Header: "Description",
    },

    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
