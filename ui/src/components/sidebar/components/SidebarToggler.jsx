import classnames from "classnames";
import { HiMenu } from "react-icons/hi";

import { useSidebar } from "hooks";

export const SidebarToggler = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div
      className={classnames(
        "d-flex",
        !isSidebarOpen ? "justify-content-end mr-2" : "justify-content-center",
        {
          active: isSidebarOpen,
        }
      )}
      role="button"
      tabIndex={0}
      // @docs https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
      onKeyDown={() => toggleSidebar()}
      onClick={() => toggleSidebar()}
    >
      <HiMenu size={25} color="#003369" />
    </div>
  );
};
