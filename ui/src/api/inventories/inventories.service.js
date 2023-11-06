import { httpCommon, INVENTORY_ROUTE } from "..";

const searchInventories = queryParams => httpCommon.get(`${INVENTORY_ROUTE}?${queryParams}`);
const findAllInventories = () => httpCommon.get(`${INVENTORY_ROUTE}`);

const getInventoryById = id => httpCommon.get(`${INVENTORY_ROUTE}/${id}`);

const createInventory = body => httpCommon.post(`${INVENTORY_ROUTE}`, body);

const deleteInventory = id => httpCommon.delete(`${INVENTORY_ROUTE}/${id}`);
const updateInventory = updatedInventory => {
  const { id, body } = updatedInventory;
  return httpCommon.put(`${INVENTORY_ROUTE}/${id}`, body);
};
export const inventoryService = {
  searchInventories,
  getInventoryById,
  createInventory,
  deleteInventory,
  updateInventory,
  findAllInventories,
};
