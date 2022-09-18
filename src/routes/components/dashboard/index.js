import { Route } from "react-router-dom/cjs/react-router-dom.min";

import DashboardLayout from "layouts/dashboard";

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      )}
    />
  );
};

export default DashboardRoute;
