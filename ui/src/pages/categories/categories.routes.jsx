import { allAuthRoles } from "../utils";

import { CATEGORIES_ROUTE, CategoriesPage } from ".";

export const categoriesPage = [
  {
    collapse: false,
    name: "Categories",
    path: CATEGORIES_ROUTE,
    component: <CategoriesPage />,
    icon: "ni ni-book-bookmark text-primary",
    layout: "/admin",
    key: "Categories",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 4,
  },
];
