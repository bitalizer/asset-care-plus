import { httpCommon, MAINTENANCE_ROUTE } from "..";

const searchMaintenances = queryParams => httpCommon.get(`${MAINTENANCE_ROUTE}?${queryParams}`);
const findAllMaintenances = () => httpCommon.get(`${MAINTENANCE_ROUTE}`);

const getMaintenanceById = id => httpCommon.get(`${MAINTENANCE_ROUTE}/${id}`);

const createMaintenance = body => httpCommon.post(`${MAINTENANCE_ROUTE}`, body);

const deleteMaintenance = id => httpCommon.delete(`${MAINTENANCE_ROUTE}/${id}`);
const updateMaintenance = updatedMaintenance => {
  const { id, body } = updatedMaintenance;
  return httpCommon.put(`${MAINTENANCE_ROUTE}/${id}`, body);
};

export const maintenanceService = {
  searchMaintenances,
  getMaintenanceById,
  createMaintenance,
  deleteMaintenance,
  updateMaintenance,
  findAllMaintenances,
};
