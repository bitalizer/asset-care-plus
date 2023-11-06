import { httpCommon, LOCATION_ROUTE } from "..";

const searchLocations = queryParams => httpCommon.get(`${LOCATION_ROUTE}?${queryParams}`);
const findAllLocations = () => httpCommon.get(`${LOCATION_ROUTE}`);

const getLocationById = id => httpCommon.get(`${LOCATION_ROUTE}/${id}`);

const createLocation = body => httpCommon.post(`${LOCATION_ROUTE}`, body);

const deleteLocation = id => httpCommon.delete(`${LOCATION_ROUTE}/${id}`);
const updateLocation = updatedLocation => {
  const { id, body } = updatedLocation;
  return httpCommon.put(`${LOCATION_ROUTE}/${id}`, body);
};
export const locationService = {
  searchLocations,
  getLocationById,
  createLocation,
  deleteLocation,
  updateLocation,
  findAllLocations,
};
