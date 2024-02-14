import { useState } from "react";
import {
  CheckedIcon,
  ChevRonDownIcon,
  ChevRonRightIcon,
  PlusIcon,
} from "../Icon/Icon";
import "./AppToday.scss";
import TodoItem from "./TodoItem";
import AddTask from "../AddTask/AddTask";

function AppToday() {
  const [isShowListOverdue, setIsShowListOverdue] = useState(true);

  const [isShowModalAddTask, setShowModalAddTask] = useState(false);

  const handleShowModalAddTask = () => {
    setShowModalAddTask(true);
  };

  const handleCloseModalAddTask = () => {
    setShowModalAddTask(false);
  };

  const handleToggleExpand = () => {
    setIsShowListOverdue(!isShowListOverdue);
  };
  return (
    <>
      <div className="container">
        <div className="today-content">
          <h3>Today</h3>
          <div className="count-tasks d-flex display align-items-center">
            <CheckedIcon className="checked-icon" />
            <span className="num-of-tasks">2 </span>
            tasks
          </div>
          <div className="form-group over-due">
            <h6>
              {isShowListOverdue ? (
                <ChevRonDownIcon onClick={() => handleToggleExpand()} />
              ) : (
                <ChevRonRightIcon onClick={() => handleToggleExpand()} />
              )}
              <span>Overdue</span>
            </h6>
            {isShowListOverdue && <TodoItem />}
          </div>

          <div className="form-group">
            <h6>
              <span>14 Feb ‧ Today ‧ Wednesday</span>
            </h6>
            <TodoItem />
            <button
              className="add-task-btn"
              onClick={() => handleShowModalAddTask()}
            >
              <PlusIcon className="plus-icon" />
              <span> Add task</span>
            </button>
          </div>
        </div>
      </div>
      <AddTask
        isShowModalAddTask={isShowModalAddTask}
        handleCloseModalAddTask={handleCloseModalAddTask}
      />
    </>
  );
}

export default AppToday;
