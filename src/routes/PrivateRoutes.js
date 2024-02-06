import { Route } from "react-router-dom/cjs/react-router-dom.min";

const PrivateRoutes = (props) => {
  return <Route path={props.path} component={props.component} />;
};

export default PrivateRoutes;
