import { Provider } from "react-redux";
import Layout from "./src/layout/Layout";
import store from "./src/store/store";
import { ThemeProvider } from "./src/context/ThemeContext";

const Main = () => {
  return (
    <>
      {/* Provide store for managing state */}
      <Provider store={store}>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default Main;
