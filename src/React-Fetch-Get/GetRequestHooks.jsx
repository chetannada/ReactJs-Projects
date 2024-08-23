import React, { useState, useEffect } from "react";
import { npm_API_React } from "../config";

const GetRequestHooks = () => {
  const [npmReactData, setNpmReactData] = useState("");
  // Simple GET request using fetch
  useEffect(() => {
    fetch(npm_API_React)
      .then((response) => response.json())
      .then((data) => setNpmReactData(data));
  }, []);
  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-128 sm:w-72 mob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl">
          Simple Get request using Fetch
        </h1>
        <h2 className="max-sm h-auto w-128 sm:w-72 mob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl">
          Total React Packages in NPM: {npmReactData?.total}
        </h2>
      </div>
    </>
  );
};

export default GetRequestHooks;
