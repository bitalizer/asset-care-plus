import { allAuthRoles } from "../utils";

import { AssetDetailsPage } from "./asset-details";

import { ASSETS_PAGE, AssetsPage, ASSET_DETAILS } from ".";

export const assetsPage = [
  {
    collapse: false,
    name: "Assets",
    path: ASSETS_PAGE,
    component: <AssetsPage />,
    icon: "ni ni-app text-primary",
    layout: "/admin",
    key: "Assets",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 2,
  },
  {
    collapse: false,
    global: true,
    path: `${ASSET_DETAILS}/:id`,
    component: <AssetDetailsPage />,
    layout: "/admin",
    name: `${ASSET_DETAILS}/:id`,
    key: `PeopleTeams/${ASSET_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
