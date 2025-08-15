import { createBrowserRouter } from "react-router-dom";
import Main from "../../main";
import Error from "../layout/Error";
import Body from "../layout/Body";
import ToDoList from "../Projects/ToDo-List/App";
import ReduxCounter from "../Projects/Redux-Counter/App";
import GoogleAuth from "../Projects/Google-Auth/App";
import HttpGetRequest from "../Projects/Http-Get-Request/App";
import HttpPostRequest from "../Projects/Http-Post-Request/App";
import ReactImageGeneration from "../Projects/React-Image-Generation/App";

// Define application routes
const appRouter = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Main />, // Main layout component
    errorElement: <Error />, // Fallback for invalid routes
    children: [
      {
        path: "/", // Default child route
        element: <Body />, // Home page component
      },
      {
        path: "/todo-list",
        element: <ToDoList />,
      },
      {
        path: "/redux-counter",
        element: <ReduxCounter />,
      },
      {
        path: "/google-auth",
        element: <GoogleAuth />,
      },
      {
        path: "/http-get-request",
        element: <HttpGetRequest />,
      },
      {
        path: "/http-post-request",
        element: <HttpPostRequest />,
      },
      {
        path: "/image-generation",
        element: <ReactImageGeneration />,
      },
    ],
  },
]);

export default appRouter;
