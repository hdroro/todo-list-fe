import { useEffect, useState } from "react";
import {
  CheckedIcon,
  ChevRonDownIcon,
  ChevRonRightIcon,
  PlusIcon,
} from "../Icon/Icon";
import "./AppToday.scss";
import TodoItem from "./TodoItem";
import AddTask from "../AddTask/AddTask";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskToday } from "../../redux/slices/taskSlice";
import { fetchTasksOverdue } from "../../redux/slices/taskOverdueSlice";
import Loading from "../Loading/Loading";
import { dateFormat, getDayOfWeek } from "../../utils/dateFormat";

function AppToday() {
  const [isShowListOverdue, setIsShowListOverdue] = useState(true);

  const [isShowModalAddTask, setShowModalAddTask] = useState(false);

  const dispatch = useDispatch();
  const listTasksToday = useSelector((state) => state.task.listTasksToday);
  const isLoadingToday = useSelector((state) => state.task.isLoading);
  // const isErrorToday = useSelector((state) => state.task.isError);

  const listTasksOverdue = useSelector(
    (state) => state.task_overdue.listTasksOverdue
  );
  const isLoadingOverdue = useSelector((state) => state.task_overdue.isLoading);
  // const isErrorOverdue = useSelector((state) => state.task_overdue.isError);

  useEffect(() => {
    dispatch(fetchTaskToday(localStorage.getItem("id")));
    dispatch(fetchTasksOverdue(localStorage.getItem("id")));
  }, [dispatch]);

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
      {!isLoadingToday && !isLoadingOverdue ? (
        <>
          <div className="container">
            <div className="today-content">
              <h3>Today</h3>
              <div className="count-tasks d-flex display align-items-center">
                <CheckedIcon className="checked-icon" />
                <span className="num-of-tasks">
                  {listTasksToday?.length + listTasksOverdue?.length || "0"}
                </span>
                {listTasksToday?.length + listTasksOverdue?.length > 1
                  ? " tasks"
                  : " task"}
              </div>
              <div className="form-group over-due">
                <h6 className="gap-1">
                  {isShowListOverdue ? (
                    <ChevRonDownIcon onClick={() => handleToggleExpand()} />
                  ) : (
                    <ChevRonRightIcon onClick={() => handleToggleExpand()} />
                  )}
                  <span>Overdue</span>
                </h6>
                {isShowListOverdue &&
                listTasksOverdue &&
                listTasksOverdue.length ? (
                  listTasksOverdue.map((item, index) => (
                    <div key={index}>
                      <TodoItem
                        id={item?.id}
                        taskName={item?.title}
                        description={item?.description}
                        dueDate={item?.duedate}
                      />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>

              <div className="form-group">
                <h6>
                  <span>
                    {dateFormat(new Date())} ‧ Today ‧{" "}
                    {getDayOfWeek(new Date())}
                  </span>
                </h6>
                {listTasksToday && listTasksToday.length ? (
                  listTasksToday.map((item, index) => (
                    <div key={index}>
                      <TodoItem
                        id={item?.id}
                        taskName={item?.title}
                        description={item?.description}
                        dueDate={item?.duedate}
                      />
                    </div>
                  ))
                ) : (
                  <></>
                )}
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
        </>
      ) : (
        <Loading />
      )}
      <AddTask
        isShowModalAddTask={isShowModalAddTask}
        handleCloseModalAddTask={handleCloseModalAddTask}
      />
    </>
  );
}

export default AppToday;
