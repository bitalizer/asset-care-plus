import { allAuthRoles } from "../utils";

import {
  WorkOrdersPage,
  WORK_ORDERS_PAGE,
  ORDER_DETAILS,
  CREATE_WORK_ORDER_PAGE,
  CreateOrderPage,
  OrderDetailsPage,
} from ".";

export const workOrdersMenu = [
  {
    collapse: true,
    name: "Work Orders",
    path: WORK_ORDERS_PAGE,
    component: <WorkOrdersPage />,
    icon: "ni ni-single-copy-04 text-primary",
    layout: "/admin",
    key: "WorkOrders",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 1,
  },
  {
    collapse: false,
    global: true,
    path: `${CREATE_WORK_ORDER_PAGE}`,
    component: <CreateOrderPage />,
    layout: "/admin",
    name: "Create Request",
    key: CREATE_WORK_ORDER_PAGE,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: `${ORDER_DETAILS}/:id`,
    component: <OrderDetailsPage />,
    layout: "/admin",
    name: `${ORDER_DETAILS}/:id`,
    key: `${ORDER_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
