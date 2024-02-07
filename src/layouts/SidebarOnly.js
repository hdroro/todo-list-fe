import Sidebar from "./components/Sidebar";

import React from "react";
import PropTypes from "prop-types";

function SidebarOnly({ children }) {
  return (
    <div className="sidebar-wrapper">
      <div className="d-flex align-items-center">
        <div className="col-lg-3 col-md-3 col-sm-3">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9">{children}</div>
      </div>
    </div>
  );
}

SidebarOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarOnly;
