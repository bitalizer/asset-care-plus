import { allAuthRoles } from "../utils";

import { LOGIN, LoginPage } from ".";

export const authMenu = [
  {
    collapse: false,
    global: true,
    path: LOGIN,
    component: <LoginPage />,
    layout: "/auth",
    key: "Auth/Login",
    allowedRoles: [...allAuthRoles, 1],
  },
];
