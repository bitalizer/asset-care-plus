import { allAuthRoles } from "../utils";

import { CompanyPage } from "./Company.main";
import { COMPANY_ROUTE } from "./company.routes.const";

export const companyMenu = [
  {
    collapse: false,
    global: false,
    icon: "ni ni-briefcase-24 text-primary",
    path: `${COMPANY_ROUTE}`,
    component: <CompanyPage />,
    layout: "/admin",
    name: "Company",
    key: `Home${COMPANY_ROUTE}`,
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 4,
  },
];
