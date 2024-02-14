import "./UpcomingItem.scss";
import { CircleIcon, DueDate } from "../Icon/Icon";
import { useState } from "react";

function UpcomingItem(props) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={`content-of-date d-flex mt-2 `}>
      <CircleIcon className="mt-1" />
      <div className="content-edit-ui">
        <div className={`group-item d-flex justify-content-between`}>
          <div className="d-flex flex-column">
            <input
              className={`input-title-task border-0`}
              type="text"
              placeholder="Task name"
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
              readOnly
            />
            <input
              className={`input-description-task border-0`}
              type="text"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              readOnly
            />
            <button className="due-date">
              <DueDate />8 Feb
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingItem;
