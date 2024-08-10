import App from "../App";
import PrivateRoute from "../Component/PrivateRoute";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminLogin from "../Pages/AdminLogin";
import DashboardPage from "../Pages/DashboardPage";
import ElectionPollPage from "../Pages/ElectionPollPage";
import ElectionResult from "../Pages/ElectionResult";
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
    path: "/admin/login",
    element: <AdminLogin/>,
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
    path: "/admin/elections",
    element: (
      <PrivateRoute>
        <AdminDashboard />
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
  {
    path: "/admin/elections/result/:id",
    element: (
      <PrivateRoute>
        <ElectionResult />
      </PrivateRoute>
    ),
  },
];
