import { useState } from "react";
import { CircleIcon, DueDate, EditIcon } from "../Icon/Icon";
import { Button } from "react-bootstrap";
import "./TodoItem.scss";

function TodoItem() {
  const [isEdit, setIsEdit] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleSwitchToEdit = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleSave = () => {
    console.log("taskName", taskName, "description", description);
  };
  return (
    <div className={`content-over-due d-flex mt-2 `}>
      {!isEdit && <CircleIcon className="mt-1" />}
      <div className={`w-100 ${isEdit ? "content-edit-ui" : ""}`}>
        <div
          className={`group-item d-flex justify-content-between ${
            isEdit ? "line" : ""
          }`}
        >
          <div className="d-flex flex-column w-100">
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
          {!isEdit && (
            <EditIcon
              className="edit-action"
              onClick={() => handleSwitchToEdit()}
            />
          )}
        </div>
        {isEdit && (
          <div className="footer-edit">
            <Button variant="secondary" onClick={() => handleCancel()}>
              Cancel
            </Button>
            <Button className="btn btn-danger" onClick={() => handleSave()}>
              Save
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
