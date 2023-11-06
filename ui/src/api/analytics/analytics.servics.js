import { httpCommon, ANALYTICS_ROUTE } from "..";

const searchAnalytics = queryParams => httpCommon.get(`${ANALYTICS_ROUTE}?${queryParams}`);
const findAllAnalytics = () => httpCommon.get(`${ANALYTICS_ROUTE}`);

const getAnalyticsById = id => httpCommon.get(`${ANALYTICS_ROUTE}/${id}`);

const createAnalytics = body => httpCommon.post(`${ANALYTICS_ROUTE}`, body);

const deleteAnalytics = id => httpCommon.delete(`${ANALYTICS_ROUTE}/${id}`);
const updateAnalytics = updatedAnalytics => {
  const { id, body } = updatedAnalytics;
  return httpCommon.put(`${ANALYTICS_ROUTE}/${id}`, body);
};

export const analyticsService = {
  searchAnalytics,
  getAnalyticsById,
  createAnalytics,
  deleteAnalytics,
  updateAnalytics,
  findAllAnalytics,
};
