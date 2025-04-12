import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App/App";
import Body from "./src/App/Body";
import Error from "./src/App/Error";
import BodyLayout from "./src/App/BodyLayout";
import ToDoList from "./src/Projects/ToDo-List/App";
import ReduxCounter from "./src/Projects/Redux-Counter/App";
import GoogleAuth from "./src/Projects/Google-Auth/App";
import HttpGetRequest from "./src/Projects/Http-Get-Request/App";
import HttpPostRequest from "./src/Projects/Http-Post-Request/App";
import ReactImageGeneration from "./src/Projects/React-Image-Generation/App";

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
        path: "/todo-list",
        element: (
          <BodyLayout>
            <ToDoList />
          </BodyLayout>
        ), // To-Do List Project
      },
      {
        path: "/redux-counter",
        element: (
          <BodyLayout>
            <ReduxCounter />
          </BodyLayout>
        ), // Redux Counter Project
      },
      {
        path: "/google-auth",
        element: (
          <BodyLayout>
            <GoogleAuth />
          </BodyLayout>
        ), // Google Auth Project
      },
      {
        path: "/http-get-request",
        element: (
          <BodyLayout>
            <HttpGetRequest />
          </BodyLayout>
        ), // HTTP Get Request Project
      },
      {
        path: "/http-post-request",
        element: (
          <BodyLayout>
            <HttpPostRequest />
          </BodyLayout>
        ), // HTTP Post Request Project
      },
      {
        path: "/image-generation",
        element: (
          <BodyLayout>
            <ReactImageGeneration />
          </BodyLayout>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// render RouterProvider and pass appRouter as props
root.render(<RouterProvider router={appRouter} />);
