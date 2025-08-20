import { Provider } from "react-redux";
import Layout from "./src/layout/Layout";
import store from "./src/store/store";

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
