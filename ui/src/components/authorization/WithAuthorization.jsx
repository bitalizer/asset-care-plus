import { checkAuthorized } from "pages/utils";

import { useAuth } from "context";

export const WithAuthorization = ({ children, onUnauthorized, requires }) => {
  const { user } = useAuth();
  const unauthorizedFragments = onUnauthorized ? onUnauthorized : <></>;
  const hasPermission = checkAuthorized(user.authRole, requires);
  return <>{hasPermission ? children : unauthorizedFragments}</>;
};
