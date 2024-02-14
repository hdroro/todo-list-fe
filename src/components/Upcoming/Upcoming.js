import { useState } from "react";
import AddTask from "../AddTask/AddTask";
import { ChevLeftWeekIcon, ChevRightWeekIcon, PlusIcon } from "../Icon/Icon";
import "./Upcoming.scss";
import UpcomingItem from "./UpcomingItem";

function Upcoming() {
  const [isShowModalAddTask, setShowModalAddTask] = useState(false);

  const handleShowModalAddTask = () => {
    setShowModalAddTask(true);
  };

  const handleCloseModalAddTask = () => {
    setShowModalAddTask(false);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="header">
          <div className="switch-week-actions d-flex align-items-center justify-content-end gap-1">
            <div className="switch-week-group">
              <button>
                <ChevLeftWeekIcon />
              </button>
              <button>
                <ChevRightWeekIcon />
              </button>
            </div>
            <button className="btn-today">Today</button>
          </div>

          <div className="title-time">
            <h3>February 2024</h3>
          </div>
        </div>
        <div className="content-group d-flex mt-3">
          <div className="content-item">
            <div className="time-group d-flex">
              <div className="time">14 Feb ‧ Today</div>
              <div className="count-task">1</div>
            </div>
            <div className="content-list d-flex flex-column">
              <div className="content-item">
                <UpcomingItem />
              </div>
              <div className="add-task-action">
                <button className="add-task-btn">
                  <PlusIcon className="plus-icon" />
                  <span onClick={() => handleShowModalAddTask()}>Add task</span>
                </button>
              </div>
            </div>
          </div>
          <div className="content-item">
            <div className="time-group d-flex">
              <div className="time">14 Feb ‧ Today</div>
              <div className="count-task">1</div>
            </div>
            <div className="content-list d-flex flex-column">
              <div className="content-item">
                <UpcomingItem />
              </div>
              <div className="add-task-action">
                <button className="add-task-btn">
                  <PlusIcon className="plus-icon" />
                  <span onClick={() => handleShowModalAddTask()}>Add task</span>
                </button>
              </div>
            </div>
          </div>
          <div className="content-item">
            <div className="time-group d-flex">
              <div className="time">14 Feb ‧ Today</div>
              <div className="count-task">1</div>
            </div>
            <div className="content-list d-flex flex-column">
              <div className="content-item">
                <UpcomingItem />
              </div>
              <div className="add-task-action">
                <button className="add-task-btn">
                  <PlusIcon className="plus-icon" />
                  <span onClick={() => handleShowModalAddTask()}>Add task</span>
                </button>
              </div>
            </div>
          </div>

          <div className="content-item">
            <div className="time-group d-flex">
              <div className="time">14 Feb ‧ Today</div>
              <div className="count-task">1</div>
            </div>
            <div className="content-list d-flex flex-column">
              <div className="content-item">
                <UpcomingItem />
              </div>
              <div className="add-task-action">
                <button className="add-task-btn">
                  <PlusIcon className="plus-icon" />
                  <span onClick={() => handleShowModalAddTask()}>Add task</span>
                </button>
              </div>
            </div>
          </div>

          <div className="content-item">
            <div className="time-group d-flex">
              <div className="time">14 Feb ‧ Today</div>
              <div className="count-task">1</div>
            </div>
            <div className="content-list d-flex flex-column">
              <div className="content-item">
                <UpcomingItem />
              </div>
              <div className="add-task-action">
                <button className="add-task-btn">
                  <PlusIcon className="plus-icon" />
                  <span onClick={() => handleShowModalAddTask()}>Add task</span>
                </button>
              </div>
            </div>
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

export default Upcoming;
