import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App/App";
import Body from "./src/App/Body";
import Error from "./src/App/Error";
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
        element: <Body />, // All Projects are inside Body Component
      },
      {
        path: "/todo-list",
        element: <ToDoList />, // To-Do List Project
      },
      {
        path: "/redux-counter",
        element: <ReduxCounter />, // Redux Counter Project
      },
      {
        path: "/google-auth",
        element: <GoogleAuth />, // Google Auth Project
      },
      {
        path: "/http-get-request",
        element: <HttpGetRequest />, // HTTP Get Request Project
      },
      {
        path: "/http-post-request",
        element: <HttpPostRequest />, // HTTP Post Request Project
      },
      {
        path: "/image-generation",
        element: <ReactImageGeneration />, // Image Generation Project
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// render RouterProvider and pass appRouter as props
root.render(<RouterProvider router={appRouter} />);
