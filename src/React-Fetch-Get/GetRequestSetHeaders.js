import React, { useState, useEffect } from "react";
import { npm_API_React } from "../config";

const GetRequestSetHeaders = () => {
  const [npmReactData, setNpmReactData] = useState("");
  // GET request using fetch with set headers
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const head = new Headers();
    head.append("Accept","application/json");
    const options = {
      method: 'GET',
      headers: head,
      mode: 'cors'
    };

    const req = new Request(npm_API_React, options);
    const response = await fetch(req, options);
    const json = await response.json();
    setNpmReactData(json);
  }
  return (
    <div className="flex flex-wrap items-center justify-center text-center">
      <div>
        <h1 className="box-content h-auto w-128 sm:w-72 mob:w-56 p-4 bg-slate-200 border-4 mt-3 text-2xl">
          GET request using fetch with set headers
        </h1>
        <h2 className="box-content h-auto w-128 sm:w-72 mob:w-56 p-4 border-4 text-2xl bg-slate-50">
          Total React Packages in NPM: {npmReactData?.total}
        </h2>
      </div>
    </div>
  );
};

export default GetRequestSetHeaders;
