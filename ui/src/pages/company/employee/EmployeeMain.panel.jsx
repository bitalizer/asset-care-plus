import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TabContent, TabPane } from "reactstrap";

import { businessUnitsData } from "__mocks/data/business-units-mocks";
import { countries } from "__mocks/data/countries-mocks";
import { departmentsData } from "__mocks/data/departments-mocks";
import { jobTitlesData } from "__mocks/data/jobTitles-mocks";
import {
  businessUnitsDataAsSelectOptions,
  countriesDataAsSelectOptions,
  departmentDataAsSelectOptions,
  jobTitlesDataAsSelectOptions,
} from "common/category-utils";

import {
  createEmployee,
  deleteEmployee,
  fetchEmployees,
  findEmployeeById,
  removeEmployee,
  searchEmployees,
  updateEmployee,
} from "../../../reducers/emplyeeSlice";

import { CreateEmployeePanel } from "./create-employee/CreateEmployee.panel";
import { EmployeeDetailsPanel } from "./employee-details/EmployeeDetails.panel";
import { EMPLOYEE_CREATE, EMPLOYEE_DETAILS, EMPLOYEE_SEARCH } from "./employee.routes.consts";
import { SearchEmployeesPanel } from "./search-employees/SearchEmployees.panel";

export const EmployeeMainPanel = () => {
  const [activePanel, setActivePanel] = useState(EMPLOYEE_SEARCH);
  const employees = useSelector(state => state.employees.employees);
  const [currentEmployee, setCurrentEmployee] = useState({});

  const departments = departmentDataAsSelectOptions(departmentsData);
  const countriesData = countriesDataAsSelectOptions(countries());
  const businessUnits = businessUnitsDataAsSelectOptions(businessUnitsData);
  const jobtitles = jobTitlesDataAsSelectOptions(jobTitlesData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const onCreateNew = async newEmployee => {
    dispatch(createEmployee(newEmployee));
    dispatch(fetchEmployees());
    console.log(newEmployee);
  };

  const onSave = async partialEmployee => {
    const employee = {
      id: partialEmployee.id,
      body: partialEmployee,
    };
    dispatch(updateEmployee(employee));
    dispatch(fetchEmployees());
    return partialEmployee;
  };
  const foundEmployee = useSelector(state => state.employees.oneEmployee);

  useEffect(() => {
    setCurrentEmployee(foundEmployee);
  }, [foundEmployee]);
  const onViewEmployeeDetails = id => {
    dispatch(findEmployeeById(id));
    setActivePanel(EMPLOYEE_DETAILS);
  };

  const onSearchEmployees = async employeeSearchRequest => {
    console.log(employeeSearchRequest);
    // change employees according to query result
    const queryParams = new URLSearchParams(employeeSearchRequest);
    dispatch(searchEmployees(queryParams));
  };

  const onDelete = async id => {
    dispatch(deleteEmployee(id));
    dispatch(removeEmployee(parseInt(id)));
  };

  return (
    <>
      <TabContent activeTab={activePanel}>
        <TabPane tabId={EMPLOYEE_SEARCH}>
          <SearchEmployeesPanel
            employees={employees}
            departments={departments}
            countries={countriesData}
            businessUnits={businessUnits}
            jobtitles={jobtitles}
            navigateToPanel={setActivePanel}
            onSearchEmployees={onSearchEmployees}
            onDelete={onDelete}
            onViewDetails={onViewEmployeeDetails}
          />
        </TabPane>
        <TabPane tabId={EMPLOYEE_CREATE}>
          <CreateEmployeePanel onSaveNewEmployee={onCreateNew} navigateToPanel={setActivePanel} />
        </TabPane>
        <TabPane tabId={EMPLOYEE_DETAILS}>
          <EmployeeDetailsPanel
            employee={currentEmployee}
            onSave={onSave}
            navigateToPanel={setActivePanel}
          />
        </TabPane>
      </TabContent>
    </>
  );
};
