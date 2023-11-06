import { combineReducers, configureStore } from "@reduxjs/toolkit";

import analyticsSlice from "../reducers/analyticsSlice";
import assetCategorySlice from "../reducers/assetCategorySlice";
import assetsSlice from "../reducers/assetsSlice";
import customerSlice from "../reducers/customerSlice";
import emplyeeSlice from "../reducers/emplyeeSlice";
import filesSlice from "../reducers/filesSlice";
import inventorySlice from "../reducers/inventroySlice";
import locationSlice from "../reducers/locationSlice";
import maintenanceSlice from "../reducers/maintenanceSlice";
import meterCategorySlice from "../reducers/meterCategorySlice";
import metersSlice from "../reducers/metersSlice";
import peopleSlice from "../reducers/peopleSlice";
import purchaseOrdersCategorySlice from "../reducers/purchaseOrdersCategorySlice";
import purchaseOrderSlice from "../reducers/purchaseOrderSlice";
import requestSlice from "../reducers/requestSlice";
import teamsSlice from "../reducers/teamsSlice";
import timerCategorySlice from "../reducers/timerCategorySlice";
import vendorsSlice from "../reducers/vendorsSlice";
import workOrdersCategorySlice from "../reducers/workOrdersCategorySlice";
import workOrderSlice from "../reducers/workOrderSlice";

const rootReducer = combineReducers({
  vendors: vendorsSlice,
  customers: customerSlice,
  workOrders: workOrderSlice,
  maintenance: maintenanceSlice,
  request: requestSlice,
  locations: locationSlice,
  assets: assetsSlice,
  inventory: inventorySlice,
  purchaseOrder: purchaseOrderSlice,
  meters: metersSlice,
  people: peopleSlice,
  teams: teamsSlice,
  workOrdersCategory: workOrdersCategorySlice,
  assetCategory: assetCategorySlice,
  metersCategory: meterCategorySlice,
  timerCategory: timerCategorySlice,
  purchaseOrdersCategory: purchaseOrdersCategorySlice,
  files: filesSlice,
  employees: emplyeeSlice,
  analytics: analyticsSlice,
});
export const store = configureStore({
  reducer: rootReducer,
});
