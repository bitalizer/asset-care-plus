import { allAuthRoles } from "../utils";

import { METERS_PAGE, MetersPage, METER_DETAILS, MeterDetailsPage } from ".";

export const metersPage = [
  {
    collapse: false,
    name: "Meters",
    path: METERS_PAGE,
    component: <MetersPage />,
    icon: "ni ni-user-run text-primary",
    layout: "/admin",
    key: "Meters",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 2,
  },
  {
    collapse: false,
    global: true,
    path: `${METER_DETAILS}/:id`,
    component: <MeterDetailsPage />,
    layout: "/admin",
    name: `${METER_DETAILS}/:id`,
    key: `PeopleTeams/${METER_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
