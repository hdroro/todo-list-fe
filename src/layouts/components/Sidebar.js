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
import { useEffect, useState } from "react";
import { getUserAccount, logoutUser } from "../../services/userService";
import { useSelector } from "react-redux";

function Sidebar(props) {
  const [isShowModalAddTask, setShowModalAddTask] = useState(false);
  const [inforUser, setInforUser] = useState({});

  const fetchUserInfo = async () => {
    try {
      const response = await getUserAccount();
      if (response && response.EC === 0) {
        let email = response.DT.email;
        let username = response.DT.username;
        let token = response.DT.access_token;
        //success
        let data = {
          isAuthenticated: true,
          token,
          account: {
            email,
            username,
          },
          isLoading: false,
        };

        setInforUser(data);
      } else {
        console.error("Failed to fetch user account data");
      }
    } catch (error) {
      console.error("Error fetching user account data:", error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleShowModalAddTask = () => {
    setShowModalAddTask(true);
  };

  const handleCloseModalAddTask = () => {
    setShowModalAddTask(false);
  };

  const listTasksToday = useSelector((state) => state.task.listTasksToday);
  const listTasksOverdue = useSelector(
    (state) => state.task_overdue.listTasksOverdue
  );

  const handleLogout = async () => {
    await logoutUser();

    localStorage.removeItem("id");
    localStorage.removeItem("jwt");
  };
  return (
    <>
      {
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-container">
          <div className="d-flex justify-content-between align-items-center mb-3 mb-md-0 text-decoration-none name-group">
            <div className="dropdown">
              <button
                className="dropdown-toggle "
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/124794082?v=4"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                {inforUser && inforUser.account && (
                  <strong>{inforUser.account.username}</strong>
                )}
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Change password
                </a>
                <a className="dropdown-item" href="#">
                  My profile
                </a>
                <div class="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  href="/"
                  onClick={() => handleLogout()}
                >
                  Log out
                </a>
              </div>
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
                <span className="count-tasks">
                  {listTasksToday?.length + listTasksOverdue?.length || "0"}
                </span>
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
