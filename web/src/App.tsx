import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes = createBrowserRouter([
  {
    path: `/`,
    element: <Calendar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
