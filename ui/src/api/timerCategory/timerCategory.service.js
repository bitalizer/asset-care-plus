import { httpCommon, TIMER_CATEGORY } from "..";

const searchTimerCategory = queryParams => httpCommon.get(`${TIMER_CATEGORY}?${queryParams}`);
const findAllTimerCategory = () => httpCommon.get(`${TIMER_CATEGORY}`);

const createTimerCategory = body => httpCommon.post(`${TIMER_CATEGORY}`, body);

const deleteTimerCategory = id => httpCommon.delete(`${TIMER_CATEGORY}/${id}`);
export const timerCategoryService = {
  searchTimerCategory,
  findAllTimerCategory,
  createTimerCategory,
  deleteTimerCategory,
};
