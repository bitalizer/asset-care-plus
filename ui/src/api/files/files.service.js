import { httpCommon, FILES_ROUTE } from "..";

const searchFiles = queryParams => httpCommon.get(`${FILES_ROUTE}?${queryParams}`);
const findAllFiles = () => httpCommon.get(`${FILES_ROUTE}`);

const getFileById = id => httpCommon.get(`${FILES_ROUTE}/${id}`);

const createFile = body => httpCommon.post(`${FILES_ROUTE}`, body);

const deleteFile = id => httpCommon.delete(`${FILES_ROUTE}/${id}`);
const updateFile = updatedMeter => {
  const { id, body } = updatedMeter;
  return httpCommon.put(`${FILES_ROUTE}/${id}`, body);
};

export const filesService = {
  searchFiles,
  getFileById,
  createFile,
  deleteFile,
  updateFile,
  findAllFiles,
};
