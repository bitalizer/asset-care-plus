import { TwoMouseEventActionButtons } from "components/widgets";
export const assetsTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "name",
      Header: "Name",
    },
    {
      accessor: "id",
      Header: "ID",
    },
    {
      accessor: "location",
      Header: "Location",
    },
    {
      accessor: "area",
      Header: "Area",
    },
    {
      accessor: "model",
      Header: "Model",
    },
    {
      accessor: "barcode",
      Header: "Barcode",
    },
    {
      accessor: "category",
      Header: "Category",
    },
    {
      accessor: "assetStatus",
      Header: "Asset Status",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
