import { allAuthRoles } from "../utils";

import { TeamDetailsPage } from "./people-teams-details";

import {
  PEOPLE_TEAMS_PAGE,
  PeopleAndTeamsPage,
  PEOPLE_DETAILS,
  PeopleDetailsPage,
  CREATE_PERSON_PAGE,
  CREATE_TEAM_PAGE,
  CreatePersonPage,
  CreateTeamPage,
  TEAM_DETAILS,
} from ".";
export const peopleTeamsPage = [
  {
    collapse: false,
    name: "People & Teams",
    path: PEOPLE_TEAMS_PAGE,
    component: <PeopleAndTeamsPage />,
    icon: "ni ni-badge text-info",
    layout: "/admin",
    key: "PeoplesTeams",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 3,
  },
  {
    collapse: false,
    global: true,
    path: `${PEOPLE_DETAILS}/:id`,
    component: <PeopleDetailsPage />,
    layout: "/admin",
    name: `${PEOPLE_DETAILS}/:id`,
    key: `PeopleTeams/${PEOPLE_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: `${TEAM_DETAILS}/:id`,
    component: <TeamDetailsPage />,
    layout: "/admin",
    name: `${TEAM_DETAILS}/:id`,
    key: `PeopleTeams/${TEAM_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: CREATE_PERSON_PAGE,
    component: <CreatePersonPage />,
    layout: "/admin",
    name: "Create Vendor",
    key: CREATE_PERSON_PAGE,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: CREATE_TEAM_PAGE,
    component: <CreateTeamPage />,
    layout: "/admin",
    name: "Create Customer",
    key: CREATE_TEAM_PAGE,
    allowedRoles: [...allAuthRoles],
  },
];
