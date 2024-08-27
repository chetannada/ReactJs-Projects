import { Provider } from "react-redux";
import { store } from "../utils/Redux-Store/Store";
import ReactFetchGetApp from "../Projects/React-Fetch-Get/App";
import ReactFetchPostApp from "../Projects/React-Fetch-Post/App";
import ReduxCounterApp from "../Projects/Redux-Counter-App/App";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      {/* Provide store for managing state */}
      <Provider store={store}>
        {/* TODO: Import App.jsx Component for particular Project that you want to Render */}
        <div className="min-h-screen">
          {/* Header Component */}
          <Header />

          {/* Body Component */}
          <div className="min-h-[calc(100vh-2.5rem)] mob:min-h-[calc(100vh-2rem)] mx-8 mob:mx-4 ">
            {/* <ReactFetchGetApp /> */}
          </div>

          {/* Footer Component */}
          <Footer />
        </div>
      </Provider>
    </>
  );
};

export default AppLayout;
