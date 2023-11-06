const dueDateData = require("./analytics/dueDateData");
const assetsData = require("./assets");
const categories = require("./categories");
const customersData = require("./customers");
const documentsData = require("./documents");
const employeesData = require("./employees");
const filesData = require("./files");
const groupsData = require("./groups");
const inventoriesData = require("./inventories");
const locationsData = require("./locations");
const maintenanceData = require("./maintenance");
const metersData = require("./meters");
const peopleData = require("./people");
const purchaseOrdersData = require("./purchase-orders");
const requestData = require("./requests");
const vendorsData = require("./vendors");
const workOrdersData = require("./workOrders");

module.exports = () => ({
  employee: employeesData,
  document: documentsData,
  vendor: vendorsData,
  customer: customersData,
  workOrder: workOrdersData,
  maintenance: maintenanceData,
  request: requestData,
  location: locationsData,
  assets: assetsData,
  inventory: inventoriesData,
  purchaseOrder: purchaseOrdersData,
  meters: metersData,
  people: peopleData,
  groups: groupsData,
  workOrdersCategory: categories.workOrdersCategoriesData,
  assetCategory: categories.assetCategoriesData,
  purchaseOrdersCategory: categories.purchaseOrdersCategoriesData,
  meterCategory: categories.meterCategoriesData,
  timerCategory: categories.timerCategoriesData,
  files: filesData,
  analytics: dueDateData,
});
