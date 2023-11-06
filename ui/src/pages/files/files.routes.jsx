import { allAuthRoles } from "../utils";

import { CreateFilePage } from "./create-file/CreateFile.page";
import { FileDetailsPage } from "./file-details";

import { FILES_PAGE, CREATE_FILE_PAGE, FilesPage, FILE_DETAILS } from ".";

export const filesPage = [
  {
    collapse: false,
    name: "Files",
    path: FILES_PAGE,
    component: <FilesPage />,
    icon: "ni ni-folder-17 text-primary",
    layout: "/admin",
    key: "Files",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 4,
  },
  {
    collapse: false,
    global: true,
    path: `${CREATE_FILE_PAGE}`,
    component: <CreateFilePage />,
    layout: "/admin",
    name: `${CREATE_FILE_PAGE}`,
    key: `Files/${CREATE_FILE_PAGE}`,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    name: `${FILE_DETAILS}/:id`,
    path: `${FILE_DETAILS}/:id`,
    component: <FileDetailsPage />,
    layout: "/admin",
    key: `Files/${FILE_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
