import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import GetRequestHooks from "./GetRequestHooks";
import GetRequestAsyncAwait from "./GetRequestAsyncAwait";
import GetRequestErrorHandling from "./GetRequestErrorHandling";
import GetRequestSetHeaders from "./GetRequestSetHeaders";

const App = () => {
  return (
    <>
      <h1 className="text-center text-3xl p-5">
        React HTTP GET Requests with Fetch using NPM API
      </h1>
      <div className="my-5 space-y-5">
        <GetRequestHooks />
        <GetRequestAsyncAwait />
        <GetRequestErrorHandling />
        <GetRequestSetHeaders />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
