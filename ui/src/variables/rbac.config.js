import { Permission, Role } from "./app.consts";

export const AnonymousPermissions = [];

export const EmployeePermissions = [
  ...AnonymousPermissions,
  Permission.Employee_read,
  Permission.Document_read,
];

export const OperationManagerPermissions = [
  ...EmployeePermissions,
  Permission.Group_write,
  Permission.Group_read,
  Permission.Document_write,
];

export const CountryManagerPermissions = [
  ...OperationManagerPermissions,
  Permission.Employee_write,
  Permission.Email_write,
  Permission.Dashboard_worldview_read,
  Permission.Dashboard_statistics_read,
];

export const RegionalManagerPermissions = [
  ...CountryManagerPermissions,
  Permission.Employee_country_all,
  Permission.Dashboard_statistics_country_all,
  Permission.Email_country_all,
  Permission.Employee_country_all,
  Permission.Group_country_all,
];

export const AdminPermissions = [
  ...RegionalManagerPermissions,
  Permission.Employee_country_all,
  Permission.Dashboard_statistics_country_all,
  Permission.Email_country_all,
  Permission.Employee_country_all,
  Permission.Group_country_all,
];

export const AuthorizationPolicies = {
  [Role.Admin]: AdminPermissions,
  [Role.RegionalManager]: RegionalManagerPermissions,
  [Role.CountryManager]: CountryManagerPermissions,
  [Role.OperationManager]: OperationManagerPermissions,
  [Role.Employee]: EmployeePermissions,
  [Role.Anonymous]: AnonymousPermissions,
};
