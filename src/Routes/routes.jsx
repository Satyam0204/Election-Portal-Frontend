import App from "../App";
import PrivateRoute from "../Component/PrivateRoute";
import DashboardPage from "../Pages/DashboardPage";
import ElectionPollPage from "../Pages/ElectionPollPage";
import LoginPage from "../Pages/LoginPage";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard/vote/:id",
    element: (
      <PrivateRoute>
        <ElectionPollPage />
      </PrivateRoute>
    ),
  },
];
