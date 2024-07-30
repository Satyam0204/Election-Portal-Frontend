import App from "../App";
import PrivateRoute from "../Component/PrivateRoute";
import DashboardPage from "../Pages/DashboardPage";
import ElectionPollPage from "../Pages/ElectionPollPage";
import LoginPage from "../Pages/LoginPage";
import ThankYou from "../Pages/ThankYou";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/thankyou",
    element: <ThankYou />,
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
