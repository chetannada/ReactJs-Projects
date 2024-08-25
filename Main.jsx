import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./src/utils/Redux-Store/Store";
import ReactFetchGetApp from "./src/Projects/React-Fetch-Get/App";
import ReactFetchPostApp from "./src/Projects/React-Fetch-Post/App";
import ReduxCounterApp from "./src/Projects/Redux-Counter-App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    {/* Provide store for managing state */}
    <Provider store={store}>
      {/* Import App.jsx Component for particular Project that you want to Render */}
      <ReduxCounterApp />
    </Provider>
  </StrictMode>
);
