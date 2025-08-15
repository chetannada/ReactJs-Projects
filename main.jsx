import { Provider } from "react-redux";
import App from "./src/App/App";
import store from "./src/Store/store";

const Main = () => {
  return (
    <>
      {/* Provide store for managing state */}
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

export default Main;
