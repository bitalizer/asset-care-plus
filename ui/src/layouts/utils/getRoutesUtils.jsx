import { Route } from "react-router-dom";

const getLayout = (route, layout, userRole) => {
  if (route.layout === layout && route.allowedRoles.includes(userRole) && route.component) {
    return <Route path={route.layout + route.path} element={route.component} key={route.key} />;
  } else {
    return null;
  }
};

const getRouteViews = (routes, layout, userRole) => {
  return routes.map(route => getLayout(route, layout, userRole));
};

export const getRoutes = (routes, layout, userRole) => {
  return routes.map(route => {
    if (!route.allowedRoles) {
      console.log(route.path);
    }
    if (
      route.collapse &&
      route.views &&
      route.views.length > 0 &&
      route.allowedRoles.includes(userRole)
    ) {
      return getRouteViews(route.views, layout, userRole);
    }

    return getLayout(route, layout, userRole);
  });
};
