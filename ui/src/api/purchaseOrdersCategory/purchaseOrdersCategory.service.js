import { httpCommon, PURCHASE_ORDERS_CATEGORY } from "..";

const searchPurchaseOrdersCategory = queryParams =>
  httpCommon.get(`${PURCHASE_ORDERS_CATEGORY}?${queryParams}`);
const findAllPurchaseOrdersCategory = () => httpCommon.get(`${PURCHASE_ORDERS_CATEGORY}`);

const createPurchaseOrdersCategory = body => httpCommon.post(`${PURCHASE_ORDERS_CATEGORY}`, body);

const deletePurchaseOrdersCategory = id => httpCommon.delete(`${PURCHASE_ORDERS_CATEGORY}/${id}`);
export const purchaseOrdersCategoryService = {
  searchPurchaseOrdersCategory,
  findAllPurchaseOrdersCategory,
  createPurchaseOrdersCategory,
  deletePurchaseOrdersCategory,
};
