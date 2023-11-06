import { httpCommon, METERS_ROUTE } from "..";

const searchMeters = queryParams => httpCommon.get(`${METERS_ROUTE}?${queryParams}`);
const findAllMeters = () => httpCommon.get(`${METERS_ROUTE}`);

const getMeterById = id => httpCommon.get(`${METERS_ROUTE}/${id}`);

const createMeter = body => httpCommon.post(`${METERS_ROUTE}`, body);

const deleteMeter = id => httpCommon.delete(`${METERS_ROUTE}/${id}`);
const updateMeter = updatedMeter => {
  const { id, body } = updatedMeter;
  return httpCommon.put(`${METERS_ROUTE}/${id}`, body);
};

export const metersService = {
  searchMeters,
  getMeterById,
  createMeter,
  deleteMeter,
  updateMeter,
  findAllMeters,
};
