import { allAuthRoles } from "../utils";

import { ANALYTICS_PAGE, AnalyticsPage } from ".";

export const analyticsPage = [
  {
    collapse: false,
    name: "Analytics",
    path: ANALYTICS_PAGE,
    component: <AnalyticsPage />,
    icon: "ni ni-sound-wave text-primary",
    layout: "/admin",
    key: "Analytics",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 1,
  },
];
