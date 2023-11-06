import { allAuthRoles } from "../utils";

import { REQUEST_PORTAL_PAGE, RequestPortalPage } from ".";

export const requestPortalPage = [
  {
    collapse: false,
    name: "Request Portal",
    path: REQUEST_PORTAL_PAGE,
    component: <RequestPortalPage />,
    icon: "ni ni-curved-next text-primary",
    layout: "/admin",
    key: "RequestPortal",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 4,
  },
];
