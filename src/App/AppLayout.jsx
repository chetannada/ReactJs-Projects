import { Provider } from "react-redux";
import { store } from "../utils/Redux-Store/Store";
import ReactFetchGetApp from "../Projects/React-Fetch-Get/App";
import ReactFetchPostApp from "../Projects/React-Fetch-Post/App";
import ReduxCounterApp from "../Projects/Redux-Counter-App/App";
import Header from "./Header";

const AppLayout = () => {
  return (
    <>
      {/* Provide store for managing state */}
      <Provider store={store}>
        {/* TODO: Import App.jsx Component for particular Project that you want to Render */}
        <Header />
      </Provider>
    </>
  );
};

export default AppLayout;
