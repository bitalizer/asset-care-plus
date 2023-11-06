import { httpCommon, PEOPLE_ROUTE } from "..";

const searchPeople = queryParams => httpCommon.get(`${PEOPLE_ROUTE}?${queryParams}`);
const findAllPeople = () => httpCommon.get(`${PEOPLE_ROUTE}`);

const getPersonById = id => httpCommon.get(`${PEOPLE_ROUTE}/${id}`);

const createPerson = body => httpCommon.post(`${PEOPLE_ROUTE}`, body);

const deletePerson = id => httpCommon.delete(`${PEOPLE_ROUTE}/${id}`);
const updatePerson = updatedPerson => {
  const { id, body } = updatedPerson;
  return httpCommon.put(`${PEOPLE_ROUTE}/${id}`, body);
};

export const peopleService = {
  searchPeople,
  getPersonById,
  createPerson,
  deletePerson,
  updatePerson,
  findAllPeople,
};
