import { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import {
  // ChevLeftWeekIcon,
  // ChevRightWeekIcon,
  ChevRonDownIcon,
  PlusIcon,
} from "../Icon/Icon";
import "./Upcoming.scss";
import UpcomingItem from "./UpcomingItem";
import { fetchTaskUpcoming } from "../../redux/slices/upComingTask";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import Loading from "../Loading/Loading";
import { convertToYearDMY } from "../../utils/dateFormat";
import { format } from "date-fns";

function Upcoming() {
  const [isShowModalAddTask, setShowModalAddTask] = useState(false);
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateToAdd, setSelectedDateToAdd] = useState(new Date());
  const [selectedMonthYear, setSelectedMonthYear] = useState(
    format(new Date(), "MMMM yyyy")
  );

  const handleButtonClick = () => {
    setIsShowCalendar(true);
  };
  const handleShowModalAddTask = (date) => {
    setSelectedDateToAdd(date);
    setShowModalAddTask(true);
  };

  const handleCloseModalAddTask = () => {
    setShowModalAddTask(false);
    setSelectedDateToAdd(new Date());
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedMonthYear(format(new Date(convertToYearDMY(date)), "MMMM yyyy"));
  };

  const dispatch = useDispatch();
  const listTasksUpcoming = useSelector(
    (state) => state.task_upcoming.listTasksUpcoming
  );
  const isLoadingUpcoming = useSelector(
    (state) => state.task_upcoming.isLoading
  );
  const isErrorUpcoming = useSelector((state) => state.task_upcoming.isError);

  useEffect(() => {
    dispatch(
      fetchTaskUpcoming({
        date: convertToYearDMY(selectedDate),
        idUser: localStorage.getItem("id"),
      })
    );
  }, [selectedDate, dispatch]);

  return (
    <>
      <div className="container mt-3">
        <div className="header">
          {/* <div className="switch-week-actions d-flex align-items-center justify-content-end gap-1">
            <div className="switch-week-group">
              <button>
                <ChevLeftWeekIcon  />
              </button>
              <button>
                <ChevRightWeekIcon />
              </button>
            </div>
            <button className="btn-today">Today</button>
          </div> */}

          <div className="title-time" onClick={handleButtonClick}>
            <h3>
              {selectedMonthYear} <ChevRonDownIcon />
            </h3>
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
          </div>
        </div>
        {!isLoadingUpcoming && !isErrorUpcoming ? (
          <div className="content-group d-flex mt-3">
            {listTasksUpcoming && listTasksUpcoming?.length ? (
              listTasksUpcoming.map(
                (item, index) =>
                  item !== null && (
                    <div className="content-item" key={index}>
                      <div className="time-group d-flex">
                        <div className="time">{item?.date}</div>
                        <div className="count-task">{item?.tasks?.length}</div>
                      </div>
                      <div className="content-list d-flex flex-column">
                        <div className="content-item">
                          {item?.tasks &&
                            item?.tasks.length > 0 &&
                            item?.tasks.map((t, i) => (
                              <div key={i}>
                                <UpcomingItem
                                  id={t?.id}
                                  taskName={t?.title}
                                  description={t?.description}
                                  duedate={t?.duedate}
                                />
                              </div>
                            ))}
                        </div>

                        <div className="add-task-action">
                          <button className="add-task-btn border-top-0 mt-3">
                            <PlusIcon className="plus-icon" />
                            <span
                              onClick={() =>
                                handleShowModalAddTask(
                                  item?.tasks[0]?.duedate
                                    ? item?.tasks[0]?.duedate
                                    : item?.tasks?.duedate
                                )
                              }
                            >
                              Add task
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )
              )
            ) : (
              <>
                <h6>No upcoming tasks found!</h6>
              </>
            )}
          </div>
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
      <AddTask
        selectedDateToAdd={selectedDateToAdd}
        isShowModalAddTask={isShowModalAddTask}
        handleCloseModalAddTask={handleCloseModalAddTask}
      />
    </>
  );
}

export default Upcoming;
