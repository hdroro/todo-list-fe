/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import {
  AddTaskIcon,
  CalendarCurrentDay,
  CalendarUpcomingDate,
  ToggleSidebar,
} from "../../components/Icon/Icon";
import AddTask from "../../components/AddTask/AddTask";
import { useState } from "react";

function Sidebar(props) {
  const [isShowModalAddTask, setShowModalAddTask] = useState(false);

  const handleShowModalAddTask = () => {
    setShowModalAddTask(true);
  };

  const handleCloseModalAddTask = () => {
    setShowModalAddTask(false);
  };
  return (
    <>
      {
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-container">
          <div className="d-flex justify-content-between align-items-center mb-3 mb-md-0 text-decoration-none name-group">
            <div className="dropdown">
              <a
                className="btn dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/124794082?v=4"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
                <strong>Roro</strong>
              </a>
            </div>

            <button className="toggle-sidebar">
              <ToggleSidebar onClick={() => props.handleToggleSidebar()} />
            </button>
          </div>

          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item mb-1">
              <div
                to="#"
                className="nav-link link-dark"
                onClick={() => handleShowModalAddTask()}
              >
                <AddTaskIcon className="icon-sidebar add-task" />
                <span className="add-task-text">Add task</span>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/app/today" className="nav-link link-dark">
                <CalendarCurrentDay
                  className="icon-sidebar"
                  dateCurren={new Date().getDate()}
                />
                Today
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/app/upcoming" className="nav-link link-dark">
                <CalendarUpcomingDate className="icon-sidebar" />
                Upcoming
              </NavLink>
            </li>
          </ul>
        </div>
      }

      <AddTask
        isShowModalAddTask={isShowModalAddTask}
        handleCloseModalAddTask={handleCloseModalAddTask}
      />
    </>
  );
}

export default Sidebar;
