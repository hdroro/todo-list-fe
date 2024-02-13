import { useState } from "react";
import {
  CheckedIcon,
  ChevRonDownIcon,
  CircleIcon,
  DueDate,
  EditIcon,
} from "../Icon/Icon";
import "./AppToday.scss";

function AppToday() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleSwitchToEdit = () => {
    setIsEdit(true);
  };
  return (
    <div className="container">
      <div className="today-content">
        <h3>Today</h3>
        <div className="count-tasks d-flex display align-items-center">
          <CheckedIcon />
          <span className="num-of-tasks">2 </span>
          tasks
        </div>
        <div className="form-group over-due">
          <h6>
            <ChevRonDownIcon />
            <span>Overdue</span>
          </h6>
          <div className="content-over-due d-flex mt-2">
            <CircleIcon className="mt-1" />
            <div className="group-item">
              <input
                className={`input-title-task border-0`}
                type="text"
                placeholder="Task name"
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
                readOnly={!isEdit}
              />
              <input
                className={`input-description-task border-0`}
                type="text"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                readOnly={!isEdit}
              />
              <button className="due-date">
                <DueDate />8 Feb
              </button>
            </div>
            <EditIcon
              className="edit-action"
              onClick={() => handleSwitchToEdit()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppToday;
