import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import GetRequestHooks from "./GetRequestHooks";
import GetRequestAsyncAwait from "./GetRequestAsyncAwait";
import GetRequestErrorHandling from "./GetRequestErrorHandling";
import GetRequestSetHeaders from "./GetRequestSetHeaders";

const App = () => {
  return (
    <div>
      <h1 className="text-center text-3xl p-5">
        React HTTP GET Requests with Fetch
      </h1>
        <GetRequestHooks />
        <GetRequestAsyncAwait />
        <GetRequestErrorHandling />
        <GetRequestSetHeaders />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
