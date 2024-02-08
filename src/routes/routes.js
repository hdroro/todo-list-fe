//Layouts
import config from "../config/routes";
import SidebarOnly from "../layouts/SidebarOnly";

//Pages
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AppToday from "../components/AppToday/AppToday";
import Home from "../components/Home/Home";
import DefaultLayout from "../layouts/DefaultLayout";
import Upcoming from "../components/Upcoming/Upcoming";

//public routes
const publicRoutes = [
  { path: config.home, component: Home, layout: DefaultLayout },
  { path: config.login, component: Login, layout: DefaultLayout },
  { path: config.register, component: Register, layout: DefaultLayout },
  { path: config.apptoday, component: AppToday, layout: SidebarOnly },
  { path: config.appupcoming, component: Upcoming, layout: SidebarOnly },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
