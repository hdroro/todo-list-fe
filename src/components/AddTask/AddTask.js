/* eslint-disable jsx-a11y/anchor-is-valid */
import { Modal, Button } from "react-bootstrap";
import "./AddTask.scss";
import { DueDate } from "../Icon/Icon";
import { useEffect, useState } from "react";
import { convertToYearDMY, dateFormat } from "../../utils/dateFormat";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createNewTask } from "../../redux/slices/addTaskSlice";
import Loading from "../Loading/Loading";
import { fetchTaskToday } from "../../redux/slices/taskSlice";
import { fetchTaskUpcoming } from "../../redux/slices/upComingTask";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function AddTask(props) {
  let location = useLocation();
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isShowCalendar, setIsShowCalendar] = useState(false);

  const [dueDate, setDueDate] = useState(dateFormat(new Date()));

  const defaultValidInput = {
    isValidTaskName: true,
  };

  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  const handleButtonClick = () => {
    setIsShowCalendar(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDueDate(dateFormat(date));
  };

  useEffect(() => {
    if (!props.isShowModalAddTask) {
      setTaskName("");
      setDescription("");
      setSelectedDate(new Date());
      setDueDate(dateFormat(new Date()));
    }

    if (props.selectedDateToAdd) {
      setSelectedDate(props.selectedDateToAdd);
      setDueDate(dateFormat(props.selectedDateToAdd));
    }
  }, [props.isShowModalAddTask, props.selectedDateToAdd]);

  const dispatch = useDispatch();
  const createTaskResults = useSelector(
    (state) => state.task_create.createTaskResults
  );
  const isLoading = useSelector((state) => state.task_create.isLoading);
  const isError = useSelector((state) => state.task_create.isError);

  const handleAddTask = () => {
    let check = isValidInputs();
    const idUser = localStorage.getItem("id");

    if (check) {
      dispatch(
        createNewTask({
          title: taskName,
          description,
          duedate: convertToYearDMY(selectedDate),
          idUser,
        })
      );
    }
  };

  useEffect(() => {
    if (isLoading && !isError) return <Loading />;
    if (!isLoading && !isError) {
      if (+createTaskResults.EC === 0) {
        toast.success(createTaskResults.EM);
        props.handleCloseModalAddTask();
        setTaskName("");
        setDescription("");
        setSelectedDate(new Date());
        console.log("location.pathname", location.pathname);
        if (location.pathname === "/app/today") {
          dispatch(fetchTaskToday(localStorage.getItem("id")));
        } else if (location.pathname === "/app/upcoming") {
          dispatch(
            fetchTaskUpcoming({
              date: convertToYearDMY(selectedDate),
              idUser: localStorage.getItem("id"),
            })
          );
        }
      } else {
        toast.error(createTaskResults.EM);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createTaskResults, isLoading, isError]);

  const isValidInputs = () => {
    setObjCheckInput(defaultValidInput);
    if (!taskName) {
      toast.error("Task name is required !");
      setObjCheckInput({ ...defaultValidInput, isValidTaskName: false });
      return false;
    }
    return true;
  };

  return (
    <>
      <Modal
        size="md"
        show={props.isShowModalAddTask}
        onHide={props.handleCloseModalAddTask}
        className="modal-user"
      >
        <Modal.Dialog style={{ margin: 0, maxWidth: "100%" }}>
          <Modal.Body>
            <div className="content-body">
              <div className="row">
                <div className="col-12 form-group">
                  <input
                    className={`form-control ${
                      objCheckInput.isValidTaskName ? "" : "is-invalid"
                    } input-title-task border-0`}
                    type="text"
                    placeholder="Task name"
                    value={taskName}
                    onChange={(event) => setTaskName(event.target.value)}
                  />
                </div>
                <div className="col-12 form-group">
                  <input
                    className={`form-control input-description-task border-0`}
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
              </div>

              <div className="col-12 form-group">
                <div className="btn-group">
                  <button className="due-date" onClick={handleButtonClick}>
                    <DueDate />
                    <span style={{ marginLeft: "5px" }}>{dueDate}</span>
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
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleCloseModalAddTask}>
              Cancel
            </Button>
            <Button className="btn btn-danger" onClick={() => handleAddTask()}>
              Add task
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}

export default AddTask;
