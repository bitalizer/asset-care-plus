import { httpCommon, ASSET_CATEGORY } from "..";

const searchAssetCategory = queryParams => httpCommon.get(`${ASSET_CATEGORY}?${queryParams}`);
const findAllAssetCategory = () => httpCommon.get(`${ASSET_CATEGORY}`);

const createAssetCategory = body => httpCommon.post(`${ASSET_CATEGORY}`, body);

const deleteAssetCategory = id => httpCommon.delete(`${ASSET_CATEGORY}/${id}`);
export const assetCategoryService = {
  searchAssetCategory,
  findAllAssetCategory,
  createAssetCategory,
  deleteAssetCategory,
};
