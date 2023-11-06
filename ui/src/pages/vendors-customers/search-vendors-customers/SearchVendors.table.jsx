import { TwoMouseEventActionButtons } from "components/widgets";

export const vendorsTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "company_name",
      Header: "Company Name",
    },
    {
      accessor: "address",
      Header: "Address",
    },
    {
      accessor: "phone",
      Header: "Phone Number",
    },
    {
      accessor: "name",
      Header: "Contact Name",
    },
    {
      accessor: "email",
      Header: "Email Address",
    },
    {
      accessor: "vendor_type",
      Header: "Vendor Type",
    },
    {
      accessor: "website",
      Header: "Website",
    },
    {
      accessor: "rate",
      Header: "Hourly Rate",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
