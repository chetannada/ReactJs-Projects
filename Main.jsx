import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./src/App/AppLayout";
import Body from "./src/App/Body";
import Error from "./src/App/Error";
import ReactFetchGetApp from "./src/Projects/React-Fetch-Get/App";
import ReactFetchPostApp from "./src/Projects/React-Fetch-Post/App";
import ReduxCounterApp from "./src/Projects/Redux-Counter-App/App";
import BodyContentLayer from "./src/App/BodyContentLayer";

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component if path is wrong
    children: [
      // show children component for routing
      {
        path: "/",
        element: (
          <BodyContentLayer>
            <Body />
          </BodyContentLayer>
        ), // All Projects are inside Body Component
      },
      {
        path: "/redux-counter-app",
        element: (
          <BodyContentLayer>
            <ReduxCounterApp />
          </BodyContentLayer>
        ), // Redux Counter App Project
      },
      {
        path: "/react-fetch-get",
        element: (
          <BodyContentLayer>
            <ReactFetchGetApp />
          </BodyContentLayer>
        ), // React HTTP Fetch Get App Project
      },
      {
        path: "/react-fetch-post",
        element: (
          <BodyContentLayer>
            <ReactFetchPostApp />
          </BodyContentLayer>
        ), // React HTTP Fetch Post App Project
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// render RouterProvider and pass appRouter as props
root.render(<RouterProvider router={appRouter} />);
