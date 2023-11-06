import { businessUnitsData, countriesData, employeesData, careRolesData, groupsData } from "data";
import { SELECT_ALL, Role } from "variables/app.consts";
import { AuthorizationPolicies } from "variables/rbac.config";

import { customerService, vendorService } from "../../api";

export const toFileArray = filelist => {
  if (!filelist || filelist.length === 0) {
    return [];
  }
  const files = [];
  for (let i = 0; i < filelist.length; i++) {
    const fileOrNull = filelist.item(i);
    if (fileOrNull) {
      files.push(fileOrNull);
    }
  }
  return files;
};

export const formDataCsvToArray = commaSeparatedValues => {
  if (!commaSeparatedValues) {
    return [];
  }
  return commaSeparatedValues.split(",");
};

export const toFormData = object => {
  const formData = new FormData();

  for (const key in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (!object.hasOwnProperty(key) || typeof object[key] == "function") continue;
    formData.append(key, object[key]);
  }
  return formData;
};

export const toRoleEnum = role => {
  switch (role) {
    case "Admin":
      return Role.Admin;
    case "RegionalManager":
      return Role.RegionalManager;
    case "CountryManager":
      return Role.CountryManager;
    case "OperationManager":
      return Role.OperationManager;
    case "Employee":
      return Role.Employee;

    default:
      throw Error(`Illegal value for role. Found: ${role}`);
  }
};

const getPermissionForRole = role => {
  return AuthorizationPolicies[role];
};

export const checkAuthorized = (role, required) => {
  const permissions = getPermissionForRole(role);
  const foundPermission = permissions.find(permission => permission === required);
  return foundPermission ? true : false;
};

export const toBoolean = value => {
  if (value == null || value == undefined) {
    return false;
  }
  return [true, "true", "True", "TRUE", "1", 1].includes(value);
};

export const selectAllBusinessUnitsDataAsSelectOptions = () => {
  const businessUnitOptions = businessUnitsData.map(businessUnit => {
    return { value: `${businessUnit.id}`, label: businessUnit.name };
  });
  return [SELECT_ALL, ...businessUnitOptions];
};

export const selectAllCountriesDataAsSelectOptions = () => {
  const countryOptions = countriesData.map(country => {
    return { value: `${country.code3}`, label: country.name };
  });
  return [SELECT_ALL, ...countryOptions];
};

export const selectLoggedUserDefaultCountryAsSelection = userCountry => {
  const countriesAsSelections = selectAllCountriesDataAsSelectOptions();
  const countrySelectOption = countriesAsSelections.find(
    countryOption => countryOption.value === userCountry
  );
  return countrySelectOption;
};

export const selectCountryByIsoCodeAsSelectOption = code => {
  const country = countriesData.find(country => country.code3 === code);

  if (country) {
    return [{ value: `${country.code3}`, label: country.name }];
  }
  return [];
};

export const selectAllEmployeeDataAsSelectOptions = () => {
  const employeesOptions = employeesData.map(employee => {
    return { value: `${employee.id}`, label: `${employee.firstName} ${employee.lastName}` };
  });
  return [SELECT_ALL, ...employeesOptions];
};

export const selectAllVendorsDataAsSelectOptions = async () => {
  const vendorsData = await vendorService.findAllVendors();
  const vendorsOptions = vendorsData.data.map(vendor => {
    return { value: `${vendor.id}`, label: vendor.name };
  });
  return [...vendorsOptions];
};
export const selectAllCustomersDataAsSelectOptions = () => {
  const customersData = customerService.findAllCustomers();
  const customersOptions = customersData.data.map(customer => {
    return { value: `${customer.id}`, label: customer.name };
  });
  return [...customersOptions];
};

export const selectVendorsByIdsAsSelectValues = ids => {
  const vendorsData = vendorService.findAllVendors();
  const vendors = vendorsData.data.filter(vendor => ids.includes(vendor.id));
  const vendorsOptions = vendors.map(vendor => {
    return { value: `${vendor.id}`, label: vendor.name };
  });
  return [...vendorsOptions];
};

export const selectVendorByIdAsSelectValue = vendor => {
  return { value: vendor, label: vendor };
};

export const selectCategoryByIdAsSelectValue = category => {
  return { value: category, label: category };
};

export const selectRoleByIdAsSelectOption = id => {
  const role = careRolesData.find(role => role.id === id);

  if (role) {
    return [{ value: `${role.id}`, label: role.name }];
  }
  return [];
};

export const selectAllRolesDataAsSelectOptions = () => {
  const rolesOptions = careRolesData.map(role => {
    return { value: `${role.id}`, label: role.name };
  });
  return [SELECT_ALL, ...rolesOptions];
};

export const selectGroupsByIdsAsSelectValues = ids => {
  const groups = groupsData.filter(group => ids.includes(group.id));
  const groupsOptions = groups.map(group => {
    return { value: `${group.id}`, label: group.name };
  });
  return [...groupsOptions];
};

export const selectAllGroupsDataAsSelectOptions = () => {
  const groupsOptions = groupsData.map(group => {
    return { value: `${group.id}`, label: group.name };
  });
  return [SELECT_ALL, ...groupsOptions];
};

export const selectGroupMembers = groupId => {
  const group = groupsData.find(group => group.id === groupId);
  const employees = employeesData;

  return Object.keys(employees)
    .map(key => employees[parseInt(key)])
    .filter(employee => group.members.includes(employee.id));
};
