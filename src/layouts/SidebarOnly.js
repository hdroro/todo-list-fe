import Sidebar from "./components/Sidebar";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { ToggleSidebar } from "../components/Icon/Icon";

function SidebarOnly({ children }) {
  const [isShowToggleSidebarHidden, setIsShowToggleSidebarHidden] =
    useState(false);
  const [isShowingSidebar, setIsShowingSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setIsShowingSidebar(!isShowingSidebar);
    setIsShowToggleSidebarHidden(!isShowToggleSidebarHidden);
  };

  return (
    <div className="sidebar-wrapper">
      <div className="d-flex">
        {isShowToggleSidebarHidden && (
          <button className="toggle-sidebar hidden">
            <ToggleSidebar onClick={() => handleToggleSidebar()} />
          </button>
        )}
        {isShowingSidebar && (
          <div className="col-lg-3 col-md-3 col-sm-3">
            <Sidebar handleToggleSidebar={handleToggleSidebar} />
          </div>
        )}
        <div className="col-lg-9 col-md-9 col-sm-9">{children}</div>
      </div>
    </div>
  );
}

SidebarOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarOnly;
