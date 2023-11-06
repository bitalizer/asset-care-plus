import { httpCommon, WORK_ORDER_ROUTE } from "..";

const searchWorkOrders = queryParams => httpCommon.get(`${WORK_ORDER_ROUTE}?${queryParams}`);
const findAllWorkOrders = () => httpCommon.get(`${WORK_ORDER_ROUTE}`);

const getWorkOrderById = id => httpCommon.get(`${WORK_ORDER_ROUTE}/${id}`);

const createWorkOrder = body => httpCommon.post(`${WORK_ORDER_ROUTE}`, body);

const deleteWorkOrder = id => httpCommon.delete(`${WORK_ORDER_ROUTE}/${id}`);
const updateWorkOrder = updatedWorkOrder => {
  const { id, body } = updatedWorkOrder;
  return httpCommon.put(`${WORK_ORDER_ROUTE}/${id}`, body);
};
export const workOrderService = {
  searchWorkOrders,
  getWorkOrderById,
  createWorkOrder,
  deleteWorkOrder,
  updateWorkOrder,
  findAllWorkOrders,
};
