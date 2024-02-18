import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";


export const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
  ]);