import { httpCommon, ASSETS_ROUTE } from "..";

const searchAssets = queryParams => httpCommon.get(`${ASSETS_ROUTE}?${queryParams}`);
const findAllAssets = () => httpCommon.get(`${ASSETS_ROUTE}`);

const getAssetById = id => httpCommon.get(`${ASSETS_ROUTE}/${id}`);

const createAsset = body => httpCommon.post(`${ASSETS_ROUTE}`, body);

const deleteAsset = id => httpCommon.delete(`${ASSETS_ROUTE}/${id}`);
const updateAsset = updatedAsset => {
  const { id, body } = updatedAsset;
  return httpCommon.put(`${ASSETS_ROUTE}/${id}`, body);
};

export const assetService = {
  searchAssets,
  getAssetById,
  createAsset,
  deleteAsset,
  updateAsset,
  findAllAssets,
};
