import { allAuthRoles } from "../utils";

import { RequestDetailsPage } from "./request-details";

import {
  REQUESTS_PAGE,
  RequestsPage,
  CREATE_REQUEST_PAGE,
  CreateRequestPage,
  REQUEST_DETAILS,
} from ".";

export const requestPage = [
  {
    collapse: false,
    name: "Requests",
    path: REQUESTS_PAGE,
    component: <RequestsPage />,
    icon: "ni ni-send text-primary",
    layout: "/admin",
    key: "Requests",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 1,
  },
  {
    collapse: false,
    global: true,
    path: `${CREATE_REQUEST_PAGE}`,
    component: <CreateRequestPage />,
    layout: "/admin",
    name: "Create Request",
    key: CREATE_REQUEST_PAGE,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: `${REQUEST_DETAILS}/:id`,
    component: <RequestDetailsPage />,
    layout: "/admin",
    name: `${REQUEST_DETAILS}/:id`,
    key: `${REQUEST_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
