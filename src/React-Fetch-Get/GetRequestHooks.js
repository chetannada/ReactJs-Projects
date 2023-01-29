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
    <div className="flex flex-wrap items-center justify-center text-center">
      <div>
        <h1 className="box-content h-auto w-128 sm:w-72 mob:w-56 p-4 bg-slate-200 border-4 mt-3 text-2xl">
          Simple Get request using Fetch
        </h1>
        <h2 className="box-content max-sm h-auto w-128 sm:w-72 mob:w-56 p-4 border-4 text-2xl bg-slate-50">
          Total React Packages in NPM: {npmReactData?.total}
        </h2>
      </div>
    </div>
  );
};

export default GetRequestHooks;
