import React from "react";
import ReactDOM from "react-dom/client";
import GetRequestHooks from "./GetRequestHooks";
import GetRequestAsyncAwait from "./GetRequestAsyncAwait";
import GetRequestErrorHandlingWithTryCatch from "./GetRequestErrorHandling";
import GetRequestSetHeaders from "./GetRequestSetHeaders";

const App = () => {
  return (
    <>
      <h1 className="text-center text-3xl p-5">
        React HTTP GET Requests for NPM API using Fetch in Different way
      </h1>
      <div className="my-5 space-y-5">
        <GetRequestHooks />
        <GetRequestAsyncAwait />
        <GetRequestErrorHandlingWithTryCatch />
        <GetRequestSetHeaders />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
