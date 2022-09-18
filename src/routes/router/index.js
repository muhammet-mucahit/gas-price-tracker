import { Switch, Redirect } from "react-router-dom";

import { NotFoundPage } from "pages";
import DashboardRoute from "../components/dashboard";
import routes from "routes";

function Router() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      {routes.map((route) => (
        <route.route exact path={route.path} component={route.component} />
      ))}
      <DashboardRoute component={NotFoundPage} />
    </Switch>
  );
}

export default Router;
