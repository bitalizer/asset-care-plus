import { TwoMouseEventActionButtons } from "components/widgets";
export const metersTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "meterName",
      Header: "Meter Name",
    },
    {
      accessor: "nextReadingDue",
      Header: "Next Reading Due",
    },
    {
      accessor: "unitOfMeasurement",
      Header: "Unit Of Measurement",
    },
    {
      accessor: "lastReading",
      Header: "Last Reading",
    },
    {
      accessor: "frequency",
      Header: "Frequency",
    },
    {
      accessor: "location",
      Header: "Location",
    },
    {
      accessor: "asset",
      Header: "Asset",
    },
    {
      accessor: "automated",
      Header: "Automated",
    },
    {
      accessor: "createdAt",
      Header: "Created At",
    },

    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
