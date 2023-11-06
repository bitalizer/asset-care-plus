import { allAuthRoles } from "../utils";

import { CreatePurchaseOrderPage } from "./create-purchase-order";

import {
  PURCHASE_ORDERS_PAGE,
  PurchaseOrdersPage,
  PURCHASE_ORDERS_DETAILS,
  PurchaseOrdersDetailsPage,
  PURCHASE_ORDERS_CREATE,
} from ".";

export const purchaseOrdersPage = [
  {
    collapse: false,
    name: "Purchase Orders",
    path: PURCHASE_ORDERS_PAGE,
    component: <PurchaseOrdersPage />,
    icon: "ni ni-money-coins text-info",
    layout: "/admin",
    key: "PurchaseOrders",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 2,
  },
  {
    collapse: false,
    global: true,
    path: `${PURCHASE_ORDERS_DETAILS}/:id`,
    component: <PurchaseOrdersDetailsPage />,
    layout: "/admin",
    name: `${PURCHASE_ORDERS_DETAILS}/:id`,
    key: `PurchaseOrders/${PURCHASE_ORDERS_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: PURCHASE_ORDERS_CREATE,
    name: "Create New",
    component: <CreatePurchaseOrderPage />,
    layout: "/admin",
    key: "PurchaseOrders/CreatePurchaseOrder",
    allowedRoles: [...allAuthRoles],
  },
];
