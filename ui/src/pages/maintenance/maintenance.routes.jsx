import { allAuthRoles } from "../utils";

import { MaintenanceDetailsPage } from "./maintenance-details";

import {
  MAINTENANCE_PAGE,
  MaintenancePage,
  CREATE_MAINTENANCE_PAGE,
  CreateMaintenancePage,
  MAINTENANCE_DETAILS,
} from ".";

export const maintenancePage = [
  {
    collapse: false,
    name: "Preventive Maintenance",
    path: MAINTENANCE_PAGE,
    component: <MaintenancePage />,
    icon: "ni ni-building text-primary",
    layout: "/admin",
    key: "Maintenance",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 1,
  },
  {
    collapse: false,
    global: true,
    path: `${CREATE_MAINTENANCE_PAGE}`,
    component: <CreateMaintenancePage />,
    layout: "/admin",
    name: `${CREATE_MAINTENANCE_PAGE}`,
    key: `${CREATE_MAINTENANCE_PAGE}`,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: `${MAINTENANCE_DETAILS}/:id`,
    component: <MaintenanceDetailsPage />,
    layout: "/admin",
    name: `${MAINTENANCE_DETAILS}/:id`,
    key: `${MAINTENANCE_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
