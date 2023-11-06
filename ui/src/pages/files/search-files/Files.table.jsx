import { TwoMouseEventActionButtons } from "components/widgets";

export const filesTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "name",
      Header: "File Name",
    },
    {
      accessor: "uploaded_by",
      Header: "Uploaded By",
    },
    {
      accessor: "uploaded_on",
      Header: "Uploaded On",
    },

    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
