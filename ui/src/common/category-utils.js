import { SELECT_ALL } from "common/consts";

const categoryAsSelectionOptions = data => {
  const categorySelectionOptions = data.map(record => {
    return { value: `${record.id}`, label: record.name };
  });
  return [SELECT_ALL, ...categorySelectionOptions];
};

export const businessUnitsDataAsSelectOptions = data => {
  return categoryAsSelectionOptions(data);
};

export const groupDataAsSelectOptions = data => {
  return categoryAsSelectionOptions(data);
};

export const jobTitlesDataAsSelectOptions = data => {
  return categoryAsSelectionOptions(data);
};

export const teamDataAsSelectOptions = data => {
  return categoryAsSelectionOptions(data);
};

export const departmentDataAsSelectOptions = data => {
  return categoryAsSelectionOptions(data);
};

export const countriesDataAsSelectOptions = data => {
  return categoryAsSelectionOptions(data);
};
