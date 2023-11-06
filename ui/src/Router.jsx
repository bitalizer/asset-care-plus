import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "routes";

import { LOGIN } from "pages/auth";
import { HOME } from "pages/home";

import { useAuth } from "context";
import { getRoutes, AdminLayout, AuthLayout } from "layouts";
import { Role } from "variables/app.consts";

export const Router = () => {
  const { user } = useAuth();
  const userRole = user?.authRole || Role.Anonymous;

  return (
    <Routes>
      {userRole !== Role.Anonymous && (
        <Route element={<AdminLayout />}>{getRoutes(routes, "/admin", userRole)}</Route>
      )}
      {userRole === Role.Anonymous && (
        <Route element={<AuthLayout />}>{getRoutes(routes, "/auth", userRole)}</Route>
      )}

      <Route
        path="*"
        element={
          <Navigate to={userRole !== Role.Anonymous ? `admin${HOME}` : `auth${LOGIN}`} replace />
        }
      />
    </Routes>
  );
};
