import * as pages from "../pages";
import DashboardRoute from "./components/dashboard";

const dashboardBasePath = "/home";

const routes = [
  {
    name: "Home",
    path: `${dashboardBasePath}`,
    component: pages.HomePage,
    route: DashboardRoute,
  },
];

export default routes;
