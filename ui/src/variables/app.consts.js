export const CREATE_ENTITY_ID = -1; //on create entity id will be created on backend and therefore is missing here
export const GENERIC_ERROR_CODE = -1024;
export const NO_FILTER = -1024;

export const SELECT_ALL = { value: `${NO_FILTER}`, label: "ALL" };
export const SELECT_ALL_IDS = ids => {
  return { value: `${ids}`, label: "ALL" };
};
export const DATE_FILTER_FORMAT = "DD/MM/YYYY";

export const defaultDocumentsTags = [
  { value: "Collaboration", label: "Collaboration" },
  { value: "Reflection", label: "Reflection" },
  { value: "Learning", label: "Learning" },
  { value: "ServiceActions", label: "Service Actions" },
  { value: "SocialConnectedness", label: "Social Connectedness" },
  { value: "Huddle", label: "Huddle" },
];

export const documentRatings = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

export const NO_REPORT_CACHED = { NONE: 0 };
export const REPORT_KEY_ACTIVE_MEMBERS = "ActiveMembers";
export const REPORT_KEY_NEW_MEMBERS = "NewMembers";
export const REPORT_KEY_SELF_RESIGNED_MEMBERS = "SelfResignedMembers";
export const REPORT_KEY_AUTO_OFFBOARDED_MEMBERS = "AutoOffboardedMembers";
export const REPORT_KEY_CURRENT_MAP = "REPORT_KEY_CURRENT_MAP";

export const ThemeColors = {
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923",
  },
  theme: {
    default: "#172b4d",
    primary: "#003369",
    secondary: "#f4f5f7",
    info: "#0099DA",
    success: "#08C792",
    danger: "#ED2939",
    warning: "#fb6340",
    blue: "#003369",
    indigo: "#5603ad",
    purple: "#8965e0",
    pink: "#f3a4b5",
    red: "#ED2939",
    orange: "#fb6340",
    yellow: "#ffd600",
    green: "#08C792",
    teal: "#0099DA",
    cyan: "#2bffc6",
    neutral1: "#F6F5F0",
    neutral2: "#C5C6BF",
    neutral3: "#929288",
    neutral4: "#62635B",
    neutral5: "#373832",
  },
  black: "#12263F",
  white: "#FFFFFF",
  transparent: "transparent",
};

export const mode = "light";
export const fonts = {
  base: "Open Sans",
};

export const Role = {
  Admin: 6,
  RegionalManager: 5,
  CountryManager: 4,
  OperationManager: 3,
  Employee: 2,
  Anonymous: 1,
};
Object.freeze(Role);

export const Permission = {
  Employee_read: 0,
  Employee_country_all: 1,
  Employee_write: 2,
  Document_read: 3,
  Document_write: 4,
  Group_read: 5,
  Group_write: 6,
  Group_country_all: 7,
  Group_user_all: 8,
  Email_write: 9,
  Email_country_all: 10,
  Dashboard_worldview_read: 11,
  Dashboard_statistics_read: 12,
  Dashboard_statistics_country_all: 13,
};
Object.freeze(Permission);
