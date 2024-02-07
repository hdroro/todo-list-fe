import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import {
  AccountIcon,
  AddTaskIcon,
  CalendarCurrentDay,
  CalendarUpcomingDate,
  ToggleSidebar,
} from "../../components/Icon/Icon";

function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-container">
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-0 text-decoration-none name-group">
        <span className="d-flex align-items-center">
          <AccountIcon />
          <span className="fs-4 username-account">Roro</span>
        </span>

        <button className="toggle-sidebar">
          <ToggleSidebar />
        </button>
      </div>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/app/add-task" className="nav-link link-dark">
            <AddTaskIcon className="icon-sidebar add-task" />
            <span className="add-task-text">Add task</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/today" className="nav-link link-dark">
            <CalendarCurrentDay className="icon-sidebar" />
            Today
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/upcoming" className="nav-link link-dark">
            <CalendarUpcomingDate className="icon-sidebar" />
            Upcoming
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
