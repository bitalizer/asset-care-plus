import { httpCommon, PURCHASE_ORDER_ROUTE } from "..";

const searchPurchaseOrders = queryParams =>
  httpCommon.get(`${PURCHASE_ORDER_ROUTE}?${queryParams}`);
const findAllPurchaseOrders = () => httpCommon.get(`${PURCHASE_ORDER_ROUTE}`);

const getPurchaseOrderById = id => httpCommon.get(`${PURCHASE_ORDER_ROUTE}/${id}`);

const createPurchaseOrder = body => httpCommon.post(`${PURCHASE_ORDER_ROUTE}`, body);

const deletePurchaseOrder = id => httpCommon.delete(`${PURCHASE_ORDER_ROUTE}/${id}`);
const updatePurchaseOrder = updatedPurchaseOrder => {
  const { id, body } = updatedPurchaseOrder;
  return httpCommon.put(`${PURCHASE_ORDER_ROUTE}/${id}`, body);
};

export const purchaseOrderService = {
  searchPurchaseOrders,
  getPurchaseOrderById,
  createPurchaseOrder,
  deletePurchaseOrder,
  updatePurchaseOrder,
  findAllPurchaseOrders,
};
