import "./UpcomingItem.scss";
import {
  CancelIcon,
  CircleIcon,
  EditIcon,
  SaveIcon,
  Trashicon,
} from "../Icon/Icon";
import { useEffect, useState } from "react";
import { convertToYearDMY, dateFormat } from "../../utils/dateFormat";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/slices/deleteTaskSlice";
import {
  clearEditTaskResults,
  editTask,
} from "../../redux/slices/editTaskSlice";
import DatePicker from "react-datepicker";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import { fetchTaskUpcoming } from "../../redux/slices/upComingTask";

function UpcomingItem(props) {
  const [taskName, setTaskName] = useState(props.taskName);
  const [description, setDescription] = useState(props.description);
  const [isEdit, setIsEdit] = useState(false);
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [dueDate, setDueDate] = useState(dateFormat(props.duedate));
  const [selectedDate, setSelectedDate] = useState(props.duedate);

  const dispatch = useDispatch();
  const updateTaskResults = useSelector(
    (state) => state.task_update.editTaskResults
  );
  const isLoading = useSelector((state) => state.task_update.isLoading);
  const isError = useSelector((state) => state.task_update.isError);

  const handleSwitchToEdit = () => {
    setIsEdit(true);
  };
  const handleDelete = () => {
    dispatch(
      deleteTask({
        id: props.id,
      })
    );
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

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
        dispatch(
          fetchTaskUpcoming({
            date: convertToYearDMY(selectedDate),
            idUser: localStorage.getItem("id"),
          })
        );
      } else {
        toast.error(updateTaskResults.EM);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isError]);

  const handleButtonClick = () => {
    setIsShowCalendar(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDueDate(dateFormat(date));
  };

  return (
    <div className={`content-of-date d-flex mt-2 `}>
      {!isEdit && <CircleIcon className="mt-1" />}
      <div className="content-edit-ui">
        <div className={`group-item d-flex justify-content-between`}>
          <div className="d-flex flex-column">
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
            <div
              className={`d-flex align-items-center justify-content-${
                isEdit ? "between" : "end"
              }`}
            >
              {isEdit && (
                <button className="due-date ms-1" onClick={handleButtonClick}>
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
              )}
              {!isEdit && (
                <div>
                  <EditIcon
                    className="edit-action mx-2"
                    onClick={() => handleSwitchToEdit()}
                  />
                  <Trashicon
                    className="edit-action"
                    onClick={() => handleDelete()}
                  />
                </div>
              )}
            </div>
            {isEdit && (
              <div className="footer-edit d-flex gap-1 justify-content-end">
                <button className="btn-cancel" onClick={() => handleCancel()}>
                  <CancelIcon />
                </button>
                <button className="btn-save" onClick={() => handleSave()}>
                  <SaveIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingItem;
