import { CheckedIcon } from "../Icon/Icon";
import "./AppToday.scss";

function AppToday() {
  return (
    <div className="container">
      <div className="today-content">
        <h3>Today</h3>
        <div className="count-tasks">
          <CheckedIcon />
          <span className="num-of-tasks">2 </span>
          tasks
        </div>
        <div className="form-group"></div>
      </div>
    </div>
  );
}

export default AppToday;
