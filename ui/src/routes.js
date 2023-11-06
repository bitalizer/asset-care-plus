import { analyticsPage } from "pages/analytics";
import { assetsPage } from "pages/assets";
import { authMenu } from "pages/auth";
import { categoriesPage } from "pages/categories";
import { companyMenu } from "pages/company";
import { filesPage } from "pages/files";
import { homeMenu } from "pages/home";
import { locationPage } from "pages/locations";
import { maintenancePage } from "pages/maintenance";
import { metersPage } from "pages/meters";
import { partsInventoryPage } from "pages/parts-inventory";
import { peopleTeamsPage } from "pages/people-teams";
import { purchaseOrdersPage } from "pages/purchase-orders";
import { requestPortalPage } from "pages/request-portal";
import { requestPage } from "pages/requests";
import { vendorsCustomersPage } from "pages/vendors-customers";
import { workOrdersMenu } from "pages/work-orders";

export const routes = [
  ...workOrdersMenu,
  ...authMenu,
  ...maintenancePage,
  ...analyticsPage,
  ...requestPage,
  ...locationPage,
  ...assetsPage,
  ...partsInventoryPage,
  ...purchaseOrdersPage,
  ...metersPage,
  ...peopleTeamsPage,
  ...vendorsCustomersPage,
  ...categoriesPage,
  ...filesPage,
  ...requestPortalPage,
  ...companyMenu,
  ...homeMenu,
];
