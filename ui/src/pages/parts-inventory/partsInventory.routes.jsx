import { allAuthRoles } from "../utils";

import {
  PARTS_INVENTORY_PAGE,
  CREATE_NEW_INVENTORY,
  CreateInventoryPage,
  PARTS_INVENTORY_DETAILS,
  InventoryDetailsPage,
  PartsInventoryPage,
} from ".";

export const partsInventoryPage = [
  {
    collapse: false,
    name: "Parts/Inventory",
    path: PARTS_INVENTORY_PAGE,
    component: <PartsInventoryPage />,
    icon: "ni ni-key-25 text-primary",
    layout: "/admin",
    key: "Inventory",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 2,
  },
  {
    collapse: false,
    global: true,
    name: "Create New Inventory",
    path: CREATE_NEW_INVENTORY,
    component: <CreateInventoryPage />,
    layout: "/admin",
    key: "Inventory/CreateNewInventory",
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    name: `${PARTS_INVENTORY_DETAILS}/:id`,
    path: `${PARTS_INVENTORY_DETAILS}/:id`,
    component: <InventoryDetailsPage />,
    layout: "/admin",
    key: `Inventory/${PARTS_INVENTORY_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
