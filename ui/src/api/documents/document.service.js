import { httpCommon, DOCUMENT_ROUTE } from "..";

const searchDocuments = queryParams => httpCommon.get(`${DOCUMENT_ROUTE}?${queryParams}`);

const getDocumentById = id => httpCommon.get(`${DOCUMENT_ROUTE}/${id}`);

const createDocument = body => httpCommon.post(`${DOCUMENT_ROUTE}`, body);

const deleteDocument = id => httpCommon.delete(`${DOCUMENT_ROUTE}/${id}`);

export const documentService = {
  searchDocuments,
  getDocumentById,
  createDocument,
  deleteDocument,
};
