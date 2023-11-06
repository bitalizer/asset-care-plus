import { httpCommon, WORK_ORDERS_CATEGORY } from "..";

const searchWorkOrdersCategory = queryParams =>
  httpCommon.get(`${WORK_ORDERS_CATEGORY}?${queryParams}`);
const findAllWorkOrdersCategory = () => httpCommon.get(`${WORK_ORDERS_CATEGORY}`);

const createWorkOrdersCategory = body => httpCommon.post(`${WORK_ORDERS_CATEGORY}`, body);

const deleteWorkOrdersCategory = id => httpCommon.delete(`${WORK_ORDERS_CATEGORY}/${id}`);
export const workOrdersCategoryService = {
  searchWorkOrdersCategory,
  findAllWorkOrdersCategory,
  createWorkOrdersCategory,
  deleteWorkOrdersCategory,
};
