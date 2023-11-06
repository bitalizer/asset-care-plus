import { httpCommon, TEAMS_ROUTE } from "..";

const searchTeams = queryParams => httpCommon.get(`${TEAMS_ROUTE}?${queryParams}`);
const findAllTeams = () => httpCommon.get(`${TEAMS_ROUTE}`);

const getTeamById = id => httpCommon.get(`${TEAMS_ROUTE}/${id}`);

const createTeam = body => httpCommon.post(`${TEAMS_ROUTE}`, body);

const deleteTeam = id => httpCommon.delete(`${TEAMS_ROUTE}/${id}`);
const updateTeam = updatedMeter => {
  const { id, body } = updatedMeter;
  return httpCommon.put(`${TEAMS_ROUTE}/${id}`, body);
};

export const teamsService = {
  searchTeams,
  getTeamById,
  createTeam,
  deleteTeam,
  updateTeam,
  findAllTeams,
};
