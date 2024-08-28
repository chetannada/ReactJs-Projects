import { store } from "../utils/Redux-Store/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      {/* Provide store for managing state */}
      <Provider store={store}>
        <div className="min-h-screen">
          {/* Header Component */}
          <Header />

          {/* Outlet is for render Body and it's Children Component */}
          <Outlet />

          {/* Footer Component */}
          <Footer />
        </div>
      </Provider>
    </>
  );
};

export default AppLayout;
