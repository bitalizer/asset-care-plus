import { TwoMouseEventActionButtons } from "components/widgets";

export const PeopleTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "fullName",
      Header: "Full name",
    },
    {
      accessor: "email",
      Header: "E-mail",
    },
    {
      accessor: "phone",
      Header: "Phone",
    },
    {
      accessor: "jobTitle",
      Header: "Job Title",
    },
    {
      accessor: "companyName",
      Header: "Company Name",
    },
    {
      accessor: "accountType",
      Header: "Account Type",
    },
    {
      accessor: "lastVisit",
      Header: "Last Visit",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
