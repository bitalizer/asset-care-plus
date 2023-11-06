import { httpCommon, METER_CATEGORY } from "..";

const searchMeterCategory = queryParams => httpCommon.get(`${METER_CATEGORY}?${queryParams}`);
const findAllMeterCategory = () => httpCommon.get(`${METER_CATEGORY}`);

const createMeterCategory = body => httpCommon.post(`${METER_CATEGORY}`, body);

const deleteMeterCategory = id => httpCommon.delete(`${METER_CATEGORY}/${id}`);
export const meterCategoryService = {
  searchMeterCategory,
  findAllMeterCategory,
  createMeterCategory,
  deleteMeterCategory,
};
