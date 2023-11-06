import { Role } from "variables/app.consts";

const admin = {
  fullName: "Michael Smith",
  username: "michael.smith",
  email: "michael.smith@company.com",
  jwtToken: "asdlasdloldfiadjadsfhueiy2839r7489fsdhfaiuehf328",
  countryCode3: "BRA",
  authRole: Role.Admin,
  role: "Admin",
  imageUrl: "https://i.pravatar.cc/300",
};

const regionalManager = {
  fullName: " Silvester Leanne",
  username: "silvester.leanne",
  email: "silvester.leanne@company.com",
  jwtToken: "asdlasdloldfiadjadsfhueiy2839r7489fsdhfaiuehf328",
  countryCode3: "GER",
  authRole: Role.RegionalManager,
  role: "RegionalManager",
  imageUrl: "https://i.pravatar.cc/300",
};

const countryManager = {
  fullName: "Perry Annabelle",
  username: "perry.annabelle",
  email: "perry.annabelle@company.com",
  jwtToken: "rfwpio425ipogfskpflk3p32q09orpfafdefkaöldfkaodffe",
  countryCode3: "DEU",
  authRole: Role.CountryManager,
  role: "CountryManager",
  imageUrl: "https://i.pravatar.cc/300",
};

const operationManager = {
  fullName: "Jodene Dorinda",
  username: "jodene.dorinda",
  email: "jodene.dorinda@company.com",
  jwtToken: "45jo54juo3iurfeoiru2o3u42o3ijdklmnlkjr2o3irujoi23u4o2ij42oi",
  countryCode3: "EST",
  authRole: Role.OperationManager,
  role: "OperationManager",
  imageUrl: "https://i.pravatar.cc/300",
};

const employee = {
  fullName: "Fraser Rene",
  username: "fraser.rene",
  email: "fraser.rene@company.com",
  jwtToken: "dasdasdtyaudtyquwghjasfy3242t3jgr4vr23vtv32yt32v2gsya65s6",
  countryCode3: "IND",
  authRole: Role.Employee,
  role: "Employee",
  imageUrl: "https://i.pravatar.cc/300",
};

const anonymous = {
  fullName: "Anonymous",
  username: "Anonymous",
  email: "Anonymous",
  jwtToken: "Anonymous",
  countryCode3: "",
  authRole: Role.Anonymous,
  role: "Anonymous",
};

export const usersData = {
  admin,
  regionalManager,
  countryManager,
  operationManager,
  employee,
  anonymous,
};

export const arrayOfUsersData = Object.values(usersData);
