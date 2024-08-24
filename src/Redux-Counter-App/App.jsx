import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { Counter } from "./counter/Counter";

export const App = () => {
  return (
    <>
      <div className="p-2 flex justify-center items-center">
        <Counter />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
