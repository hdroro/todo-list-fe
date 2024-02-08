/* eslint-disable jsx-a11y/anchor-is-valid */
import { Modal, Button } from "react-bootstrap";
import "./AddTask.scss";
import { DueDate } from "../Icon/Icon";
import { useState } from "react";

function AddTask(props) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
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
                    className={`form-control input-title-task border-0`}
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
                  <button className="due-date">
                    <DueDate />
                    Due date
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleCloseModalAddTask}>
              Cancel
            </Button>
            <Button className="btn btn-danger">Add task</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}

export default AddTask;
