import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root";
import Home from "./Component/Home/Home";
import OurShop from "./Component/OurShop/OurShop";
import OurMenu from "./Component/OurMenu/OurMenu";
import Dashboard from "./Component/Dashboard/Dashboard";
import ContactUs from "./Component/ContactUs/ContactUs";
import AuthProvider from "./Component/Provider/AuthProvider";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Details from "./Component/Details/Details";
import Review from "./Component/Review/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop/:categroy",
        element: <OurShop></OurShop>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/menu.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />{" "}
    </AuthProvider>
  </React.StrictMode>
);
