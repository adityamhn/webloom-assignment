import { lazy } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { useRoutes } from "react-router";
import Layout from "./components/Layout/Layout";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Teams = lazy(() => import("./pages/Teams/Teams"));
const Task = lazy(() => import("./pages/Task"));
const Calender = lazy(() => import("./pages/Calender"));
const Report = lazy(() => import("./pages/Report"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {

  //Routing
  const homeRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/teams", element: <Teams /> },
        { path: "/task", element: <Task /> },
        { path: "/calender", element: <Calender /> },
        { path: "/report", element: <Report /> },
        { path: "/settings", element: <Settings /> },


      ]
    },
  ];

  const homeRouting = useRoutes(homeRoutes);

  return (
    <>
        {homeRouting}
    </>
  );
}

export default App;
