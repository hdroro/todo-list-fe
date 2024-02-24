import { useEffect, useState } from "react";
import { CircleIcon, EditIcon, Trashicon } from "../Icon/Icon";
import { Button } from "react-bootstrap";
import "./TodoItem.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { convertToYearDMY, dateFormat } from "../../utils/dateFormat";
import { useDispatch, useSelector } from "react-redux";
import {
  clearEditTaskResults,
  editTask,
} from "../../redux/slices/editTaskSlice";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import { fetchTaskToday } from "../../redux/slices/taskSlice";
import { fetchTasksOverdue } from "../../redux/slices/taskOverdueSlice";
import {
  clearDeleteTaskResults,
  deleteTask,
} from "../../redux/slices/deleteTaskSlice";

function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const [taskName, setTaskName] = useState(props.taskName);
  const [description, setDescription] = useState(props.description);

  const [selectedDate, setSelectedDate] = useState(props.dueDate);
  const [isShowCalendar, setIsShowCalendar] = useState(false);

  const [dueDate, setDueDate] = useState(dateFormat(props.dueDate));

  const handleButtonClick = () => {
    setIsShowCalendar(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDueDate(dateFormat(date));
  };

  const handleSwitchToEdit = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const dispatch = useDispatch();
  const updateTaskResults = useSelector(
    (state) => state.task_update.editTaskResults
  );
  const isLoading = useSelector((state) => state.task_update.isLoading);
  const isError = useSelector((state) => state.task_update.isError);

  const deleteTaskResults = useSelector(
    (state) => state.task_delete.deleteTaskResults
  );
  const isLoadingDelete = useSelector((state) => state.task_delete.isLoading);
  const isErrorDelete = useSelector((state) => state.task_delete.isError);

  const handleSave = () => {
    dispatch(
      editTask({
        id: props.id,
        title: taskName,
        description,
        duedate: convertToYearDMY(selectedDate),
      })
    );
  };

  useEffect(() => {
    if (isLoading && !isError) return <Loading />;
    if (!isLoading && !isError) {
      if (+updateTaskResults.EC === 0) {
        toast.success(updateTaskResults.EM);
        handleCancel();
        setTaskName("");
        setDescription("");
        setSelectedDate(new Date());
        dispatch(clearEditTaskResults());
        dispatch(fetchTasksOverdue(localStorage.getItem("id")));
        dispatch(fetchTaskToday(localStorage.getItem("id")));
      } else {
        toast.error(updateTaskResults.EM);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isError]);

  const handleDelete = () => {
    dispatch(
      deleteTask({
        id: props.id,
      })
    );
  };

  useEffect(() => {
    if (isLoadingDelete && !isErrorDelete) return <Loading />;
    if (!isLoadingDelete && !isErrorDelete) {
      if (+deleteTaskResults.EC === 0) {
        toast.success(deleteTaskResults.EM);
        dispatch(clearDeleteTaskResults());
        dispatch(fetchTasksOverdue(localStorage.getItem("id")));
        dispatch(fetchTaskToday(localStorage.getItem("id")));
      } else {
        toast.error(deleteTaskResults.EM);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingDelete, isErrorDelete]);

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
            <button className="due-date" onClick={handleButtonClick}>
              <span>{dueDate}</span>
              {isShowCalendar && (
                <div className="datepicker">
                  <DatePicker
                    className="custom-datepicker"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    popperPlacement="top-start"
                    minDate={new Date()}
                  />
                </div>
              )}
            </button>
          </div>
          {!isEdit && (
            <>
              <EditIcon
                className="edit-action mx-2"
                onClick={() => handleSwitchToEdit()}
              />
              <Trashicon
                className="edit-action"
                onClick={() => handleDelete()}
              />
            </>
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
