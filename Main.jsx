import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./src/App/AppLayout";
import Body from "./src/App/Body";

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    // errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
        // All Projects are inside Body Component
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// render RouterProvider and pass appRouter as props
root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
