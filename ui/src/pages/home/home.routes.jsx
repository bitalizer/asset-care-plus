import { allAuthRoles } from "../utils";

import { HomePage } from "./Home.page";
import { HOME } from "./home.routes.const";

export const homeMenu = [
  {
    collapse: false,
    global: true,
    path: `${HOME}`,
    component: <HomePage />,
    layout: "/admin",
    name: `${HOME}`,
    key: `Home/${HOME}`,
    allowedRoles: [...allAuthRoles],
  },
];
