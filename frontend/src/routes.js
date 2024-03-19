
import Dashboard from "layouts/StudentDashboard";
import Tables from "layouts/studentTable";
import SignIn from "layouts/authentication/sign-in";
// @mui icons
import Icon from "@mui/material/Icon";
import StudentDashboard from "layouts/StudentDashboard";
import StaffDashboard from "layouts/staffDashboard";
import StaffTable from "layouts/staffTable";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <StudentDashboard />,
    role: "student",
  },
  {
    type: "collapse",
    name: "Bonafide",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/studentTable",
    component: <Tables />,
    role: "student",
  },
  {
    type: "collapse",
    name: "Staff Dashboard",
    key: "sign-up",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/staffDashboard",
    component: <StaffDashboard />,
    role: "staff",
  },
  {
    type: "collapse",
    name: "Bonafide Requests",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/staffTable",
    component: <StaffTable />,
    role: "staff",
  },
  {
    type: "collapse",
    name: "Sign In", // Common for all users
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,

  },
];

export default routes;

