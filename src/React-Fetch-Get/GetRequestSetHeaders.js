import React, { useState, useEffect } from "react";
import { npm_API_React } from "../config";

const GetRequestSetHeaders = () => {
  const [npmReactData, setNpmReactData] = useState("");
  // GET request using fetch with set headers
  useEffect(() => {
    async function getData() {
      const reqOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        mode: "cors",
      };
      const response = await fetch(npm_API_React, reqOptions);
      const json = await response.json();
      setNpmReactData(json);
    }
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-128 sm:w-72 mob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl">
          GET request using fetch with set headers
        </h1>
        <h2 className="max-sm h-auto w-128 sm:w-72 mob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl">
          Total React Packages in NPM: {npmReactData?.total}
        </h2>
      </div>
    </>
  );
};

export default GetRequestSetHeaders;
