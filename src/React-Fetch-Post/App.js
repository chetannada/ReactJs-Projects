import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import PostRequestHooks from "./PostRequestHooks";
import PostRequestAsyncAwait from "./PostRequestAsyncAwait";
import PostRequestErrorHandling from "./PostRequestErrorHandling";
import PostRequestSetHeaders from "./PostRequestSetHeaders";

const App = () => {
  return (
    <>
      <h1 className="text-center text-3xl p-5">
        React HTTP POST Requests with Fetch using Reqres API
      </h1>
      <div className="my-5 space-y-5">
        <PostRequestHooks />
        <PostRequestAsyncAwait />
        <PostRequestErrorHandling />
        <PostRequestSetHeaders />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
