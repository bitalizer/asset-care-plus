import { httpCommon, VENDOR_ROUTE } from "..";

const searchVendors = queryParams => {
  return httpCommon.get(`${VENDOR_ROUTE}?${queryParams}`);
};

const findAllVendors = () => httpCommon.get(`${VENDOR_ROUTE}`);

const getVendorById = id => httpCommon.get(`${VENDOR_ROUTE}/${id}`);

const updateVendor = updatedVendor => {
  const { id, body } = updatedVendor;
  return httpCommon.put(`${VENDOR_ROUTE}/${id}`, body);
};

const createVendor = body => httpCommon.post(`${VENDOR_ROUTE}`, body);
const deleteVendor = id => httpCommon.delete(`${VENDOR_ROUTE}/${id}`);

export const vendorService = {
  searchVendors,
  findAllVendors,
  getVendorById,
  updateVendor,
  deleteVendor,
  createVendor,
};
