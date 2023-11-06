import { allAuthRoles } from "../utils";

import { CreateCustomerPage } from "./create-partner/create-customer";
import { CreateVendorPage } from "./create-partner/create-vendor";
import { CustomerDetailsPage } from "./partner-details/customer-details";
import { VendorDetailsPage } from "./partner-details/vendor-details";
import { VendorsCustomersPage } from "./VendorsCustomers.page";
import {
  VENDORS_CUSTOMERS_PAGE,
  CREATE_CUSTOMER_PAGE,
  CREATE_VENDOR_PAGE,
  CUSTOMER_DETAILS,
  VENDOR_DETAILS,
} from "./vendorsCustomers.routes.const";

export const vendorsCustomersPage = [
  {
    collapse: false,
    path: VENDORS_CUSTOMERS_PAGE,
    icon: "ni ni-circle-08 text-info",
    component: <VendorsCustomersPage />,
    layout: "/admin",
    name: "Vendors & Customers",
    miniName: "VC",
    key: VENDORS_CUSTOMERS_PAGE,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: CREATE_VENDOR_PAGE,
    component: <CreateVendorPage />,
    layout: "/admin",
    name: "Create Vendor",
    miniName: "CVP",
    key: CREATE_VENDOR_PAGE,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: CREATE_CUSTOMER_PAGE,
    component: <CreateCustomerPage />,
    layout: "/admin",
    name: "Create Customer",
    key: CREATE_CUSTOMER_PAGE,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: `${CUSTOMER_DETAILS}/:id`,
    component: <CustomerDetailsPage />,
    layout: "/admin",
    name: `${CUSTOMER_DETAILS}/:id`,
    key: `${CUSTOMER_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: `${VENDOR_DETAILS}/:id`,
    component: <VendorDetailsPage />,
    layout: "/admin",
    name: `${VENDOR_DETAILS}/:id`,
    key: `${VENDOR_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
