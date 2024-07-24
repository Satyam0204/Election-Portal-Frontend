import App from "../App";
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
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/vote",
    element: <ElectionPollPage />,
  },
];
