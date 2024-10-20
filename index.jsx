import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App/App";
import Body from "./src/App/Body";
import Error from "./src/App/Error";
import BodyLayout from "./src/App/BodyLayout";
import ReactFetchGetApp from "./src/Projects/React-Fetch-Get/App";
import ReactFetchPostApp from "./src/Projects/React-Fetch-Post/App";
import ReduxCounterApp from "./src/Projects/Redux-Counter-App/App";
import ReactGoogleAuth from "./src/Projects/React-Google-Auth/App";

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <App />, // show component for particular path
    errorElement: <Error />, // show error component if path is wrong
    children: [
      // show children component for routing
      {
        path: "/",
        element: (
          <BodyLayout>
            <Body />
          </BodyLayout>
        ), // All Projects are inside Body Component
      },
      {
        path: "/redux-counter-app",
        element: (
          <BodyLayout>
            <ReduxCounterApp />
          </BodyLayout>
        ), // Redux Counter App Project
      },
      {
        path: "/react-fetch-get",
        element: (
          <BodyLayout>
            <ReactFetchGetApp />
          </BodyLayout>
        ), // React HTTP Fetch Get App Project
      },
      {
        path: "/react-fetch-post",
        element: (
          <BodyLayout>
            <ReactFetchPostApp />
          </BodyLayout>
        ), // React HTTP Fetch Post App Project
      },
      {
        path: "/react-google-auth",
        element: (
          <BodyLayout>
            <ReactGoogleAuth />
          </BodyLayout>
        ), // React Google Auth Project
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// render RouterProvider and pass appRouter as props
root.render(<RouterProvider router={appRouter} />);
