import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState();

  const toggleSidebar = () => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  return { isSidebarOpen, toggleSidebar };
};
