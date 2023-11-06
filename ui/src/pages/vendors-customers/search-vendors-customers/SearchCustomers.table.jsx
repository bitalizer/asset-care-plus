import { TwoMouseEventActionButtons } from "components/widgets";

export const customersTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
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
      accessor: "billing_name",
      Header: "Contact Name",
    },
    {
      accessor: "email",
      Header: "Email Address",
    },
    {
      accessor: "customer_type",
      Header: "Customer Type",
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
