import { httpCommon, CUSTOMER_ROUTE } from "..";

const searchCustomers = queryParams => {
  return httpCommon.get(`${CUSTOMER_ROUTE}?${queryParams}`);
};

const findAllCustomers = () => httpCommon.get(`${CUSTOMER_ROUTE}`);

const getCustomerById = id => httpCommon.get(`${CUSTOMER_ROUTE}/${id}`);

const updateCustomer = updatedCustomer => {
  const { id, body } = updatedCustomer;
  return httpCommon.put(`${CUSTOMER_ROUTE}/${id}`, body);
};

const deleteCustomer = id => httpCommon.delete(`${CUSTOMER_ROUTE}/${id}`);
const createCustomer = body => httpCommon.post(`${CUSTOMER_ROUTE}`, body);

export const customerService = {
  searchCustomers,
  findAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  createCustomer,
};
