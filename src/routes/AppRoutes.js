import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="*">404 NOT FOUND</Route> */}
      </Switch>
    </>
  );
};

export default AppRoutes;
