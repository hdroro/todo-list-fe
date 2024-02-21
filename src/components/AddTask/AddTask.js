/* eslint-disable jsx-a11y/anchor-is-valid */
import { Modal, Button } from "react-bootstrap";
import "./AddTask.scss";
import { DueDate } from "../Icon/Icon";
import { useState } from "react";
import { dateFormat, convertToYearDMY } from "../../utils/dateFormat";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { createNewTask } from "../../services/taskService";

function AddTask(props) {
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

  const handleAddTask = async () => {
    let check = isValidInputs();
    const idUser = localStorage.getItem("id");

    if (check) {
      let serverData = await createNewTask(
        taskName,
        description,
        convertToYearDMY(selectedDate),
        idUser
      );

      if (+serverData.EC === 0) {
        toast.success(serverData.EM);
        props.handleCloseModalAddTask();
        setTaskName("");
        setDescription("");
        setSelectedDate(new Date());
      } else toast.error(serverData.EM);
    }
  };

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
