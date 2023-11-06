import { httpCommon, REQUEST_ROUTE } from "..";

const searchRequests = queryParams => httpCommon.get(`${REQUEST_ROUTE}?${queryParams}`);
const findAllRequests = () => httpCommon.get(`${REQUEST_ROUTE}`);

const getRequestById = id => httpCommon.get(`${REQUEST_ROUTE}/${id}`);

const createRequest = body => httpCommon.post(`${REQUEST_ROUTE}`, body);

const deleteRequest = id => httpCommon.delete(`${REQUEST_ROUTE}/${id}`);
const updateRequest = updatedRequest => {
  const { id, body } = updatedRequest;
  return httpCommon.put(`${REQUEST_ROUTE}/${id}`, body);
};
export const requestService = {
  searchRequests,
  getRequestById,
  createRequest,
  deleteRequest,
  updateRequest,
  findAllRequests,
};
