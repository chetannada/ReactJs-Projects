import { Provider } from "react-redux";
import store from "./src/Store/store";
import Layout from "./src/layout/Layout";

const Main = () => {
  return (
    <>
      {/* Provide store for managing state */}
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  );
};

export default Main;
